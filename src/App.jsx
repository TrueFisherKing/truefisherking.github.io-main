import { useRef, useEffect, useState } from 'react'; // React hooks for managing state, refs, and side effects
import Cards from './components/cards/Cards'; // Card rendering component
import locations from './data/locations'; // Location data
import './App.css'; // App styling
import './Controller.css'; // Controller-specific styling
import printCards from './data/script'; // Print card functionality

/**
 * App Component
 * Main application component for managing user inputs and rendering the card interface.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  // State variables for managing user name, selected location index, and current location
  const [user, setUser] = useState("Fisher");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(locations[0].value);

  // Ref to the sales input field for focusing and selecting text
  const salesInput = useRef(null);

  /**
   * Focus and select the sales input field when the component mounts.
   */
  useEffect(() => {
    if (salesInput.current) {
      salesInput.current.focus();
      salesInput.current.select();
    }
  }, []);

  /**
   * Update the user's name based on the input field value.
   */
  const updateUserName = () => {
    const name = salesInput.current?.value || "";
    setUser(name);
  };

  /**
   * Update the current location and selected index based on the dropdown selection.
   */
  const updateLocation = () => {
    const locationElement = document.getElementById("location");
    if (locationElement) {
      const location = locationElement.value;
      const locationIndex = locationElement.selectedIndex;
      setCurrentLocation(location);
      setSelectedIndex(locationIndex);
    }
  };

  // Generate location options for the dropdown menu
  const locationOptions = locations.map((location) => (
    <option key={location.id} value={location.value}>
      {location.value}
    </option>
  ));

  /**
   * Update the document title whenever the user or location changes.
   */
  useEffect(() => {
    document.title = `TFT Card - ${currentLocation.replace(",", "")} - ${user}`;
  }, [currentLocation, user]);

  return (
    <>
      {/* Instructions for saving or printing the card */}
      <h1>
        After saving the card, a PDF will be generated with the user's name. You can then save the file in Finder to the Downloads folder or print it.
      </h1>

      {/* Controller for user inputs and location selection */}
      <div id="controller">
        {/* User name input field */}
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

        {/* Location dropdown menu */}
        <select onChange={updateLocation} id="location" name="location">
          {locationOptions}
        </select>

        {/* Save card button */}
        <button onClick={printCards} className="print-card">Save Card</button>
      </div>

      {/* Cards Component */}
      <Cards
        user={user}
        locations={locations[selectedIndex]}
        updateLocation={updateLocation}
        selectedIndex={selectedIndex}
      />
    </>
  );
}
