import React from 'react'
import Header from './Header'
import PrinterList from './PrinterList'
import Footer from './Footer'
    // https://github.com/d6u/react-container-query
    // VS
    // https://github.com/contra/react-responsive
const App = () => (
  <div>
    <Header />
    <PrinterList />
    <Footer />
  </div>
);

export default App;