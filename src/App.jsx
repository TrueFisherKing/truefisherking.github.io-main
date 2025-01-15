import { useState } from 'react'
import Cards from './components/cards/Cards'
import locations from './data/locations'
import './App.css'
import './Controller.css'

export default function App() {
  const [user, setUser] = useState("Fisher")

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [currentLocation, setCurrentLocation] = useState(locations[0].value)

  function updateUserName() {
    let name = document.getElementById("salesInput").value
    setUser(name)
  }

  function updateLocation() {
    let location = document.getElementById("location").value
    setCurrentLocation(location)

    let locationIndex = document.getElementById("location").selectedIndex
    setSelectedIndex(locationIndex)
  }

  // No need to change the code below when working on this task
  const locationOptions = locations.map((location) => (
    <option key={location.id} value={location.value}> {location.value} </option>)
  )

  document.querySelector("title").innerText = `TFT Card - ${currentLocation.replace(",", "")} - ${user}`

  return (
    <>
      <h1>After saving the card, open the Finder and navigate to the 'Downloads' folder. Locate the saved card file, and
        print.</h1>
      <div id="controller">
        <input onChange={updateUserName}
          value={user}
          id="salesInput"
          type="text"
          maxLength="12"
          placeholder="Enter Name"
        />

        <select onChange={updateLocation} id="location" name="location">
          {locationOptions}
        </select>

        <button className="print-card">Save Card</button>
      </div>
      <Cards
        user={user}
        locations={locations[selectedIndex]}
        updateLocation={updateLocation}
        selectedIndex={selectedIndex}
      />
    </>
  )
}
