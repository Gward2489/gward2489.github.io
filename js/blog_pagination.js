// Start by creating the list that will represent the page numbers in the footer.
// This list will be dynamic to the amount of blog posts, and include will also underline
// the active page. Also, it should have arrows on either side of the list allowing you 
// to change pages. If you are on the first age the arrow to back up should dissappear,
// the same should apply to the arrow to increase pages.

//mark location for blog article page number links
const pageNumbersMarker = document.getElementById("pagination_footer")
//mark location for blog injection
const blogArticleMarker = document.getElementById("blogId")
//set desired number of pages
const itemsPerPage = 5

// use 'blogs.length' to determine number of blogpost
// then divide that number by 5, because we want 5 post per page
// use Math.ceil to round up, in case the number is not evenly 
// divisable by 5 and we our final page will have < 5 posts.
let numberOfPages = Math.ceil(((blogs.length) / itemsPerPage ))
// begin building list string and store it into a variable, so we may add on to it
let pageNumbers = `<ul><a id="previous_arrow" href="#">&lt;</a>`
// now generate links with the corresponding number for each page of blog posts
for (i = 1; i <= numberOfPages; i++) {
    pageNumbers += `<li><a id="mage_${i}" class="blogPage" href="#">${i}</a></li>`
}
// finish the string with the arrow to move to the next page of items
pageNumbers += `<a id="next_arrow" href="#">&gt;</a></ul>`

//inject numbers to html
pageNumbersMarker.innerHTML += pageNumbers
const previousArrowMarker = document.getElementById("previous_arrow")
const nextArrowMarker = document.getElementById("next_arrow")
//create a list of the clickable links and store them in a variable
const blogLinks = document.getElementsByClassName("blogPage")

//Style the links initially by extracting an array of elements from 'blogLinks'
//Style the link for the 1st page so it will have text decoration
Array.from(blogLinks).forEach(function (blog) {
    //slice the number from the blog id and parse into an integer and capture it into a variable
    let blogId = parseInt(blog.id.slice(-1))
    //test to see if the link is for the first page. Exclude text decoartion on all links
    //except the first page  
    if (blogId != 1)
    blog.className = "blogPage chill_link"
})

//style the previous arrow marker so it is hidden initially
previousArrowMarker.className = "hide"

//define the variables for 'currentClick' and 'currentPage' outstide of the scope
//of the functions so their values may be passed between the functions
let currentClick = ""
let currentPage = 1

//slice the desired amount of initial blog articles from the blog array
// and inject each one to the blogArticleMarker in the inner HTML
blogs.slice(0 , itemsPerPage).forEach(function (blog){
    blogArticleMarker.innerHTML += `
    <article>
    <h1>${blog.date}</h1>
    <h2>${blog.text}</h2>
    </article>
    `
})


//use a 'for loop' method to add event listeners that will execute a function to
//display the desired blogs on the page
for (i = 0; i < blogLinks.length; i++) {
    blogLinks[i].addEventListener("click", function (event) {
        //first clear all the current html to make room
        //for the incoming blog posts
        //clear the style on the arrow markers
        nextArrowMarker.className = ""
        previousArrowMarker.className = ""
        blogArticleMarker.innerHTML = ""
        //clear the styles on the blog article page links
        Array.from(blogLinks).forEach(function (blog) {
            blog.className = "blogPage chill_link"
        })
        //slice the blog page link number out of the id of the click event target. 
        //parse it into an integer and capture it into the variable currentClick
        currentClick = parseInt(event.target.id.slice(-1))
        //set the value of 'currentPage' to 'currentClick'
        currentPage = currentClick
        //use the .slice method to return the desired blogs into a variable as an array.
        //the math within the .slice determines the correct starting and ending locations,
        //within the array for slecting the correct collection of articles,
        //for the corresponding page number.
        //Use and 'if else' loop to make sure the last page displays the correct amount of articles.
        // the .slice method by default does not return the final value in the array if its index value,
        //is used as a parameter value. you must use a negative value as a parameter, 
        //or a value that is above the final index value.
        //The if statement checks to see if the click event is on the final page, and
        //increases the value of the second paramter so that it exceeds the final index value.
        let whichBlogs = []
        if (currentPage === numberOfPages) {
            whichBlogs = blogs.slice((currentClick - 1) * itemsPerPage, (currentClick * itemsPerPage) + 1)
        } else {
            whichBlogs = blogs.slice((currentClick - 1) * itemsPerPage, currentClick * itemsPerPage) 
        }
        //Use a .forEach method to to inject each blog into the html.
        //this method will pass each object in the array into the function parameter
        whichBlogs.forEach(function(blog) {
        //access correct point in DOM for html  inject,
        //with the id stored in 'blogArticleMarker'
        //inject blog date in h1 tags and blog text in h2 tags
        blogArticleMarker.innerHTML += `
        <article>
        <h1>${blog.date}</h1>
        <h2>${blog.text}</h2>
        </article>
        `
        //^^^^use '.' to access contained the key values contained within the
        //objects held by the 'blog' parameter variable  
        
        
    })
    //create classes to toggle styles of blog articles page numbers
    //target the classname of the event and style it be be underlined
    event.target.className = "blogPage"
    //use an if and else if loop to hide the arrow elements by changing their class name
    if (currentClick === 1) {
        previousArrowMarker.className = "hide"
    } else if (currentClick === numberOfPages) {
        nextArrowMarker.className = "hide"
    }
    console.log("main function")
    })
    
}

