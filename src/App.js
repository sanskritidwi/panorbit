import Home from "./pages/Home";
import "../src/styles/css/all.css"
import ProfileHome from "./pages/ProfileHome";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfilesProvider } from "./components/ProfilesContext";

const App = () => {
  return (
    <ProfilesProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<ProfileHome />} />
      </Routes>
    </Router>
    </ProfilesProvider>
  );
};



export default App;
