let usersId = new URL(location.href).searchParams.get('id');
console.log(usersId);
let wrapBloc = document.getElementsByClassName('wrap')[0];

fetch(`https://jsonplaceholder.typicode.com/users/${usersId}`)
    .then((response) => response.json())
    .then((user) => {
        const { address, company, ...obj } = user;
        console.log(obj);
        //==========================Id====================================
        let idbloc = document.createElement('div');
        idbloc.classList.add('idbloc', 'contentbloc');
        let idText = document.createElement('h3');
        idText.innerText = `ID: ${obj.id}`;
        idbloc.appendChild(idText);
        wrapBloc.appendChild(idbloc);
        //==========================name===================================
        let namebloc = document.createElement('div');
        namebloc.classList.add('namebloc', 'contentbloc');
        let nameText = document.createElement('h3');
        nameText.innerText = `Name: ${obj.name}`;
        namebloc.appendChild(nameText);
        wrapBloc.appendChild(namebloc);
        //==========================username================================
        let usernamebloc = document.createElement('div');
        usernamebloc.classList.add('usernamebloc', 'contentbloc');
        let usernameText = document.createElement('h3');
        usernameText.innerText = `Username: ${obj.username}`;
        usernamebloc.appendChild(usernameText);
        wrapBloc.appendChild(usernamebloc);
        //=============================email=====================================
        let emailbloc = document.createElement('div');
        emailbloc.classList.add('emailbloc', 'contentbloc');
        let emailText = document.createElement('h3');
        emailText.innerText = `Email: ${obj.email}`;
        emailbloc.appendChild(emailText);
        wrapBloc.appendChild(emailbloc);
        //==============================address=========================================
        let addressbloc = document.createElement('div');
        addressbloc.classList.add('addressbloc', 'contentbloc');

        let addressText = document.createElement('h3');
        addressText.innerHTML = 'Address';

        let addressList = document.createElement('ul');
        let streetItem = document.createElement('li');
        streetItem.innerHTML = `street: ${address.street}`;
        addressList.appendChild(streetItem);

        let suiteItem = document.createElement('li');
        suiteItem.innerHTML = `suite: ${address.suite}`;
        addressList.appendChild(suiteItem);

        let cityItem = document.createElement('li');
        cityItem.innerHTML = `city: ${address.city}`;
        addressList.appendChild(cityItem);

        let zipcodeItem = document.createElement('li');
        zipcodeItem.innerHTML = `zipcode: ${address.zipcode}`;
        addressList.appendChild(zipcodeItem);

        addressbloc.appendChild(addressText);
        addressbloc.appendChild(addressList);
        wrapBloc.appendChild(addressbloc);
        //=================================phone=============================================
        let phonebloc = document.createElement('div');
        phonebloc.classList.add('phonebloc', 'contentbloc');
        let phoneText = document.createElement('h3');
        phoneText.innerText = `Phone: ${obj.phone}`;
        phonebloc.appendChild(phoneText);
        wrapBloc.appendChild(phonebloc);
        //================================website===================================================
        let websitebloc = document.createElement('div');
        websitebloc.classList.add('websitebloc', 'contentbloc');
        let websiteText = document.createElement('h3');
        websiteText.innerText = `Website: ${obj.website}`;
        websitebloc.appendChild(websiteText);
        wrapBloc.appendChild(websitebloc);
        //================================company======================================================
        let companybloc = document.createElement('div');
        companybloc.classList.add('companybloc', 'contentbloc');

        let companyText = document.createElement('h3');
        companyText.innerText = 'Company';

        let companyList = document.createElement('ul');
        let nameItem = document.createElement('li');
        nameItem.innerHTML = `name: ${company.name}`;
        companyList.appendChild(nameItem);

        let catchPhraseItem = document.createElement('li');
        catchPhraseItem.innerHTML = `catchPhrase: ${company.catchPhrase}`;
        companyList.appendChild(catchPhraseItem);

        let bsItem = document.createElement('li');
        bsItem.innerText = `Bs: ${company.bs}`;
        companyList.appendChild(bsItem);

        companybloc.appendChild(companyText);
        companybloc.appendChild(companyList);
        wrapBloc.appendChild(companybloc);

        let postsButton = document.createElement('button');
        postsButton.classList.add('atuin-btn')
        postsButton.innerText = 'post of current user';
        postsButton.addEventListener('click', function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${usersId}/posts`)
                .then((response) => response.json())
                .then((posts) => {
                    let postsBloc = document.createElement('div');
                    postsBloc.classList.add('posts-bloc', 'contentbloc');

                    posts.forEach((post) => {
                        let postLink = document.createElement('a');
                        postLink.classList.add('post-link');
                        postLink.href = `../post_details/post-details.html?postId=${post.id}`;

                        let postTitle = document.createElement('h3');
                        postTitle.innerText = post.title;

                        postLink.appendChild(postTitle);
                        postsBloc.appendChild(postLink);
                    });

                    wrapBloc.appendChild(postsBloc);
                });
        });

        wrapBloc.appendChild(postsButton);
    });


