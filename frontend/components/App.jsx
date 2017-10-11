import React from 'react';
import SessionContainer from './session/session_forms_container';

const App = () => (
  <div>
    <header>
      <h1>Its WORKING!!!</h1>
      <SessionContainer/>
    </header>
    <div id="all-content">


    </div>
  </div>
);

export default App;

// <Switch>
//   // <Route exact path="/" component={  A } />
//   // <ProtectedRoute exact path="/create" component={ B }/>
//   // <ProtectedRoute path="/listings/:id" component={ C }/>
// </Switch>
