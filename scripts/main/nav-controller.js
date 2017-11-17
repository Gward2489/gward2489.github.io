let buildNav = function () {

    let navBar = [
        {
            "display": "Home"
        },
        {
            "display": "Blog"
        },
        {
            "display": "Projects"
        },
        {
            "display": "Resume"
        },
        {
            "display": "Contact"
        },
    ]

    const navLocation = document.getElementById("navigationLinks")

    navBar.forEach(function (navLink) {
        const newItem = document.createElement("li")
        newItem.className = "navList_link"

        const newLink = document.createElement("a")
        newLink.href = "#"
        newLink.className = `navList_link--${navLink.display.toLowerCase()}`
        newLink.appendChild(document.createTextNode(navLink.display))

        newLink.addEventListener("click", function (event) {
            let sectionName = event.target.className.split("--")[1]
            let sectionEl = document.getElementById(sectionName)

            Array.from(document.getElementsByTagName("section")).forEach(function (section) {
                section.classList.add("hidden")
            })
                
            sectionEl.classList.remove("hidden")
            
        })

        newItem.appendChild(newLink)

        navLocation.appendChild(newItem)
    })

}

module.exports = buildNav