document.addEventListener("DOMContentLoaded", () =>{
   
const form = document.getElementById('github-form');
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log(e)
    getUsers(e.target[0].value)
    
})
})
function getUsers(username) {
    fetch(`https://api.github.com/search/users?q=${username}`,{
        method: "GET",
        headers: {
            Accept: "application/vnd.github.v3+json"
        }
    }
    )
    .then(resp => resp.json())
    .then(resp => console.log('response', resp))
}