import { GridItem, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import ServiceCard, { ServiceCardData } from "../components/ServiceCard";
import { useState } from "react";
import AcceptTaskModal from "@/features/service-request-repair/components/ServiceTaskModal";

export default function ServiceQueue() {
    const queue: ServiceCardData[] = [
        {
            orderNo: "SR-2026-00125",
            requestTime: "",
            reportProblem:
                "Dell Latitude 5420 is unable to boot into Windows after a system update.",
            requester: "Juan Dela Cruz",
            requesterOffice: "ICTU",
            technician: "",
        },
        {
            orderNo: "SR-2026-00126",
            requestTime: "",
            reportProblem: "Printer is not printing documents.",
            requester: "Maria Santos",
            requesterOffice: "PMED",
            technician: "",
        },
    ];

    const inProgress: ServiceCardData[] = [
        {
            orderNo: "SR-2026-00125",
            requestTime: "",
            reportProblem:
                "Dell Latitude 5420 is unable to boot into Windows after a system update.",
            requester: "Juan Dela Cruz",
            requesterOffice: "ICTU",
            technician: "Reyjan Sunga",
        },
        {
            orderNo: "SR-2026-00126",
            requestTime: "",
            reportProblem: "Printer is not printing documents.",
            requester: "Maria Santos",
            requesterOffice: "PMED",
            technician: "Juan Dela Cruz",
        },
    ];

    const [selectedRequest, setSelectedRequest] =
        useState<ServiceCardData | null>(null);

    const acceptTaskModal = useDisclosure();

    return (
        <>
            <SimpleGrid columns={{ base: 1, xl: 4 }} spacing={5}>
                {/* Queue */}
                <GridItem>
                    <Heading size="md" mb={3}>
                        WAITING
                    </Heading>

                    <SimpleGrid columns={{ base: 1, md: 2 , xl:1 }} spacing={3}>
                        {queue.map((service) => (
                            <ServiceCard
                                key={service.orderNo}
                                service={service}
                                onClick={() => {
                                    setSelectedRequest(service);
                                    acceptTaskModal.onOpen();
                                }}
                            />
                        ))}
                    </SimpleGrid>
                </GridItem>

                {/* In Progress */}
                <GridItem colSpan={{ base: 1, xl: 3 }}>
                    <Heading size="md" mb={3}>
                        NOW SERVING
                    </Heading>

                    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={3}>
                        {inProgress.map((service) => (
                            <ServiceCard
                                key={service.orderNo}
                                service={service}
                                onClick={() => {
                                    setSelectedRequest(service);
                                    acceptTaskModal.onOpen();
                                }}
                            />
                        ))}
                    </SimpleGrid>
                </GridItem>
            </SimpleGrid>

            <AcceptTaskModal
                isOpen={acceptTaskModal.isOpen}
                onClose={acceptTaskModal.onClose}
                request={selectedRequest}
            />
        </>
    );
}
