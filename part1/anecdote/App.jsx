import { useState } from 'react'

const Header = (props) => {
    return (
        <div>
            <h2>{props.headersApp.name}</h2>
        </div>
    )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
    

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const headers = [
        { name: "Anectadote of the day" },
        { name: "Anectadote with most votes"}
    ]

    const pointsArray = Array(anecdotes.length).fill(0)
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(pointsArray)
    const copyPoints = [...points]
    console.log(copyPoints)
    
    const getRandomPosition = (maxLength) => Math.floor(Math.random() * maxLength)
    
    const handleClickVotes = () => {
        copyPoints[selected] += 1
        setPoints(prevState => (prevState, copyPoints))
    }

    const getAnecdote = () => {
        let olderVotes = 0
        let position
        // copyPoints[selected]
        
        for (let i = 0; i <= copyPoints.length; i++) {
            if (copyPoints[i] > olderVotes) {
                olderVotes = copyPoints[i]
                position = i
            }
        }
        console.log("Mayor cantidad de votos: ", olderVotes)
        console.log("Corresponde a la frase: ", anecdotes[position])
        console.log("en la posicion: ", position)
        return position
    }
    
    return (
        <div>
            <Header headersApp={headers[0]} />
            <p>{anecdotes[selected]}</p>
            <p>has {points[selected]} votes </p>
            <div>
                <Button onClick={handleClickVotes} text="vote" />
                <Button onClick={() => setSelected(getRandomPosition(anecdotes.length))} text="next anecdote" />
            </div>
            <Header headersApp={headers[1]} /> 
            <p>{anecdotes[getAnecdote()]}</p>   
            <p>has {copyPoints[getAnecdote()]} votes</p> 
        </div>
  )
}

export default App