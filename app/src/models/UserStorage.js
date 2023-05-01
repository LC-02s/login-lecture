"use strict"

class UserStorage {
    static #users = {
        id: ["call", "chanlee", "김부장쓰벌롬" ],
        pw: ["1", "1007", "999" ],
        name: ["추", "찬", "김부장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // console.log(newUsers, field);
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {});
        return newUsers;
    };
};

module.exports = UserStorage;