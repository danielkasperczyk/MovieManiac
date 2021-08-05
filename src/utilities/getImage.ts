const getImage = (size = 'original', path: string): string => {
  let imagePath = '';

  switch (size) {
    case 'original':
      imagePath = `https://image.tmdb.org/t/p/original/${path}`;
      break;
    case 'small':
      imagePath = `https://image.tmdb.org/t/p/w500/${path}`;
      break;
    case 'poster':
      imagePath = `https://image.tmdb.org/t/p/w342/${path}`;
      break;
    default:
      break;
  }
  return imagePath;
};

export default getImage;
