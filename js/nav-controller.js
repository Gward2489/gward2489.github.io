let storedNav = JSON.parse(localStorage.getItem("navString"))

let navMarker = document.getElementById("navLocation")

for (i = 0; i < storedNav.length; i++) {
    let currentNav = storedNav[i]
    navMarker.innerHTML += `
    <button class="${currentNav.className} navButton"
    onclick="location.href = '${currentNav.linkName}'">
    ${currentNav.tabName}</button>`
}

