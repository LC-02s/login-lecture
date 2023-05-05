"use strict"

const idEl = document.getElementById("id"),
    nameEl = document.getElementById("name"),
    pwEl = document.getElementById("pw"),
    confirmPwEl = document.getElementById("confirm-password"),
    registerBtnEl = document.getElementById("registerBtn");

registerBtnEl.addEventListener('click', register);

function register() {
    if (!idEl.value) return alert("아이디를 입력해주십시오.");
    if (!nameEl.value) return alert("이름을 입력해주십시오.");
    if (!pwEl.value) return alert("비밀번호를 입력해주십시오.");
    if (pwEl.value !== confirmPwEl.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: idEl.value,
        name: nameEl.value,
        pw: pwEl.value,
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