import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Pages from "../pages";
import { privatePages, unAuthPages } from "../utils/router-static-data";
import AuthRoute from "./AuthRoute";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
	const state = useSelector((x) => x);
  return (
    <Routes>
      {/* Unauth routes start here */}

      {unAuthPages?.map((page) => (
        <Route
          key={page?.key}
          path={page?.path}
          element={<AuthRoute>{page?.element}</AuthRoute>}
        />
      ))}
      {/* Unauth routes ends here */}

      {/* authenticated pages starts */}
      {privatePages(state)
        // .filter((x) =>
        //   checkAssignedGroups(
        //     x.includedGroups,
        //     state?.auth?.auth?.user,
        //     x?.excludedroute || false
        //   )
        // )
        .map((page) => (
          <Route
            key={page?.key}
            path={page?.path}
            element={
              <PrivateRoute
                // settoggleTheme={settoggleTheme}
                breadCrumbsList={page.breadCrumbs}
              >
                {page?.element}
              </PrivateRoute>
            }
          />
        ))}
      {/* authenticated pages ends */}
      <Route path="*" element={<Pages.NotFound />} />
    </Routes>
  );
}
