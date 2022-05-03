const InvariantError = require("../../exceptions/InvariantError");
const { PlaylistPayloadSchema } = require("./schema");

const PlaylistValidator = {
  validatePlaylistsPayload: (payload) => {
    const validationResult = PlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PlaylistValidator;
