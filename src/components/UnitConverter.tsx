import React from 'react'

function UnitConverter() {
  return (
    <section>
      <h1>Unit Converter</h1>

      <div>
        <label htmlFor="value">Category</label>
        <select id="category">
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="volume">Volume</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>

    <div>
        <label htmlFor="value">Value</label>
    </div>

    </section>
  )
}

export default UnitConverter
