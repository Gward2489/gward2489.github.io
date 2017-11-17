(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let blogDatabase = []

module.exports = blogDatabase


},{}],2:[function(require,module,exports){
let contactDatabase = [
    {
        "title": "",
        "link": ""
    }
]

module.exports = contactDatabase
},{}],3:[function(require,module,exports){
let professionalDatabase = require("../main/professional-database")

let printHomeInfo = function () {
    let homeEl = document.getElementById("home")

    homeEl.innerHTML += `
    <h1>${professionalDatabase.home.welcomeText}</h1>
    <h2>${professionalDatabase.home.siteInfo}</h2>
    `
}

module.exports = printHomeInfo


},{"../main/professional-database":7}],4:[function(require,module,exports){
let homeDatabase = [
    {
        "welcomeText": "My name is Garrett Ward, welcome to my website",
        "siteInfo": "Find all the updates and goods on my journey though NSS here."
    }
]

module.exports = homeDatabase


},{}],5:[function(require,module,exports){
let buildNav = require("./nav-controller")
let printHomeInfo = require("../home/home-controller")

buildNav()
printHomeInfo()


},{"../home/home-controller":3,"./nav-controller":6}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
let homeDatabase = require("../home/home-database")
let blogDatabase = require("../blog/blogs-database")
let projectsDatabase = require("../projects/projects-database")
let resumeDatabase = require("../resume/resume-database")
let contactDatabase = require("../contact/contact-database")


let professionalDatabase = {
    "home": homeDatabase,
    "blog": blogDatabase,
    "projects": projectsDatabase,
    "resume": resumeDatabase,
    "contact": contactDatabase
}

module.exports = professionalDatabase



},{"../blog/blogs-database":1,"../contact/contact-database":2,"../home/home-database":4,"../projects/projects-database":8,"../resume/resume-database":9}],8:[function(require,module,exports){
let projectsDatabase = [
    {
        "title": "",
        "link": ""
    }
]

module.exports = projectsDatabase
},{}],9:[function(require,module,exports){
let resumeDatabase = [
    {
        "jobTitle": "",
        "company": "",
        "employmentDate": "",
        "description": "",
        "skills": "",

    }
]

module.exports = resumeDatabase

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2Jsb2cvYmxvZ3MtZGF0YWJhc2UuanMiLCJzY3JpcHRzL2NvbnRhY3QvY29udGFjdC1kYXRhYmFzZS5qcyIsInNjcmlwdHMvaG9tZS9ob21lLWNvbnRyb2xsZXIuanMiLCJzY3JpcHRzL2hvbWUvaG9tZS1kYXRhYmFzZS5qcyIsInNjcmlwdHMvbWFpbi9tYWluLmpzIiwic2NyaXB0cy9tYWluL25hdi1jb250cm9sbGVyLmpzIiwic2NyaXB0cy9tYWluL3Byb2Zlc3Npb25hbC1kYXRhYmFzZS5qcyIsInNjcmlwdHMvcHJvamVjdHMvcHJvamVjdHMtZGF0YWJhc2UuanMiLCJzY3JpcHRzL3Jlc3VtZS9yZXN1bWUtZGF0YWJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBibG9nRGF0YWJhc2UgPSBbXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2dEYXRhYmFzZVxuXG4iLCJsZXQgY29udGFjdERhdGFiYXNlID0gW1xuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLFxuICAgICAgICBcImxpbmtcIjogXCJcIlxuICAgIH1cbl1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWN0RGF0YWJhc2UiLCJsZXQgcHJvZmVzc2lvbmFsRGF0YWJhc2UgPSByZXF1aXJlKFwiLi4vbWFpbi9wcm9mZXNzaW9uYWwtZGF0YWJhc2VcIilcblxubGV0IHByaW50SG9tZUluZm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGhvbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKVxuXG4gICAgaG9tZUVsLmlubmVySFRNTCArPSBgXG4gICAgPGgxPiR7cHJvZmVzc2lvbmFsRGF0YWJhc2UuaG9tZS53ZWxjb21lVGV4dH08L2gxPlxuICAgIDxoMj4ke3Byb2Zlc3Npb25hbERhdGFiYXNlLmhvbWUuc2l0ZUluZm99PC9oMj5cbiAgICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJpbnRIb21lSW5mb1xuXG4iLCJsZXQgaG9tZURhdGFiYXNlID0gW1xuICAgIHtcbiAgICAgICAgXCJ3ZWxjb21lVGV4dFwiOiBcIk15IG5hbWUgaXMgR2FycmV0dCBXYXJkLCB3ZWxjb21lIHRvIG15IHdlYnNpdGVcIixcbiAgICAgICAgXCJzaXRlSW5mb1wiOiBcIkZpbmQgYWxsIHRoZSB1cGRhdGVzIGFuZCBnb29kcyBvbiBteSBqb3VybmV5IHRob3VnaCBOU1MgaGVyZS5cIlxuICAgIH1cbl1cblxubW9kdWxlLmV4cG9ydHMgPSBob21lRGF0YWJhc2VcblxuIiwibGV0IGJ1aWxkTmF2ID0gcmVxdWlyZShcIi4vbmF2LWNvbnRyb2xsZXJcIilcbmxldCBwcmludEhvbWVJbmZvID0gcmVxdWlyZShcIi4uL2hvbWUvaG9tZS1jb250cm9sbGVyXCIpXG5cbmJ1aWxkTmF2KClcbnByaW50SG9tZUluZm8oKVxuXG4iLCJsZXQgYnVpbGROYXYgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgbmF2QmFyID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJIb21lXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiQmxvZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcIlByb2plY3RzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiUmVzdW1lXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiQ29udGFjdFwiXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgY29uc3QgbmF2TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmlnYXRpb25MaW5rc1wiKVxuXG4gICAgbmF2QmFyLmZvckVhY2goZnVuY3Rpb24gKG5hdkxpbmspIHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBuZXdJdGVtLmNsYXNzTmFtZSA9IFwibmF2TGlzdF9saW5rXCJcblxuICAgICAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgbmV3TGluay5ocmVmID0gXCIjXCJcbiAgICAgICAgbmV3TGluay5jbGFzc05hbWUgPSBgbmF2TGlzdF9saW5rLS0ke25hdkxpbmsuZGlzcGxheS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgbmV3TGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYXZMaW5rLmRpc3BsYXkpKVxuXG4gICAgICAgIG5ld0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgbGV0IHNlY3Rpb25OYW1lID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5zcGxpdChcIi0tXCIpWzFdXG4gICAgICAgICAgICBsZXQgc2VjdGlvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbk5hbWUpXG5cbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpKS5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VjdGlvbkVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3TGluaylcblxuICAgICAgICBuYXZMb2NhdGlvbi5hcHBlbmRDaGlsZChuZXdJdGVtKVxuICAgIH0pXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZE5hdiIsImxldCBob21lRGF0YWJhc2UgPSByZXF1aXJlKFwiLi4vaG9tZS9ob21lLWRhdGFiYXNlXCIpXG5sZXQgYmxvZ0RhdGFiYXNlID0gcmVxdWlyZShcIi4uL2Jsb2cvYmxvZ3MtZGF0YWJhc2VcIilcbmxldCBwcm9qZWN0c0RhdGFiYXNlID0gcmVxdWlyZShcIi4uL3Byb2plY3RzL3Byb2plY3RzLWRhdGFiYXNlXCIpXG5sZXQgcmVzdW1lRGF0YWJhc2UgPSByZXF1aXJlKFwiLi4vcmVzdW1lL3Jlc3VtZS1kYXRhYmFzZVwiKVxubGV0IGNvbnRhY3REYXRhYmFzZSA9IHJlcXVpcmUoXCIuLi9jb250YWN0L2NvbnRhY3QtZGF0YWJhc2VcIilcblxuXG5sZXQgcHJvZmVzc2lvbmFsRGF0YWJhc2UgPSB7XG4gICAgXCJob21lXCI6IGhvbWVEYXRhYmFzZSxcbiAgICBcImJsb2dcIjogYmxvZ0RhdGFiYXNlLFxuICAgIFwicHJvamVjdHNcIjogcHJvamVjdHNEYXRhYmFzZSxcbiAgICBcInJlc3VtZVwiOiByZXN1bWVEYXRhYmFzZSxcbiAgICBcImNvbnRhY3RcIjogY29udGFjdERhdGFiYXNlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvZmVzc2lvbmFsRGF0YWJhc2VcblxuXG4iLCJsZXQgcHJvamVjdHNEYXRhYmFzZSA9IFtcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJsaW5rXCI6IFwiXCJcbiAgICB9XG5dXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvamVjdHNEYXRhYmFzZSIsImxldCByZXN1bWVEYXRhYmFzZSA9IFtcbiAgICB7XG4gICAgICAgIFwiam9iVGl0bGVcIjogXCJcIixcbiAgICAgICAgXCJjb21wYW55XCI6IFwiXCIsXG4gICAgICAgIFwiZW1wbG95bWVudERhdGVcIjogXCJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcInNraWxsc1wiOiBcIlwiLFxuXG4gICAgfVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3VtZURhdGFiYXNlXG4iXX0=
