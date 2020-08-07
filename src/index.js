import "./sass/style.scss";

("use strict");

// slider
const slides = document.querySelectorAll("[ data-slides ]");
const prevStep = document.querySelector("[ data-prev ]");
const nextStep = document.querySelector("[ data-next ]");
const dots = document.querySelectorAll("[ data-dots ]");

prevStep.addEventListener("click", handlePrevBtnClick);
nextStep.addEventListener("click", handleNextBtnClick);

// class Slider {
//   constructor(options) {
//     this.slideArray = options.slideArr;
//     this.dotArray = options.dotArr;
//   }
//   findCurrItem() {
//     return this.slideArray.find((slide) => slide.classList.contains("current"));
//     // return this.slideArray.find((slide) => slide.hasAttribute("data-active"));
//   }
//   findCurrIdx(currentItem) {
//     return this.slideArray.indexOf(currentItem);
//   }

//   addActiveClass(currentIdx) {
//     this.dotArray[currentIdx].classList.add("active");
//   }
//   removeItem(currentIdx) {
//     this.slideArray[currentIdx].classList.remove("current");
//     this.dotArray[currentIdx].classList.remove("active");
//   }
//   addItem(currentIdx) {
//     this.slideArray[currentIdx].classList.add("current");
//     this.dotArray[currentIdx].classList.add("active");
//   }

//   showSlides(currentIdx) {
//     const id = setInterval(() => {
//       this.removeItem(currentIdx);
//       currentIdx++;
//       if (currentIdx > this.slideArray.length - 1) {
//         currentIdx = 0;
//       }
//       this.addItem(currentIdx);
//     }, 3000);
//     return id;
//   }
// }

// const slider = new Slider({
//   slideArr: [...slides],
//   dotArr: [...dots],
// });

// const currItem = slider.findCurrItem();
// let currIdx = slider.findCurrIdx(currItem);
// slider.addActiveClass(currIdx);
// const intervalId = slider.showSlides(currIdx);

// functions

// function handlePrevBtnClick() {
//   clearInterval(intervalId);
//   const item = slider.findCurrItem();
//   let idx = slider.findCurrIdx(item);
//   slider.removeItem(idx);
//   idx--;
//   if (idx < 0) {
//     idx = slider.slideArray.length - 1;
//   }
//   slider.addItem(idx);
// }

// function handleNextBtnClick() {
//   clearInterval(intervalId);
//   const item = slider.findCurrItem();
//   let idx = slider.findCurrIdx(item);
//   slider.removeItem(idx);
//   idx++;
//   if (idx > slider.slideArray.length - 1) {
//     idx = 0;
//   }
//   slider.addItem(idx);
// }

//================================
class Slider {
  constructor(options) {
    this.slideArray = options.slideArr;
    this.dotArray = options.dotArr;
    this.currentIdx = options.currentIdx;
  }
  hide() {
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
    this.slideArray.forEach((slide) => {
      if (slide !== this.slideArray[this.currentIdx]) {
        slide.style.display = "none";
      }
    });
  }
  showNextSlide() {
    this.dotArray[this.currentIdx].classList.remove("active");
    this.slideArray.forEach((slide) => (slide.style.display = "none"));
    this.currentIdx++;
    if (this.currentIdx > this.slideArray.length - 1) {
      this.currentIdx = 0;
    }
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
  }
  showPrevSlide() {
    this.dotArray[this.currentIdx].classList.remove("active");
    this.slideArray.forEach((slide) => (slide.style.display = "none"));
    this.currentIdx--;
    if (this.currentIdx < 0) {
      this.currentIdx = slider.slideArray.length - 1;
    }
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
  }
  showSlides() {
    return setInterval(() => {
      this.showNextSlide();
    }, 3000);
  }
}

const slider = new Slider({
  slideArr: [...slides],
  dotArr: [...dots],
  currentIdx: 0,
});
slider.hide();
const intervalId = slider.showSlides();

