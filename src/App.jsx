import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos - Order Now</h1>

      <Order />
    </div>
  );
};

const container = document.querySelector(".root");

const root = createRoot(container);
root.render(
  // extra set of check that warns us developers about using deprecated features, double renders components, and helps catch subtle bugs by running effect twice
  <StrictMode>
    <App />
  </StrictMode>,
);
