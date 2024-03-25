import { RegisterSection } from "./RegisterSection";
import { EntrySection } from "./EntrySection";
import { useState } from "react";

export const FinanceSection = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entryData) => {
    const newEntry = { ...entryData, id: crypto.randomUUID() };
    const newEntries = [...entries, newEntry];
    setEntries(newEntries);
  };

  const removeEntry = (entryId) => {
    const filteredEntries = entries.filter((entry) => entry.id !== entryId);

    setEntries(filteredEntries);
  };

  return (
    <section>
      <RegisterSection addEntry={addEntry} />
      <EntrySection entries={entries} removeEntry={removeEntry} />
    </section>
  );
};
