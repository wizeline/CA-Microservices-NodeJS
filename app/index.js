import App from './server';

/**
 * The port on which the server will listen.
 * @type {number}
 */
const { PORT } = process.env;

/**
 * Start the server and listen on the specified port.
 * @function
 * @name startServer
 * @param {number} port - The port number on which the server will listen.
 * @param {Function} callback - A callback function to be executed once the server is listening.
 * @returns {void}
 */
App.listen(PORT, () => {
  console.log(`App listen at http://localhost:${process.env.PORT}`);
});
