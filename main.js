const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(res => {
        apiResult.textContent = JSON.stringify(res.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(res => {
        console.log(res.data)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(res => {
        const  data = res.data

        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    }).catch(error => console.error(error))
}

function updatedUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(res => console.log(res)).catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(res => console.log(res))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Marcelo Calvo",
    avatar: "https://picsum.photos/200/300",
    city: "Brasilia"
}

deleteUser(14)

getUsers()
getUser(3)

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Valparaiso"
}

//updatedUser(3, userUpdated)
//addNewUser(newUser)
/*

-----------------FETCH

function getUsers() {
    fetch(url)
    .then(res => res.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}/1`)
    .then(res => res.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updatedUser(updatedUser) {
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "Wander Zars",
    avatar: "https://picsum.phothos/200/300",
    city: "Rio do Sul"
}

// addUser(newUser)

const updateUser = {
    name: "Marcelo Clovis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

// updatedUser(updateUser)

deleteUser(5)

getUsers()
getUser(9)
*/