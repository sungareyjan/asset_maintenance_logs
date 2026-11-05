import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    VStack,
    SimpleGrid,
    GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, type FormEvent } from "react";

import type { StationLocation } from "../types/station-location";
import { useOffices } from "../hooks/useOffices";

import {
    BaseModal,
    BaseSelectSearch,
    BaseTextarea,
} from "@/shared/ui";
import BaseSelect from "@/shared/ui/base/form/BaseSelect";

interface ServiceRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Option {
    value: string;
    label: string;
    [key: string]: unknown;
}

export default function ServiceRequestModal({
    isOpen,
    onClose,
}: ServiceRequestModalProps) {
    const [stationLocation, setStationLocation] =
        useState<Option | null>(null);

    const { offices } = useOffices();

    const officeOptions = offices.map((office) => ({
        label: `${office.office} (${office.code})`,
        value: office.public_id,
    }));

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);

            const payload = {
                requesting_user: String(
                    formData.get("requestingUser") ?? ""
                ),

                office_id: String(
                    formData.get("officeDivision") ?? ""
                ),

                station_location_id:
                    stationLocation?.value ?? "",

                problem_description: String(
                    formData.get("problemDescription") ?? ""
                ),
            };

            await axios.post(
                "/api/repair",
                payload
            );

            onClose();
            // Reset station selection after successful submission
            setStationLocation(null);
        } catch (error) {
            console.error(
                "Failed to submit repair request:",
                error
            );
        }
    };

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

                {/* SECTION 1 — Request Information */}
                <VStack
                    align="stretch"
                    spacing={4}
                >
                    <SimpleGrid
                        columns={{
                            base: 1,
                            md: 2,
                        }}
                        spacing={4}
                    >
                        {/* Requesting User */}
                        <FormControl isRequired>
                            <FormLabel>
                                Requesting User
                            </FormLabel>

                            <Input
                                name="requestingUser"
                                placeholder="Enter requesting user"
                            />
                        </FormControl>

                        {/* Office / Division / Unit */}
                        <BaseSelect
                            isRequired
                            name="officeDivision"
                            label="Office / Division / Unit"
                            placeholder="Select office / division / unit"
                            options={officeOptions}
                        />

                        {/* Station / Location */}
                        <GridItem
                            colSpan={{
                                base: 1,
                                md: 2,
                            }}
                        >
                            <BaseSelectSearch<StationLocation>
                                placeholder="Select station / location"
                                value={stationLocation}
                                onChange={(option) => {
                                    setStationLocation(option);
                                }}
                                endpoint="/api/station-location"
                                getOptionValue={(item) =>
                                    item.public_id
                                }
                                getOptionLabel={(item) =>
                                    item.station
                                }
                            />
                        </GridItem>
                    </SimpleGrid>
                </VStack>

                {/* SECTION 2 — Reported Problem */}
                <VStack
                    align="stretch"
                    spacing={4}
                >
                    <BaseTextarea
                        name="problemDescription"
                        label="Problem Description"
                        placeholder="Describe the problem encountered, observed symptoms, error messages, or other relevant details."
                        isRequired
                        rows={5}
                        resize="vertical"
                    />

                    <Text
                        fontSize="xs"
                        color="gray.500"
                        mt={-2}
                    >
                        Provide enough details to help the
                        technical team understand the issue.
                    </Text>
                </VStack>

            </VStack>
        </BaseModal>
    );
}