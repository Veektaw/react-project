import Joke from "./body";
import jokesData from "./data";

export default function JokeApp() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  console.log(jokesData);
  return (
    <main>
      <div className="container">{jokeElements}</div>
    </main>
  );
}
