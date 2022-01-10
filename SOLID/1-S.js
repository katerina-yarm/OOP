//class should only have one responsibility
//it is not correct to put printTextToConsole() in class Book
//we should implement a separate class that deals only with printing our texts

class BookPrinter {
  constructor(text) {
    this.text = text
  }

  printTextToConsole() {
    console.log(this.text)
  }
}

class Book extends BookPrinter {
  constructor(options) {
    super(options.text)
    this.name = options.name
    this.author = options.author
    this.pages = options.pages
  }

  replaceWordInText(word, newWord) {
    console.log(this.text.split(word).join(newWord))
  }

  isWordInText(word) {
    const findWord = this.text.split(' ').find((w) => w === word)
    const result = findWord ? true : false
    console.log(result)
  }
}

const book = new Book({
  name: 'The philosophy of Java',
  author: 'Bruce Eckel',
  pages: 607,
  text: 'Java is a programming language used by millions of developers worldwide.'
})

book.printTextToConsole()
book.isWordInText('language')
book.replaceWordInText('Java', 'JavaScript')
