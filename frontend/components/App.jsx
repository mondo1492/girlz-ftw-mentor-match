import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route_util';

import AdminPanel from './admin_panel';
import MenteeApp from './mentees/MenteeAppContainer';
import MentorApp from './mentors/MentorApp';
import Landing from './Landing';
import MentorPanel from './mentors/MentorPanel';
import MentorUpdate from './mentors/MentorUpdate';

import CurrentMentees from './admin/CurrentMenteesContainer';
import CurrentMentors from './admin/CurrentMentorsContainer';
import UnapprovedMentors from './admin/UnapprovedMentorsContainer';
import UnapprovedMentees from './admin/UnapprovedMenteesContainer';
import RejectedMentors from './admin/RejectedMentorsContainer';
import RejectedMentees from './admin/RejectedMenteesContainer';
import Logout from './logout/LogoutContainer';


const App = () => (
  <div id="all-content">
    <Route exact path="/" component={Landing}/>
    <Route exact path="/mentee_app" component={MenteeApp}/>
    <Route exact path="/mentor_app" component={MentorApp}/>
    <ProtectedRoute exact path="/mentor_panel" component={MentorPanel}/>
    <ProtectedRoute path="/mentor_panel/update" component={MentorUpdate}/>

    <AdminRoute exact path="/admin_panel" component={AdminPanel}/>
    <AdminRoute exact path="/current_mentors" component={CurrentMentors}/>
    <AdminRoute exact path="/current_mentees" component={CurrentMentees}/>
    <AdminRoute exact path="/unapproved_mentors" component={UnapprovedMentors}/>
    <AdminRoute exact path="/unapproved_mentees" component={UnapprovedMentees}/>
    <AdminRoute exact path="/rejected_mentors" component={RejectedMentors}/>
    <AdminRoute exact path="/rejected_mentees" component={RejectedMentees}/>
  </div>
);

export default App;
