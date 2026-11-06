import {
    Box,
    Button,
    Flex,
    Heading,
    Spacer,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

import { FiPlus } from "react-icons/fi";
import { useState } from "react";

import {
    DataTable,
    Pagination,
} from "@/shared/ui/date-display";

import ServiceRequestSummary from "../components/ServiceRequestSummary";
import ServiceRequestToolbar from "../components/ServiceRequestToolbar";
import ServiceRequestModal from "../components/ServiceRequestModal";
import AcceptTaskModal from "../components/ServiceTaskModal";

import { useServiceRequests } from "../hooks/useServiceRequests";
import { serviceRequestColumns } from "../config/serviceRequestColumns";

import type { ServiceRequestRepair } from "../types/service-repair";

export default function ServiceRequest() {
    const addModal = useDisclosure();
    const acceptTaskModal = useDisclosure();

    const [selectedRequest, setSelectedRequest] =
        useState<ServiceRequestRepair | null>(null);

    const {
        serviceRequests,
        fetchServiceRequests,
    } = useServiceRequests();

    const handleOpenAcceptModal = (
        request: ServiceRequestRepair
    ) => {
        setSelectedRequest(request);
        acceptTaskModal.onOpen();
    };

    return (
        <Box>
            {/* Page Header */}
            <Flex
                direction={{
                    base: "column",
                    md: "row",
                }}
                align={{
                    base: "flex-start",
                    md: "center",
                }}
                gap={4}
                mb={6}
            >
                <Box>
                    <Heading
                        size="md"
                        fontWeight="600"
                        color="gray.800"
                    >
                        Service Requests Repair
                    </Heading>

                    <Text
                        mt={1}
                        fontSize="sm"
                        color="gray.500"
                    >
                        Submit and manage ICTU service requests.
                    </Text>
                </Box>

                <Spacer />

                <Button
                    leftIcon={<FiPlus />}
                    colorScheme="blue"
                    size="sm"
                    onClick={addModal.onOpen}
                >
                    New Request
                </Button>
            </Flex>

            {/* Summary */}
            <ServiceRequestSummary />

            {/* Table */}
            <Box
                bg="white"
                border="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
            >
                <ServiceRequestToolbar />

                <DataTable
                    data={serviceRequests}
                    columns={serviceRequestColumns}
                    getRowKey={(request) =>
                        request.public_id
                    }
                    onRowClick={handleOpenAcceptModal}
                    emptyMessage="No service requests found."
                />

                <Pagination
                    page={1}
                    perPage={10}
                    total={128}
                    onPageChange={(page) => {
                        console.log("Page:", page);
                    }}
                />
            </Box>

            {/* New Request */}
            <ServiceRequestModal
                isOpen={addModal.isOpen}
                onClose={addModal.onClose}
                onSubmit={(data) => {
                    console.log(data);
                    addModal.onClose();

                    fetchServiceRequests();
                }}
            />

            {/* Accept Task */}
            <AcceptTaskModal
                isOpen={acceptTaskModal.isOpen}
                onClose={() => {
                    acceptTaskModal.onClose();
                    setSelectedRequest(null);
                }}
                request={selectedRequest}
            />
        </Box>
    );
}