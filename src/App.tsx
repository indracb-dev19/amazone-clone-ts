import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route index element={<HomePage />} />
        <Route path="/checkout" />
      </Routes>
    </>
  );
}

export default App;
