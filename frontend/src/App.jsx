import './App.css';
// Import both Navbar and MyModal
import MyModal from './app/components/UserPanel/registration/signup';
import Navbar from './app/components/UserPanel/userComponents/navbar/navbar';
import { useState } from 'react';

function App() {
  // Manage modal visibility state here
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Pass handleShow to Navbar */}
      <Navbar handleshow={handleShow} />
      
      {/* Keep MyModal with modal visibility and close handler */}
      <MyModal show={showModal} handleClose={handleClose} />
    </>
  );
}

export default App;
