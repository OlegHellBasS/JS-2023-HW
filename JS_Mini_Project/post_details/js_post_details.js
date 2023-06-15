let postId = new URL(location.href).searchParams.get('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
        console.log(post);

        let wrapBloc = document.getElementsByClassName('wrap')[0];

        let postIdBloc = document.createElement('div');
        postIdBloc.classList.add('postIdBloc');
        wrapBloc.appendChild(postIdBloc);

        let bodyList = document.createElement('p');
        bodyList.innerText = `Body: ${post.body}`;
        let bodyBloc = document.createElement('div');
        bodyBloc.classList.add('bodyBloc','userbloc');
        bodyBloc.appendChild(bodyList);

        let idList = document.createElement('p');
        idList.innerText = `Id: ${post.id}`;
        let idBloc = document.createElement('div');
        idBloc.classList.add('idBloc','userbloc');
        idBloc.appendChild(idList);

        let titleList = document.createElement('p');
        titleList.innerText = `Title: ${post.title}`;
        let titleBloc = document.createElement('div');
        titleBloc.classList.add('titleBloc','userbloc');
        titleBloc.appendChild(titleList);

        let userIdList = document.createElement('p');
        userIdList.innerText = `UserId: ${post.userId}`;
        let userIdBloc = document.createElement('div');
        userIdBloc.classList.add('userIdBloc','userbloc');
        userIdBloc.appendChild(userIdList);

        postIdBloc.append(userIdBloc,titleBloc,idBloc,bodyBloc)
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((comments) => {
            console.log(comments)

            let wrapBloc = document.getElementsByClassName('wrap')[0];
            let commentsBloc = document.createElement('div');
            commentsBloc.classList.add('commentsBloc');
            wrapBloc.appendChild(commentsBloc);

            for (const comment of comments) {
                let commentBloc = document.createElement('div');
                commentBloc.classList.add('commentBloc');
                commentsBloc.appendChild(commentBloc)

                //==================================id=====================================================
                let idPostBloc = document.createElement('div');
                idPostBloc.classList.add('idPostBloc');
                commentBloc.appendChild(idPostBloc)
                let commentIdText = document.createElement('p')
                commentIdText.innerText = `ID: ${comment.id}`
                idPostBloc.appendChild(commentIdText);
                //==================================Email==================================================
                let emailBloc = document.createElement('div');
                emailBloc.classList.add('emailBloc');
                commentBloc.appendChild(emailBloc)
                let commentemail = document.createElement('p')
                commentemail.innerText = `Email: ${comment.email}`
                emailBloc.appendChild(commentemail);
                //==================================postId=================================================
                let emailBlocpostId = document.createElement('div');
                emailBlocpostId.classList.add('emailBlocpostId');
                commentBloc.appendChild(emailBlocpostId)
                let commentemailpostId = document.createElement('p')
                commentemailpostId.innerText = `PostId: ${comment.postId}`
                emailBlocpostId.appendChild(commentemailpostId);
                //==================================name===================================================
                let namePostBloc = document.createElement('div');
                namePostBloc.classList.add('namePostBloc');
                commentBloc.appendChild(namePostBloc)
                let commentnameText = document.createElement('p')
                commentnameText.innerText = `Name: ${comment.name}`
                namePostBloc.appendChild(commentnameText);
                //==================================body===================================================
                let bodyPostBloc = document.createElement('div');
                bodyPostBloc.classList.add('bodyPostBloc');
                commentBloc.appendChild(bodyPostBloc)
                let commentbodyText = document.createElement('p')
                commentbodyText.innerText = `Body: ${comment.body}`
                bodyPostBloc.appendChild(commentbodyText);
            }

    })

