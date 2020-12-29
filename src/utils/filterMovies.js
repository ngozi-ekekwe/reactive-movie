export const filterAdultContent = (movies) => {
  return movies.filter((movie) => movie.adult === false)
}