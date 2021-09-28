const checkLogin = async (req, res, next) => {
    const { authorization } = req.body;

    try {
        console.log(authorization)
        // const token = authorization.split(' ')[1];
        // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // const { userId, userFirstName, userLastName } = decodedToken;

        // req.userId = userId;
        // req.userFirstName = userFirstName;
        // req.userLastName = userLastName;

    } catch (err) {
        console.log(err)
    }
}
module.exports = checkLogin;


// userId: findPeople._id,
// userFirstName: findPeople.firstname,
// userLastName: findPeople.lastname,