export type ServiceRequestStatus =
    | "Pending"
    | "In Progress"
    | "Completed";

export type ServiceRequestPriority =
    | "Urgent"
    | "High"
    | "Normal"
    | "Low";

export interface ServiceRequest {
    id: string;
    requester: string;
    office: string;
    asset: string;
    priority: ServiceRequestPriority;
    status: ServiceRequestStatus;
    dateRequested: string;
    location?: string;
    problemDescription?: string;
}