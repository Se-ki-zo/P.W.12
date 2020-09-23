class Api {
    constructor(options) {
        this.options = options;
    }

    getURL(path) {
        return this.options.url + path;
    }

    getInitialCards() {
        return fetch(this.getURL('cards'), this.options.getRequest)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    getUserInfo() {
        return fetch(this.getURL('users/me'), this.options.getRequest)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    /*
        Можно лучше: то что оно захардкожено никак не может влиять на ошибку 403
        Проверьте корректность формирования адреса 
    */
    postUserInfo(userName, userAbout) { // если не захардкожено, то вернет 403
        return fetch('https://nomoreparties.co/cohort12/users/me', {
                method: 'PATCH',
                headers: {
                    authorization: '5783e296-2ee3-4f4f-aa27-91c21b36586c',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    about: userAbout
                })
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}