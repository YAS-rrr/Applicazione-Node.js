// app/repositories/userRepository.js
const User = require('../models/userModel');

class UserRepository {
    constructor() {
        this.users = [];
    }

    findAll() {
        return this.users;
    }

    create(name, email, linkImg, quantità, prezzo) {
        const newUser = new User(name, email, linkImg, quantità, prezzo);
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

    sellUser(id) {
        const user = this.findById(id);
        if (user && user.quantità > 0) {
            user.quantità -= 1;
        }
    }
    

    restockUser(id) {
        const user = this.findById(id);
        if (user) {
            user.quantità += 1;
        }    
    }       


}       




module.exports = new UserRepository();