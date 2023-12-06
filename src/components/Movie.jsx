const Movie = (props) => {
    return (
      <li className="p-8 m-8 bg-indigo-600 rounded-lg shadow-lg">
        <h2 className="font-bold text-3xl text-yellow-300">{props.title}</h2>
        <h3 className="font-semibold text-2xl text-yellow-200">
          {props.releaseDate}
        </h3>
        <p className="text-white">{props.openingText}</p>
        <p className="text-white">{props.director}</p>
        <p className="text-white">{props.producer}</p>
      </li>
    );
}

export default Movie