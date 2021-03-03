import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';

const App = () => {
    return (
        <Fragment>
            <Route path="/" component={HomePage} exact />
            <Route path={'/(.+)'} render={() => (
                <Fragment>
                    <NavBar />
                    <Container className="main">
                        <Route path="/events" component={EventDashboard} exact />
                        <Route path="/events/:id" component={EventDetailedPage} />
                        <Route path={['/create', '/manage/:id']} component={EventForm} />
                    </Container>
                </Fragment>
            )} />
        </Fragment>
    );
}

export default App