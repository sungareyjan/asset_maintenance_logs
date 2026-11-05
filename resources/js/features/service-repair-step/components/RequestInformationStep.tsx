import {
    Box,
    SimpleGrid,
} from "@chakra-ui/react";
import { BaseInput } from "@/shared/ui";
import BaseSelect from "@/shared/ui/base/BaseSelect";
import type { ServiceRequest } from "../../service-request-repair/types/service-request";
import { useRepairMaintenance } from "../../repair-maintenance/hooks/useRepairMaintenance";

interface RequestInformationStepProps {
    request: ServiceRequest | null;
    isLoading?: boolean;
}
export default function RequestInformationStep({
    request,
    isLoading = false,
}: RequestInformationStepProps) {
    const { form, setField, handleSubmit } = useRepairMaintenance();

    const equipmentOption = [
        {
            value: "Desktop",
            label: "Desktop",
        },
    ];

    return (
        <form onSubmit={handleSubmit}>
            {/* =========================================================
                FORM HEADER
            ========================================================= */}

            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
                mb={6}
            >
                <Box p={5}>
                    <SimpleGrid columns={{ base: 1, md:2, xl:3 }} spacing={4}>
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

        </form>
    );
}
