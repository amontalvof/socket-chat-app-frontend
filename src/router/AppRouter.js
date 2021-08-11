import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import ChatPage from '../pages/ChatPage';
import AuthRouter from './AuthRouter';
import '../css/app.css';
import { AuthContext } from '../auth/AuthContext';

const AppRouter = () => {
    const { auth, verifyToken } = useContext(AuthContext);

    useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    if (auth.checking) {
        return (
            <div className="waitTextContainer">
                <h1>Wait please ...</h1>
            </div>
        );
    }
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={ChatPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
