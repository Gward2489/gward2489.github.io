let professionalDatabase = require("../main/professional-database")

let printHomeInfo = function () {
    let homeEl = document.getElementById("home")

    homeEl.innerHTML += `
    <h1>${professionalDatabase.home.welcomeText}</h1>
    <h2>${professionalDatabase.home.siteInfo}</h2>
    `
}

module.exports = printHomeInfo

