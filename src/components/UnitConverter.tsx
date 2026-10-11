import {useState} from "react";



function UnitConverter() {
  const [value, setValue] = useState("0");
  const [category, setCategory] = useState(" length");
  const [fromUnit, setFromUnit] = useState(" meters");
  const [toUnit, setToUnit] = useState(" feet");

  return (
    <section>
      <h1>Unit Converter</h1>

      <div>
        <label htmlFor="category-selector">Category</label>
        <select id="category-selector" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="volume">Volume</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>

      <div>
        <label htmlFor="from-value">From</label>
        <div>
          <input id="from-value"
                 type="number" 
                 placeholder="Enter value"
                 value={value}
                 onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
          <option value="feet">Feet</option>
        </select>
      </div>

    

      <div>
        <label htmlFor="to-value">To</label>
        <div>
          <select id = "to-unit" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value=" meters">Meters</option>
            <option value=" kilometers">Kilometer</option>
            <option value=" miles">Miles</option>
            <option value=" feet">Feet</option>
          </select>
        </div>
      </div>
      
    <button>Convert</button>
      

      <p>Result: {value || "0"}{toUnit}</p>
    </section>
  )
}

export default UnitConverter
