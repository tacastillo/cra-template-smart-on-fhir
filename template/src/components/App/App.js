import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { FhirProvider } from '../../providers/FhirProvider';
import { PatientProvider } from '../../providers/PatientProvider';

import Launch from '../Launch/Launch';
import ClinicianDashboard from '../ClinicianDashboard/ClinicianDashboard';

import './App.scss';

const App = () => {

  const appContent = (
    <FhirProvider>
      <PatientProvider>
        <ClinicianDashboard />
      </PatientProvider>
    </FhirProvider>
  );
  
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/launch">
            <Launch />
          </Route>
          <Route path="/">
            {appContent}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
