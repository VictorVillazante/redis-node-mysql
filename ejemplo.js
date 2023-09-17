var XMLHttpRequest = require('xhr2');

function getPosts() {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

        req.onload = function() {
            if (req.status == 200) {
                console.log("resolve")
                resolve(JSON.parse(req.response));
            } else {
                reject();
            }
        };

        req.send();
    })
}

let postId = 1;
getPosts().then(r => {
    console.log("Primer then")
    return r;
}).then(r => {
    console.log("Segundo then")
    console.log(r.find(x => x.id === 1));
})