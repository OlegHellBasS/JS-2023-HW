// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3,
// то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//---------------------------------------------------------------------------------------------------------------------
const friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    console.log('Це великий масив, в якому  3 і більше елементи')
} else {
    console.log('Це маленький масив, в якому менше 3-х елементів')
}
//---------------------------------------------------------------------------------------------------------------------
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//   Знайти, яке з них є середнім (більше одного, але менше за інше).
//   Перевірити, чи знаходиться перше число між двома іншими.
//---------------------------------------------------------------------------------------------------------------------
const a = 1;
const b = 2;
const c = 3;
if (a > b && c < b || a < b && c > b) {
    console.log(b)
} else if (b > a && c < a || b < a && c > a) {
    console.log(a)
} else if (a < c && b > c || b < c && a > c) {
    console.log(c)
} else {
    console.log('Eror')
}
//---------------------------------------------------------------------------------------------------------------------
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//---------------------------------------------------------------------------------------------------------------------
const a2 = 1;
const b2 = 2;
console.log(a2 + b2 < 4 ? 'Мало' : 'Багато')
//---------------------------------------------------------------------------------------------------------------------
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//---------------------------------------------------------------------------------------------------------------------
const a3 = 0;
if (a3 < 0) {
    console.log('Негативне')
} else if (a3 === 0) {
    console.log('Нyлеве')
} else {
    console.log('Позетивне')
}
//---------------------------------------------------------------------------------------------------------------------
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//---------------------------------------------------------------------------------------------------------------------
const test = true;
if (test) {
    console.log('Вірно')
} else {
    console.log('Неправильно')
}
//---------Або--------------
console.log(test ? 'Вірно' : 'Неправильно')
//---------------------------------------------------------------------------------------------------------------------
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//---------------------------------------------------------------------------------------------------------------------
const js = prompt('Яка «офіційна» назва JavaScript?');
if (js === 'ECMAScript') {
    console.log('Правильно!')
} else {
    console.log('Не знаєте? ECMAScript!')
}
//---------------------------------------------------------------------------------------------------------------------
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
//   Користувач вводить номер квартири просто в змінні або через prompt('').
//   Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
const apartment = 55;
if (apartment >= 1 && apartment <= 20) {
    console.log('У першому під\'їзді квартира')
} else if (apartment >= 21 && apartment <= 48) {
    console.log('У другому під\'їзді квартира')
} else if (apartment >= 49 && apartment <= 90) {
    console.log('У третьому під\'їзді квартира')
} else {
    console.log('Eror')
}
//---------------------------------------------------------------------------------------------------------------------
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
//   якщо змінна не рівна 10 - тоді НЕВІРНО
//---------------------------------------------------------------------------------------------------------------------
const number = 10;
if (number === 10) {
    console.log('ВІРНО')
} else if (number !== 10) {
    console.log('НЕВІРНО')
} else {
    console.log('Eror')
}
//---------------------------------------------------------------------------------------------------------------------
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//   Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//   Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//---------------------------------------------------------------------------------------------------------------------
const temperature = 0;
if (temperature >= 10 && temperature <= 22) {
    console.log('ми йдемо ВЧИТИСЯ')
} else {
    console.log('сидимо вдома і вчимося ОНЛАЙН')
}
//---------------------------------------------------------------------------------------------------------------------
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//   числа нам дається приз.
//   (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ...
//---------------------------------------------------------------------------------------------------------------------
const quizNumber = 1;
switch (quizNumber) {
    case 1:
        console.log('Авто');
        break;

    case 2:
        console.log('Мото');
        break;

    case 3:
        console.log('Телефон');
        break;
    case 4:
        console.log('Планшет');
        break;
    case 5:
        console.log('Ноутбук');
        break;
    default:
        console.log('Число не вірне')
}
//---------------------------------------------------------------------------------------------------------------------