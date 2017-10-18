import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route_util';

import AdminPanel from './admin_panel';
import MenteeApp from './MenteeApp';
import MentorApp from './MentorApp';
import Landing from './Landing';
import MentorPanel from './MentorPanel';

import CurrentMentees from './admin/CurrentMentees';
import CurrentMentors from './admin/CurrentMentors';
import UnapprovedMentors from './admin/UnapprovedMentors';
import UnapprovedMentees from './admin/UnapprovedMentees';


const App = () => (
  <div>
    <header>
      <h1>Welcome to the Girlz FTW's application portal!</h1>
    </header>
    <div id="all-content">
      <Route exact path="/" component={Landing}/>
      <Route exact path="/mentee_app" component={MenteeApp}/>
      <Route exact path="/mentor_app" component={MentorApp}/>
      <Route exact path="/mentor_panel" component={MentorPanel}/>

      <Route exact path="/admin_panel" component={AdminPanel}/>
      <Route exact path="/current_mentors" component={CurrentMentors}/>
      <Route exact path="/current_mentees" component={CurrentMentees}/>
      <Route exact path="/unapproved_mentors" component={UnapprovedMentors}/>
      <Route exact path="/unapproved_mentees" component={UnapprovedMentees}/>

    </div>
  </div>
);

export default App;

// <Switch>
//   // <Route exact path="/" component={  A } />
//   // <ProtectedRoute exact path="/create" component={ B }/>
//   // <ProtectedRoute path="/listings/:id" component={ C }/>
// </Switch>
