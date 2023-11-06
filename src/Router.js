import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentListPage from "./pages/ContentListPage";
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/list" element={<ContentListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
