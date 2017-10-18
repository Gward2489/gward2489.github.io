let blogs = JSON.parse(localStorage.getItem("blogs"))

let blogMarker = document.getElementById("blogId")

for (let i = 0; i < blogs.length; i++) {
    let blogPost = blogs[i]
    blogMarker.innerHTML += `
    <article class="article">
    <p>${blogPost.date}<br>
    ${blogPost.text}</p>
    </article>
    `
}