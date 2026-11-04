import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
    Textarea,
    VStack,
    SimpleGrid,
    GridItem,
    Heading,
} from "@chakra-ui/react";

import type { FormEvent } from "react";

import { BaseModal } from "@/shared/ui";
import BaseSelect from "@/shared/ui/base/BaseSelect";

export interface ServiceRequestFormData {
    requestingUser: string;
    officeDivision: string;
    location: string;
    requestDate: string;
    priority: "Urgent" | "High" | "Normal" | "Low";
    problemDescription: string;
}

interface ServiceRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ServiceRequestFormData) => void;
}

export default function ServiceRequestModal({
    isOpen,
    onClose,
    onSubmit,
}: ServiceRequestModalProps) {
    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        onSubmit({
            requestingUser: String(formData.get("requestingUser")),
            officeDivision: String(formData.get("officeDivision")),
            location: String(formData.get("location")),
            requestDate: today,
            priority: formData.get("priority") as ServiceRequestFormData["priority"],
            problemDescription: String(
                formData.get("problemDescription")
            ),
        });
    };


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
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title="New Service Request"
            description="Fill in the required information to submit a service request."
            size="3xl"
            onSubmit={handleSubmit}
            footer={
                <>
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        colorScheme="blue"
                    >
                        Submit Request
                    </Button>
                </>
            }
        >
            <VStack spacing={6} align="stretch">

                {/* SECTION 1 */}
                <VStack align="stretch" spacing={4}>
                    {/* <Heading size="sm">
                        Request Information
                    </Heading> */}

                    <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={4}
                    >
                        <FormControl isRequired>
                            <FormLabel>Requesting User</FormLabel>
                            <Input
                                name="requestingUser"
                                placeholder="Enter requesting user"
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Office / Division / Unit</FormLabel>
                            <Input
                                name="officeDivision"
                                placeholder="e.g. ICTU"
                            />
                        </FormControl>

                        <GridItem colSpan={{ base: 1, md: 2 }}>
                            {/* <FormControl isRequired>
                                <FormLabel>Location</FormLabel> */}
                                {/* <Input
                                    name="location"
                                    placeholder="e.g. Regional Office, 2nd Floor"
                                /> */}
                            {/* </FormControl> */}
                             <BaseSelect
                                    isRequired
                                    label="Station / Location"
                                    placeholder="Select station / location"
                                    options={stationOptions}
                                />
                        </GridItem>
                    </SimpleGrid>
                </VStack>

                {/* SECTION 2 */}
                {/* <VStack align="stretch" spacing={4}>
                    <Heading size="sm">
                        2. Request Details
                    </Heading>

                    <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={4}
                    >
                        <FormControl>
                            <FormLabel>Request Date</FormLabel>
                            <Input
                                type="date"
                                value={today}
                                isReadOnly
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Work Order No.</FormLabel>
                            <Input
                                value="Generated upon submission"
                                isReadOnly
                                bg="gray.50"
                            />
                        </FormControl>

                        <GridItem colSpan={{ base: 1, md: 2 }}>
                            <FormControl isRequired>
                                <FormLabel>Priority</FormLabel>
                                <Select
                                    name="priority"
                                    defaultValue="Normal"
                                >
                                    <option value="Urgent">Urgent</option>
                                    <option value="High">High</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Low">Low</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>
                </VStack> */}

                {/* SECTION 3 */}
                <VStack align="stretch" spacing={4}>
                    {/* <Heading size="sm">
                      Reported Incident / Trouble Details
                    </Heading> */}

                    <FormControl isRequired>
                        <FormLabel>
                            Problem Description & Symptoms
                        </FormLabel>

                        <Textarea
                            name="problemDescription"
                            placeholder="Describe the problem encountered, observed symptoms, error messages, or other relevant details..."
                            rows={5}
                            resize="vertical"
                        />

                        <Text
                            fontSize="xs"
                            color="gray.500"
                            mt={1}
                        >
                            Provide enough details to help the technical team understand the issue.
                        </Text>
                    </FormControl>
                </VStack>
            </VStack>
        </BaseModal>
    );
}