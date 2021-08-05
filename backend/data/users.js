const bcrypt = require('bcryptjs');

const User = [
    {
        name: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: "raj",
        email: 'raj@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: "user",
        email: 'user@email.com',
        password: bcrypt.hashSync('123456',10)
    }
];

module.exports = User