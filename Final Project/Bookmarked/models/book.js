class Book {
    constructor(
        id,
        isbn,
        genre,
        title,
        author,
        rating,
        description,
        imageUrl,
        pageCount
    ) {
        this.id = id;
        this.isbn = isbn;
        this.genre = genre;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.description = description;
        this.imageUrl = imageUrl;
        this.pageCount = pageCount;
    }

    toString() {
        return `[${this.genre}] "${this.title}" by ${this.author}. ${this.rating} / 5 - ${this.description} - Image: ${this.imageUrl}`;
    }
}

export default Book;