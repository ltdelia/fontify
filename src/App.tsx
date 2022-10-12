import React, { useEffect, useState } from "react";

import FontSelect from "./FontSelect/FontSelect";

import "./App.css";

function App() {
  const [font, setFont] = useState<string>("");
  const [fontObject, setFontObject] = useState<any>({});
  const [displayedFontValues, setDisplayedFontValues] = useState("");

  useEffect(() => {
    setDisplayedFontValues(JSON.stringify(fontObject));
  }, [fontObject])

  const updateFont = (newFont: string) => {
    setFont(newFont);
    setFontObject({"font-family": font});
  };

  return (
    <div className="wrapper">
      <h1>Fontify</h1>
      <p>Generate font css</p>
      <span style={{ fontFamily: font }}>Your font is here</span>
      <span>Selected font: {font}</span>

      <FontSelect font={font} updateFont={updateFont} />

      <pre>
        <code>{displayedFontValues}</code>
      </pre>
    </div>
  );
}

export default App;
