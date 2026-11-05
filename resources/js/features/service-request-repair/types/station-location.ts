export interface StationLocation {
    public_id: string;
    station: string;
    address: string;
}

export interface StationLocationResponse {
    current_page: number;
    data: StationLocation[];
    last_page: number;
    per_page: number;
    total: number;
}