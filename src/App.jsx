import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";
import Header from "./Header";
import { CartContext } from "./contexts";

const App = () => {
  // we are making the useState hook here different, we are not destructing it the way we used to. from our context file we use this format inside:
  // export const CartContext = createContext([[], function () {}]);
  // and that resembles the useState destructured function format
  const cartHook = useState([]);

  return (
    <div>
      {/* that's why we passed the cartHook here that will be used */}
      <CartContext.Provider value={cartHook}>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </CartContext.Provider>
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
