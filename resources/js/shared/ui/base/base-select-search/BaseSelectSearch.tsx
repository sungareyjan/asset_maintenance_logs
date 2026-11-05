import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    Text
} from "@chakra-ui/react";
import  InputField from "./InputField";
import { Spinner } from "@/shared/ui"
import { useEffect, useRef, useState, ReactNode, useCallback } from "react";
import axios from "axios";

export type Option = {
    value: string;
    label: string;
    [key: string]: unknown;
};

export type SearchSelectFieldProps<T> = {
    value: Option | null;
    onChange: (option: Option | null) => void;
    endpoint: string;

    getOptionValue: (item: T) => string;
    getOptionLabel: (item: T) => string;
    getOptionExtra?: (item: T) => Record<string, unknown>;

    leftAddon?: string | ReactNode;
    placeholder?: string;
    isInvalid?: boolean;
    background?: string;
    isReadOnly?: boolean;
};

type CacheEntry = {
    options: Option[];
    currentPage: number;
    hasMore: boolean;
};

export default function SearchSelectField<T>({
        value,
        onChange,
        endpoint,
        getOptionValue,
        getOptionLabel,
        getOptionExtra,
        leftAddon,
        placeholder = "Select...",
        isInvalid = false,
        background,
        isReadOnly = false,
}: SearchSelectFieldProps<T>) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [search, setSearch] = useState("");
    const [options, setOptions] = useState<Option[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const fetchingRef = useRef(false);
    const currentPageRef = useRef(1);

    const cacheRef = useRef<Record<string, CacheEntry>>({});

    const fetchOptions = useCallback(
        async (searchText = "", pageNum = 1, append = false) => {
            const trimmedSearch = searchText.trim().toLowerCase();

            if (pageNum === 1 && !append && cacheRef.current[trimmedSearch]) {
                const cached = cacheRef.current[trimmedSearch];
                setOptions(cached.options);
                setHasMore(cached.hasMore);
                currentPageRef.current = cached.currentPage;
                return;
            }

            if (fetchingRef.current) return;

            try {
                fetchingRef.current = true;
                setLoading(true);

                const res = await axios.get(endpoint, {
                    params: {
                        search: searchText,
                        page: pageNum,
                    },
                });

                console.log(res);

                const newData: Option[] = (res.data?.data || []).map(
                    (item: T) => ({
                        value: getOptionValue(item),
                        label: getOptionLabel(item),
                        ...(getOptionExtra ? getOptionExtra(item) : {}),
                    })
                );
                const currentPage = res.data?.current_page || 1;
                const lastPage = res.data?.last_page || 1;
                const computedHasMore = currentPage < lastPage;

                setOptions((prev) => {
                    const updatedOptions = append
                        ? [...prev, ...newData]
                        : newData;

                    cacheRef.current[trimmedSearch] = {
                        options: updatedOptions,
                        currentPage,
                        hasMore: computedHasMore,
                    };

                    return updatedOptions;
                });

                setHasMore(computedHasMore);
                currentPageRef.current = currentPage;
            } catch (error) {
                console.error("Failed to fetch options:", error);
            } finally {
                setLoading(false);
                fetchingRef.current = false;
            }
        },
        [endpoint, getOptionValue, getOptionLabel, getOptionExtra]
    );

    useEffect(() => {
        if (!isOpen) {
            setSearch("");
            return;
        }

        const trimmedSearch = search.trim().toLowerCase();
        if (cacheRef.current[trimmedSearch]) {
            const cached = cacheRef.current[trimmedSearch];
            setOptions(cached.options);
            setHasMore(cached.hasMore);
            currentPageRef.current = cached.currentPage;
        } else {
            setOptions([]);
            currentPageRef.current = 1;
            setHasMore(true);
            fetchOptions(search, 1, false);
        }
    }, [isOpen, fetchOptions]);

    useEffect(() => {
        if (!isOpen) return;

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            const trimmedSearch = search.trim().toLowerCase();

            if (cacheRef.current[trimmedSearch]) {
                const cached = cacheRef.current[trimmedSearch];
                setOptions(cached.options);
                setHasMore(cached.hasMore);
                currentPageRef.current = cached.currentPage;
            } else {
                currentPageRef.current = 1;
                fetchOptions(search, 1, false);
            }
        }, 400);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [search, isOpen, fetchOptions]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const bottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 10;

        if (!bottom || loading || !hasMore) return;

        const nextPage = currentPageRef.current + 1;
        fetchOptions(search, nextPage, true);
    };

    return (
        <Menu
            isOpen={isOpen}
            onClose={onClose}
            placement="bottom-start"
            autoSelect={false}
            closeOnSelect={false}
        >
            <MenuButton
                w="full"
                border="2px"
                borderColor={
                    isInvalid ? "red.500" : isOpen ? "green.500" : "gray.300"
                }
                _focusWithin={{
                    borderColor: isInvalid ? "red.500" : "green.500",
                }}
                borderRadius="md"
                p={2}
                boxShadow="0 2px 4px rgba(0,0,0,0.03)"
                bg={background}
                cursor="pointer"
                onClick={
                    isReadOnly
                        ? undefined
                        : isOpen
                            ? onClose
                            : onOpen
                }
                color={value ? "inherit" : "gray.500"}
            >
                {value?.label || placeholder}
            </MenuButton>
            <MenuList p={2} onMouseDown={(e) => e.stopPropagation()}>
                <InputField
                    size="sm"
                    placeholder="Search..."
                    borderRadius="md"
                    value={search}
                    onChange={setSearch}
                    mb={1}
                    leftAddon={leftAddon}
                    autoFocus
                />

                <Box maxH="300px" overflowY="auto" onScroll={handleScroll}>
                    {value && (
                        <MenuItem
                            color="red.500"
                            onClick={() => {
                                onChange(null);
                                onClose();
                            }}
                        >
                            Clear selection
                        </MenuItem>
                    )}

                    {options.map((opt) => {
                        const isSelected = value?.value === opt.value;

                        return (
                            <MenuItem
                                key={opt.value}
                                onClick={() => {
                                    onChange(opt);
                                    onClose();
                                }}
                                bg={isSelected ? "green.500" : undefined}
                                color={isSelected ? "white" : undefined}
                            >
                                {opt.label}
                            </MenuItem>
                        );
                    })}

                    {loading && (
                        <Box textAlign="center" py={2}>
                            <Spinner size="sm" />
                        </Box>
                    )}
                    {!loading && options.length === 0 && (
                        <Text fontSize="sm" color="gray.500" p={2}>
                            No results
                        </Text>
                    )}
                </Box>
            </MenuList>
        </Menu>
    );
}
