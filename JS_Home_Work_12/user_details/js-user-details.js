let userId = new URL(location.href).searchParams.get(`id`);
console.log(userId)
// fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((response) => response.json())
//     .then((user) => {
//         let wrap = document.getElementsByClassName('wrap')[0];
//         let userList = document.createElement('ul');
//         wrap.appendChild(userList)
//         for (const userKey in user) {
//             const listItem = document.createElement('li');
//             listItem.innerText = `${userKey}: ${user[userKey]}`;
//             userList.appendChild(listItem);
//         }
//     });

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        let wrap = document.getElementsByClassName('wrap')[0];
        let userList = document.createElement('ul');
        wrap.appendChild(userList);

        function createListItems(obj, parentElement) {
            for (const key in obj) {
                const listItem = document.createElement('li');
                if (typeof obj[key] === 'object') {
                    const nestedList = document.createElement('ul');
                    listItem.innerText = key;
                    listItem.appendChild(nestedList);
                    createListItems(obj[key], nestedList);
                } else {
                    listItem.innerText = `${key}: ${obj[key]}`;
                }
                parentElement.appendChild(listItem);
            }
        }
        createListItems(user, userList);
    });
