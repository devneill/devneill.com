import React from "react";

import DATA from "./data";

import ImageGrid from "./ImageGrid";
import ImageFeature from "./ImageFeature";
import styles from "./ImageGallery.module.css";

function BookPage() {
  const [books, setBooks] = React.useState(DATA);

  function toggleBook(toggledBook) {
    const nextBooks = books.filter((book) => book.isbn !== toggledBook.isbn);

    nextBooks.push({
      ...toggledBook,
      selected: !toggledBook.selected,
    });

    setBooks(nextBooks);
  }

  const selectedBooks = books.filter((book) => book.selected);
  const unselectedBooks = books.filter((book) => !book.selected);

  return (
    <div className={styles.wrapper}>
      <ImageGrid
        className={styles.grid}
        books={unselectedBooks}
        handleSelectBook={toggleBook}
      />
      {selectedBooks.length > 0 && (
        <ImageFeature books={selectedBooks} handleRemoveBook={toggleBook} />
      )}
    </div>
  );
}

export default BookPage;
