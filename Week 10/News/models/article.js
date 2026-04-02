class Article {
    constructor(
      id,
      category,
      headline,
      date,
      author,
      agency,
      description,
      imageUrl
    ) {
      this.id = id;
      this.category = category;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.description = description;
      this.imageUrl = imageUrl;
    }
  
    toString() {
      return `[${this.category}] "${this.headline}" by ${this.author} (${this.agency}) on ${this.date} - ${this.description} - Image: ${this.imageUrl}`;
    }
  }
  
  export default Article;
  