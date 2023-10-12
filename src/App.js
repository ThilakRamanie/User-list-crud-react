import "./App.css";

import { Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import EditUser from "./Components/EditUser";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
