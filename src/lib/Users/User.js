const Users = require("../../modals/Users");

const checkDuplicateUser = async (user) => {
    const query = { email: user.email }
    const axistingUser = await Users.findOne(query);
    return axistingUser
}
module.exports= checkDuplicateUser