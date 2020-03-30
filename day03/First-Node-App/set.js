const Set = {
    secretKey : '101',
    userPass : '123',
    databaseName : 'Nicha'
}
const getSecretKey = () => {
    return Set.secretKey;
}

module.exports.getSecretKey = getSecretKey;
module.exports.userPass = Set.userPass;
module.exports.databaseName = Set.databaseName;