const argon = require("argon2");

// password

async function hashPassword(password) {
    try {
        const hash = await argon.hash(password);
        return hash
    }catch (err){
        next(err);
    }
}

// export

module.exports = {
    hashPassword
}