function handlePrevBtnClick() {
  clearInterval(intervalId);
  slider.showPrevSlide();
}

function handleNextBtnClick() {
  clearInterval(intervalId);
  slider.showNextSlide();
}

//================================

// distructure object, arrays the same, only in []

const student = {
  name: "Kally",
  age: 24,
  projects: {
    dicegame: "lalala",
  },
};

const {
  name,
  age,
  projects: { dicegame },
} = student;
// console.log(name);
// console.log(age);
// console.log(dicegame);

function addressMaker({ city, state }) {
  const newAdress = { city, state, country: "United States" };
  return newAdress;
}
// const x = addressMaker({ city: "Austin", state: "Texas" });
// console.log(x);

const students = [
  { name: "Mark", city: "New York" },
  { name: "Den", city: "Kiev" },
  { name: "Alex", city: "Dnepr" },
];

for (const student of students) {
  const { name, city } = student;
  console.log(`${name} lives in ${city}`);
}

let example = "Larysa";

// complites the string to a value 10 letters and include empty spaces if it is several words
// console.log(example.padStart(10, "a"));
// console.log(example.padEnd(10, "b"));

// classes
class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  getPlayerInfo() {
    console.log(`${this.name} was born in ${this.country}`);
  }
}

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }
  getPlayerAge() {
    console.log(
      `${this.name} is ${this.age} years old and knows how to play tennis`
    );
  }
}

const ronaldo = new TennisPlayer("Ronaldo", "Spain", 38);

// ronaldo.getPlayerAge();
// ronaldo.getPlayerInfo();

// promises

const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("sorry");
      } else {
        resolve("thank you");
      }
    }, 3000);
  });
};

// buyFlightTicket()
//   .then((success) => console.log(success))
//   .catch((error) => console.log(error));

const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("sorry, the user not found");
      } else {
        resolve("user is Den, email is Den@co.il");
      }
    }, 3000);
  });
};

getUserData();
// .then((success) => console.log(success))
// .catch((error) => console.log(error));

// fetch

// fetch("https://jsonplaceholder.typicode.com/comments/1")
//   .then((res) => {
//     if (res.ok) return res.json();
//     throw new Error(`Error while fetching ${res.statusText}`);
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    postId: 500,
    name: "Den",
    email: "Den@co.il",
  }),
  // headers: { "Content-type": "application/json; charset=UTF-8" },
}).then((res) => {
  if (res.ok) return res.json();
  throw new Error(`Error while fetching ${res.statusText}`);
});
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// async await

const apiUrl = "https://jsonplaceholder.typicode.com/comments/1";

async function getJoke() {
  const res = await fetch(apiUrl).then((res) => {
    if (res.ok) return res.json();
    throw new Error(`Error while fetching ${res.statusText}`);
  });
  // const data = await res.json();
  console.log(res);
}

getJoke();

// set

const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2]);
exampleSet.add(5).add(9);
exampleSet.delete(5); // return boolean true ore false
console.log(exampleSet.size);
console.log(exampleSet.has(1));
exampleSet.clear();
console.log(exampleSet.size);

// higher oder arrow functions (map, filter and reduce)
// higher oder function takes another fanctions for arguments

/*
To collect variables into array use (...args)
*/
let total = 0;
function getSum(...args) {
  total = args.reduce((arg, counter) => arg + counter, 0);
  return total;
}

getSum(2, 4, 7);

console.log(total);

// destructuring object

const voxel = {
  x: 3,
  y: 4.5,
  z: 8,
};

const { x: a, y: b, z: c } = voxel;
console.log(a, b, c);

// in arrays
const array = [1, 2, 3, 4];
const [one, , , two] = array;

console.log(one, two);

// return the array with first 2 elements missing

const list = ["potato", "onians", "tomato", "cucamber"];

function removeFromList(array) {
  const [, , ...newList] = array;
  return newList;
}

console.log(removeFromList(list));

// shotter way to wright function that returns an object

