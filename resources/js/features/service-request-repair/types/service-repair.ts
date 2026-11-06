export type ServiceRequestRepair = {
    public_id: string;
    repair_control_no: string;
    requesting_user: string;
    status: "QUEUED" | "IN_PROGRESS" | "COMPLETED";
    created_at: string;

    start_task: string | null;
    end_task: string | null;
    progress: number;

    encoding_public_id: string;
    process_type: string;
    encoding_status: string;

    encoded_by_id: number;
    encoded_by_name: string;

    technician_id: number | null;
    technician_name: string | null;
};