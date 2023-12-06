const Movie = (props) => {
    return (
        <li>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
            <p>{props.director}</p>
            <p>{props.producer}</p>
    </li>
)
}

export default Movie