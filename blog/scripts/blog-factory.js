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