let users = {
    userName: 'Fadil',
    password: 'Test.123'
}

let online = true


let Loggedin = document.querySelector('#loginForm')

let loginBtn = document.querySelector('#loginBtn')
loginBtn.addEventListener('click', (e) => {
    online ? isOnline() : 
})

//Selectar du logut knappen
let logOutBtn = document.querySelector('#logoutBtn')

logOutBtn.addEventListener('click', e => {

})








// selecta div
let userMsg = document.querySelector('#userMsg')
// skapar h1 tag
let msg = document.createElement('h1')



//Loggaut knapp
//Skapa en loggaut knapp
let btn = document.createElement('button')
//Ge knaappen texten "log Out"!
btn.textContent = 'Log Out'
//Ge knappen ett id
btn.setAttribute('id', 'logoutBtn')





let isOnline = () => {

    document.querySelector('#userNameInput').value ===
        users.userName &&
        document.querySelector('#userPassInput').value
        ===
        users.password
        ?

        (
            msg.textContent = 'You are Loged in!')
        + (userMsg.appendChild(msg))
        + userMsg.appendChild(logOutBtn)
        + Loggedin.remove()
        :
        (msg.textContent = 'You have entered wrong credentials!') + userMsg.appendChild(msg)
}


