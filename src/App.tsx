import { FC, useState } from "react";
import LiveSearch from "./LiveSearch";

interface Props {}
const profiles = [
  { id: "1", name: "Allie Grater" },
  { id: "2", name: "Aida Bugg" },
  { id: "3", name: "Gabrielle" },
  { id: "4", name: "Grace" },
  { id: "5", name: "Hannah" },
  { id: "6", name: "Heather" },
  { id: "7", name: "John Doe" },
  { id: "8", name: "Anne Teak" },
  { id: "9", name: "Audie Yose" },
  { id: "10", name: "Addie Minstra" },
  { id: "11", name: "Anne Ortha" },
  { id: "12", name: "Daisy" },
  { id: "13", name: "Elizabeth" },
  { id: "14", name: "Eve" },
  { id: "15", name: "Fiona" },
  { id: "16", name: "Gloria" },
  { id: "17", name: "Holly" },
  { id: "18", name: "Iris" },
  { id: "19", name: "Jane Doe" },
  { id: "20", name: "Katie" },
  { id: "21", name: "Lily" },
  { id: "22", name: "Mandy" },
  { id: "23", name: "Nancy" },
  { id: "24", name: "Olivia" },
  { id: "25", name: "Phoebe" },
  { id: "26", name: "Quinn" },
  { id: "27", name: "Ruby" },
  { id: "28", name: "Sally" },
  { id: "29", name: "Tara" },
];

const App: FC<Props> = (props): JSX.Element => {
  const [results, setResults] = useState<{ id: string; name: string }[]>();
  const [selectedProfile, setSelectedProfile] = useState<{
    id: string;
    name: string;
  }>();

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = profiles.filter((profile) =>
      profile.name.toLowerCase().startsWith(target.value)
    );
    setResults(filteredValue);
  };
  return (
    <LiveSearch
      results={results}
      value={selectedProfile?.name}
      renderItem={(item) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
  );
};

export default App;
