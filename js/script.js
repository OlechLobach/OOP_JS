class Figure {
  static #counter = 0; // Статичний параметр для збереження кількості об'єктів

  #name;
  constructor(name, color) {
    Figure.counter++; // Збільшуємо лічильник об'єктів
    this.#name = name; // Ім'я фігури
    this.color = color; // Колір фігури
  }

  get figureName() {
    return this.#name; // Метод для отримання назви фігури
  }

  static get counter() {
    return this.#counter; // Статичний метод для отримання кількості об'єктів
  }

  static set counter(value) {
    this.#counter = value; // Статичний метод для встановлення кількості об'єктів
  }

  area() {
    throw new Error("Метод area() має бути реалізований в підкласах."); // Абстрактний метод
  }

  perimeter() {
    throw new Error("Метод perimeter() має бути реалізований в підкласах."); // Абстрактний метод
  }

  static compareArea(figure1, figure2) {
    return figure1.area() - figure2.area(); // Статичний метод для порівняння площ
  }

  static comparePerimeter(figure1, figure2) {
    return figure1.perimeter() - figure2.perimeter(); // Статичний метод для порівняння периметрів
  }

  logInfo() {
    console.log(`${this.figureName} - Color: ${this.color}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`); // Метод для виведення інформації
  }
}

class Square extends Figure {
  constructor(name, color, side) {
    super(name, color);
    this.side = side; // Сторона квадрата
  }

  area() {
    return this.side ** 2; // Обчислення площі
  }

  perimeter() {
    return this.side * 4; // Обчислення периметра
  }
}

class Rectangle extends Figure {
  constructor(name, color, width, height) {
    super(name, color);
    this.width = width; // Ширина прямокутника
    this.height = height; // Висота прямокутника
  }

  area() {
    return this.width * this.height; // Обчислення площі
  }

  perimeter() {
    return 2 * (this.width + this.height); // Обчислення периметра
  }
}

class Triangle extends Figure {
  constructor(name, color, base, height) {
    super(name, color);
    this.base = base; // Основа трикутника
    this.height = height; // Висота трикутника
  }

  area() {
    return (this.base * this.height) / 2; // Обчислення площі
  }

  perimeter() {
    // Припустимо, що трикутник рівнобедрений
    return this.base + 2 * Math.sqrt((this.base ** 2) / 4 + this.height ** 2); // Обчислення периметра
  }
}

// Створення масиву з різними фігурами
const figures = [
  new Square("Square", "red", 10),
  new Rectangle("Rectangle", "blue", 5, 15),
  new Triangle("Triangle", "green", 6, 8),
];

// Виведення інформації про кожну фігуру
figures.forEach(figure => figure.logInfo());

class Product {
  static #counter = 0; // Статичний параметр для збереження кількості товарів

  constructor(name, price, quantity) {
    this.name = name; // Назва товару
    this.price = price; // Ціна товару
    this.quantity = quantity; // Кількість одиниць товару
    Product.#counter++; // Збільшуємо лічильник товарів
  }

  static get counter() {
    return this.#counter; // Статичний метод для отримання кількості товарів
  }

  logInfo() {
    console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
  }

  static comparePrice(product1, product2) {
    return product1.price - product2.price; // Статичний метод для порівняння цін
  }

  static compareQuantity(product1, product2) {
    return product1.quantity - product2.quantity; // Статичний метод для порівняння кількостей
  }
}

// Класи-спадкоємці
class Book extends Product {
  constructor(name, price, quantity, author) {
    super(name, price, quantity);
    this.author = author; // Автор книги
  }

  logInfo() {
    console.log(`Book: ${this.name}, Author: ${this.author}, Price: ${this.price}, Quantity: ${this.quantity}`);
  }
}

class Phone extends Product {
  constructor(name, price, quantity, brand) {
    super(name, price, quantity);
    this.brand = brand; // Бренд телефону
  }

  logInfo() {
    console.log(`Phone: ${this.name}, Brand: ${this.brand}, Price: ${this.price}, Quantity: ${this.quantity}`);
  }
}

