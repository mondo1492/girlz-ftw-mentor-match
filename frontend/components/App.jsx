import React from 'react';
import { Route, Link } from 'react-router-dom';
import AdminPanel from './admin_panel';
import MenteeApp from './MenteeApp';
import MentorApp from './MentorApp';
import Landing from './Landing';
import MentorPanel from './MentorPanel';


const App = () => (
  <div>
    <header>
      <h1>Welcome to the Girlz FTW's application portal!</h1>
    </header>
    <div id="all-content">
      <Route exact path="/" component={Landing}/>
      <Route exact path="/admin_panel" component={AdminPanel}/>
      <Route exact path="/mentee_app" component={MenteeApp}/>
      <Route exact path="/mentor_app" component={MentorApp}/>
      <Route exact path="/mentor_panel" component={MentorPanel}/>

    </div>
  </div>
);

export default App;

// <Switch>
//   // <Route exact path="/" component={  A } />
//   // <ProtectedRoute exact path="/create" component={ B }/>
//   // <ProtectedRoute path="/listings/:id" component={ C }/>
// </Switch>
