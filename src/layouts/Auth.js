import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthHeader from "components/Headers/AuthHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import componentStyles from "assets/theme/layouts/auth.js";
import Login from "views/auth/Login";
import Register from "views/auth/Register";

const useStyles = makeStyles(componentStyles);

const Auth = () => {
  const classes = useStyles();
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add(classes.bgDefault);
    return () => {
      document.body.classList.remove(classes.bgDefault);
    };
  });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        <AuthHeader />
        {/* Page content */}
        <Container
          component={Box}
          maxWidth="xl"
          marginTop="-8rem"
          paddingBottom="3rem"
          position="relative"
          zIndex="101"
        >
          <Box component={Grid} container justifyContent="center">
            <Switch>
              <Route path='/auth/login' component={Login} />
              <Route path='/auth/register' component={Register} />
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Box>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
