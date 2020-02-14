function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}

const xhr = getXMLHttpRequest();

function go() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('b00m !!!');
        }, 5000);
    });
}

go()
    .then(message => message.toUpperCase())
    .then(message => console.log(message));

function get(url) {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject({
                        status: xhr.status,
                        body: xhr.responseText
                    });
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send();
    });
}

get('http://localhost:5500/angular/ajax/data.json')
    .then(data => JSON.parse(data))
    .then(
        items => {
            const namesElems = document.querySelector('#names');

            items.forEach(item => {
                const txt = document.createTextNode(item.name);
                const li = document.createElement('li');

                li.appendChild(txt);
                namesElems.appendChild(li);
            });

            return items;
        }
    )
    .then(item => console.log(item))
    .catch(err => console.log(err));

async function getJokes() {
    const data = await get('https://api.chucknorris.io/jokes/random');
    const jokes = JSON.parse(data);
    return jokes.value;
}

setTimeout(() => {
    getJokes().then(joke => console.log(joke));
}, 1000);
