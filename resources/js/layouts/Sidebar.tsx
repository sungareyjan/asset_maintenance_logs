import {
    Box,
    Flex,
    Text,
    VStack,
    Icon,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    useBreakpointValue,
} from "@chakra-ui/react";

import {
    FiGrid,
    FiMonitor,
    FiTool,
    FiUsers,
    FiFileText,
    FiClipboard,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { ROUTES } from "@/app/routes";
const navigation = [
    {
        label: "Dashboard",
        path: ROUTES.ADMIN.DashBoard,
        icon: FiGrid,
    },
    {
        label: "Service Request Repair",
        path: ROUTES.ADMIN.ServiceRequest,
        icon: FiClipboard,
    },
    {
        label: "Service Queue Repair",
        path: ROUTES.ADMIN.ServiceQueue,
        icon: FiMonitor,
    },
    {
        label: "Repair & Maintenance",
        path: ROUTES.ADMIN.RepairAssessment,
        icon: FiTool,
    },
    {
        label: "Example Form",
        path: ROUTES.ADMIN.RepairMaintenance,
        icon: FiFileText,
    },
    // {
    //     label: "Users",
    //     path: "/users",
    //     icon: FiUsers,
    // },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({
    isOpen,
    onClose,
}: SidebarProps) {
    const isMobile = useBreakpointValue({
        base: true,
        md: false,
    });

    const sidebarWidth = {
        base: "260px",
        md: "220px",
        lg: "260px",
    };

    const navigationContent = (
        <VStack
            align="stretch"
            spacing={1}
            p={4}
        >
            {navigation.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={isMobile ? onClose : undefined}
                >
                    {({ isActive }) => (
                        <Flex
                            align="center"
                            gap={3}
                            px={4}
                            py={3}
                            borderRadius="md"
                            bg={
                                isActive
                                    ? "blue.50"
                                    : "transparent"
                            }
                            color={
                                isActive
                                    ? "blue.600"
                                    : "gray.600"
                            }
                            fontWeight={
                                isActive
                                    ? "600"
                                    : "400"
                            }
                            _hover={{
                                bg: "gray.100",
                                color: "gray.800",
                            }}
                            transition="all 0.15s"
                        >
                            <Icon
                                as={item.icon}
                                boxSize={5}
                                flexShrink={0}
                            />

                            <Text
                                fontSize="sm"
                                noOfLines={1}
                            >
                                {item.label}
                            </Text>
                        </Flex>
                    )}
                </NavLink>
            ))}
        </VStack>
    );

    /*
     * Mobile
     */
    if (isMobile) {
        return (
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerHeader
                        borderBottom="1px"
                        borderColor="gray.200"
                        pr={12}
                    >
                        <Text
                            fontSize="lg"
                            fontWeight="700"
                            color="gray.800"
                        >
                            ICTU Repair & Maintenance
                        </Text>
                    </DrawerHeader>

                    <DrawerBody p={0}>
                        {navigationContent}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        );
    }

    /*
     * Desktop / Tablet
     */
    return (
        <Box
            w={sidebarWidth}
            h="100vh"
            bg="white"
            borderRight="1px"
            borderColor="gray.200"
            position="fixed"
            top={0}
            left={0}
            display="flex"
            flexDirection="column"
            zIndex={10}
        >
            {/* Logo / Brand */}
            <Flex
                minH="64px"
                px={6}
                align="center"
                borderBottom="1px"
                borderColor="gray.200"
                flexShrink={0}
            >
                <Text
                    fontSize="lg"
                    fontWeight="700"
                    color="gray.800"
                    noOfLines={2}
                >
                    ICTU Repair & Maintenance
                </Text>
            </Flex>

            {/* Navigation */}
            <Box
                flex={1}
                overflowY="auto"
            >
                {navigationContent}
            </Box>
        </Box>
    );
}
