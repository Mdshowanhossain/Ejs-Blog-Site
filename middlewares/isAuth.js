const jwt = require('jsonwebtoken');
require('dotenv').config();

// console.log()



module.exports = async (req, res, next) => {

    const authHeader = req.header("Authorization");
    console.log(authHeader);

    if (!authHeader) {
        res.status(401).json({ error: 'Unauthorized, Access denied! he' })
    }


    try {
        const decodedToken = await jwt.verify(authHeader, process.env.JWT_SECRET);
        req.userId = decodedToken.user._id
        next();

        console.log(decodedToken);
    } catch (err) {
        res.status(401).json({ error: 'Unauthorized, Access denied' });
        console.log(err.message);
    }
}




    // const token = req.headers["authorization"];
    // const token = authHeader && authHeader.split(" ")[1];
    // console.log(token)

    // let authToken = req.headers.authorization

    // if (authToken && authToken == null) {
    //     try {
    //         const token = await authToken.split(' ')[1]
    //         req.user = await jwt.verify(token[1], process.env.JWT_SECRET)
    //     } catch (e) {
    //         console.warn('Invalid token detected.')
    //     }
    // } else {
    //     res.status(401).json({ error: 'token Invalid' })
    // }

