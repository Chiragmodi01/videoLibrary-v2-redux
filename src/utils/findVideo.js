export const findVideo = (videoId, array) => {
    return array.find((video) => video._id === videoId);
};

export const findVideoInPlaylist = (videosArr, videoId) => {
  return videosArr?.some((video) => video._id === videoId)
};

export const findVideoInLiked = (videosArr, videoId) => {
  return videosArr?.some((video) => video._id === videoId)
};