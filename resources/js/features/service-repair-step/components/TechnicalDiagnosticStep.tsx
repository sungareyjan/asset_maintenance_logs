import {
    Box,
    SimpleGrid,
    GridItem,
} from "@chakra-ui/react";
import { BaseInput } from "@/shared/ui";
import BaseSelect from "@/shared/ui/base/form/BaseSelect";
import BaseTextarea from "@/shared/ui/base/form/BaseTextarea";
import BaseCheckboxGroup from "@/shared/ui/base/form/BaseCheckboxGroup";
import type { ServiceRequest } from "../../service-request-repair/types/service-request";
import { useRepairMaintenance } from "../../repair-maintenance/hooks/useRepairMaintenance";

interface TechnicalDiagnosticStepProps {
    request: ServiceRequest | null;
    isLoading?: boolean;
}

export default function TechnicalDiagnosticStep({
    request,
    isLoading = false,
}: TechnicalDiagnosticStepProps) {
    // if (!request) return null;
    const { form, setField, handleSubmit } = useRepairMaintenance();

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

    return (
        <form onSubmit={handleSubmit}>
            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
                mb={6}
            >
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

                        <GridItem colSpan={{ base: 1, md: 4 }}>
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

        </form>
    );
}
