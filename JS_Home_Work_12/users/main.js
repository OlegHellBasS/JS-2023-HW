fetch('https://jsonplaceholder.typicode.com/users/')
    .then((response) => response.json())
    .then((users) => {
        let wrap = document.getElementsByClassName('wrap')[0]
        for (const user of users) {
            let blocUser = document.createElement('div');
            wrap.appendChild(blocUser);

            let ulUser = document.createElement('ul');
            blocUser.appendChild(ulUser);

            let liName = document.createElement('li');

            let linkUserDetails = document.createElement('a');
            linkUserDetails.href = `../user_details/user-details.html?id=${user.id}`;
            linkUserDetails.innerText = `Id:${user.id} Name:${user.name}`;

            liName.appendChild(linkUserDetails)
            ulUser.appendChild(liName);
        }
    });



