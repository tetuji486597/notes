import Header from "./Header"
import Content from "./Content"

const Course = ({course}) => {
    return (
        <>
            <Header text={course.name}></Header>
            <Content content={course.parts}></Content>
        </>
    )
}

export default Course;