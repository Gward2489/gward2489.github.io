// use an if statement to see if an array of blogs already exists in local storage. If not, generate one.

if (JSON.parse(localStorage.getItem("blogs")) === null) {

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

let blogFour = {
    "date": "October 9th, 2017:",
    "text": "I can already tell this is going to be a crazy journey"
}

let blogFive = {
    "date": "October 13th, 2017:", 
    "text": "Although I did a lot of prework and feel good about javascript, I can already tell I essentially know nothing about the material to come. I feel prepared yet uprepared at the same time"
}

let blogSix = {
    "date": "October 15th, 2017",
    "text": "I am starting to grasp the javacript loops and functions better. I am having fun the exercises and gain a sense of pride when I complete one."
}

let blogSeven = {
    "date": "October 18th, 2017",
    "text": "I am lord blogs now. My blog chops are increasing so quickly I can barely keep up with myself"
}

let blogEight = {
    "date": "October 20th, 2017",
    "text": "I would say That I am definately in the false confidence stage of the course"
}

let blogNine = {
    "date": "October 24th, 2018",
    "text": "Its my birthday. Steve gave me a nice compliments on my code comments today. Good times."
}

let blogTen = {
    "date": "October 25th, 2018",
    "text": "This is day after my birthday. I am loving NSS but, apparently, that is soon to change."
}

let blogEleven = {
    "date": "October 26th, 2018",
    "text": "Why have ten blog post when you can have eleven?"
}

let blogsArray = [blogEleven, blogTen, blogNine, blogEight, blogSeven, blogSix, blogFive, blogFour, blogThree, blogTwo, blogOne]

localStorage.setItem("blogs", JSON.stringify(blogsArray))

}

// Get id's from text areas and store them into variables.
// Use these to get the text values from the text areas.
let blogDate = document.getElementById("blogDate")
let blogText = document.getElementById("blogText")

//create an epty blog object to add the new entries to.

let newBlog = {
    "date": "",
    "text": ""
}

// create an event listener that will check to see if the target matches the id
// of the submit blog button.
document.addEventListener("click", 
    event => {
        let click = event.target
        if (click.id === "submitBlog" ) {
            // retreive the array blog from storage and catch it in a variable
            let blogsArray = JSON.parse(localStorage.getItem("blogs"))
            // add blog date to object
            newBlog.date = blogDate.value
            // add new blog text to object
            newBlog.text = blogText.value
            // push the new blog to the begging of the array
            blogsArray.unshift(newBlog)
            // set it to local storage
            localStorage.setItem("blogs", JSON.stringify(blogsArray))
            // toggle class to hide blog entry fields
            document.getElementById("blogMaker").classList.toggle("hideIt")
            // toggle class to reveal a message and buttons that either link to 
            // the blog page or refresh the page for more entries
            document.getElementById("hiddenSection").classList.toggle("hideIt")
    } 
})

// add event listener to target of click if target click
// is on button with id 'toBlogs'. If true, the browser
// will navigate to the blogs page
document.addEventListener("click", 
    event => {
        if (event.target.id === "toBlogs") {
            location = "../blog/index.html"
    }
})

// add event listener to target of click if target click
// is on button with id 'enterMoreBlogs'. If true, the browser
// will refresh the current page and allow for another blog entry

document.addEventListener("click", 
event => {
    if (event.target.id === "enterMoreBlogs") {
        location.reload()
}
})