import { useState, useEffect } from "react";
import { useStatePeople, useEffectPeople } from "react";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [peoples, setPeoples] = useStatePeople([])
  // Get movies when the component mounts

  useEffect(() => {
    fetchMoviesHandler();
  }, []);
  useEffectPeople(() => {
    fetchPeoplesHandler();
  }, []);

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
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
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
          id: peopleData.name,
          birthYear: peopleData.birthYear,
          homeworld: peopleData.homeworld,
        };
      });
      setPeoples(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  
  return (
    <div className="flex flex-col items-center text-center bg-slate-500 min-h-screen">
      <div className="items-center pt-10">
        <button
          onClick={fetchMoviesHandler}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Fetch Movies
          </span>
        </button>
        <button
          onClick={fetchPeoplesHandler}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Fetch Characters
          </span>
        </button>
      </div>
      <section className="bg-slate-300 w-[40rem] text-center pt-2 mt-5 round-lg">
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && peoples.length > 0 && <PeopleList peoples={peoples} />}
        {!isLoading && movies.length === 0 && !error && (
          <p className="text-2xl font-semibold">Currently No Movies</p>
        )}
        {!isLoading && peoples.length === 0 && !error && (
          <p className="text-2xl font-semibold">Currently No Characters</p>
        )}
        {!isLoading && error && <p className="text-pink-500">{error}</p>}
        {isLoading && <p className="text-2xl font-semibold">Loading...</p>}
      </section>
    </div>
  );
}

export default App
