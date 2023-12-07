const People = (peeps) => {
  return (
    <li className="p-8 m-8 bg-black/50 rounded-lg shadow-lg col">
      <h2 className="font-bold text-3xl text-blue-400">{peeps.name}</h2>
      <h3 className="font-semibold text-2xl text-blue-900">
        {peeps.birthYear}
      </h3>
      <p className="text-blue-200">{peeps.gender}</p>
    </li>
  );
};
export default People;
