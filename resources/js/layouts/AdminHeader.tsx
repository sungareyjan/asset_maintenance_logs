import {
    Box,
    Flex,
    Text,
    IconButton,
    Spacer,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useBreakpointValue,
} from "@chakra-ui/react";

import {
    FiMenu,
    FiBell,
    FiUser,
    FiLogOut,
    FiSettings,
} from "react-icons/fi";

interface AdminHeaderProps {
    onMenuOpen?: () => void;
}

export default function AdminHeader({
    onMenuOpen,
}: AdminHeaderProps) {
    const showMenuButton = useBreakpointValue({
        base: true,
        md: false,
    });

    return (
        <Box
            as="header"
            position="sticky"
            top={0}
            zIndex={9}
            h="64px"
            bg="white"
            borderBottom="1px"
            borderColor="gray.200"
        >
            <Flex
                h="100%"
                align="center"
                px={{
                    base: 3,
                    md: 6,
                }}
                gap={3}
            >
                {/* Mobile Menu */}
                {showMenuButton && (
                    <IconButton
                        aria-label="Open navigation"
                        icon={<FiMenu />}
                        variant="ghost"
                        size="md"
                        onClick={onMenuOpen}
                    />
                )}

                {/* Page Title */}
                <Box minW={0}>
                    <Text
                        fontSize={{
                            base: "md",
                            md: "lg",
                        }}
                        fontWeight="600"
                        color="gray.800"
                        noOfLines={1}
                    >
                        ICTU Repair & Maintenance
                    </Text>

                    <Text
                        display={{
                            base: "none",
                            md: "block",
                        }}
                        fontSize="xs"
                        color="gray.500"
                    >
                        Asset Maintenance Management System
                    </Text>
                </Box>

                <Spacer />

                {/* Notifications */}
                <IconButton
                    aria-label="Notifications"
                    icon={<FiBell />}
                    variant="ghost"
                    size="md"
                    position="relative"
                />

                {/* User Menu */}
                <Menu>
                    <MenuButton>
                        <Flex
                            align="center"
                            gap={3}
                            cursor="pointer"
                            px={2}
                            py={1}
                            borderRadius="md"
                            _hover={{
                                bg: "gray.50",
                            }}
                        >
                            <Avatar
                                size="sm"
                                name="Reyjan Sunga"
                            />

                            <Box
                                display={{
                                    base: "none",
                                    md: "block",
                                }}
                                textAlign="left"
                            >
                                <Text
                                    fontSize="sm"
                                    fontWeight="600"
                                    color="gray.700"
                                    noOfLines={1}
                                >
                                    Reyjan Sunga
                                </Text>

                                <Text
                                    fontSize="xs"
                                    color="gray.500"
                                >
                                    Administrator
                                </Text>
                            </Box>
                        </Flex>
                    </MenuButton>

                    <MenuList>
                        <MenuItem icon={<FiUser />}>
                            Profile
                        </MenuItem>

                        <MenuItem icon={<FiSettings />}>
                            Settings
                        </MenuItem>

                        <MenuDivider />

                        <MenuItem icon={<FiLogOut />}>
                            Logout
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
}
