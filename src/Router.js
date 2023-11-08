import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import LogIn from "./pages/LogIn";
import SignUP from "./pages/SignUP";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ContentListPage from "./pages/ContentListPage";
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/list" element={<ContentListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
