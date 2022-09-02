const Joke = ({ joke, punchline }) => {
    
    return (
        <div className="joke-wrapper">
            {joke && <h3>{joke}</h3>}
            <p>{punchline}</p>
            <hr></hr>
        </div>
    )
}

export default Joke