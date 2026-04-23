import Book from "../models/book";

// id
// isbn
// genre
// title
// author
// rating
// desc
// imageurl
// status (reading, finished)

export const BOOKS = [
    // sci-fi
    new Book(
        1,
        "9780441172719",
        "sci-fi",
        "Dune",
        "Frank Herbert",
        5,
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to a dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of a precious resource in existence, only those who can conquer their own fear will survive.",
        "https://m.media-amazon.com/images/I/81DMp7F91LL._AC_UF1000,1000_QL80_.jpg",
        "finished"
    ),

    // horror
    new Book(
        6,
        "9780307743657",
        "horror",
        "The Shining",
        "Stephen King",
        4.5,
        "Jack Torrance takes a job as the off-season caretaker at the remote Overlook Hotel, hoping to reconnect with his family and write, but the hotel's sinister history and supernatural presence begin to corrupt him.",
        "https://m.media-amazon.com/images/I/91U7HNa2NQL._AC_UF1000,1000_QL80_.jpg",
        "reading"
    ),

    // fantasy
    new Book(
        11,
        "9780395974681",
        "fantasy",
        "The Lord of the Rings",
        "J. R. R. Tolkien",
        5,
        "The Lord of the Rings by J.R.R. Tolkien is an epic high-fantasy novel following the quest of the hobbit Frodo Baggins to destroy the 'One Ring,' a powerful artifact created by the Dark Lord Sauron to dominate Middle-earth. Alongside a diverse fellowship, Frodo faces immense danger, battling forces of evil while navigating themes of friendship, bravery, and the corrupting nature of power.",
        "https://images.squarespace-cdn.com/content/v1/523dee8ee4b0c59776ef8c3a/1633031901550-5100DGC2HEPEGRU0WQ56/Lord+of+the+rings+illustrated+by+tolkien.jpg?format=1000w",
        "finished"
    ),
];