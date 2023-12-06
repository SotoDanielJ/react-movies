const People = (props) => {
  return (
    <li className="p-8 m-8 bg-indigo-600 rounded-lg shadow-lg">
      <h2 className="font-bold text-3xl text-yellow-300">{props.birthYear}</h2>
      <h3 className="font-semibold text-2xl text-yellow-200">
        {props.homeworld}
      </h3>
    </li>
  );
};
export default People;
