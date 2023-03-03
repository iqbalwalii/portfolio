import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import App from "./App";
import Thanks from "./thanks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
