import React from "react";
import HeaderAtv from "./HeaderAtv";
import ContentAtv from "./ContentAtv";
import { UiContextProviderAtv } from "./UiContextAtv";

function App() {
  return (
    <UiContextProviderAtv>
      <HeaderAtv />
      <ContentAtv />
    </UiContextProviderAtv>
  );
}

export default App;
