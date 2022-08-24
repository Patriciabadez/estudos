const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.texContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))

}
function addNewUser(newUser) {
    axios.post(url,newUser)
    .then(response =>{

    })
    console.log(response)

    .catch(error => console.error(error))
}
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response =>{
        userName.textContent =response.data.name
        userCity.textContent =response.data.city
        userID.texContent = response.data.id
        userAvatar.src = response.data.avatar

    })
    .catch(error => console.error(error))
}
function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`,userUpdated
    )
    .then(response=>console.log(response))
    .catch(error =>console.error(error))
}

// updateUser(3,userUpdated)
function deleteUser (id) {
    axios.delete(`${url}/${id}`)
    .then(response =>console.log(response))
    .catch(error => console.error(error))

}

const newUser = {
    name:"Patricia Dias",
    avatar:"https://picsum.photos/id/237/200/300",
    city:"Porto Alegre"
}
// addNewUser(newUser)

const userUpdated = {
    name: "Marcelo Calvis",
    avatar:"https://picsum.photos/id/237/200/300",
    city:"São Paulo"
}

deleteUser(4)
getUsers(1)
getUser(1)

