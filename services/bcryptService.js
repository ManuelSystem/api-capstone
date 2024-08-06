const bcrypt = require('bcrypt');

/**
 * Obtiene una contraseña sin cifrar y de vuelve una contraseña encriptada
 * @param {*} password 
 * @returns 
 */
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

/**
 * Obtiene una contraseña sin encriptar(la que pasa el usuario) y una contraseña cifrada(almacenada en bd) y las compara
 * @param {*} inputPassword 
 * @param {*} storePassword 
 * @returns 
 */
const comparePassword = async (inputPassword, storePassword) => {
    return await bcrypt.compare(inputPassword, storePassword);
}

module.exports = { hashPassword, comparePassword };