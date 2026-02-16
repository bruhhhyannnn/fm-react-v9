const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),

    // passing of props to the Pizza component
    // what happened: the object passed became arguments passed of the function
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "some description",
    }),
    React.createElement(Pizza, {
      name: "Pizza 2",
      description: "some description 2",
    }),
    React.createElement(Pizza, {
      name: "Pizza 3",
      description: "some description 3",
    }),
  );
};

const container = document.querySelector(".root");

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

/**
 * this returns like this:
 * <div>
 *  <div>
 *    <h2>Pepperoni Pizza</h2>
 *    <p>Pepperoni Pizza</p>
 *  </div>
 *  <div>
 *    <h2>Pizza 2</h2>
 *    <p>some description 2</p>
 *  </div>
 *  <div>
 *    <h2>Pizza 3</h2>
 *    <p>some description 3</p>
 *  </div>
 * </div>
 */
