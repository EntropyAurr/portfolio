import { BrowserRouter, Route, Routes } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "./ui/toaster";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
