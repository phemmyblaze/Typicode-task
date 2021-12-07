let postTitle = document.getElementById('post-title');
let postBody = document.getElementById('post-body');

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=> {
        console.log(data)
        let postLayout = document.getElementById('post-layout')
        let html = "";
        data.forEach(e => {
            html += `
                <div class="row">
                    <div class="col-md-4 mb-3 ">
                        <a href="./index2.html" onclick="routedPage(${e.id})">
                        <div class="card h-100">
                            <div class="card-body">
                                <div class="d-flex justify-content-end">
                                <h6 class="text-danger">${e.id}</h6>
                                </div>
                                <h5 class="post-title mb-4">${e.title}</h5>
                                <p class="post-body">${e.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
            postLayout.innerHTML = html
        });    
    })
}

getPosts();

 
// adding to local storage using JSON

let output = localStorage.setItem('data', JSON.stringify(data));

function routedPage(onclick) {
    localStorage.setItem('ecard', onclick)
}
