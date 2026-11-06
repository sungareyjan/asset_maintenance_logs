import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import type { ServiceRequestRepair } from "../types/service-repair";

export function useServiceRequests() {
    const [serviceRequests, setServiceRequests] = useState<
        ServiceRequestRepair[]
    >([]);

    const [loading, setLoading] = useState(false);

    const fetchServiceRequests = useCallback(async () => {
        try {
            setLoading(true);

            const response = await axios.get("/api/repair");

            setServiceRequests(response.data.data);
        } catch (error) {
            console.error(
                "Failed to fetch service requests:",
                error
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchServiceRequests();
    }, [fetchServiceRequests]);

    return {
        serviceRequests,
        loading,
        fetchServiceRequests,
    };
}