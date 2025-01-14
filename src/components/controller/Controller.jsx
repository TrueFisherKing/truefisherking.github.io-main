import "./Controller.css"
export default function Controller() {
  function doNothingForNow() {

  }
  return (
    <div id="controller">
      <input onChange={doNothingForNow}
        value="Fisher"
        id="salesInput"
        maxLength="11"
        className="sales-input"
        type="text"
        placeholder="Enter Name"
      />

      <select id="location" name="location">
        <option value="Branford, CT">Branford, CT</option>
        <option value="Derby, CT">Derby, CT</option>
        <option value="Fairfield, CT">Fairfield, CT</option>
        <option value="Hamden, CT">Hamden, CT</option>
        <option value="Milford, CT">Milford, CT</option>
        <option value="North Haven, CT">North Haven, CT</option>
        <option value="Orange, CT">Orange, CT</option>
      </select>

      <button className="print-card">Save Card</button>
    </div>
  )
}