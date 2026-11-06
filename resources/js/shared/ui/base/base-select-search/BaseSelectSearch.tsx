import {
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

import InputField from "./InputField";
import { Spinner } from "@/shared/ui";

import type { SearchSelectFieldProps } from "@/shared/types/search-select";
import { useSearchSelect } from "@/shared/hooks/useSearchSelect";

import BaseFormControl from "../form/BaseFormControl";

export default function BaseSelectSearch<T>({
    label,
    isRequired = false,
    value,
    onChange,
    endpoint,
    getOptionValue,
    getOptionLabel,
    getOptionExtra,
    leftAddon,
    placeholder = "Select...",
    isInvalid = false,
    background = "white",
    isReadOnly = false,
}: SearchSelectFieldProps<T>) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        search,
        setSearch,
        options,
        loading,
        handleScroll,
    } = useSearchSelect({
        endpoint,
        getOptionValue,
        getOptionLabel,
        getOptionExtra,
        isOpen,
    });

    return (
            <BaseFormControl
                label={
                    <Text>
                        {label}{" "}
                        {isRequired && (
                            <Text as="span" color="red.500">
                                *
                            </Text>
                        )}
                    </Text>
                }
            >
            <Menu
                isOpen={isOpen}
                onClose={onClose}
                placement="bottom-start"
                autoSelect={false}
                closeOnSelect={false}
            >
                <MenuButton
                    type="button"
                    w="full"
                    h="10"
                    minH="10"
                    border="2px"
                    borderWidth={isInvalid ? "3px" : "2px"}
                    borderColor={
                        isInvalid
                            ? "red.500"
                            : isOpen
                                ? "#1F67D1"
                                : "gray.300"
                    }
                    borderRadius="md"
                    px={3}
                    py={2}
                    textAlign="left"
                    justifyContent="flex-start"
                    fontWeight="normal"
                    bg={background}
                    color={
                        value
                            ? "inherit"
                            : "gray.500"
                    }
                    cursor={
                        isReadOnly
                            ? "not-allowed"
                            : "pointer"
                    }
                    // isDisabled={isReadOnly}
                    boxShadow="0 2px 4px rgba(0,0,0,0.03)"
                    _hover={{
                        borderColor: isInvalid
                            ? "red.500"
                            : isOpen
                                ? "#1F67D1"
                                : "gray.400",
                    }}
                    _focus={{
                        borderColor: isInvalid
                            ? "red.500"
                            : "#1F67D1",
                        boxShadow: "none",
                    }}
                    _focusVisible={{
                        borderColor: isInvalid
                            ? "red.500"
                            : "#1F67D1",
                        boxShadow: "none",
                    }}
                    onClick={
                        isReadOnly
                            ? undefined
                            : isOpen
                                ? onClose
                                : onOpen
                    }
                >
                    <Box
                        w="full"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                    >
                        {value?.label || placeholder}
                    </Box>
                </MenuButton>

                <MenuList
                    p={2}
                    maxW="100%"
                    onMouseDown={(event) => {
                        event.stopPropagation();
                    }}
                >
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

                    <Box
                        maxH="300px"
                        overflowY="auto"
                        onScroll={handleScroll}
                    >
                        {value && (
                            <MenuItem
                                borderRadius="md"
                                color="red.500"
                                onClick={() => {
                                    onChange(null);
                                    onClose();
                                }}
                            >
                                Clear selection
                            </MenuItem>
                        )}

                        {options.map((option) => {
                            const isSelected =
                                value?.value ===
                                option.value;

                            return (
                                <MenuItem
                                    key={option.value}
                                    borderRadius="md"
                                    bg={
                                        isSelected
                                            ? "#1F67D1"
                                            : undefined
                                    }
                                    color={
                                        isSelected
                                            ? "white"
                                            : undefined
                                    }
                                    _hover={{
                                        bg: isSelected
                                            ? "#1857B8"
                                            : "gray.100",
                                    }}
                                    onClick={() => {
                                        onChange(option);
                                        onClose();
                                    }}
                                >
                                    {option.label}
                                </MenuItem>
                            );
                        })}

                        {loading && (
                            <Box
                                textAlign="center"
                                py={2}
                            >
                                <Spinner size="sm" />
                            </Box>
                        )}

                        {!loading &&
                            options.length === 0 && (
                                <Text
                                    fontSize="sm"
                                    color="gray.500"
                                    p={2}
                                >
                                    No results
                                </Text>
                            )}
                    </Box>
                </MenuList>
            </Menu>
        </BaseFormControl>
    );
}