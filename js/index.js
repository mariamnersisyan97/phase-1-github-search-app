// const form = document.getElementById('github-form');
// form.addEventListener("submit", (e) => {
//     e.preventDefault(); 
//     console.log(e)
//     // getUsers(e.target[0].value)
//     displayUser();
// })

// function getUsers(username) {
//     fetch(`https://api.github.com/search/users?q=${username}`,{
//         method: "GET",
//         headers: {
//             Accept: "application/vnd.github.v3+json"
//         }
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log("login", response.items[0].login)
//     })
// }

// function displayUser(){
//    const userList = document.getElementById('user-list');
//    console.log(userList)
// }


const form = document.getElementById('github-form');
form.addEventListener("submit", (event)=> {
    event.preventDefault();;
    fetch(`https://api.github.com/search/users?q=${event.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        // console.log("login", response.items[0].login)
        //login, avatar, profile(url)
        response.items.map(item => {
            const li = document.createElement("li");
            const h2 = document.createElement("h2");
            h2.textContent = item.login

            h2.addEventListener("click", e => showUserRepos(item.login, e))
            console.log("works")
            const img = document.createElement("img");
            img.src = item.avatar_url
            
           
            const userList = document.getElementById("user-list");
            li.append(h2, img)
            userList.append(li)
        })
    })
})

function showUserRepos(username, e) {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(response => response.map(repo => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        h1.textContent = repo.name
        const repoList = document.getElementById("repos-list")
        li.append(h1)
        repoList.append(li)
    }))
}