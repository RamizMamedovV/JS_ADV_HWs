class library {
    #books = [];

    constructor(books = []) {
        this.#books = books;
    };

    get allBooks() {
        return this.#books;
    };

    addBook(title) {
        if (this.checkStringTitle('Book title should be a non-empty string', title)
                || this.checkIncludeTitle('There is no such book in our library.')) {
            this.#books.push(title);
        }
    };

    removeBook(title) {
        if (this.checkStringTitle('Book title should be a non-empty string', title)
            || this.checkIncludeTitle('There is no such book in our library.')) {
            const bookIndex = this.#books.indexOf(title);
            this.#books.splice(bookIndex, 1);
        }
    }

    hasBook(title) {
        if (this.checkStringTitle('Book title should be a non-empty string', title)
            || this.checkIncludeTitle('There is no such book in our library.')) {

            return this.#books.includes(title)
        }
    }

    checkStringTitle(message, title) {
        if (typeof title !== 'string' || title === '') {
            throw new Error(message);
        } else {
            return true;
        }
    }

    checkIncludeTitle(message, title) {
        if (!this.#books.includes(title)) {
            throw new Error(message);
        } else {
            return true;
        }
    }
}


const arr = ['book1', 'book2', 'book3'];
const lib = new library(arr);
console.log(lib.allBooks);
lib.addBook('book4');
console.log(lib.allBooks);
lib.removeBook('book2');
console.log(lib.allBooks);
console.log(lib.hasBook('book1'));
