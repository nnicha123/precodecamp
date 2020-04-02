let myBook = {
    title: '1985',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard INN',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);
console.log(bookSummary.pageCountSummary);

let farenfunc = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
    return {
        fahrenheit: `${fahrenheit}`,
        celsius: `${celsius}`,
        kelvin: `${kelvin}`
    }
}
let fahrenheit = 32;
let celsiusSummary = farenfunc(fahrenheit);
console.log(celsiusSummary.celsius);