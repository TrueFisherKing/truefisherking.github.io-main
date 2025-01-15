import { useState } from 'react'
import Controller from './components/controller/Controller'
import Cards from './components/cards/Cards'
import locations from './data/locations'
import './App.css'

export default function App() {

  const [user, setUser] = useState("Fisher")
  const [selectedIndex, setSelectedIndex] = useState(0)
  // console.log(currentLocation);
  let locationOption = document.getElementById("location")
  const [currentLocation, setCurrentLocation] = useState(locationOption.selectedIndex)

  function updateLocationIndex(){
    let locationIndex = locationOption.selectedIndex
    console.log(locationIndex);
  }
  function updateUserName() {
    let name = document.getElementById("salesInput").value
    setUser(name)
  }

  function updateLocation() {
    let location = locationOption.value
    console.log(locationOption.selectedIndex);
    
    setCurrentLocation(location)
  }

  // No need to change the code below when working on this task
  const locationOptions = locations.map((location) => (
    <option key={location.id} value={location.value}> {location.value} </option>)
  )

  return (
    <>
      <h1>After saving the card, open the Finder and navigate to the 'Downloads' folder. Locate the saved card file, and
        print.</h1>
      <Controller
        user={user}
        updateUserName={updateUserName}
        location={currentLocation}
        locationOptions={locationOptions}
        updateLocation={updateLocation}
      />
      <Cards
        user={user}
        updateUserName={updateUserName}
        currentLocation={currentLocation}
        updateLocation={updateLocation}
        locations={locations}
      />
    </>
  )
}
