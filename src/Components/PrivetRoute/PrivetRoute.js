import React from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from './../../App';
import { useContext } from 'react';

const PrivetRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
         ( loggedInUser.email || sessionStorage.getItem("token"))? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
      
    );
};

export default PrivetRoute;