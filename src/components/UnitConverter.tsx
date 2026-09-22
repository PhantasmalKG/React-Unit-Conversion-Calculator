function UnitConverter() {
  return (
    <section>
      <h1>Unit Converter</h1>

      <div>
        <label htmlFor="category-selector">Category</label>
        <select id="category-selector">
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="volume">Volume</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>

      <div>
        <label htmlFor="from-value">From</label>
        <div>
          <input id="from-value" type="number" placeholder="Enter value" />
        </div>
        <select>
          <option value="meter">Meter</option>
          <option value="kilometer">Kilometer</option>
          <option value="mile">Miles</option>
          <option value="foot">Foot</option>
          <option value="yard">Yard</option>
        </select>
      </div>

      <button>Convert</button>

      <div>
        <label htmlFor="to-value">To</label>
        <div>
          <select id = "to-unit">
            <option value="meter">Meter</option>
            <option value="kilometer">Kilometer</option>
            <option value="mile">Miles</option>
            <option value="foot">Foot</option>
            <option value="yard">Yard</option>
          </select>
        </div>
      </div>

      <p>Result: 0</p>
    </section>
  )
}

export default UnitConverter
