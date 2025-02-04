import JournalBody from "./components/body.jsx";
import JournalHeader from "./components/header.jsx";
import data from "./components/data";

export default function Journal() {
  const journalElements = data.map((journal) => {
    return (
      <JournalBody
        key={journal.id}
        img={journal.img}
        title={journal.title}
        country={journal.country}
        googleMapsLink={journal.googleMapsLink}
        dates={journal.dates}
        text={journal.text}
      />
    );
  });
  return (
    <main>
      <JournalHeader />
      <div>{journalElements}</div>
    </main>
  );
}
