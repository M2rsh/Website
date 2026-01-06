import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import "./index.scss";

const HomeLazy = lazy(() => import("./pages/Home"));
const NotFoundLazy = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLazy />} />
        <Route path="*" element={<NotFoundLazy />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
