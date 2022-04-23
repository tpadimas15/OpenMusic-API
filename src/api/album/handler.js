class AlbumsHandler {
  constructor(service) {
    this._service = service;
  }

  postAlbumHandler(request, h) {
    try {
      const { name, year } = request.payload;

      this._service.addAlbum({ name, year });

      const albumId = this._service.addAlbum({ name, year });

      const response = h.response({
        status: "success",
        message: "Successfully added Album",
        data: {
          albumId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }
  getAlbumByIdHandler() {
    try {
      const { id } = request.params;
      const album = this._service.getAlbumById(id);
      return {
        status: "success",
        data: {
          album,
        },
      };
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
  putAlbumByIdHandler() {
    try {
      const { id } = request.params;

      this._service.editAlbumById(id, request.payload);

      return {
        status: "success",
        message: "Successfully Edited Album",
      };
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
  deleteAlbumByIdHandler() {
    try {
      const { id } = request.params;
      this._service.deleteAlbumById(id);
      return {
        status: "success",
        message: "Successfully Deleted Album",
      };
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: "Failed Deleted Album. Id not found",
      });
      response.code(404);
      return response;
    }
  }
}

module.exports = AlbumsHandler;