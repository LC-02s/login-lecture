"use strict";

// const UserStorage = require('../../models/UserStorage');
const User = require('../../models/User');

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
    register: (req, res) => {
        res.render('home/register');
    },
};

const process = {
     login: async (req, res) => {
        const user = new User(req.body);
        const reponse = await user.login();

        return res.json(reponse);

        // const id = req.body.id,
        //     pw = req.body.pw,
        //     response = {};
        
        // const users = UserStorage.getUsers("id", "pw");

        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.pw[idx] === pw) {
        //         response.success = true;
        //         return res.json(response);
        //     };
        // };

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const reponse = user.register();
        
        return res.json(reponse);
    },
};


module.exports = {
    output,
    process,
};