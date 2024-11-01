// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ReviewPage from './pages/ReviewPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
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