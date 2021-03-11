"use strict";
/**
 * Image metadata functions
 */
const Jimp = require("jimp");

const getDimensions = (buffer) =>
  Jimp.read(buffer)
    .then((image) => {
      return {
        width: image.bitmap.width,
        height: image.bitmap.height,
      };
    })
    .catch(() => ({})); // ignore errors

const optimize = async (buffer) => {
  return { buffer };
};

module.exports = {
  getDimensions,
  optimize,
};
