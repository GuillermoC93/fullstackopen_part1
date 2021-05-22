import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setAll] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))

  const updateVote = () => {
    const votesCopy = [...allVotes]
    votesCopy[selected] += 1
    setAll(votesCopy)
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>has {allVotes[selected]} votes</p>
      <Button handleClick={updateVote} text="vote" />
      <Button handleClick={() => setSelected(getRandomInt(6))} text="next anecdote" />
    </div>
  )
}

export default App
