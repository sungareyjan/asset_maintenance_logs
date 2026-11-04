import {
    Flex,
    SimpleGrid,
    GridItem,
    VStack,
    Box,
    Button,
    Heading,
    Text,
    HStack,
    Divider,
} from "@chakra-ui/react";

import { BaseInput } from "@/shared/ui";
import { useRepairMaintenance } from "../hooks/useRepairMaintenance";
import BaseSelect from "@/shared/ui/base/BaseSelect";
import BaseRadioGroup from "@/shared/ui/base/BaseRadioGroup";
import BaseTextarea from "@/shared/ui/base/BaseTextarea";
import BaseCheckboxGroup from "@/shared/ui/base/BaseCheckboxGroup";
import { useState } from "react";

export type RepairMaintenanceForm = {
    requesting_user: string;
    office_division: string;
    contact_number: string;
    email_address: string;
};

export default function RepairMaintenance() {
    const { form, setField, handleSubmit } = useRepairMaintenance();

    const stationOptions = [
        {
            value: "sample",
            label: "sample",
        },
    ];

    const equipmentOption = [
        {
            value: "Desktop",
            label: "Desktop",
        },
    ];

    const technicianOption = [
        {
            value: "Juan Dela Cruz",
            label: "Juan Dela Cruz",
        },
    ];

    const physicalConditionOption = [
        {
            value: "Intact/Normal Wear",
            label: "Intact/Normal Wea",
        },
        {
            value: "Cracked Casing /Exterior Damage",
            label: "Cracked Casing /Exterior Damage",
        },
        {
            value: "Burnt Smell/ Water Ingress",
            label: "Burnt Smell/ Water Ingress",
        },
        {
            value: "Missing Accessories/ Components",
            label: "Missing Accessories/ Components",
        },
    ];

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

    const feedBackRating = [
        {
            value: "low",
            label: "low",
        },
        {
            value: "Medium",
            label: "Medium",
        },
    ];

    const servicePriority = [
        {
            value: "low",
            label: "low",
        },
        {
            value: "Medium",
            label: "Medium",
        },
    ];
    return (
        <form onSubmit={handleSubmit}>
            {/* =========================================================
            FORM HEADER
        ========================================================= */}
            <Box mb={8}>
                <Heading size="md" color="gray.800">
                    ICT Repair and Maintenance Work Order
                </Heading>

                <Text mt={1} fontSize="sm" color="gray.500">
                    Document the equipment details, diagnostic findings, repair
                    activities, and replacement components.
                </Text>
            </Box>
            {/* =========================================================
            SECTION 2 — EQUIPMENT
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
                        Section 2: Equipment Specification & Accountability
                    </Heading>

                    <Text mt={1} fontSize="xs" color="gray.500">
                        Identify the equipment and its accountability
                        information.
                    </Text>
                </Box>

                <Box p={5}>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
                        <BaseSelect
                            label="Equipment Category"
                            placeholder="Select equipment category"
                            options={equipmentOption}
                            isRequired
                        />

                        <BaseInput
                            label="Brand & Model"
                            placeholder="e.g., HP ProDesk 600 G6"
                            isRequired
                        />

                        <BaseInput
                            label="Serial Number"
                            placeholder="e.g., HP020020231"
                            isRequired
                        />

                        <BaseInput
                            label="Property Number (New)"
                            placeholder="e.g., B50K-001"
                        />

                        <BaseInput
                            label="Property Number (Old)"
                            placeholder="e.g., B50K-001"
                        />

                        <BaseInput
                            label="Asset Tag Code"
                            placeholder="e.g., PC0001"
                        />

                        <BaseInput
                            label="Accountable Officer"
                            placeholder="e.g., Juan Dela Cruz"
                            isRequired
                        />

                        <BaseInput
                            label="Installed Operating System"
                            placeholder="e.g., Windows 11 Pro"
                        />
                    </SimpleGrid>
                </Box>
            </Box>
            {/* =========================================================
            SECTION 3 — DIAGNOSTIC
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
                        Technical Diagnostic & Pre-Repair Assessment
                    </Heading>

                    <Text mt={1} fontSize="xs" color="gray.500">
                        Record the initial assessment and technical findings
                        before performing the repair.
                    </Text>
                </Box>

                <Box p={5}>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
                        <BaseSelect
                            label="Received By"
                            placeholder="Select technician"
                            options={technicianOption}
                            isRequired
                        />

                        <BaseInput
                            label="Date & Time Logged"
                            type="datetime-local"
                            value=""
                            isDisabled
                        />

                        <GridItem colSpan={{ base: 1, md: 2 }}>
                            <BaseCheckboxGroup
                                label="Physical Condition"
                                isRequired
                                options={physicalConditionOption}
                            />
                        </GridItem>

                        <GridItem colSpan={{ base: 1, md: 4 }}>
                            <BaseTextarea
                                label="Root Cause / Diagnostic Findings"
                                placeholder="Describe the observed symptoms, diagnostic results, and identified root cause."
                                isRequired
                                minH="120px"
                            />
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Box>
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
        SECTION 6 — WORK COMPLETION & ACCEPTANCE
        ========================================================= */}
            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
                mb={6}
            >
                {/* Section Header */}
                <Box
                    px={5}
                    py={4}
                    bg="gray.50"
                    borderBottomWidth="1px"
                    borderColor="gray.200"
                >
                    <Heading size="sm" color="gray.700">
                        Section 6: Work Completion, Sign-Off & End-User
                        Acceptance
                    </Heading>

                    <Text mt={1} fontSize="xs" color="gray.500">
                        Record the completion of the service, technical review,
                        and end-user acceptance of the equipment.
                    </Text>
                </Box>

                <Box p={5}>
                    {/* =====================================================
            WORK COMPLETION
        ===================================================== */}
                    <Box mb={6}>
                        <Heading size="xs" color="gray.600" mb={4}>
                            Work Completion
                        </Heading>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                            {/* Original Technician */}
                            <Box
                                p={4}
                                bg="blue.50"
                                borderWidth="1px"
                                borderColor="blue.100"
                                borderRadius="md"
                            >
                                <Text
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    color="blue.600"
                                    mb={1}
                                >
                                    ICTU TECHNICIAN
                                </Text>

                                <Text fontWeight="semibold" color="gray.800">
                                    Juan Dela Cruz
                                </Text>

                                <Text mt={1} fontSize="xs" color="gray.500">
                                    Assigned technician
                                </Text>
                            </Box>

                            {/* Completion Date */}
                            <Box
                                p={4}
                                bg="gray.50"
                                borderWidth="1px"
                                borderColor="gray.200"
                                borderRadius="md"
                            >
                                <Text
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    color="gray.500"
                                    mb={1}
                                >
                                    DATE & TIME COMPLETED
                                </Text>

                                <Text fontWeight="semibold" color="gray.800">
                                    {/* Date/time now */}
                                    November 3, 2026 · 2:30 PM
                                </Text>
                            </Box>

                            {/* Assisting Technician */}
                            <BaseSelect
                                label="Assisting Technician"
                                placeholder="Select technician"
                                options={technicianOption}
                            />

                            <Box>
                                <Text fontSize="xs" color="gray.500" mb={2}>
                                    ASSISTANCE
                                </Text>

                                <Text fontSize="sm" color="gray.600">
                                    Select a technician only if another ICTU
                                    staff member assisted with the repair.
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </Box>

                    <Divider mb={6} />

                {/* =====================================================
                TECHNICAL REVIEW
                ===================================================== */}
                    <Box mb={6}>
                        <Heading size="xs" color="gray.600" mb={4}>
                            Technical Review & Verification
                        </Heading>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                            <Box
                                p={4}
                                bg="gray.50"
                                borderWidth="1px"
                                borderColor="gray.200"
                                borderRadius="md"
                            >
                                <Text
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    color="gray.500"
                                    mb={1}
                                >
                                    REVIEWED BY
                                </Text>

                                <Text fontWeight="semibold" color="gray.800">
                                    Juan Dela Cruz
                                </Text>

                                <Text mt={1} fontSize="xs" color="gray.500">
                                    Head, ICTU Unit / IT Officer
                                </Text>
                            </Box>

                            <Box
                                p={4}
                                bg="gray.50"
                                borderWidth="1px"
                                borderColor="gray.200"
                                borderRadius="md"
                            >
                                <Text
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    color="gray.500"
                                    mb={1}
                                >
                                    DATE & TIME REVIEWED
                                </Text>

                                <Text fontWeight="semibold" color="gray.800">
                                    {/* Date/time now */}
                                    November 3, 2026 · 3:00 PM
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </Box>

                    <Divider mb={6} />

                {/* =====================================================
                END-USER ACCEPTANCE
                ===================================================== */}
                    <Box>
                        <Heading size="xs" color="gray.600" mb={4}>
                            End-User Acceptance
                        </Heading>

                        {/* Acceptance Statement */}
                        <Box
                            p={4}
                            mb={5}
                            bg="gray.50"
                            borderLeftWidth="4px"
                            borderLeftColor="blue.400"
                            borderRadius="md"
                        >
                            <Text
                                fontSize="sm"
                                fontWeight="semibold"
                                color="gray.700"
                                mb={2}
                            >
                                Client Acceptance & Acknowledgement
                            </Text>

                            <Text
                                fontSize="sm"
                                lineHeight="1.7"
                                color="gray.600"
                            >
                                I acknowledge receipt of the above ICT
                                equipment. It has been tested in my presence and
                                is found to be in satisfactory operating
                                condition.
                            </Text>
                        </Box>

                        {/* Feedback */}
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                            <GridItem colSpan={{ base: 1, md: 2 }}>
                                <BaseRadioGroup
                                    label="Service Feedback Rating"
                                    name="service_feedback_rating"
                                    isRequired
                                    options={feedBackRating}
                                />
                            </GridItem>

                            <BaseInput
                                label="Accepted By"
                                placeholder="e.g., Juan Dela Cruz"
                                isRequired
                            />

                            <Box>
                                <Text fontSize="sm" color="gray.500" mb={2}>
                                    Date & Time Received
                                </Text>

                                <BaseInput
                                    label="Date"
                                    type="datetime-local"
                                    value=""
                                    isDisabled
                                />
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
            {/* =========================================================
            FORM ACTIONS
        ========================================================= */}
            <Flex
                justify="flex-end"
                gap={3}
                pt={4}
                borderTopWidth="1px"
                borderColor="gray.200"
            >
                <Button type="button" variant="outline">
                    Cancel
                </Button>

                <Button type="submit" colorScheme="blue" px={8}>
                    Submit Work Order
                </Button>
            </Flex>
        </form>
    );
}
