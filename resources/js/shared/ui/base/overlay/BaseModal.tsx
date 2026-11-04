import type { ReactNode, FormEventHandler } from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
} from "@chakra-ui/react";

interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
    onSubmit?: FormEventHandler<HTMLFormElement>;
}

export default function BaseModal({
    isOpen,
    onClose,
    title,
    description,
    children,
    footer,
    size = "xl",
    onSubmit,
}: BaseModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={size}
            isCentered
            scrollBehavior="inside"
        >
            <ModalOverlay />

            <ModalContent
                borderRadius="xl"
                overflow="hidden"
                display="flex"
                flexDirection="column"
            >
                <form
                    onSubmit={onSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minHeight: 0,
                        width: "100%",
                    }}
                >
                    <ModalHeader pr={12}>
                        {title}

                        {description && (
                            <Text
                                mt={1}
                                fontSize="sm"
                                fontWeight="normal"
                                color="gray.500"
                            >
                                {description}
                            </Text>
                        )}
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody py={5} flex="1" overflowY="auto">
                        {children}
                    </ModalBody>

                    {footer && (
                        <ModalFooter
                            gap={3}
                            borderTop="1px solid"
                            borderColor="gray.200"
                            bg="gray.50"
                            flexShrink={0}
                        >
                            {footer}
                        </ModalFooter>
                    )}
                </form>
            </ModalContent>
        </Modal>
    );
}