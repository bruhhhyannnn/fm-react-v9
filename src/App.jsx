import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

// we essentially converted this one
// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Padre Gino's"),

//     React.createElement(Pizza, {
//       name: "Pepperoni Pizza",
//       description: "some description",
//     }),
//     React.createElement(Pizza, {
//       name: "Pizza 2",
//       description: "some description 2",
//     }),
//     React.createElement(Pizza, {
//       name: "Pizza 3",
//       description: "some description 3",
//     }),
//   );
// };

// To be come this one
const App = () => {
  return (
    <div>
      <h1>Padre Ginos - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name="Hawaiian" description="ham, pineapple, n stuff" />
      <Pizza name="Americano" description="french fries, hotdogs, n stuff" />
    </div>
  );
};

const container = document.querySelector(".root");

const root = createRoot(container);
// this one is essentially the same
// root.render(React.createElement(App));
// as this one
root.render(<App />); // it will be also return the react element object known as {type, props, ...children}
// again the render() function will render the react element tree
