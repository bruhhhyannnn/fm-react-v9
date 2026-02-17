import Pizza from "./Pizza";

// this pattern of creating functions is better in terms of debugging because this is a named export and when you do debugging, it mention this function in the stack trace, making it easier to find the functions.
export default function Order() {
  const pizzaType = "Pepperoni";
  const pizzaSize = "M";
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" id="" value={pizzaType}>
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
                />
                <label htmlFor="pizza-s">Medium</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "L"}
                  name="pizza-size"
                  value="L"
                  id="pizza-L"
                />
                <label htmlFor="pizza-s">Large</label>
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

// this is the same at the top but this one will not show up in the stack trace, it would mark it as anonymous function because we used an arrow function for this pattern.
// export default Order;
