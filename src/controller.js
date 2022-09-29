const databaseConnection = require('../database'); // import databse file

const createUser = (request, response) => {
    const data = {
        name: request.body.name,
        address: request.body.address,
        phone: request.body.phone,
        email: request.body.email,
        password: request.body.password,
    }
    const insertData = "INSERT INTO student SET ? ";
    databaseConnection.query(insertData, data, (err, result) => {
        if(err) throw err;
        return response.send(apiResponse(result));
    })
    console.log(data)

    return data;

}

const updateUser = () => {

}

function apiResponse(result){
    return JSON.stringify({ "status": 200, "error": null, 
    "response": result })

    return responseData;
}

module.exports = {
    createUser,
    updateUser
}