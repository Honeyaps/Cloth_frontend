import './App.css';
import { Footer } from './app/components/UserPanel/userComponents/footer/footer';
import Navbar from './app/components/UserPanel/userComponents/navbar/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <br/>
      <Footer/>
    </>
  );
}

export default App;


// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './app/components/UserPanel/userComponents/navbar/navbar';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/signin" element={<SigninPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

