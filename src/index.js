import React from "react";
import ReactDOM from "react-dom/client";
// function Greeting() {
//   return React.createElement("h2", {}, "hello world");
// }

function Greeting() {
  return (
    <React.Fragment>
      {" "}
      <div className='value'>
        <Person />
        <Message />
        <ul>
          <li>
            <a href='www.google.com'>Hello world</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
const Person = () => {
  return <h2>John Doe</h2>;
};
const Message = () => <p>Hey i am learning React ☣️</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
