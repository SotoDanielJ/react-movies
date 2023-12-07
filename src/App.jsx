import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import PeopleList from "./components/PeopleList";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [peoples, setPeoples] = useState([])

  useEffect(() => {
    fetchMoviesHandler();
  }, []);
  
  useEffect(() => {
    fetchPeoplesHandler();
  },[]);
    
  const fetchMoviesHandler = async () => { 
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      });
      setMovies(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  
  const fetchPeoplesHandler = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        "https://swapi.dev/api/people"
      )
      
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      
      const transformedData = data.results.map((peopleData) => {
        return {
          id: peopleData.url,
          name: peopleData.name,
          birthYear: peopleData.birth_year,
          gender: peopleData.gender,
        };
      });
      setPeoples(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  
  return (
    <div className="flex flex-col items-center text-center bg-fixed bg-[url('/public/marc-schulte-galaxy-unsplash.jpg')] bg-contain bg-center">
      <div className="flow-root flex-row w-full justify-center text-center items-center fixed pt-4 pb-4 bg-fixed bg-[url('/public/marc-schulte-galaxy-unsplash.jpg')] bg-contain bg-center space-x-2">
        <button
          onClick={fetchMoviesHandler}
          className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Fetch Movies
          </span>
        </button>
        <button
          onClick={MusicPlayer}
          className="relative inline-flex items-center justify-center p-0.5   overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 basis-"
        >Click Me</button>
        <button
          onClick={fetchPeoplesHandler}
          className="relative inline-flex items-center justify-center p-0.5   overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 basis-"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Fetch Characters
          </span>
        </button>
      </div>
      <section className="flex flex-row text-center text pt-10 round-lg">
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && peoples.length > 0 && <PeopleList peoples={peoples} />}
        {!isLoading && movies.length === 0 && !error && (
          <p className="text-2xl font-semibold">Currently No Movies</p>
        )}
        {!isLoading && peoples.length === 0 && !error && (
          <p className="text-2xl font-semibold">Currently No Characters</p>
        )}
        {!isLoading && error && <p className="text-pink-500">{error}</p>}
        {isLoading && (
          <p className="text-2xl text-blue-500 font-semibold pt-10 pb-10">
            Loading...
          </p>
        )}
      </section>
    </div>
  );
}

export default App


