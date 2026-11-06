import { useState } from "react";
import axios from "axios";

interface Option {
    value: string;
    label: string;
    [key: string]: unknown;
}

export function useServiceRequestForm() {
    const [stationLocation, setStationLocation]       = useState<Option | null>(null);
    const [office, setOffice]                         = useState<Option | null>(null);
    const [requestingUser, setRequestingUser]         = useState("");
    const [problemDescription, setProblemDescription] = useState("");
    const [submitted, setSubmitted]                   = useState(false);

    const resetForm = () => {
        setStationLocation(null);
        setOffice(null);
        setRequestingUser("");
        setProblemDescription("");
        setSubmitted(false);
    };

    const handleSave = async () => {
        setSubmitted(true);

        if (
            !requestingUser.trim() ||
            !office ||
            !stationLocation ||
            !problemDescription.trim()
        ) {
            return;
        }

        try {
            const payload = {
                requesting_user: requestingUser.trim(),
                office_id: office.value,
                station_location_id: stationLocation.value,
                problem_description: problemDescription.trim(),
            };

            await axios.post("/api/repair", payload);
            return true;
        } catch (error) {
            console.error(
                "Failed to submit repair request:",
                error
            );
            return false;
        }
    };

    return {
        stationLocation,
        setStationLocation,

        office,
        setOffice,

        requestingUser,
        setRequestingUser,

        problemDescription,
        setProblemDescription,

        submitted,

        handleSave,
        resetForm,
    };
}