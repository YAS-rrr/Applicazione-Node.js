// app/repositories/userRepository.js
const User = require('../models/userModel');

class UserRepository {
    constructor() {
        this.users = [];
    }

    findAll() {
        return this.users;
    }

    create(name, email, linkImg, prezzo, disponibilità) {
        const newUser = new User(name, email, linkImg, prezzo, disponibilità);
        this.users.push(newUser);
        return newUser;
    }

    findById(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                return this.users[i];
            }
        }
        return undefined;
    }

    delete(id) {
        let newUsers = [];

        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id !== id) {
                newUsers.push(this.users[i]);
            }
        }

        this.users = newUsers;
    }
}

module.exports = new UserRepository();