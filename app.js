const task = React.createElement("div", { className: "task" }, [
  React.createElement("span", null, "This is a task element"),
  React.createElement("span", null, "This is another task element"),
]);
const outcome = React.createElement("div", { className: "outcome" }, [
  React.createElement("span", null, "This is an outcome element"),
  React.createElement("span", null, "This is another outcome element"),
]);

const app = React.createElement("div", { className: "app" }, [task, outcome]);

// create heading element
const heading = React.createElement(
  "h1",
  { test_attribute: "testValue", className: "heading" },
  "Hello World, this is a React App from app.js file!"
);

// create root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the heading element into the root element
root.render(app);
