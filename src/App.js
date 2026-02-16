const App = () => {
  /**
   * this returns a react element object. example is this:
   * {
   *    type: "div",
   *    props: {},
   *    ...children: [
   *                    { type: "h1", props: {}, children: "Padre Gino's" },
   *                    { type: "p", props: {}, children: "some description" }
   *                 ]
   * }
   */
  return React.createElement(
    // DOM element to create
    "div",
    // props
    {},
    // ...children to render
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement("p", {}, "some description"),
  );
};

const container = document.querySelector(".root");

// mark the 'container' element as the DOM to render react elements
const root = ReactDOM.createRoot(container);
// this builds the element tree (im talking about the render()) after the creation and return of the createElement() function
root.render(React.createElement(App));
/**
 * this returns like this:
 * <div>
 *  <h1>Padre Gino's</h1>
 *  <p>some description</p>
 * </div>
 */
