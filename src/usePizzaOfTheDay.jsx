import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  // for React DevTools for quickly identifying and debugging the state of the hook
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id}` : "loading...");

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
