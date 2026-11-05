import {
    Box,
    Button,
    Flex,
    Heading,
    Spacer,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

import {
    FiPlus,
} from "react-icons/fi";

import {
    DataTable,
    Pagination,
    StatusBadge,
    type DataTableColumn,
} from "@/shared/ui/date-display";
import ServiceRequestSummary from "../components/ServiceRequestSummary";
import ServiceRequestToolbar from "../components/ServiceRequestToolbar";
import ServiceRequestModal, {
} from "../components/ServiceRequestModal";
import { useState } from "react";
import AcceptTaskModal from "../components/ServiceTaskModal";


type ServiceRequest = {
    id: string;
    requester: string;
    office: string;
    asset: string;
    technician:string;
    acceptTaskTime:string;
    priority: "Urgent" | "High" | "Normal" | "Low";
    status:
        | "Queued"
        | "In Progress"
        | "Completed";
    dateRequested: string;
};

const serviceRequests: ServiceRequest[] = [
    {
        id: "SR-2026-00001",
        requester: "Juan Dela Cruz",
        office: "ICTU",
        asset: "PC-001",
        priority: "High",
        status: "Queued",
        dateRequested: "Nov 2, 2026",
        acceptTaskTime:"",
        technician: "",
    },
    {
        id: "SR-2026-00002",
        requester: "Maria Santos",
        office: "FCA",
        asset: "LAP-021",
        priority: "Normal",
        status: "In Progress",
        dateRequested: "Nov 2, 2026",
        acceptTaskTime:"",
        technician: "",
    },
    {
        id: "SR-2026-00003",
        requester: "Pedro Cruz",
        office: "PMED",
        asset: "PC-014",
        priority: "Urgent",
        status: "In Progress",
        dateRequested: "Nov 1, 2026",
        acceptTaskTime:"",
        technician: "",
    },
    {
        id: "SR-2026-00004",
        requester: "Ana Reyes",
        office: "RAED",
        asset: "PRN-005",
        priority: "Low",
        status: "Completed",
        dateRequested: "Oct 31, 2026",
        acceptTaskTime:"",
        technician: "",
    },
];

const priorityColorMap = {
    Urgent: "red",
    High: "orange",
    Normal: "blue",
    Low: "gray",
};

const columns: DataTableColumn<ServiceRequest>[] = [
    {
        key: "id",
        label: "Request",
        width: "150px",
        render: (request) => (
            <Text
                fontSize="sm"
                fontWeight="600"
                color="blue.600"
            >
                {request.id}
            </Text>
        ),
    },
    {
        key: "requester",
        label: "Requester",
        render: (request) => (
            <Text
                fontSize="sm"
                fontWeight="500"
                color="gray.700"
            >
                {request.requester}
            </Text>
        ),
    },
    {
        key: "office",
        label: "Office / Division",
        render: (request) => (
            <Text
                fontSize="sm"
                color="gray.600"
            >
                {request.office}
            </Text>
        ),
    },
    {
        key: "asset",
        label: "Asset",
        render: (request) => (
            <Text
                fontSize="sm"
                fontFamily="mono"
                color="gray.600"
            >
                {request.asset}
            </Text>
        ),
    },
    {
        key: "priority",
        label: "Priority",
        render: (request) => (
            <Box
                display="inline-flex"
                px={2}
                py={1}
                borderRadius="md"
                bg={`${priorityColorMap[request.priority]}.50`}
                color={`${priorityColorMap[request.priority]}.600`}
                fontSize="xs"
                fontWeight="600"
            >
                {request.priority}
            </Box>
        ),
    },
    {
        key: "status",
        label: "Status",
        render: (request) => (
            <StatusBadge status={request.status} />
        ),
    },
    {
        key: "dateRequested",
        label: "Date Requested",
        render: (request) => (
            <Text
                fontSize="sm"
                color="gray.600"
            >
                {request.dateRequested}
            </Text>
        ),
    },
    {
        key: "technician",
        label: "Technician",
        render: (request) => (
            <Text fontSize="sm" textAlign="center" color="gray.600">
                {request.technician || "—"}
            </Text>
        ),
    },
    {
        key: "accepted_at",
        label: "Accepted At",
        render: (request) => (
            <Text fontSize="sm" textAlign="center" color="gray.600">
                {request.acceptTaskTime || "—"}
            </Text>
        ),
    },
];

export default function ServiceRequest() {

    const addModal = useDisclosure();
    const acceptTaskModal = useDisclosure();

    const [selectedRequest, setSelectedRequest] =
    useState<ServiceRequest | null>(null);

    const handleOpenAcceptModal = (request: ServiceRequest) => {
        setSelectedRequest(request);
        acceptTaskModal.onOpen();
    };

    return (
        <Box>
            {/* =====================================================
                PAGE HEADER
            ====================================================== */}
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

            {/* =====================================================
                SUMMARY
            ====================================================== */}

            <ServiceRequestSummary/>

            {/* =====================================================
                TABLE CONTAINER
            ====================================================== */}
            <Box
                bg="white"
                border="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
            >
                <ServiceRequestToolbar/>
                {/* Data Table */}
                <DataTable
                    data={serviceRequests}
                    columns={columns}
                    getRowKey={(request) =>
                        request.id
                    }
                    onRowClick={handleOpenAcceptModal}
                    emptyMessage="No service requests found."
                />

                {/* Pagination */}
                <Pagination
                    page={1}
                    perPage={10}
                    total={128}
                    onPageChange={(page) => {
                        console.log(
                            "Page:",
                            page
                        );
                    }}
                />
            </Box>
            {/* SERVICE REQUEST MODAL */}
            <ServiceRequestModal
                isOpen={addModal.isOpen}
                onClose={addModal.onClose}
                onSubmit={(data) => {
                    console.log(data);
                    addModal.onClose();
                }}
            />

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
