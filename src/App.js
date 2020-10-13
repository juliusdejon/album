import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import Header from './Header';
import Upload from './Upload';

function App() {
  const [modal, setModal] = useState(false);
  const [pagination, setPagination] = useState({ skip: 0, limit: 5 });

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <Header
        pagination={pagination}
        setPagination={setPagination}
        toggleModal={toggleModal}
      />
      <Upload modal={modal} toggleModal={toggleModal} />
      <Gallery pagination={pagination} />
    </div>
  );
}

export default App;
