import JournalBody from "../components/body";
import JournalHeader from "../components/header";
import TimeOfDay from "./date";

export default function Journal() {
  return (
    <>
      <JournalHeader />
      <JournalBody />
      <h1>
        Good <TimeOfDay /> my guy
      </h1>
    </>
  );
}
