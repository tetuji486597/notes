import Part from "./Part"

const Content = ({content}) => {
    return (
        <>
            {content.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}></Part>)}
            <p>total of {content.reduce((accumulator, current) => accumulator + current.exercises, 0)} exercises</p>
        </>
    )
}

export default Content;