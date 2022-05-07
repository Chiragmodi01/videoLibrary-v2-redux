export const findVideo = (videoId, array) => {
    return array.find((video) => video._id === videoId);
  };