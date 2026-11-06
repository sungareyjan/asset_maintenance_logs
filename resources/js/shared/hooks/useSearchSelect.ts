import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

type Option = {
    value: string;
    label: string;
    [key: string]: unknown;
};

type UseSearchSelectProps<T> = {
    endpoint: string;
    getOptionValue: (item: T) => string;
    getOptionLabel: (item: T) => string;
    getOptionExtra?: (item: T) => Record<string, unknown>;
    isOpen: boolean;
};

export function useSearchSelect<T>({
    endpoint,
    getOptionValue,
    getOptionLabel,
    getOptionExtra,
    isOpen,
}: UseSearchSelectProps<T>) {
    const [search, setSearch] = useState("");
    const [options, setOptions] = useState<Option[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const currentPageRef = useRef(1);
    const fetchingRef = useRef(false);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const fetchOptions = useCallback(
        async (
            searchText = "",
            page = 1,
            append = false
        ) => {
            if (fetchingRef.current) {
                return;
            }

            try {
                fetchingRef.current = true;
                setLoading(true);

                const response = await axios.get(endpoint, {
                    params: {
                        search: searchText,
                        page,
                    },
                });

                const newOptions: Option[] = (
                    response.data?.data ?? []
                ).map((item: T) => ({
                    value: getOptionValue(item),
                    label: getOptionLabel(item),
                    ...(getOptionExtra?.(item) ?? {}),
                }));

                const currentPage =
                    response.data?.current_page ?? 1;

                const lastPage =
                    response.data?.last_page ?? 1;

                const newHasMore =
                    currentPage < lastPage;

                setOptions((previous) =>
                    append
                        ? [...previous, ...newOptions]
                        : newOptions
                );

                setHasMore(newHasMore);
                currentPageRef.current = currentPage;
            } catch (error) {
                console.error(
                    "Failed to fetch search options:",
                    error
                );
            } finally {
                fetchingRef.current = false;
                setLoading(false);
            }
        },
        [
            endpoint,
            getOptionValue,
            getOptionLabel,
            getOptionExtra,
        ]
    );

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            currentPageRef.current = 1;
            setOptions([]);
            setHasMore(true);

            fetchOptions(search, 1, false);
        }, 400);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [search, isOpen, fetchOptions]);

    const loadMore = useCallback(() => {
        if (
            loading ||
            !hasMore ||
            fetchingRef.current
        ) {
            return;
        }

        const nextPage =
            currentPageRef.current + 1;

        fetchOptions(
            search,
            nextPage,
            true
        );
    }, [
        loading,
        hasMore,
        search,
        fetchOptions,
    ]);

    const handleScroll = useCallback(
        (event: React.UIEvent<HTMLDivElement>) => {
            const element = event.currentTarget;

            const reachedBottom =
                element.scrollTop +
                    element.clientHeight >=
                element.scrollHeight - 10;

            if (reachedBottom) {
                loadMore();
            }
        },
        [loadMore]
    );

    return {
        search,
        setSearch,
        options,
        loading,
        hasMore,
        handleScroll,
    };
}