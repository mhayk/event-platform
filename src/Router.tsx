import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<>Home</>} />
            <Route path="/event" element={<Event />} />
        </Routes>

    )
}