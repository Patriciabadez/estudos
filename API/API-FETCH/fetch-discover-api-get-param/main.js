// const url ="https://api.github.com/users/PatriciaBadez"
const url ="http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data =>renderApiResult.textContent=JSON.stringify(data))
    .catch(error => console.log(error))
}
function getUser() {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
       return renderApiResult.textContent=JSON.stringify(data.avatar)

    })
    .catch(error => console.error(error))
}
getUsers()
getUser()

