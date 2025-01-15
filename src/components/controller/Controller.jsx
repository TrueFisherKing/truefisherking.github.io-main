import { useState } from "react"
import "./Controller.css"
import locations from "../../data/locations"

export default function Controller(props) {
  console.log(props.selectedIndex);
  
  function doNothingForNow() {
    // do nothing
  }
  

  return (
    <div id="controller">
      <input onChange={props.updateUserName}
        value={props.user}
        id="salesInput"
        type="text"
        maxLength="12"
        placeholder="Enter Name"
      />

      <select onChange={props.updateLocation} id="location" name="location">
        {/* {<option value="Branford, CT">Branford, CT</option>
        <option value="Derby, CT">Derby, CT</option>
        <option value="Fairfield, CT">Fairfield, CT</option>
        <option value="Hamden, CT">Hamden, CT</option>
        <option value="Milford, CT">Milford, CT</option>
        <option value="North Haven, CT">North Haven, CT</option>
        <option value="Orange, CT">Orange, CT</option>} */}
        {props.locationOptions}
      </select>

      <button className="print-card">Save Card</button>
    </div>
  )
}