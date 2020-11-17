const Joke = ({ joke }) => {
  return (
    <div>
      <p>{joke.setup}</p>
      <p className="punchline">{joke.punchline}</p>
    </div>
  );
};
export default Joke;
