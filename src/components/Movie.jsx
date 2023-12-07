const Movie = (props) => {
    return (
      <li className="p-8 m-8 bg-black/50 rounded-lg shadow-lg">
        <h2 className="font-bold text-3xl text-blue-400">{props.title}</h2>
        <h3 className="font-semibold text-2xl text-blue-900">
          {props.releaseDate}
        </h3>
        <p className="text-blue-200">{props.openingText}</p>
      </li>
    );
}

export default Movie