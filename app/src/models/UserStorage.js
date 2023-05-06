"use strict"

const fs = require('fs').promises;

class UserStorage {
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // console.log(newUsers, field);
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUserInfo(id) {
        // const users = this.#users;
        return fs.readFile('./src/databases/users.json')
        .then((data) => {
            const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const userKeys = Object.keys(users); // -> [id, pw, name]
            const userInfo = userKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
    
            return userInfo;
        })
        .catch(console.error);


        // , (err, data) => {
        //     if (err) throw err;
        //     const users = JSON.parse(data);

        //     const idx = users.id.indexOf(id);
        //     const userKeys = Object.keys(users); // -> [id, pw, name]
        //     const userInfo = userKeys.reduce((newUser, info) => {
        //         newUser[info] = users[info][idx];
        //         return newUser;
        //     }, {});
    
        //     return userInfo;
        // });
    };

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return { success: true };
    };
};

module.exports = UserStorage;