import { Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";
import { Login } from "../pages/login";

export function Router() {
    return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
    );
}