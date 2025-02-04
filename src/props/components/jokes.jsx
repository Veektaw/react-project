export default function Jokes(props) {
  return (
    <>
      <article>
        {props.start && <h1>{props.start}</h1>}
        <h4>{props.punchline}</h4>
      </article>
    </>
  );
}
