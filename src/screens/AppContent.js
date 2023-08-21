import { Route, Routes } from "react-router-dom";

import { routes } from "@src/router";

export default function AppContent() {
  return (
    <Routes>
      {routes.map((route, id) => {
        return <Route path={route.path} element={route.component} key={id} />;
      })}
    </Routes>
  );
}
