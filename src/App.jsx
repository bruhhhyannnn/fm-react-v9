import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="pep, cheese, n stuff"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Hawaiian"
        description="ham, pineapple, n stuff"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="Americano"
        description="french fries, hotdogs, n stuff"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};

const container = document.querySelector(".root");

const root = createRoot(container);
root.render(<App />);
