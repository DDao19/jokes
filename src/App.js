/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

import Joke from './components/Joke.js'

const App = () => {
  return (
    <div className="App">
      <Joke 
        joke="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />

      <Joke 
        joke="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />

      <Joke 
        joke="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />

      <Joke 
        joke="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />

      <Joke 
        punchline="So I went to the bar last night"
      />

      <Joke 
        joke="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>
  )
}

export default App;
