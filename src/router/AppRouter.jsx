import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckOut } from "../hooks";
import { JournalPage } from "../journal/pages/JournalPage";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
    const { status } = useCheckOut();
    if (status === 'checking') {
        return <CheckingAuth />
    }
    return (
        <Routes>
            {
                (status === 'authenticaded')
                    ?
                    <Route path="/*" element={<JournalPage />} />
                    :
                    <Route path="/auth/*" element={<AuthRoutes />} />
            }
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}