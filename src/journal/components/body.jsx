export default function JournalBody(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.img.src} />
      </div>

      <div>
        <img className="marker" src="/src/images/marker.png" />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>View on google maps</a>
        <h2>{props.title}</h2>
        <p className="trip-dates">{props.date}</p>
        <p>{props.text}</p>
      </div>
    </article>
  );
}
