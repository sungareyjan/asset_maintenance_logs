import {
    Box,
    Button,
    HStack,
    Text,
    VStack,
    Flex,
    SimpleGrid,
    Heading,
} from "@chakra-ui/react";
import { BaseInput } from "@/shared/ui";
import BaseTextarea from "@/shared/ui/base/form/BaseTextarea";
import type { ServiceRequest } from "../../service-request-repair/types/service-request";
import { useRepairMaintenance } from "../../repair-maintenance/hooks/useRepairMaintenance";
import { useState } from "react";

interface ReplaceComponentStepProps {
    request: ServiceRequest | null;
    isLoading?: boolean;
}

export default function ReplaceComponentStep({
    request,
    isLoading = false,
}: ReplaceComponentStepProps) {
    // if (!request) return null;
    const { form, setField, handleSubmit } = useRepairMaintenance();

    const [components, setComponents] = useState([
        {
            component: "",
            old_serial_batch_no: "",
            new_serial_property_no: "",
        },
    ]);

    const addComponent = () => {
        setComponents((prev) => [
            ...prev,
            {
                component: "",
                old_serial_batch_no: "",
                new_serial_property_no: "",
            },
        ]);
    };

    const removeComponent = (index: number) => {
        setComponents((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* =========================================================
                SECTION 4 — REPAIR ACTIVITY
            ========================================================= */}
            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
                mb={6}
            >
                <Box
                    px={5}
                    py={4}
                    bg="gray.50"
                    borderBottomWidth="1px"
                    borderColor="gray.200"
                >
                    <Heading size="sm" color="gray.700">
                        Repair / Maintenance Activity
                    </Heading>

                    <Text mt={1} fontSize="xs" color="gray.500">
                        Document the work performed and any relevant technical
                        notes.
                    </Text>
                </Box>

                <Box p={5}>
                    <VStack spacing={4} align="stretch">
                        <BaseTextarea
                            label="Work Performed"
                            placeholder="Describe the repair, maintenance, configuration, troubleshooting, or other work performed."
                            isRequired
                            minH="120px"
                        />

                        <BaseTextarea
                            label="Technical Notes / Action Taken"
                            placeholder="Enter additional technical notes, actions taken, recommendations, or observations."
                            minH="120px"
                        />
                    </VStack>
                </Box>
            </Box>
            {/* =========================================================
                SECTION 5 — COMPONENTS
            ========================================================= */}
            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
                mb={6}
            >
                <Flex
                    px={5}
                    py={4}
                    bg="gray.50"
                    borderBottomWidth="1px"
                    borderColor="gray.200"
                    justify="space-between"
                    align={{ base: "flex-start", md: "center" }}
                    direction={{ base: "column", md: "row" }}
                    gap={3}
                >
                    <Box>
                        <Heading size="sm" color="gray.700">
                            Replacement Components / Consumables
                        </Heading>

                        <Text mt={1} fontSize="xs" color="gray.500">
                            List components or consumables replaced during the
                            repair or maintenance activity.
                        </Text>
                    </Box>

                    <Button
                        size="sm"
                        colorScheme="blue"
                        variant="outline"
                        onClick={addComponent}
                        flexShrink={0}
                    >
                        + Add Component
                    </Button>
                </Flex>

                <Box p={5}>
                    <VStack spacing={4} align="stretch">
                        {components.map((item, index) => (
                            <Box
                                key={index}
                                p={4}
                                borderWidth="1px"
                                borderColor="gray.200"
                                borderRadius="md"
                                bg="white"
                            >
                                {/* Component Header */}
                                <Flex
                                    justify="space-between"
                                    align="center"
                                    mb={4}
                                >
                                    <HStack spacing={2}>
                                        <Box
                                            px={2}
                                            py={1}
                                            bg="blue.50"
                                            color="blue.700"
                                            borderRadius="md"
                                        >
                                            <Text
                                                fontSize="xs"
                                                fontWeight="bold"
                                            >
                                                #{index + 1}
                                            </Text>
                                        </Box>

                                        <Text
                                            fontSize="sm"
                                            fontWeight="semibold"
                                            color="gray.700"
                                        >
                                            Replacement Component
                                        </Text>
                                    </HStack>

                                    {components.length > 1 && (
                                        <Button
                                            size="xs"
                                            colorScheme="red"
                                            variant="ghost"
                                            onClick={() =>
                                                removeComponent(index)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    )}
                                </Flex>

                                {/* Component Fields */}
                                <SimpleGrid
                                    columns={{ base: 1, md: 3 }}
                                    spacing={4}
                                >
                                    <BaseInput
                                        label="Component / Consumable"
                                        placeholder="e.g., RAM 16GB"
                                        value={item.component}
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            setComponents((prev) =>
                                                prev.map((item, i) =>
                                                    i === index
                                                        ? {
                                                              ...item,
                                                              component: value,
                                                          }
                                                        : item,
                                                ),
                                            );
                                        }}
                                    />

                                    <BaseInput
                                        label="Old Serial / Batch No."
                                        placeholder="Old component serial/batch no."
                                        value={item.old_serial_batch_no}
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            setComponents((prev) =>
                                                prev.map((item, i) =>
                                                    i === index
                                                        ? {
                                                              ...item,
                                                              old_serial_batch_no:
                                                                  value,
                                                          }
                                                        : item,
                                                ),
                                            );
                                        }}
                                    />

                                    <BaseInput
                                        label="New Serial / Property No."
                                        placeholder="New or transferred component"
                                        value={item.new_serial_property_no}
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            setComponents((prev) =>
                                                prev.map((item, i) =>
                                                    i === index
                                                        ? {
                                                              ...item,
                                                              new_serial_property_no:
                                                                  value,
                                                          }
                                                        : item,
                                                ),
                                            );
                                        }}
                                    />
                                </SimpleGrid>
                            </Box>
                        ))}
                    </VStack>
                </Box>
            </Box>

            {/* =========================================================
                FORM ACTIONS
            ========================================================= */}
        </form>
    );
}
