import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    TableProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import { EmptyState } from "./EmptyState";

export interface DataTableColumn<T> {
    key: keyof T | string;
    label: string;
    width?: string;
    align?: "left" | "center" | "right";
    render?: (row: T) => ReactNode;
}

interface DataTableProps<T> extends TableProps {
    data: T[];
    columns: DataTableColumn<T>[];
    getRowKey: (row: T, index: number) => string;
    onRowClick?: (row: T) => void;
    emptyMessage?: string;
}

export function DataTable<T>({
    data,
    columns,
    getRowKey,
    onRowClick,
    emptyMessage = "No records found.",
    ...tableProps
}: DataTableProps<T>) {
    return (
        <TableContainer
            width="100%"
            overflowX="auto"
            minH="300px"
        >
            <Table
                size="sm"
                variant="simple"
                {...tableProps}
            >
                <Thead bg="gray.50">
                    <Tr>
                        {columns.map((column) => (
                            <Th
                                key={column.key.toString()}
                                width={column.width}
                                textAlign={column.align}
                                whiteSpace="nowrap"
                            >
                                {column.label}
                            </Th>
                        ))}
                    </Tr>
                </Thead>

                <Tbody>
                    {data.length === 0 ? (
                        <Tr>
                            <Td
                                colSpan={columns.length}
                                p={0}
                            >
                                <EmptyState
                                    title="No records found"
                                    description={
                                        emptyMessage
                                    }
                                />
                            </Td>
                        </Tr>
                    ) : (
                        data.map((row, index) => (
                            <Tr
                                key={getRowKey(row, index)}
                                cursor={
                                    onRowClick
                                        ? "pointer"
                                        : "default"
                                }
                                _hover={
                                    onRowClick
                                        ? {
                                              bg: "gray.50",
                                          }
                                        : undefined
                                }
                                onClick={() =>
                                    onRowClick?.(row)
                                }
                            >
                                {columns.map((column) => (
                                    <Td
                                        key={column.key.toString()}
                                        textAlign={
                                            column.align
                                        }
                                        whiteSpace="nowrap"
                                    >
                                        {column.render
                                            ? column.render(row)
                                            : String(
                                                  row[
                                                      column.key as keyof T
                                                  ] ?? ""
                                              )}
                                    </Td>
                                ))}
                            </Tr>
                        ))
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
}