import { useRef, useEffect, useState } from 'react';
import Cards from './components/cards/Cards';
import locations from './data/locations';
import './App.css';
import './Controller.css';
import printCards from './data/script'

export default function App() {
  const [user, setUser] = useState("Fisher");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(locations[0].value);

  const salesInput = useRef(null);

  useEffect(() => {
    if (salesInput.current) {
      salesInput.current.focus();
      salesInput.current.select();
    }
  }, []);

  const updateUserName = () => {
    const name = salesInput.current?.value || "";
    setUser(name);
  };

  const updateLocation = () => {
    const locationElement = document.getElementById("location");
    if (locationElement) {
      const location = locationElement.value;
      const locationIndex = locationElement.selectedIndex;
      setCurrentLocation(location);
      setSelectedIndex(locationIndex);
    }
  };

  const locationOptions = locations.map((location) => (
    <option key={location.id} value={location.value}>
      {location.value}
    </option>
  ));

  useEffect(() => {
    document.title = `TFT Card - ${currentLocation.replace(",", "")} - ${user}`;
  }, [currentLocation, user]);

  return (
    <>
      <h1>
        After saving the card, open the Finder and navigate to the 'Downloads' folder. Locate the saved card file, and
        print.
      </h1>
      <div id="controller">
        <input
          onChange={updateUserName}
          value={user}
          id="salesInput"
          type="text"
          maxLength="12"
          placeholder="Enter Name"
          ref={salesInput}
          onClick={() => salesInput.current?.select()}
        />

        <select onChange={updateLocation} id="location" name="location">
          {locationOptions}
        </select>

        <button onClick={printCards} className="print-card">Save Card</button>
      </div>

      <Cards
        user={user}
        locations={locations[selectedIndex]}
        updateLocation={updateLocation}
        selectedIndex={selectedIndex}
      />
    </>
  );
}
