// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ReviewPage from './pages/Reviewpage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// import React from 'react'
// import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
// import NavBar from './Components/NavBar/NavBar';

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       {/* <LoginSignUp /> */}

//     </>
//   )
// }

// export default App