// const createPerson = (name, age, gender) => {
//   const person = {
//     name,
//     age,
//     gender,
//   };
//   return person;
// };

const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("den", 35, "male"));

//difference bitween var ES5 and let&const ES6
var string = "yes";
var string = "no"; // can declear twice and the will be no in console
console.log(string);

function checkScope() {
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("block scope", i); //block scope
  }
  console.log("function scope", i); //block scope and not function scope
}
/*
if comment  var i = "function scope"; in function scope console we
still will see block scope
*/
checkScope();

// for loop in ES6
/*
for (let car of cars) {
  console.log(car);
}
*/

//toFixed(2) method that returns 2 numbers after integer
console.log(+(0.4 + 0.2).toFixed(2)); // but it is string, + in the beggining convert to a number

/*
BigInt новый тип данных, который ввели, чтобы работать с числами,
большими, чем Number.MAX_SAFE_INTEGER
К этому числу дописываем числа и n в конце и число становится BigInt, который 
работает с другими BigInt. Здесь в вэбпак это не поддерживается и нельзя
вывести в консоль
*/
// console.log(9007199254740991);

// Math
console.log(Math.sqrt(25)); //квадратный корень
// вычисления возведение в степень
const x = Math.pow(2, 4);
console.log(x);
//брать модуль числа- отсекает негативную часть и берет модуль
console.log(Math.abs(-42));
//взять максимальное число или минимальное число
console.log(Math.max(2, 6, 44));
console.log(Math.min(2, 6, 44));
//округляет в меньшую сторону
console.log(Math.floor(4.9));
console.log(Math.trunc(4.9));
//или в большую
console.log(Math.ceil(4.9));
console.log(Math.round(4.9));
Math.random();

function getNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getNumber(3, 8));

//strings
const firstName = "Larysa";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(3));
console.log(firstName.indexOf("ry"));
console.log(firstName.startsWith("L"));
console.log(firstName.endsWith("y"));

//new in functions

function logPerson(s, name, age) {
  console.log(s);
  console.log(name);
  console.log(age);
  //мы можем теперь валидировать
  if (age > 40) {
    age = "not yet";
  }
  return `${s[0]} ${name}${s[1]} ${age}`;
}
const personName = "Larysa";
const personAge = 35;
const personName2 = "Den";
const personAge2 = 42;

const output = logPerson`name: ${personName}, age: ${personAge}`;
//эта строка в параметре-мфссиве s разбивается на 0 элем массива name: , 1 - , age:
const output2 = logPerson`name: ${personName2}, age: ${personAge2}`;
console.log(output);
console.log(output2);

// objects
/*
перебор объектов в цикле может имеет подвох, так как могут перебираться
не только ключи самого объекта, но и его предка object
поэтому всегда нужно писать проверку
В более современных методах Object.keys & Object.values эти проверки делать не 
надо, так как они перебирают только собственные свойства объекта
*/
const person = {
  name: "Ben",
  age: 26,
};
for (let key in person) {
  if (person.hasOwnProperty(key)) console.log(key); // key
  console.log(person[key]); //value
}
/*
Создаем в объекте метод, используя контекст, ключнвое слово this- где this и есть
сам объект
*/

