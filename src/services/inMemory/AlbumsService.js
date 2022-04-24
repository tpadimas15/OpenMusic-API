const { nanoid } = require("nanoid");

class AlbumsService {
  constructor() {
    this._albums = [];
  }

  addAlbum({ name, year }) {
    const id = nanoid(16);

    const newAlbum = {
      id,
      name,
      year,
    };

    this._albums.push(newAlbum);

    const isSuccess = this._albums.filter((album) => album.id === id).length > 0;

    if (!isSuccess) {
      throw new Error("Album failed to add");
    }

    return id;
  }

  getAlbumById(id) {
    const album = this._albums.filter((alb) => alb.id === id)[0];
    if (!album) {
      throw new Error("Album not found");
    }
    return album;
  }

  editAlbumById(id, { name, year }) {
    const index = this._albums.findIndex((alb) => alb.id === id);

    if (index === -1) {
      throw new Error("Failed to Update Album. Id not found");
    }

    this._albums[index] = {
      ...this._albums[index],
      name,
      year,
    };
  }

  deleteAlbumById(id) {
    const index = this._albums.findIndex((alb) => alb.id === id);

    if (index === -1) {
      throw new Error("Failed to Delete Album. Id not found");
    }

    this._albums.splice(index, 1);
  }
}

module.exports = AlbumsService;
