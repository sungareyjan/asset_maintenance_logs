import {
    Box,
    Flex,
    useDisclosure,
} from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import {
    Sidebar,
    AdminHeader,
} from "@/layouts";

export default function AdminLayout() {
    const {
        isOpen,
        onOpen,
        onClose,
    } = useDisclosure();

    return (
        <Flex
            minH="100vh"
            bg="gray.50"
        >
            {/* Sidebar */}
            <Sidebar
                isOpen={isOpen}
                onClose={onClose}
            />

            {/* Main Content */}
            <Box
                ml={{
                    base: 0,
                    md: "220px",
                    lg: "260px",
                }}
                flex={1}
                minW={0}
            >
                {/* Header */}
                <AdminHeader
                    onMenuOpen={onOpen}
                />

                {/* Page Content */}
                <Box
                    p={{
                        base: 4,
                        md: 6,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Flex>
    );
}