const creature = {
  logKeys() {
    console.info(Object.keys(this));
    console.log(this);
  },
  logWithParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("--------top---------");
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`${key} : ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("--------------------");
      }
    });
    if (bottom) {
      console.log("--------bottom---------");
    }
  },
};

// creature.logKeys(); // методом Object.keys мы пробегаем по самому creature

// если в метод передать другой объект, то все равно мы будем пробегать по creature
// creature.logKeys(person);
// мы теперь можем пользоваться этим методом, чтобы выводить в консоль любой объект

// метод bind привязывает контекст объекта, который мы передаем навсегда и возвращает
// новую функцию, после переданного объекта, принимает неограниченное кол-во параметров через запятую

// const newCreature = creature.logKeys.bind(person);
// newCreature();

// метод call привязывает переданный объект и сразу вызывает функцию, в контексте этого объекта
creature.logKeys.call(person);

// если передавать параметры в метод call

creature.logWithParams.call(person, true, true, true);
// параметры передаются через запятую после объекта. Метод call принимает неограниченное
//кол-во параметров, в зависимости, сколько сама функция принимает

// Apply - принимает только 2 параметра: первый- объект, второй массив из тех
// аргументов, которые нужны для функции

creature.logWithParams.apply(person, [true, true, true]);

// DOM console.dir(document.querySelector('h1'))
console.dir(prevStep.textContent);

// challenge
// создать функцию bind, при вызове которой она выводит в консоль данные объекта
function logPersons() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {
  name: "Den",
  age: 26,
  job: "frontend",
  logPersons: logPersons,
};
const person2 = {
  name: "Ben",
  age: 36,
  job: "full stack",
};

bind(person1, logPersons)();
bind(person2, logPersons)();

function bind(obj, fn) {
  return function (...args) {
    fn.apply(obj, args);
  };
}
//можно и call, но apply позволит в будущем передать любые аргументы
/*
Class 
//static properties - доступны только у самого класса Animal.type
static type = 'ANIMAL'

class Animal {
  constructor(options) {
    this.name = options.name,
    this.age = options.age
    this.tail  = options.tail
  }
  voice() {
    console.log('wow')
  }
}

const cow = new Animal({
  name: 'Cow',
  age: 3,
  tail: true
})

классы удобны для наследования. Доступны методы родительского класса - voice()
class Cat extends Animal {
  constructor(options) {
    super(options)
    this.color = options.color
  }
  В классе Cat можно переписывать родительские методы
voice() {
    console.log('I am cat')
    можно вызвать родительский метод
   super.voice()
  }
getters and setters

get ageInfo() {
  return this.age * 4
}
set ageInfo(newAge) {
  this.age = newAge
}
}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  tail: true,
  color: 'black'
})
cat.getinfo - не метод, просто поле
*/

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector); // приватная переменная
  }
  hide() {
    this.$el.style.display = "none";
  }
  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.backgroundColor = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});
box1.hide();
box1.show();

class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = "50%";
  }
}

const circle = new Circle({
  selector: "#circle",
  size: 90,
  color: "green",
});

// async await

const delay = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
};

// delay(2000).then(() => console.log("after 2 sec"));

const url = "https://jsonplaceholder.typicode.com/todos/";

// function fetchTodos() {
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }
// fetchTodos()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

//создадим одну функцию, которая будет делать то же самое, но с применением async await

async function fetchAsyncTodos() {
  try {
    await delay(2000); // мы не перейдем к след строчке, пока данный промис не выполнится Эту
    //функцию и выполняет оператор await
    // в fetch(url) мы получаем респонс, поэтому записываем его в переменную
    const response = await fetch(url); //результат работы оператора await
    //дальше нам нужно выполнить еще один промис, который возвращает метод респонз
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("выполнится в любом случае, даже если произошла ошибка");
  }
}
//функция, которая является асинхронной, всегда возвращает промис. Мы можем использовать метод then
fetchAsyncTodos().then((dataInfo) => console.log(dataInfo));

// Proxi - ловушки для объектов. Организуем ловушки и внутри них можем переписывать
//базовый функционал
const larysa = {
  name: "Larysa",
  age: 44,
  job: "frontend",
};

const proxyLarysa = new Proxy(larysa, {
  //ловушка на метод гет
  get(target, prop) {
    // console.log("target", target); // наш объект
    // console.log("prop", prop); //название поля, к которому обращаемся
    console.log(`getting prop:${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      return (target[prop] = value);
    } else {
      throw new Error(`There is not ${prop} in ${target}`);
    }
  },
  //метод has возвращает true ore false и говорит, есть ли такое поле в объекте
  //наш объект может иметь только заданные 3 поля
  has(target, prop) {
    return ["name", "age", "job"].includes(prop); // возвращает true ore false
  },

  //удалять свойство из объета
  deleteProperty(target, prop) {
    delete target[prop];
    return true;
  },
});
console.log(proxyLarysa.name);
proxyLarysa.age = 40;
console.log(proxyLarysa);
console.log("name" in proxyLarysa); //проверяем метод has
delete proxyLarysa.age;
console.log(proxyLarysa);

