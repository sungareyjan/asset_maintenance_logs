import {
    Flex,
    SimpleGrid,
    GridItem,
    VStack,
    Box,
    Button,
    Heading,
    Divider,
    Text,
} from "@chakra-ui/react";

import { BaseInput } from "@/shared/ui";
import { useRepairMaintenance } from "../hooks/useRepairMaintenance";
import BaseSelect from "@/shared/ui/base/form/BaseSelect";
import BaseRadioGroup from "@/shared/ui/base/form/BaseRadioGroup";
import BaseTextarea from "@/shared/ui/base/form/BaseTextarea";
import BaseCheckboxGroup from "@/shared/ui/base/form/BaseCheckboxGroup";
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
            value: "DA RFO3 Regional Office",
            label: "DA RFO3 Regional Office",
        },
        {
            value: "DA Regulatory Compound",
            label: "DA Regulatory Compound",
        },
        {
            value: "DA-RFO3 Aurora Satellite Office",
            label: "DA-RFO3 Aurora Satellite Office",
        },
        {
            value: "DA-Research Outreach Station for Upland Development (DA-RSUD) ROS Magalang, Pampanga",
            label: "DA-Research Outreach Station for Upland Development (DA-RSUD) ROS Magalang, Pampanga",
        },
        {
            value: "DA-Research Outreach Station for Hillyland Development (RSHD) Botolan, Zambales",
            label: "DA-Research Outreach Station for Hillyland Development (RSHD) Botolan, Zambales",
        },
        {
            value: "DA-Research Outreach Station for Lowland Development (RSLD) ROS Tarlac City, Tarlac",
            label: "DA-Research Outreach Station for Lowland Development (RSLD) ROS Tarlac City, Tarlac",
        },
        {
            value: "DA-Research Outreach Station for Lahar-Laden Development (RSLL) ROS San Marcelino, Zambales",
            label: "DA-Research Outreach Station for Lahar-Laden Development (RSLL) ROS San Marcelino, Zambales",
        },
        {
            value: "RCPC (Regional Crop Protection Center)",
            label: "RCPC (Regional Crop Protection Center)",
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
            <Heading size="md" mb={6}>
                ICT Repair and Maintenance Work Order Form
            </Heading>
            <Heading as="h5" size="sm" mb={6} noOfLines={1}>
                Section 1: Request & End-User Identification
            </Heading>
            <SimpleGrid columns={2} spacing={3}>
                <BaseInput
                    label="Requesting User:"
                    placeholder="Juan Dela Cruz"
                    value=""
                />

                <BaseInput
                    label="Date & Time Requested"
                    type="datetime-local"
                    value=""
                    isDisabled
                />

                <BaseInput
                    label="Division/Section/Unit"
                    placeholder="PMED/ICTU"
                    value=""
                />

                <BaseInput
                    label="Work Order No:"
                    placeholder="RM-2016MMDD001"
                    value=""
                    isDisabled
                />

                <BaseSelect
                    isRequired
                    label="Station / Location"
                    placeholder="Select station / location"
                    options={stationOptions}
                />

                {/* todo display only  */}
                <BaseRadioGroup
                    label="Service Priority"
                    name="Service Priority"
                    isRequired
                    options={servicePriority}
                />
            </SimpleGrid>
            <Divider />
            <Heading as="h5" size="sm" mb={6} noOfLines={1}>
                Section 2: Equipment Specification & Accountability
            </Heading>
            <SimpleGrid columns={2} spacing={4}>
                <BaseSelect
                    label="Equipment Category"
                    placeholder="Select Category"
                    options={equipmentOption}
                />

                <BaseInput
                    label="Brand & Model"
                    placeholder="e.g., HP ProDesk 600 G6"
                />
                <BaseInput label="Serial Number:" placeholder="HP020020231" />

                <BaseInput
                    label="Property Number New:"
                    placeholder="B50k-001"
                />

                <BaseInput
                    label="Property Number Old:"
                    placeholder="B50k-001"
                />

                <BaseInput label="Asset Tag Code:" placeholder="PC0001" />

                <BaseInput
                    label="Accountable Officer:"
                    placeholder="eg. Juan Dela Cruz"
                />

                <BaseInput
                    label="Installed Operating System:"
                    placeholder="eg. Windows 11 pro"
                />
            </SimpleGrid>
            <Divider />
            <Heading as="h5" size="sm" mb={6} noOfLines={1}>
                Section 3: Reported Incident / Trouble Details
            </Heading>
            <SimpleGrid>
                <BaseTextarea
                    label="Incident Description:"
                    placeholder="Describe the issue or problem encountered..."
                    isRequired
                    minH="120px"
                />
            </SimpleGrid>

            <Divider />
            <Heading as="h5" size="sm" mb={6} noOfLines={1}>
                Technical Diagnostic & Pre-Repair Assessment (ICTU)
            </Heading>

            <SimpleGrid columns={2} spacing={3}>
                <BaseSelect
                    label="Received By:"
                    placeholder="Select Received By"
                    options={technicianOption}
                />
                // actual time when accept the task
                <BaseInput
                    label="Date & Time Logged:"
                    type="datetime-local"
                    value=""
                    isDisabled
                />
                <BaseCheckboxGroup
                    label="Physical Condition:"
                    isRequired
                    options={physicalConditionOption}
                />
                <GridItem colSpan={2}>
                    <BaseTextarea
                        label="Root Cause/ Diagnostic:"
                        placeholder=""
                        isRequired
                        minH="120px"
                    />
                </GridItem>
            </SimpleGrid>
            <Divider />
            <SimpleGrid>
                <GridItem colSpan={2}>
                    <BaseTextarea
                        label="Word Performed:"
                        placeholder=""
                        isRequired
                        minH="120px"
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <BaseTextarea
                        label="Technical Notes/ Action Tag"
                        placeholder=""
                        isRequired
                        minH="120px"
                    />
                </GridItem>
            </SimpleGrid>
            <Divider />

            <Flex justify="space-between" align="center" mb={4}>
                <Box>
                    <Heading size="sm">
                        Replacement Components / Consumables
                    </Heading>

                    <Text mt={1} fontSize="sm" color="gray.500">
                        List components or consumables replaced during the
                        repair or maintenance activity.
                    </Text>
                </Box>

                <Button
                    size="sm"
                    colorScheme="blue"
                    variant="outline"
                    onClick={addComponent}
                >
                    + Add Component
                </Button>
            </Flex>

            <VStack spacing={0} align="stretch">
                {components.map((item, index) => (
                    <Box key={index} p={4} border="1px">
                        <Flex justify="space-between" align="center" mb={3}>
                            <Text
                                fontSize="sm"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Component #{index + 1}
                            </Text>

                            {components.length > 1 && (
                                <Button
                                    size="xs"
                                    colorScheme="red"
                                    variant="ghost"
                                    onClick={() => removeComponent(index)}
                                >
                                    Remove
                                </Button>
                            )}
                        </Flex>

                        <Flex gap={4}>
                            <BaseInput
                                label="Component / Consumable"
                                placeholder="e.g. RAM 16GB"
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
                                label="Serial / Batch No."
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
                        </Flex>
                    </Box>
                ))}
            </VStack>

            <Divider />
            <Heading as="h5" size="sm" mb={6} noOfLines={1}>
                Section 6: Work Completion Sign-Off & End-User Acceptance
            </Heading>

            <SimpleGrid columns={2}>
                <GridItem>
                    <Text>
                        ICTU Technician:Juan Dela Cruz
                        {/* Original technician  */}
                    </Text>

                    {/* technician who's help the original technician  */}
                    <BaseSelect
                        label="Help By:"
                        placeholder="Select Received By"
                        options={technicianOption}
                    />

                    <Text>
                        {/* Date time now */}
                        Date Completed:
                    </Text>
                </GridItem>

                <GridItem>
                    <Text>
                        {/* Original technician  */}
                        Review By: Juan Dela Cruz
                    </Text>
                    Head, ICTU Unit/ IT Officer
                    {/* technician who help the original technician  */}
                    <Text>
                        {/* Date time now */}
                        Date Review:
                    </Text>
                </GridItem>
            </SimpleGrid>

            <SimpleGrid>
                {/* Feed Back */}
                <Text fontWeight="semibold">
                    Client Acceptance & Acknowledgement:
                </Text>
                <Text>
                    I acknowledge receipt of the above ICT equipment. It has
                    been tested in my presence and is found to be in
                    satisfactory operating condition.
                </Text>

                <BaseRadioGroup
                    label="Client FeedBack Rating:"
                    name="Service Priority"
                    isRequired
                    options={feedBackRating}
                />

                <BaseInput
                    label="Received By:"
                    placeholder="eg. Juan Dela Cruz"
                />

                <Text>Date Received: date time now</Text>
            </SimpleGrid>

            <Button mt={6} type="submit" colorScheme="blue">
                Submit
            </Button>
        </form>
    );
}
