import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route_util';

import AdminPanel from './admin_panel';
import MenteeApp from './mentees/MenteeAppContainer';
import MentorApp from './MentorApp';
import Landing from './Landing';
import MentorPanel from './MentorPanel';

import CurrentMentees from './admin/CurrentMenteesContainer';
import CurrentMentors from './admin/CurrentMentorsContainer';
import UnapprovedMentors from './admin/UnapprovedMentorsContainer';
import UnapprovedMentees from './admin/UnapprovedMenteesContainer';
import RejectedMentors from './admin/RejectedMentorsContainer';
import RejectedMentees from './admin/RejectedMenteesContainer';


// <iframe width="560" height="315" src="https://www.youtube.com/embed/ycAVwzDhmaU?autoplay=1" frameborder="0" allowfullscreen></iframe>
const App = () => (
  <div>
    <header>
      <h1>Welcome to the Girlz FTW's application portal!</h1>
    </header>
    <div id="all-content">
      <Route exact path="/" component={Landing}/>
      <Route exact path="/mentee_app" component={MenteeApp}/>
      <Route exact path="/mentor_app" component={MentorApp}/>
      <ProtectedRoute exact path="/mentor_panel" component={MentorPanel}/>

      <AdminRoute exact path="/admin_panel" component={AdminPanel}/>
      <AdminRoute exact path="/current_mentors" component={CurrentMentors}/>
      <AdminRoute exact path="/current_mentees" component={CurrentMentees}/>
      <AdminRoute exact path="/unapproved_mentors" component={UnapprovedMentors}/>
      <AdminRoute exact path="/rejected_mentees" component={RejectedMentees}/>
      <AdminRoute exact path="/rejected_mentors" component={RejectedMentors}/>

    </div>
  </div>
);

export default App;

// <Switch>
//   // <Route exact path="/" component={  A } />
//   // <ProtectedRoute exact path="/create" component={ B }/>
//   // <ProtectedRoute path="/listings/:id" component={ C }/>
// </Switch>
