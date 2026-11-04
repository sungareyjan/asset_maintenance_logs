import { Badge } from "@chakra-ui/react";

interface StatusBadgeProps {
    status: string;
    colorScheme?: string;
}

const statusColorMap: Record<string, string> = {
    Submitted: "blue",
    Queued: "purple",
    Assigned: "cyan",
    "In Progress": "orange",
    "On Hold": "yellow",
    Completed: "green",
    Cancelled: "red",

    Available: "green",
    Issued: "blue",
    Borrowed: "purple",
    Serviceable: "green",
    "Under Repair": "orange",
    Unserviceable: "red",
    "Returned to Supplier": "yellow",
    Condemned: "gray",
};

export function StatusBadge({
    status,
    colorScheme,
}: StatusBadgeProps) {
    const scheme =
        colorScheme ??
        statusColorMap[status] ??
        "gray";

    return (
        <Badge
            colorScheme={scheme}
            variant="subtle"
            px={2}
            py={1}
            borderRadius="md"
            fontWeight="500"
            textTransform="none"
            whiteSpace="nowrap"
        >
            {status}
        </Badge>
    );
}