export const BookSection = () => {
  const books = [
    {
      title: "Flask: O Microframework Python",
      author: "Rachel Adams",
      pages: 150,
    },
    {
      title: "WordPress: O CMS Mais Popular do Mundo",
      author: "Laura Miller",
      pages: 160,
    },
    {
      title: "Django: O Framework Python Completo",
      author: "Iris Wang",
      pages: 270,
    },
    {
      title: "Angular: O Framework JavaScript Poderoso",
      author: "James Smith",
      pages: 230,
    },
    {
      title: "TypeScript: O JavaScript Tipado",
      author: "Zoe Taylor",
      pages: 190,
    },
  ];

  return (
    <section>
      <h1>Livros</h1>

      <ul>
        {books.map((book, index) => {
          return (
            <li key={index} className="book-item">
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
              <span>Páginas: {book.pages}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
