"use strict"

const idEl = document.getElementById("id"),
    pwEl = document.getElementById("pw"),
    loginBtnEl = document.getElementById("loginBtn");

loginBtnEl.addEventListener('click', login);

function login() {
    const req = {
        id: idEl.value,
        pw: pwEl.value,
    };
    console.log(`id : ${req.id}, pw : ${req.pw}`);
    // console.log(JSON.stringify(req));

    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};