export interface Office {
    public_id: string;
    office: string;
    code: string;
    division: string;
}

export interface OfficeResponse {
    current_page: number;
    data: Office[];
    last_page: number;
    per_page: number;
    total: number;
}