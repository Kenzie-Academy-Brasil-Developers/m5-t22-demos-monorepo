import { useState } from "react";

export const BookExample = () => {
  const [bookList, setBookList] = useState([
    {
      id: crypto.randomUUID(),
      title: "Aprendendo Javascript Básico",
      author: "John Doe",
    },
    {
      id: crypto.randomUUID(),
      title: "Node.js para Iniciantes",
      author: "Bob Johnson",
    },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const bookSubmitHandler = (event) => {
    event.preventDefault();

    console.log("evento acionado!!");

    // addBook({title: title, author: author});
    addBook({ title, author });
  };

  const addBook = (bookData) => {
    const newBook = {
      id: crypto.randomUUID(),
      title: bookData.title,
      author: bookData.author,
    };
    /*
    Ao usar useState, nao posso utilizar métodos que modificam um array (push, splice,...).
    */
    // bookList.push(newBook);

    // SPREAD OPERATOR
    setBookList([...bookList, newBook]);

    console.log(newBook);
  };

  const removeBook = (bookId) => {
    const filteredBookList = bookList.filter((book) => book.id !== bookId);

    setBookList(filteredBookList);
  };

  console.log(bookList);
  // console.log(title);
  // console.log(author);

  return (
    <>
      <form onSubmit={bookSubmitHandler}>
        <h2>Cadastrar Livro</h2>

        {/* 'for' no JS é pra loop, 'htmlFor' é equivalente ao for do HTML */}
        <label htmlFor="bookTitle">Titulo</label>
        <input
          type="text"
          name="bookTitle"
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="bookAuthor">Autor</label>
        <input
          type="text"
          name="bookAuthor"
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <section>
        <h2>Lista de Livros</h2>

        <ul>
          {bookList.map((book) => {
            return (
              <li key={book.id}>
                <p>Titulo: {book.title}</p>
                <p>Autor: {book.author}</p>
                <button onClick={() => removeBook(book.id)}>Remover</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