//Proxy functions
const log = (text) => console.log(`Log: ${text}`);
log("Hello");

const fnproxy = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log("calling fn");
    //(target - сама функция, thisArg- ее контекст, args-массив аргументов, кот мы передали
    //и тут мы можем преобразовывать, делать любые действия
    // return target.apply(thisArg, args).toUpperCase();- не работает из-за вэбпака скорее всего
  },
});
fnproxy("text");

// proxi классы и ключевое слово new

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const Humanproxy = new Proxy(Human, {
  //вторым параметром передаем объект и список хэндлеров
  construct(target, args) {
    console.log("construct ...");
    //перехватываем метод конструктора и возвращаем какую-то логику
    //target является экземпляром класса Human
    //...args это name, age
    return new Proxy(target(...args), {
      get(t, prop) {
        console.log(`getting ${prop}`);
        return t[prop];
      },
    });
  },
});
// const p = new Humanproxy("Denis", 20);
// console.log(p.name); - не работает

// генераторы

function* strGenerator() {
  //благодаря символу * есть доступ к спец ключевому слову внутри функции yield
  yield "h";
  yield "e";
  yield "l";
  yield "l";
  yield "o";
}

const str = strGenerator(); //это функция генератор, у кот есть метод next
console.log(str.next()); // получаем объект и один из ключей -  "h";
//если снова вызвать функцию  next, то получим объект со след буквой
console.log(str.next());
//если сразу обратиться к значению str.next().value
console.log(str.next());
console.log(str.next());
console.log(str.next());
//когда закончились yield и мы вызываем, то получаем value:undefind,done:true-
//true означает, что генератор закончил цикл последов. операций и больше ничего в нем нет
console.log(str.next());

function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i; //мы в цикле, но js не выдает сразу все значения, а по вызову
  }
}
const num = numberGen(7);
console.log(num.next()); //0
console.log(num.next()); //1
//в этом и заключается смысл генераторов - порционно выдавать значения, пока done:true
//что значит, что больше нет значений

//Пример логики генераторов

// const iterator = {
//   gen(n = 10) {
//     let i = 0;
//     //чтобы возвращало все значения от 0 до 10 нужно вернуть next()
//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };
// const itr = iterator.gen(5);
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
//перепишем ее

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
} // в генераторе по умолчанию определен symbol.iterator, кот позволяет итерировать в цикле for of
// дальше данный генератор вызвать в цикле for of
for (let num of iter(6)) {
  console.log(num);
}

//Objects.entries(obj) - reverse Object.fromEntries(obj)

//MAP - Карты

const obj = {
  name: "Larysa",
  age: 44,
  ocupation: "frontend",
};
const entries = Object.entries(obj);

const map = new Map(entries);
console.log(map); // конструкция очень похожая на объект

//метод get()
console.log(map.get("ocupation")); // = obj.ocupation
// очень похоже на объект, но есть отличия - вызываем значения методами и в качестве
//ключей можем указывать любые типы данных и они будут являться ключами

//создадим новое значение
map
  .set("newField", 42) // ключ - строчка
  .set(obj, "this is object") // ключ- объект
  .set(NaN, "is it NaN?");
// console.log(map);

//Delete field - returns true(deleted) ore false(not deleted becouse there is no such field)
map.delete("ocupation");
console.log(map.has("ocupation"));

//сколько ключей в карте
console.log(map.size);
//очистить карту
// map.clear();
// console.log(map.size);
// у карты есть символ-итератор, кот позволяет ее работать в цикле for of

