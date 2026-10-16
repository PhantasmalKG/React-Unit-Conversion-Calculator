import {useState} from "react";
import { convertLength, type Units } from "../utils/unitconversions";



function UnitConverter() {
  const [value, setValue] = useState("0");
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState<Units>("meters");
  const [toUnit, setToUnit] = useState<Units>("feet");

  const numericValue = Number(value);
  const result = value.trim() !== "" && Number.isFinite(numericValue) 
  ? convertLength(numericValue, fromUnit, toUnit) : null;
 
  const valueAdjustment = (number:number) => Number(number.toFixed(6)).toLocaleString("en-US");
 
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
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value as Units)}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
          <option value="feet">Feet</option>
        </select>
      </div>

    

      <div>
        <label htmlFor="to-value">To</label>
        <div>
          <select id = "to-unit" value={toUnit} onChange={(e) => setToUnit(e.target.value as Units)}>
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
            <option value="feet">Feet</option>
          </select>
        </div>
      </div>
      
    <button>Convert</button>
      

      <p>Result: {" "}{category === "length" && result !== null ? valueAdjustment(result) : "Select a category and enter a value"}{toUnit}</p>
    </section>
  )
}

export default UnitConverter
