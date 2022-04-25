const AlbumsHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "albums",
  version: "1.0.0",
  register: async (server, { service, valitador }) => {
    const albumsHandler = new AlbumsHandler(service, valitador);
    server.route(routes(albumsHandler));
  },
};
