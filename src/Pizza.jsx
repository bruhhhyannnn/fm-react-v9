// ! This is essentially what i had in the App.js when learning about react elements, now that is not easy to understand at all compared to the one i created below it.
// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

const Pizza = (props) => {
  return (
    <div className="pizza">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;

/**
 * this is the same as what we did before
 * const App = () => {
 *  return <h1>hello</h1>
 * }
 *
 * React.createElement("h1", null, "hello")
 */
