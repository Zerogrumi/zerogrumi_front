import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import LogIn from "./pages/LogIn";
import SignUP from "./pages/SignUP";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ContentListPage from "./pages/ContentListPage";
import VerifyPage from "./pages/VerifyPage";
import CommunityPage from "./pages/CommunityPage";
import WritePage from "./pages/WritePage";
import Loding from "./pages/Loding";

export default function Router() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loding />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/list" element={<ContentListPage />} />
            <Route path="/veri" element={<VerifyPage />} />
            <Route path="/comu/:id" element={<CommunityPage />} />
            <Route path="/writ" element={<WritePage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
