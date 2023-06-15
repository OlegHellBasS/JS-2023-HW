fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        let userListBloc = document.getElementsByClassName('userListBloc')[0];

        for (const user of users) {
            let userBloc = document.createElement('div');
            userBloc.classList.add('userBloc');
            userListBloc.appendChild(userBloc);

            let userId = document.createElement('p');
            userId.classList.add('userId')
            userId.textContent = `ID: ${user.id}`;
            userBloc.appendChild(userId);

            let userName = document.createElement('p');
            userName.textContent = `Name: ${user.name}`;
            userBloc.appendChild(userName);

            let buttunBloc = document.createElement('div');
            buttunBloc.classList.add('buttunBloc');
            userBloc.appendChild(buttunBloc);

            let button = document.createElement("button");
            button.classList.add('button','atuin-btn')
            button.innerText = "User details";
            button.addEventListener('click', () => {
                window.location.href = `../user_details/user-details.html?id=${user.id}`;
            });

            buttunBloc.appendChild(button);
        }
    });
