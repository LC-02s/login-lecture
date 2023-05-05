"use strict"

const idEl = document.getElementById("id"),
    nameEl = document.getElementById("name"),
    pwEl = document.getElementById("pw"),
    confirmPwEl = document.getElementById("confirm-password"),
    registerBtnEl = document.getElementById("registerBtn");

registerBtnEl.addEventListener('click', register);

function register() {
    const req = {
        id: idEl.value,
        name: nameEl.value,
        pw: pwEl.value,
        confirmPw: confirmPwEl.value,
    };

    console.log(JSON.stringify(req));

    fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        };
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
};