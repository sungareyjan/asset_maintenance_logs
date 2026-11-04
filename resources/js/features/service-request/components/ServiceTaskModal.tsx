import {
    Box,
    Button,
    HStack,
    Progress,
    Text,
} from "@chakra-ui/react";

import { BaseModal } from "@/shared/ui";
import type { ServiceRequest } from "../types/service-request";

import { useState } from "react";

import AcceptTaskStep from "../../service-repair-step/components/AcceptTaskStep";
import RequestInformationStep from "../../service-repair-step/components/RequestInformationStep";
import TechnicalDiagnosticStep from "../../service-repair-step/components/TechnicalDiagnosticStep";
import ReplaceComponentStep from "../../service-repair-step/components/ReplaceComponentStep";
import FeedBackStep from "@/features/service-repair-step/components/FeedBackStep";
import RepairChecklistStep from "@/features/service-repair-step/components/RepairChecklistStep";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (request: ServiceRequest) => Promise<void>;
    request: ServiceRequest | null;
    isLoading?: boolean;
}

const MAX_STEP = 6;

const stepConfig = {
    1: {
        title: "Accept Service Request",
        description:
            "Review the service request details before accepting the task.",
    },
    2: {
        title: "Equipment Specification & Accountability",
        description:
            "Review and record the equipment details, identification, and accountability information.",
    },
    3: {
        title: "Technical Diagnostic & Pre-Repair Assessment (ICTU)",
        description:
            "Record the received condition, diagnostic findings, and identified root cause of the reported issue.",
    },
    4: {
        title: "Corrective Action Taken & Replacement Components",
        description:
            "Record the corrective actions performed and any components or consumables replaced during the repair.",
    },
    5: {
        title: "ANNEX A: ICT Repair & Maintenance Checklist",
        description:
            "Review the completed repair, document the work completion status and client feedback, and obtain the end-user's acceptance and acknowledgment.",
    },
    6: {
        title: "Work Completion Sign-off & End-User Acceptance",
        description:
            "Review the completed work, record the final status and client feedback, and obtain end-user acceptance.",
    },
} as const;

export default function AcceptTaskModal({
    isOpen,
    onClose,
    onConfirm,
    request,
    isLoading = false,
}: ServiceModalProps) {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(prev + 1, MAX_STEP)
        );
    };

    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 1)
        );
    };

    const handleAcceptTask = async () => {
        if (!request) return;

        try {
            // await onConfirm(request);

            setCurrentStep(2);
        } catch (error) {
            console.error(
                "Failed to accept task:",
                error
            );
        }
    };


    const handleSubmit = async () => {
        if (!request) return;

        try {
            // TODO:
            // await submitWorkOrder(request);

            console.log("Submitting work order...");
        } catch (error) {
            console.error(
                "Failed to submit work order:",
                error
            );
        }
    };

    /*
     * Reset wizard when closed.
     */
    const handleClose = () => {
        setCurrentStep(1);
        onClose();
    };

    /*
     * Current step information.
     */
    const currentStepConfig =
        stepConfig[
            currentStep as keyof typeof stepConfig
        ];

    /*
     * Progress percentage.
     *
     * Step 1 = 33%
     * Step 2 = 67%
     * Step 3 = 100%
     */
    const progressValue =
        (currentStep / MAX_STEP) * 100;

    /*
     * Render current step.
     */
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <AcceptTaskStep
                        request={request}
                    />
                );

            case 2:
                return (
                    <RequestInformationStep
                        request={request}
                    />
                );

            case 3:
                return (
                    <TechnicalDiagnosticStep
                        request={request}
                    />
                );

            case 4:
                return (
                    <ReplaceComponentStep
                        request={request}
                    />
                );

            case 5:
            return (
                <RepairChecklistStep
                    // request={request}
                />
            );

            case 6:
                return (
                    <FeedBackStep
                        request={request}
                    />
                );

            default:
                return null;
        }
    };

    if (!request) {
        return null;
    }

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={handleClose}
            title={currentStepConfig.title}
            description={
                <Box>
                    <Text mb={3}>
                        {currentStepConfig.description}
                    </Text>

                    <Progress
                        hasStripe
                        value={progressValue}
                        size="sm"
                        colorScheme="green"
                        borderRadius="full"
                    />
                </Box>
            }
            size="4xl"
            footer={
                <HStack
                    justify="space-between"
                    width="full"
                >
                    {/* Cancel */}
                    <Button
                        variant="ghost"
                        onClick={handleClose}
                        isDisabled={isLoading}
                    >
                        Cancel
                    </Button>

                    <HStack spacing={3}>
                        {/* Back */}
                        <Button
                            variant="outline"
                            onClick={previousStep}
                            isDisabled={
                                currentStep === 1 ||
                                isLoading
                            }
                        >
                            Back
                        </Button>

                        {/* Step 1 = Accept */}
                        {currentStep === 1 ? (
                            <Button
                                colorScheme="green"
                                onClick={handleAcceptTask}
                                isLoading={isLoading}
                                loadingText="Accepting..."
                            >
                                Accept Task
                            </Button>
                        ) : currentStep < MAX_STEP ? (
                            /* Step 2 = Next */
                            <Button
                                colorScheme="blue"
                                onClick={nextStep}
                                isDisabled={isLoading}
                            >
                                Next
                            </Button>
                        ) : (
                            /* Step 3 = Submit */
                            <Button
                                colorScheme="green"
                                onClick={handleSubmit}
                                isLoading={isLoading}
                                loadingText="Submitting..."
                            >
                                Submit
                            </Button>
                        )}
                    </HStack>
                </HStack>
            }
        >
            {renderStep()}
        </BaseModal>
    );
}
