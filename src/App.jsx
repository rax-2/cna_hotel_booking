import { useState } from "react";
import { Details, Home } from "./components";

export default function App() {
  const [PopupData, setPopupData] = useState([]);
  const [PopupState, setPopupState] = useState(true);
  return (
    <div className="text-[#F9F9F9] h-full" style={{ fontFamily: 'Sora' }}>
      <Home setPopupState={setPopupState} setPopupData={setPopupData} />
      <div hidden={PopupState}>
        <Details setPopupState={setPopupState} data={PopupData} />
      </div>

    </div>
  )
}
