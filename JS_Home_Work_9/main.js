// - створити блок,
let div_wrap = document.createElement('div');
//---------------------------------------------------------------------------------------------------------------------
// - додати йому класи wrap, collapse, alpha, beta
div_wrap.classList.add('wrap', 'collapse', 'alpha', 'beta');
//---------------------------------------------------------------------------------------------------------------------
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div_wrap.style.background = 'silver';
div_wrap.style.color = 'red';
div_wrap.style.fontSize = '10px';
//---------------------------------------------------------------------------------------------------------------------
// - додати цей блок в body.
document.body.appendChild(div_wrap)
//---------------------------------------------------------------------------------------------------------------------
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div_wrap.cloneNode(true))
//---------------------------------------------------------------------------------------------------------------------
// - Є масив:
let elements = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul_elements = document.createElement('ul');
for (const element of elements) {
    let li_elements = document.createElement('li');
    li_elements.innerText = `${element}`;
    ul_elements.appendChild(li_elements);
}
div_wrap.appendChild(ul_elements);
//---------------------------------------------------------------------------------------------------------------------
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let div_course = document.createElement('div')
    let h3_title = document.createElement('h3')
    h3_title.innerText = `${course.title}`
    let p_monthDuration = document.createElement('p')
    p_monthDuration.innerText = `${course.monthDuration}`
    div_course.appendChild(h3_title)
    div_course.appendChild(p_monthDuration)
    div_wrap.appendChild(div_course)
}
// ====================================================================================================================
//     - Є масив
let coursesAndDurationArray_2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const course_2 of coursesAndDurationArray_2) {
    let div_item = document.createElement('div');
    div_item.classList.add('item');

    let h1_heading = document.createElement('h1');
    h1_heading.classList.add('heading');
    h1_heading.innerText = `${course_2.title}`;

    let p_description = document.createElement('p');
    p_description.classList.add('description');
    p_description.innerText = `${course_2.monthDuration}`;

    div_item.appendChild(h1_heading);
    div_item.appendChild(p_description);
    div_wrap.appendChild(div_item);
}
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    let div_simpson = document.createElement('div');
    div_simpson.classList.add('member')

    let h2_name = document.createElement('h2');
    h2_name.innerText = `${simpson.name} ${simpson.surname}`;

    let p_age = document.createElement('p');
    p_age.innerText = `Age: ${simpson.age}`

    let p_info = document.createElement('p');
    p_info.innerText = `info: ${simpson.info}`;

    let img_div = document.createElement('div')

    let img_photo = document.createElement('img');
    img_photo.src = `${simpson.photo}`

    img_div.appendChild(img_photo)

    div_simpson.appendChild(h2_name).appendChild(p_age).appendChild(p_info).appendChild(img_div);
    div_wrap.appendChild(div_simpson);
}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 908,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 908,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 908,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','python core','python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 908,
        modules: ['html','css','js','mysql','mongodb','git','QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 908,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','node.js','python','java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 908,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//--------------------------------------------------------------------------------------------------------------------
for (const course_3 of coursesArray) {
    let coursesArray_div = document.createElement('div');
    coursesArray_div.classList.add('coursesArray_div');
    div_wrap.appendChild(coursesArray_div);

    let title_div = document.createElement('div');
    title_div.classList.add('title_div');

    let title_h1 = document.createElement('h1');
    title_h1.innerText = `${course_3.title}`
    title_div.appendChild(title_h1)

    let monthDuration_div = document.createElement('div');
    monthDuration_div.classList.add('monthDuration_div');

    let monthDuration_h1 = document.createElement('h1');
    monthDuration_h1.innerText = `${course_3.monthDuration}`;
    monthDuration_div.appendChild(monthDuration_h1);

    let hourDuration_div = document.createElement('hourDuration_div');
    hourDuration_div.classList.add('hourDuration_div');

    let hourDuration_h1 = document.createElement('h1');
    hourDuration_h1.innerText = `${course_3.hourDuration}`;
    hourDuration_div.appendChild(hourDuration_h1);

    let modules_div = document.createElement('div');
    modules_div.classList.add('modules_div');

    let modules_ul = document.createElement('ul');
    for (const module of course_3.modules) {
        let modules_li = document.createElement('li');
        modules_li.innerText = `${module}`;
        modules_ul.appendChild(modules_li)
    }
    modules_div.appendChild(modules_ul);

    let monthDuration_hourDuration_div = document.createElement('div');
    monthDuration_hourDuration_div.classList.add('monthDuration_hourDuration_div');

    monthDuration_hourDuration_div.appendChild(monthDuration_div);
    monthDuration_hourDuration_div.appendChild(hourDuration_div);

    coursesArray_div.appendChild(title_div);
    coursesArray_div.appendChild(monthDuration_hourDuration_div);
    coursesArray_div.appendChild(modules_div);
}
// -------------------------------------------------------------------------------------------------------------------