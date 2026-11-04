import { useState } from "react";

import type { RepairMaintenanceForm } from "../types/repairMaintenance.types";

const initialForm: RepairMaintenanceForm = {
    requesting_user: "",
    office_division: "",
    contact_number: "",
    email_address: "",
};

export function useRepairMaintenance() {
    const [form, setForm] =
        useState<RepairMaintenanceForm>(initialForm);

    const setField = <K extends keyof RepairMaintenanceForm>(
        field: K,
        value: RepairMaintenanceForm[K],
    ) => {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        console.log("Repair Maintenance Form:", form);
    };

    const resetForm = () => {
        setForm(initialForm);
    };

    return {
        form,
        setField,
        handleSubmit,
        resetForm,
    };
}