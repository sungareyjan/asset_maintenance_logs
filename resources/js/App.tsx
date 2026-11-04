import { AdminLayout } from "@/layouts";
import { RepairMaintenance, RepairAssessment, ServiceRequest,ServiceQueue, DashBoard } from "@/features";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "@/app/routes";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route
                        path={ROUTES.ADMIN.DashBoard}
                        element={<DashBoard />}
                    />
                    <Route
                        path={ROUTES.ADMIN.ServiceRequest}
                        element={<ServiceRequest/>}
                    />
                    <Route
                        path={ROUTES.ADMIN.ServiceQueue}
                        element={<ServiceQueue />}
                    />
                    <Route
                        path={ROUTES.ADMIN.RepairMaintenance}
                        element={<RepairAssessment/>}
                    />
                    <Route
                        path={ROUTES.ADMIN.RepairAssessment}
                        element={<RepairMaintenance />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}