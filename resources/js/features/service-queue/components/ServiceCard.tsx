import {
    Card,
    Flex,
    VStack,
    Text,
    Divider,
    HStack,
    Icon,
    Box,
    Progress,
} from "@chakra-ui/react";
import { FaClock, FaTools, FaUser } from "react-icons/fa";

export interface ServiceCardData {
    orderNo: string;
    requestTime: string;
    reportProblem: string;
    requester: string;
    requesterOffice: string;
    technician?: string;
}

interface ServiceCardProps {
    service: ServiceCardData;
    onClick?: () => void;
}

export default function ServiceCard({
    service,
    onClick,
}: ServiceCardProps) {

    return (
        <Card
            p={4}
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="lg"
            bg="white"
            cursor={onClick ? "pointer" : "default"}
            onClick={onClick}
            transition="all 0.2s"
            _hover={
                onClick
                    ? {
                          borderColor: "blue.300",
                          shadow: "sm",
                      }
                    : undefined
            }
        >
            <VStack align="stretch" spacing={3}>
                {/* Header */}
                <Flex justify="space-between" align="center">
                    <Text
                        fontSize="sm"
                        fontWeight="600"
                        color="gray.600"
                    >
                        {service.orderNo}
                    </Text>

                    <HStack spacing={1.5}>
                        <Icon
                            as={FaClock}
                            boxSize={3.5}
                            color="gray.400"
                        />

                        <Text fontSize="xs" color="gray.400">
                            {service.requestTime}
                        </Text>
                    </HStack>
                </Flex>

                {/* Problem */}
                <Text
                    fontSize="sm"
                    color="gray.700"
                    noOfLines={2}
                    minH="42px"
                >
                    {service.reportProblem}
                </Text>

                <Divider />

                {/* Requester / Technician */}
                <Flex
                    justify="space-between"
                    align="center"
                    gap={4}
                >
                    <HStack spacing={2} minW={0}>
                        <Icon
                            as={FaUser}
                            boxSize={3.5}
                            color="gray.400"
                        />

                        <Box minW={0}>
                            <Text
                                fontSize="sm"
                                fontWeight="500"
                                color="gray.700"
                                noOfLines={1}
                            >
                                {service.requester}
                            </Text>

                            <Text
                                fontSize="xs"
                                color="gray.400"
                            >
                                {service.requesterOffice}
                            </Text>
                        </Box>
                    </HStack>

                    {service.technician && (
                        <HStack spacing={2}>
                            <Icon
                                as={FaTools}
                                boxSize={3.5}
                                color="gray.400"
                            />

                            <Box>
                                <Text
                                    fontSize="xs"
                                    color="gray.400"
                                >
                                    Technician
                                </Text>

                                <Text
                                    fontSize="xs"
                                    fontWeight="500"
                                    color="gray.600"
                                    whiteSpace="nowrap"
                                >
                                    {service.technician}
                                </Text>
                            </Box>
                        </HStack>
                    )}
                </Flex>
            </VStack>
            <Progress
                mt="2"
                hasStripe
                value={20}
                size="sm"
                colorScheme="blue"
                borderRadius="full"
            />
        </Card>
    );
}