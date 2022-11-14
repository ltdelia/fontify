import React, { useEffect, useState } from "react";

import FontSelect from "./FontSelect/FontSelect";

import "./App.css";

function App() {
  const [font, setFont] = useState<string>("");

  const updateFont = (newFont: string) => {
    setFont(newFont);
  };

  return (
    <div className="wrapper">
      <h1>Fontify</h1>
      <p>Generate font css</p>
      <span style={{ fontFamily: font }}>Your font is here</span>
      <span>Selected font: {font}</span>

      <FontSelect font={font} updateFont={updateFont} />

      <pre>
        {/* <code>{displayedFontValues}</code> */}
        <code>
        {"{"}
        {"\n\tfont-family: "}
        {font}
        {"\n}"}
        </code>
      </pre>
    </div>
  );
}

export default App;
