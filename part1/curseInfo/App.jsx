const Header = (props) => {
    console.log(props)
    return (
        <h1>
            {props.courseApp}
        </h1>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.partsContent[0].name} {props.partsContent[0].exercises}
            </p>
            <p>
                {props.partsContent[1].name} {props.partsContent[1].exercises}
            </p>
            <p>
                {props.partsContent[2].name} {props.partsContent[2].exercises}
            </p>
        </div>
    )
}
/* Abstraigo Content a Part */
const Content = (props) => {
    
    return (
        <Part partsContent={props.partsApp} />
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                Number of exercise {props.totalExercisesApp[0].exercises + props.totalExercisesApp[1].exercises + props.totalExercisesApp[2].exercises}
            </p>
        </div>
    )
}

/* Abstraigo App en Total, Content y Header */
const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14 
        }  
    ]
    
    return (
        <div>
            <Header courseApp={course} />
            <Content partsApp = {parts} /> 
            <Total totalExercisesApp={parts} />
        </div>
    )
}

export default App
