let clicked = localStorage.getItem('ecard');

    fetch(`https://jsonplaceholder.typicode.com/posts/${clicked}`)
    .then(response => response.json())
    .then((data)=> {
        console.log(data)
        let postLayout = document.getElementById('post-layout');
            html = `
                <div class="">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-end">
                            <h6 class="text-danger">${data.id}</h6>
                            </div>
                            <h5 class="post-title mb-4">${data.title}</h5>
                            <p class="post-body">${data.body}</p>
                        </div>
                    </div>
                </div>`;
            postLayout.innerHTML = html
        });    