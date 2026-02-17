import { useState } from "react";
import Pizza from "./Pizza";

export default function Order() {
  // [0] current state value, [1] function to update the state, () argument passed is the default value
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              <option value="pepperoni">The pepperoni pizza</option>
              <option value="hawaiian">The hawaiian pizza</option>
              <option value="big_meat">The big meat pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "M"}
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "L"}
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to cart</button>
        </div>
        <div className="order-pizza">
          <Pizza
            name="Pepperoni"
            description="another pizza"
            image="/public/pizzas/pepperoni.webp"
          />
          <p>$14.45</p>
        </div>
      </form>
    </div>
  );
}
