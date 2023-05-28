// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

//--------------------------------------------------------------------------------------------------------------------
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1, 'Margot', 'Robbie', 'margotr@gmail.com', 6139866),
    new User(2, 'Arnold', 'Schwarzenegger', 'arnolds@state.ca.gov', 3965917),
    new User(3, 'Henry', 'Cavill', 'Mr.Cavill@henry-cavill.net', 932115),
    new User(4, 'Freya', 'Allan', 'freyaallan241@gmail.com', 252852),
    new User(5, 'Anya', 'Chalotra', 'anyachalotra@gmail.com', 3535566),
    new User(6, 'Joseph', 'Batey', 'joeybatey@gmail.com', 424412),
    new User(7, 'MyAnna', 'Buring', ' myannaburing@gmail.com', 5556648),
    new User(8, 'Anna', 'Shaffer', 'annashaffer@gmail.com', 4546466),
    new User(9, 'Emma', 'Appleton', 'emmaappleton@gmail.com', 4546445),
    new User(10, 'Rebecca', 'Hansen', 'rebeccahansen@gmail.com', 46345665)
];
console.log(users)
//--------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));
//--------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => b.id - a.id));
//--------------------------------------------------------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
//--------------------------------------------------------------------------------------------------------------------
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1,'Margot', 'Robbie', 'margotr@gmail.com', 6139866,['Film','Television','Music videos']),
    new Client(2,'Arnold', 'Schwarzenegger', 'arnolds@state.ca.gov', 3965917,['Film','Television','Commercials','Music videos']),
    new Client(3,'Henry', 'Cavill', 'Mr.Cavill@henry-cavill.net', 9321115,['Film','Television']),
    new Client(4,'Freya', 'Allan', 'freyaallan241@gmail.com', 2525852,['Television']),
    new Client(5,'Anya', 'Chalotra', 'anyachalotra@gmail.com', 35353566,['Television']),
    new Client(6,'Joseph', 'Batey', 'joeybatey@gmail.com', 4242412,['Television','Music videos']),
    new Client(7,'MyAnna', 'Buring', ' myannaburing@gmail.com', 55556648,['Film','Television','Music videos','Books']),
    new Client(8,'Anna', 'Shaffer', 'annashaffer@gmail.com', 45464646,['Film','Television']),
    new Client(9,'Emma', 'Appleton', 'emmaappleton@gmail.com', 45464645,['Television']),
    new Client(10,'Rebecca', 'Hansen', 'rebeccahansen@gmail.com', 463456465,['Television'])
];
console.log(clients)
//--------------------------------------------------------------------------------------------------------------------
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));
//--------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
//   з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//--------------------------------------------------------------------------------------------------------------------
function Car (model,producer,year,max_speed,engine_capacity){
    this.model = model
    this.producer = producer
    this.year = year
    this.max_speed = max_speed
    this.engine_capacity = engine_capacity

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }

    this.info = function () {
        console.log(this.model,this.producer,this.year,this.max_speed,this.engine_capacity)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed += newSpeed
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }

    this.addDriver = function (driver) {
        this.driver = driver
    }
}
let car = new Car('Porsche 356','Porsche GmbH',1948,140,'1.1 L B4, 40 hp (DIN)')

car.drive()
car.info()
car.increaseMaxSpeed(140)
car.changeYear(1965)
car.addDriver({name:'Oleg',age:34})
//--------------------------------------------------------------------------------------------------------------------
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//--------------------------------------------------------------------------------------------------------------------
class Car_2 {
    constructor(model, producer, year, max_speed, engine_capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_capacity = engine_capacity;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }

    info () {
        console.log(this.model,this.producer,this.year,this.max_speed,this.engine_capacity)
    }

    increaseMaxSpeed (newSpeed) {
        this.max_speed += newSpeed
    }

    changeYear (newValue) {
        this.year = newValue
    }

    addDriver (driver) {
        this.driver = driver
    }
}
let car_p = new Car_2 ('Porsche 356','Porsche GmbH',1948,140,'1.1 L B4, 40 hp (DIN)');
car_p.drive()
car_p.info()
car_p.increaseMaxSpeed(140)
car_p.changeYear(1965)
car_p.addDriver({name:'Oleg',age:34})
//--------------------------------------------------------------------------------------------------------------------
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
const cinderellas = [
    new Cinderella('Oksana',33,36),
    new Cinderella('Olena',33,37),
    new Cinderella('Natalia',33,38),
    new Cinderella('Olya',35,35),
    new Cinderella('Vira',36,40),
    new Cinderella('Diana',26,37),
    new Cinderella('Yulia',30,36),
    new Cinderella('Katya',30,33),
    new Cinderella('Vika',35,32),
    new Cinderella('Mariana',30,39),
    new Cinderella('Ira',33,37)
];
console.log(cinderellas)
//--------------------------------------------------------------------------------------------------------------------
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//--------------------------------------------------------------------------------------------------------------------
class Prince {
    constructor(name, age, the_shoe_he_found) {
        this.name = name;
        this.age = age;
        this.the_shoe_he_found = the_shoe_he_found;
    }
}
let prince = new Prince ('Kokos',34,40);
console.log(prince)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const item of cinderellas) {
    if (item['foot_size'] === prince['the_shoe_he_found']){
        console.log(item['name'])
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(value => value['foot_size'] === prince['the_shoe_he_found']));
//---------------------------------------------------------------------------------------------------------------------