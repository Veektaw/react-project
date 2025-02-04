export default function JournalBody() {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
        />
      </div>

      <div>
        <img className="logo" src="/src/images/marker.png" />
        <span>Japan</span>
        <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">
          View on google maps
        </a>
        <h2>Mount Fuji</h2>
        <p>12 Jan, 2021 - 24 Jan, 2021</p>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3, 776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
