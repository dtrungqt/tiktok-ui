import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes/index.js";

import DefaultLayout from "./components/Layout/DefaultLayout/index.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      {publicRoutes.map((route, index) => {
        const Layout = route.layout ? route.layout : DefaultLayout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
