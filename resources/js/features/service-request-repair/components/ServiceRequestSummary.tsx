import {
    SimpleGrid,
} from "@chakra-ui/react";

import {
    FiClipboard,
    FiClock,
    FiTool,
    FiCheckCircle,
} from "react-icons/fi";

import ServiceRequestSummaryCard from "./ServiceRequestSummaryCard";

export default function ServiceRequestSummary() {
    return (
        <SimpleGrid
            columns={{
                base: 1,
                sm: 2,
                lg: 4,
            }}
            spacing={4}
            mb={6}
        >
            <ServiceRequestSummaryCard
                label="Total Requests"
                value={128}
                icon={FiClipboard}
            />

            <ServiceRequestSummaryCard
                label="Pending"
                value={18}
                icon={FiClock}
                color="yellow"
            />

            <ServiceRequestSummaryCard
                label="In Progress"
                value={12}
                icon={FiTool}
                color="blue"
            />

            <ServiceRequestSummaryCard
                label="Completed"
                value={98}
                icon={FiCheckCircle}
                color="green"
            />
        </SimpleGrid>
    );
}