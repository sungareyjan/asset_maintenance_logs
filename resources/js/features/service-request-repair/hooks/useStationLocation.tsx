import { useEffect, useState } from "react";
import axios from "axios";
import type { Office, OfficeResponse } from "../types/office";

export function useStationLocation() {
    const [offices, setOffices] = useState<Office[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]     = useState<string | null>(null);

    useEffect(() => {
        const fetchOffices = async () => {
            try {
                setLoading(true);

                const response = await axios.get<OfficeResponse>(
                    "/api/station-location"
                );

                setOffices(response.data.data);
            } catch (err) {
                setError("Failed to load offices.");
            } finally {
                setLoading(false);
            }
        };

        fetchOffices();
    }, []);

    return {
        offices,
        loading,
        error,
    };
}