// for (let entry of map) {
//   console.log(entry);
// }

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// итерация по значениям

// for (let val of map.values()) {
//   console.log(val);
// }
// итерация по ключам
// for (let key of map.keys()) {
//   console.log(key);
// }
// цикл forEach позволяет пробегать по всем его значениям
// map.forEach((val, key, obj) => {
//   console.log(val, key);
// });

//из карты можно быстро сделать массивы несколькими способами

// const mapArray = Array.from(map)
const mapArray = [...map];
console.log(mapArray);
//карта - это усложненный объект- мы можем сделать объект из этой карты

const mapObj = Object.fromEntries(map.entries());

console.log(mapObj); // но вместо ключа-объекта мы получаем [object object]
//так как в обычных объектах ключами объекты не могут быть и поэтому js приводит
//объект к строке методам toString() и получается "[object object]"

//EXAMPLE MAP USAGE

const users = [{ name: "Denis" }, { name: "Daryna" }, { name: "Alex" }];
//нужно для каждого пользователя записывать время, когда он посещал сайт или читал статью

const visitsMap = new Map();
visitsMap
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[1], new Date(new Date().getTime() + 5000 * 60));

//создаю функцию и с помощью карты достаю его время посещения сайта

function lastVisit(user) {
  return visitsMap.get(user);
}
console.log(lastVisit(users[1]));

//SET
const set = new Set([1, 2, 3, 3, 4, 5, 5, 6]);
console.log(set); // возвращает значения в единственном экземпляре

//методы
// set.add(10).add(20).add(30).add(20);
// console.log(set);
// console.log(set.has(30));
// console.log(set.size);
// set.delete(30);
// console.log(set);
// // set.clear()
// console.log(set.values());
// console.log(set.keys()); // эти два метода выдают одно и то же, значения массива

//можно пробегать циклом for of

//
//EXAMPLES
function uniqueValues(array) {
  return [...new Set(array)];
}
uniqueValues([1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]);

//Weakmap
// то же самое6 что и map, но меньше методов,если какое-то значение убирается сборщиком мусора- он автоматически
//удаляется из Weakmap
//с его помощью избегаем утечек данных в js

let weakObj = {
  name: "Weakmap",
};
// const weakArray = [weakObj];
// weakObj = null; // будет null в консоли,но в массиве он останется
// console.log(weakObj);
//но в картах, где ключи могут быть объектами, можно стереть их значение и будет утечка памяти
//чтобы этого не было существует Weakmap
//В Weakmap ключами могут быть только объекты

const newMap = new WeakMap([[weakObj, "obj data"]]);
console.log(newMap);
// methods get,set,delete,has, нет метода size
console.log(newMap.has(weakObj));
console.log(newMap.get(weakObj));
weakObj = null;
console.log(newMap.get(weakObj)); //undefind
//EXAMPLES

//нужно создать функцию, которая в кэш записывает пользователей

const cashe = new WeakMap();
function casheUser(user) {
  if (!cashe.has(user)) {
    cashe.set(user, Date.now());
  }
  return cashe.get(user);
}

let lena = {
  name: "Lena",
};

let alex = {
  name: "Alex",
};
casheUser(lena);
casheUser(alex);
console.log(cashe);
lena = null;
console.log(cashe); // почистило и лены уже нет и память очищена, хотя напрямую я не трогала cashe

//Weakset
// то же самое6 что и set, но меньше методов
//значения только объекты и если какой-то объект убирается сборщиком мусора- он автоматически
//удаляется из Weakset

const users1 = [{ name: "Den" }, { name: "Ben" }, { name: "Ashray" }];

const visit = new WeakSet();
visit.add(users1[0]).add(users1[1]);
console.log(visit);
//можно пользоваться только методом has
users1.splice(1, 1);
console.log(visit.has(users1[0]));
console.log(visit.has(users1[1])); // автоматом он был удален из Weakset

//fetch

