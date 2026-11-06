import { Box, Text } from "@chakra-ui/react";

import {
    StatusBadge,
    type DataTableColumn,
} from "@/shared/ui/date-display";

import type { ServiceRequestRepair } from "../types/service-repair";

const priorityColorMap = {
    Urgent: "red",
    High: "orange",
    Normal: "blue",
    Low: "gray",
};

export const serviceRequestColumns: DataTableColumn<ServiceRequestRepair>[] = [
    {
        key: "repair_control_no",
        label: "Request No",
        width: "150px",
        render: (request) => (
            <Text
                fontSize="sm"
                fontWeight="600"
                color="blue.600"
            >
                {request.repair_control_no}
            </Text>
        ),
    },

    {
        key: "requesting_user",
        label: "Requester",
        render: (request) => (
            <Text
                fontSize="sm"
                fontWeight="500"
                color="gray.700"
            >
                {request.requesting_user}
            </Text>
        ),
    },

    {
        key: "technician_name",
        label: "Technician",
        render: (request) => (
            <Text
                fontSize="sm"
                color="gray.600"
            >
                {request.technician_name || "—"}
            </Text>
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
        key: "created_at",
        label: "Date Requested",
        render: (request) => (
            <Text fontSize="sm" color="gray.600">
                {request.created_at}
            </Text>
        ),
    },

    {
        key: "start_task",
        label: "Accepted At",
        render: (request) => (
            <Text
                fontSize="sm"
                textAlign="center"
                color="gray.600"
            >
                {request.start_task || "—"}
            </Text>
        ),
    },
];