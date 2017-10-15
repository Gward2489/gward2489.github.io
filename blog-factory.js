// Blogs in objects

let blogOne = {
    "date": "October 7th, 2017:",
    "text": "I have never blogged, but now I have some blog action going on. My first week at NSS is going well. We have worked on a lot of cool and interesting concepts already. I completed the overly excited function and then got overly excited myself."
}

let blogTwo = {
    "date": "October 5th, 2017:",
    "text": "NSS is pretty interesting so far. I definately have my work cut out for me. Hopefully, I will be able to fake it until I make it."
}

let blogThree = {
    "date": "My First Blog Post:",
    "text": "Welcome to my blog, this is where I will be posting details on my NSS journey."
}

// Put blog objects in an array

let blogsArray = [blogThree, blogTwo, blogOne]

// Store blogs in local storage

let blogString = JSON.stringify(blogsArray)
localStorage.setItem("blogs", blogString)