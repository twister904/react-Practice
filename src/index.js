import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { books } from "./books";
import Book from "./book";
// function Greeting() {
//   return React.createElement("h2", {}, "hello world");
// }

// function Greeting() {
//   return (
//     <React.Fragment>
//       {" "}
//       <div className='value'>
//         <Person />
//         <Message />
//         <ul>
//           <li>
//             <a href='www.google.com'>Hello world</a>
//           </li>
//         </ul>
//       </div>
//     </React.Fragment>
//   );
// }
// const Person = () => {
//   return <h2>John Doe</h2>;
// };
// const Message = () => <p>Hey i am learning React ☣️</p>;

function Booklist() {
  return (
    <>
    <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book key={book.id} {...book} number={index}></Book>;
        })}
      </section>
    </>
  );
}

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log("handle Form input");
//     console.log(e.target);
//     console.log(e.target.value);
//     console.log(e.target.name);
//   };
//   const handleButtonClick = () => {
//     alert("handle Button clicked");
//   };
//   const hadnleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("form submitted");
//   };
//   return (
//     <section>
//       <form onSubmit={hadnleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type='text'
//           name='example'
//           onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         />
//         <button type='submit'>Submit form</button>
//       </form>
//       <button onClick={handleButtonClick}>Click me</button>
//     </section>
//   );
// };
// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type='text'
//           name='example'
//           onChange={(e) => {
//             console.log(e.target.value);
//             console.log(e.target.name);
//             console.log("handle Form input");
//           }}
//           style={{ margin: "1rem 0" }}
//         />
//         <button
//           type='submit'
//           onClick={(e) => {
//             e.preventDefault();
//             console.log("form submitted");
//           }}
//         >
//           Submit form
//         </button>
//       </form>
//       <button
//         onClick={() => {
//           alert("handle Button clicked");
//         }}
//       >
//         Click me
//       </button>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
