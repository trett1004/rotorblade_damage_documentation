import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Base layout
import RootLayout from './layouts/RootLayout';

// import components
import Start from './components/Start';
import CreateReport from './components/BtnGenerateReport';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="routerContainer">
          <Routes>
            <Route path="/" element={<RootLayout />} errorElement={<Error />}>
              <Route index element={<Start />} />
              <Route path="/generate_report" element={<CreateReport />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
