const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');

        const checkUser = await db.find_user_by_username(username);
        const user = checkUser[0];

        if (user) {
            return res.status(409).send('User exists. Please sign in')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const registeredUser = await db.create_user(username, hash, `https://robohash.org/${username}.png`)
        const userSesh = registeredUser[0];
        req.session.user = userSesh;

        return res.status(201).send(req.session.user)

    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');

        const checkUser = await db.find_user_by_username(username);
        const user = checkUser[0]
        // console.log(user)
        if (!user) {
            return res.status(401).send(`${username} not found. Please register`)
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password)

        if (!isAuthenticated) {
            return res.status(403).send('Incorrect Password')
        }

        req.session.user = user;
        return res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        res.session.destroy();
        res.status(200).send(req.session.user);
    },
    getUser: (req, res) => {
        if (req.session.user) {
            return res.status(200).send(req.session.user)
        }
        return res.status(404).send('Not Found')
    }
}