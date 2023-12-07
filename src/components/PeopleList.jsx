import People from './People'

const PeopleList = (peeps) => {
    return (
        <ul>
            {peeps.peoples.map((people) => (
                <People
                    key={people.url}
                    name={people.name}
                    birthYear={people.birthYear}
                    gender={people.gender}
                />
            ))}
        </ul>
    )
}

export default PeopleList