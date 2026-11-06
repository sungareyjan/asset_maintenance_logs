import {
    Button,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    Text,
    VStack,
    GridItem,
} from "@chakra-ui/react";

import type { StationLocation } from "../types/station-location";
import type { Office } from "../types/office";
import { useServiceRequestForm } from "../hooks/useServiceRequestForm";
import { BaseModal, BaseSelectSearch, BaseTextarea } from "@/shared/ui";
import { useToast } from "@chakra-ui/react";
interface ServiceRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ServiceRequestModal({
    isOpen,
    onClose,
}: ServiceRequestModalProps) {
    const {
        stationLocation,
        setStationLocation,
        office,
        setOffice,
        requestingUser,
        setRequestingUser,
        problemDescription,
        setProblemDescription,
        submitted,
        handleSave,
        resetForm
    } = useServiceRequestForm();
    const toast = useToast();
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title="New Service Request"
            description="Fill in the required information to submit a service request."
            size="4xl"
            footer={
                <>
                    <Button type="button" variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        colorScheme="blue"
                        onClick={async () => {
                            const success = await handleSave();

                            if (success) {
                                toast({
                                    title: "Request submitted",
                                    description:
                                        "Your service request has been submitted successfully.",
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true,
                                    position: "top-right",
                                });
                                resetForm();
                                onClose();
                            }
                        }}
                    >
                        Submit Request
                    </Button>
                </>
            }
        >
            {/* Request Information */}
            <VStack align="stretch" spacing={4}>
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    spacing={4}
                >
                    {/* Requesting User */}
                    <FormControl
                        isRequired
                        isInvalid={submitted && !requestingUser.trim()}
                    >
                        <FormLabel>Requesting User</FormLabel>

                        <Input
                            name="requestingUser"
                            value={requestingUser}
                            onChange={(event) =>
                                setRequestingUser(event.target.value)
                            }
                            placeholder="Enter requesting user"
                        />
                    </FormControl>

                    {/* Office */}
                    <BaseSelectSearch<Office>
                        isRequired
                        isInvalid={submitted && !office}
                        label="Office / Division / Unit"
                        placeholder="Select Office / Division / Unit"
                        value={office}
                        onChange={(option) => {
                            setOffice(option);
                        }}
                        endpoint="/api/office"
                        getOptionValue={(item) => item.public_id}
                        getOptionLabel={(item) => item.office}
                    />

                    {/* Station Location */}
                    <GridItem
                        colSpan={{
                            base: 1,
                            md: 2,
                        }}
                    >
                        <BaseSelectSearch<StationLocation>
                            isRequired
                            isInvalid={submitted && !stationLocation}
                            label="Station Location"
                            placeholder="Select station / location"
                            value={stationLocation}
                            onChange={(option) => {
                                setStationLocation(option);
                            }}
                            endpoint="/api/station-location"
                            getOptionValue={(item) => item.public_id}
                            getOptionLabel={(item) => item.station}
                        />
                    </GridItem>
                </SimpleGrid>
            </VStack>

            {/* Problem Description */}
            <VStack align="stretch" spacing={4}>
                <BaseTextarea
                    label="Problem Description"
                    value={problemDescription}
                    onChange={(event) =>
                        setProblemDescription(event.target.value)
                    }
                    placeholder="Describe the problem encountered, observed symptoms, error messages, or other relevant details."
                    isRequired
                    isInvalid={submitted && !problemDescription.trim()}
                    rows={5}
                    resize="vertical"
                />

                <Text fontSize="xs" color="gray.500" mt={-2}>
                    Provide enough details to help the technical team understand
                    the issue.
                </Text>
            </VStack>
        </BaseModal>
    );
}
