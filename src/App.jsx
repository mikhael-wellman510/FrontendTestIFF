import { useState } from "react";
import MapelPage from "./assets/Component/MapelPage";
import ModalAddMapel from "./assets/Component/ModalAddMapel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaveData from "./assets/Component/SaveData";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<MapelPage />} />
          <Route path="/save" element={<SaveData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
