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
root.render(<App />);
