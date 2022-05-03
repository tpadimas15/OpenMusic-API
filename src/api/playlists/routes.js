const routes = (handler) => [
  {
    method: "POST",
    path: "/playlists",
    handler: handler.postPlaylistHandler,
    options: {
      auth: "playlist_jwt",
    },
  },
  {
    method: "GET",
    path: "/playlists",
    handler: handler.getPlaylistsHandler,
    options: {
      auth: "playlist_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/playlists/{playlistId}",
    handler: handler.deletePlaylistHandler,
    options: {
      auth: "playlist_jwt",
    },
  },
];

module.exports = routes;