class Refrigerator extends Product {
  constructor(name, price, quantity, capacity) {
    super(name, price, quantity);
    this.capacity = capacity; // Ємність холодильника
  }

  logInfo() {
    console.log(`Refrigerator: ${this.name}, Capacity: ${this.capacity}, Price: ${this.price}, Quantity: ${this.quantity}`);
  }
}

// Створення масиву з товарами
const products = [
  new Book("The Great Gatsby", 10, 100, "F. Scott Fitzgerald"),
  new Phone("iPhone 13", 999, 50, "Apple"),
  new Refrigerator("Samsung Fridge", 700, 30, "300L"),
];

// Виведення інформації про кожен товар
products.forEach(product => product.logInfo());

class News {
  constructor(title, content, tags, publicationDate) {
    this.title = title; // Заголовок новини
    this.content = content; // Текст новини
    this.tags = tags; // Масив тегів
    this.publicationDate = new Date(publicationDate); // Дата публікації
  }

  print() {
    const currentDate = new Date();
    const timeDiff = currentDate - this.publicationDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Різниця в днях

    let dateString;
    if (daysDiff < 1) {
      dateString = "сьогодні";
    } else if (daysDiff < 7) {
      dateString = `${daysDiff} днів тому`;
    } else {
      dateString = this.publicationDate.toLocaleDateString('uk-UA'); // Формат «день.місяць.рік»
    }

    console.log(`Title: ${this.title}, Date: ${dateString}, Tags: ${this.tags.join(", ")}`);
  }
}

// Приклад використання
const newsArticle = new News("New React Features", "React has introduced new features...", ["React", "JavaScript"], "2024-09-15");
newsArticle.print();

class NewsFeed {
  constructor() {
    this.newsArray = []; // Масив новин
  }

  get newsCount() {
    return this.newsArray.length; // Кількість новин
  }

  addNews(news) {
    this.newsArray.push(news); // Додавання новини
  }

  removeNews(index) {
    if (index >= 0 && index < this.newsArray.length) {
      this.newsArray.splice(index, 1); // Видалення новини
    }
  }

  displayAllNews() {
    this.newsArray.forEach(news => news.print()); // Виведення всіх новин
  }

  sortByDate() {
    this.newsArray.sort((a, b) => b.publicationDate - a.publicationDate); // Сортування новин за датою
  }

  findByTag(tag) {
    return this.newsArray.filter(news => news.tags.includes(tag)); // Пошук новин за тегом
  }
}

// Приклад використання
const newsFeed = new NewsFeed();
newsFeed.addNews(newsArticle); // Додаємо новину з Task 3
newsFeed.addNews(new News("JavaScript Update", "New ES features...", ["JavaScript", "Updates"], "2024-09-10"));

console.log(`Total news: ${newsFeed.newsCount}`);
newsFeed.displayAllNews(); // Виводимо всі новини

class Car {
  constructor(brand, model, year, enginePower) {
    this.brand = brand; // Марка автомобіля
    this.model = model; // Модель автомобіля
    this.year = year; // Рік випуску
    this.enginePower = enginePower; // Потужність двигуна
  }

  logInfo() {
    console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, Engine Power: ${this.enginePower} HP`);
  }
}

// Класи-спадкоємці
class Sedan extends Car {
  logInfo() {
    console.log(`Sedan: ${this.brand} ${this.model}, Year: ${this.year}, Engine Power: ${this.enginePower} HP`);
  }
}

class Truck extends Car {
  logInfo() {
    console.log(`Truck: ${this.brand} ${this.model}, Year: ${this.year}, Engine Power: ${this.enginePower} HP`);
  }
}

class Bus extends Car {
  logInfo() {
    console.log(`Bus: ${this.brand} ${this.model}, Year: ${this.year}, Engine Power: ${this.enginePower} HP`);
  }
}

// Створення масиву з автомобілями
const cars = [
  new Sedan("Toyota", "Camry", 2020, 203),
  new Truck("Ford", "F-150", 2021, 290),
  new Bus("Mercedes-Benz", "Sprinter", 2019, 190),
];

// Виведення інформації про кожен автомобіль
cars.forEach(car => car.logInfo());
