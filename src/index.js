import React from "react";
import ReactDOM from "react-dom/client";

import { books } from "./books";
import Book from "./book";
/*First step create function that will receive books' information then pass it to props to render it into child compenent with HTML*/

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
