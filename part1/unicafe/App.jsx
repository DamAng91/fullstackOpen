import { useState } from "react"

//Headers
const Headers = (props) => <h2>{props.headerApp}</h2>
//Buttons
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticsLine = (props) => {
    const text = props.text
    const statisticsLine = props.statisticsStatistics 

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{text}</td>
                        <td>{statisticsLine}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


const Statistics = (props) => {
    const statistics = props.statisticsApp //object
    
    if (statistics.all == 0)
        return (
            <div>
                <p>No feed back given</p>
            </div>
        )
    return (
        <div>
            <StatisticsLine text="good" statisticsStatistics={statistics.good} />
            <StatisticsLine text="neutral" statisticsStatistics={statistics.neutral} />
            <StatisticsLine text="bad" statisticsStatistics={statistics.bad} />
            <StatisticsLine text="all" statisticsStatistics={statistics.all} />
            <StatisticsLine text="average" statisticsStatistics={statistics.average} />
            <StatisticsLine text="positive" statisticsStatistics={statistics.positive + "%"} />
        </div>
    )
}

const App = () => {
    const headers = [
        {feeadback: "give feedback"},
        {statistics: "statistics"},
    ]
    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const statistics = {
        good: good,
        neutral: neutral,
        bad: bad,
        all: good + neutral + bad,
        average: (good - bad) / (good + neutral + bad),
        positive: good * 100 / (good + neutral + bad)
    }

    console.log("object ", statistics)

    return (
        <div>
            <Headers headerApp={headers[0].feeadback} />
            <Button onClick={() => setGood(good + 1)} text="good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button onClick={() => setBad(bad + 1)} text="bad" />
            <Headers headerApp={headers[1].statistics} />
            <Statistics statisticsApp={statistics} />
        </div>
    )
}

export default App
