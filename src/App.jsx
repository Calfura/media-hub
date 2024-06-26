import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import HomePage from "./pages/HomePage";
import Browse from "./pages/Browse";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        <Route index element={<Browse />} />
      </Route>
    </Routes>
  );
}

export default App;