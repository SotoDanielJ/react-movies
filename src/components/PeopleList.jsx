import People from './People'

const PeopleList = (props) => {
    return (
        <ul>
            {props.peoples.map((people) => (
                <People
                    key={people.name}
                    birthYear={people.birthYear}
                    homeworld={people.homeworld}
                />
            ))}
        </ul>
    )
}

export default PeopleList