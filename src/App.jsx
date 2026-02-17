import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos - Order Now</h1>

      <Order />
      <PizzaOfTheDay />
    </div>
  );
};

const container = document.querySelector(".root");

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