//create a new function to go to the next page of bog articles
//this is the same as the maine event listener  with a few changes

let pageShiftUp = function (click) {
    //reset html
    blogArticleMarker.innerHTML = ""
    //increase the click count by one to represent the next page
    currentClick = click + 1
    let whichBlogs = []
    if (currentClick === numberOfPages) {
        whichBlogs = blogs.slice((currentClick - 1) * itemsPerPage, (currentClick * itemsPerPage) + 1)
    } else {
        whichBlogs = blogs.slice((currentClick - 1) * itemsPerPage, currentClick * itemsPerPage) 
    }
    whichBlogs.forEach(function(blog) {
    blogArticleMarker.innerHTML += `
    <article>
    <h1>${blog.date}</h1>
    <h2>${blog.text}</h2>
    </article>
    `
    })

    //restyle the links by extracting an array of the blog article page number links and using
    //a 'foreach' method to apply the original style to each link

    Array.from(blogLinks).forEach(function (blog) {
            blog.className = "blogPage"
            //get the id number from the blog and parse it into a variable
        let nextPageNumber = parseInt(blog.id.slice(-1))
            //test to see if the blog id is not the current blog clicked and remove
            //their text decoration if so
        if (currentClick != nextPageNumber) {
            blog.className = "blogPage chill_link"
        }
    })
    //style the arrows to disapear if needed
    previousArrowMarker.className = ""
    if (currentClick === numberOfPages) {
        nextArrowMarker.className = "hide"
    }
    console.log("shiftUp")
}

//make a function to go to the previous page of blog articles when the 
//previous arrow is clicked.
//this function is almost exactly the same as
//'pageShiftUP'

let pageShiftDown = function (click) {
    blogArticleMarker.innerHTML = ""
    //subtract one from the current click to move to the previous page of blog articles
    currentClick = click - 1
    let whichBlogs = []
    if (currentClick === numberOfPages) {
        whichBlogs = blogs.slice((currentClick - 1) * itemsPerPage, (currentClick * itemsPerPage) + 1)
    } else {
        whichBlogs = blogs.slice((currentClick - 1) * itemsPerPage, currentClick * itemsPerPage) 
    }
    whichBlogs.forEach(function(blog) {
    blogArticleMarker.innerHTML += `
    <article>
    <h1>${blog.date}</h1>
    <h2>${blog.text}</h2>
    </article>
    `
    })

    Array.from(blogLinks).forEach(function (blog) {
            blog.className = "blogPage"
        let nextPageNumber = parseInt(blog.id.slice(-1))
        if (currentClick != nextPageNumber) {
            blog.className = "blogPage chill_link"
        }
    })

    //use a one here instead of 'numberOfPages' because we need to check if its the first page
    //not the last
    nextArrowMarker.className = ""
    if (currentClick === 1) {
        previousArrowMarker.className = "hide"
    }
    console.log("shiftDown")
}

    //add an event listener to the pageNumbersMarker which represents the section tag with the id,
    //for the injection of the blog article page links.
    //capture the clicks on the arrows when they bubble up to this section
    //execute a function on click that will parse the first letter of the id
    // of the target event.
pageNumbersMarker.addEventListener("click", function (event) {
    let arrowClick = event.target.id.slice(0 , 1)
    console.log("arrow event listener")
    //check to see if the letter returned to arrow click is either a n or p
    //if n (next) execute shift up and if p (previous) execute shiftDown
    if (arrowClick === "n") {
        pageShiftUp(currentClick)
        console.log("shiftuparrowlisteber")
    } else if (arrowClick === "p") {
        pageShiftDown(currentClick)
        console.log("shiftdownarrowlistener")
    }
    }
)





