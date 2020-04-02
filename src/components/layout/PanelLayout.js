import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import DefaultHeader from "./PanelHeader";
import DefaultAside from "./PanelAside";
import {
  AppAside,
  AppBreadcrumb,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from "@coreui/react";
import lateralPanel from "../../routes/lateralPanel";
import routesPanel from "../../routes/routesPanel";

const PanelLayout = props => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  const onLogout = () => {
    console.log("hola logout");
    // this.props.authUser({});
    // notification("warning", "Hasta luego").show();
    // this.props.history.push("/login");
  };
  return (
    <div className="app">
      <AppHeader fixed>
        <Suspense fallback={loading()}>
          <DefaultHeader onLogout={onLogout} {...props} />
        </Suspense>
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <Suspense>
            <AppSidebarNav navConfig={lateralPanel} {...props} />
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <AppBreadcrumb appRoutes={routesPanel} />
          <Container fluid>
            <Suspense fallback={loading()}>
              <Switch>
                {routesPanel.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => {
                        if (props.match.params.id)
                          props.id = props.match.params.id;

                        return <route.component {...props} />;
                      }}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/panel/dashboard" />
              </Switch>
            </Suspense>
          </Container>
        </main>
        <AppAside fixed>
          <Suspense fallback={loading()}>
            <DefaultAside />
          </Suspense>
        </AppAside>
      </div>
    </div>
  );
};

export default PanelLayout;