const requestUrl = "https://jsonplaceholder.typicode.com/users";

const body = {
  name: "Larysa",
  age: 44,
};
function sendRequest(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  // return fetch(url, {
  //   method: method,
  //   body: JSON.stringify(body),
  //   headers: headers,
  // }).then((response) => response.json()); //по умолчанию выполняется метод гет

  if (body) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(error.statusText);
    });
  } else {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(error.statusText);
    });
  }
}
// sendRequest("GET", requestUrl, null)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

sendRequest("POST", requestUrl, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Local storage работает только со стороками!!!
//Applocation=> storage => localStorage
//localStorage.setItem('key', 'value')
//localStorage.getItem('key')
//localStorage.removeItem('key')
//localStorage.clear() - remove everything
//чем отличается localStorage от cokees - он намного больше(localStorage размер 5 мегабайт)
//cokees улетают вместе с запросами на сервер и сервер может их распарсить. localStorage - нет

//OBJECTS ES6

const city = "city";
const job = "frontend";

const adress = {
  [city]: "Kiev",
  job,
  getAddress() {
    console.log(`I am ${this.job} dev`, this);
  },
  toString() {
    return Object.keys(this)
      .filter((key) => key !== "toString" && key !== "getAddress")
      .map((key) => this[key])
      .join(" ");
  },
};
// console.log(adress);
console.log(adress.toString()); // выводятся функции, которых быть не должно
//для этого добавляем метод filter

//methods
const first = { a: 1 };
const second = { b: 2 };

//сравнить на эквивалентность
// console.log(Object.is(20, 20)); //true
// console.log(Object.is(10, 20)); //false

//
// console.log(Object.assign({}, first, second)); // new object
// console.log(first, second); // haven't changed

function add(...args) {
  return args.reduce((acc, arg) => acc + arg, 0);
}
console.log(add(1, 3, 4));

//SIMBOL абсолютно уникальные
const symbol = Symbol("demo");
const anotherSimbol = Symbol("demo");

console.log(symbol === anotherSimbol); // false
//их предназначение - динамические ключи в объектах

const objec = {
  name: "Denis",
  [symbol]: "meta",
};
// console.log(objec[symbol]); //meta
//эти поля скрыты, то есть если пробежаться циклом по объекту,который бежит и по собсьвенным
//полям и по прототипу
for (let key in objec) {
  console.log(key); // symbol not visible in the loop
}
//символы нужны для задания мета данных и для того, чтобы их использовать

//Interview

/*
типы данных
null, underfind, boolean, number, string, object, symbol
все примитивные, кроме object
*/

//FALSY: '', 0, underfind, null, NaN, false
//пустой объект, массив или функция выдают по приведению типов true

// == vs ===
// == -сравнивает с приведением типов, === - сравнивает без приведения типов

// console.log(2 == "2"); // true
// console.log(2 === "2"); //false
// console.log(undefined == null); //true
// console.log(undefined === null); //false
console.log("0" == false); //true
console.log("0" == 0); //true
console.log(false == ""); //true
console.log(false == []); //true
console.log(false == {}); //false
console.log("" == 0); //true
console.log("" == []); //true
console.log("" == {}); //false
console.log(0 == []); //true
console.log(0 == {}); //false
console.log(0 == null); //false

//HOISTING

//let & const не поднимаются

// console.log(i); //underfind, not an error,
// var i = 42;
// console.log(y); // error
// const y = 40;

//function expression and function declaration

//function declaration
// console.log(square(25)); // можем вызывать до того, как мы их объявили
// function square(num) {
//   return num ** 2; // возвести во 2 степень
// }
//function expression - error можно использовать только после объявления
// const square = function (num) {
//   return num ** 2;
// };

//IIfe immediate invoked function expression - моментально выполняется
//используются для создания локального scope

function addFive(num) {
  return function (num2) {
    return num + num2;
  };
}

const addAll = addFive(5);

console.log(addAll(2));
