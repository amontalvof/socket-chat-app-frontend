import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import ChatPage from '../pages/ChatPage';
import AuthRouter from './AuthRouter';
import '../css/app.css';
import { AuthContext } from '../auth/AuthContext';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

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
                    <PublicRoute
                        path="/auth/login"
                        component={AuthRouter}
                        isAuthenticated={auth.logged}
                    />
                    <PrivateRoute
                        path="/"
                        component={ChatPage}
                        isAuthenticated={auth.logged}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
