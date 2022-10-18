class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }

  // Example of an instance method
  getInformation() {
    return `${this.title} by ${this.author}`;
  }

  // Static method that accepts a variable number
  // of Book instances and returns an array of their titles.
  // Notice the use of a rest parameter (...books)
  // to capture the passed parameters as an array of values.
  static getTitles(...books) {
    return books.map((book) => book.title).join(', ');
  }
}

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

// console.log(fellowshipOfTheRing.getTitles());
console.log(fellowshipOfTheRing instanceof Book)
if (fellowshipOfTheRing instanceof Book) {
  //do some stuff
}

const newBook = new Book('Song of Ice and Fire', 'Game of Thrones', 'Old Man Winter');
// console.log(newBook.getInformation());

console.log(`These are some of my favorite books: ${Book.getTitles(fellowshipOfTheRing, newBook)}`)



// class House {
//   constructor(style, price, year, size) {
//     this.style = style,
//       this.price = price,
//       this.year = year,
//       this.size = size
//     if (this.price < House.lowestPrice) {
//       House.lowestPrice = this.price
//     }
//   }
//   getInflatedPriceRant(inflationRate) {
//     return `A house like this used to cost ${this.price} in ${this.year}. Now it costs ${this.price * inflationRate}! At least it's ${this.size}...`
//   }
//   static lowestPrice = Infinity
//   static getStyles = (...houses) => {
//     const houseStyleList = houses.map(el => el.style)
//     const lastHome = houseStyleList.pop()
//     return `welll it looks like we got ${houseStyleList.join(', ')}, and finally ${lastHome}`
//   }
// }

// const dreamHome = new House('Brick', 100000, 1962, 'Yuuuuuge')
// const nightMareHome = new House('Plastic', 10, 1962, 'Tiny')
// const regularHome = new House('Wood', 50000, 1999, 'Medium')

// console.log(House.getStyles(dreamHome, nightMareHome, regularHome))
// console.log(regularHome.getInflatedPriceRant(15))
// console.log(House.lowestPrice)

// class Task {
//   static taskList = [];

//   static printTaskList() {
//     console.log(this.taskList);
//   }

//   static addTask(task) {
//     this.taskList.push(task);
//   }

//   constructor(taskDetail) {
//     this.taskDetail = taskDetail;
//     Task.addTask(this);
//   }
// }

// const laundry = new Task('laundry');
// // console.log(Task.printTaskList())
// class Fruit {
//   constructor(color, taste) {
//     this.color = color;
//     this.taste = taste;
//   }

//   eat() {
//     console.log(`You ate a ${this.constructor.name}.`);
//   }
// }

// class Apple extends Fruit {
//   constructor() {
//     super('red', 'sweet');
//   }
// }

// const orange = new Fruit('orange', 'tangy');
// const apple = new Apple();
// console.log(apple.color)
