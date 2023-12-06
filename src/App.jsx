import { useState } from "react"
import MovieList from "./components/MovieList"
const App = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandler = async () => {
    // Fetch movies from API and display them in the UI
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films')

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()

      const transformedData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          director: movieData.director,
          producer: movieData.producer,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedData)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }
  
  return (
    <div>
      <div>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </div>
      <section>
        (!isLoading && movies.length > 0 && <MovieList movies={movies} />)
        {!isLoading && movies.length === 0 && !error && (
          <p>Currently No Movies</p>
        )}
      </section>
    </div>
  )
}

export default App