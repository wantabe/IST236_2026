class Destination {
    constructor (id, countryId, name, cost, foundedYear, rating, imageUrl) {
        this.id = id;
        this.countryId = countryId;
        this.name = name;
        this.cost = cost;
        this.foundedYear = foundedYear;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }

    toString() {
        return `${this.name} was founded in ${this.foundedYear}\nAverage Cost: ${this.cost}, Rating: ${this.rating}`;
    }
}

export default Destination;