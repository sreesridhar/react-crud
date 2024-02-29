/* eslint-disable import/namespace */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { setRecentUrl } from "../store/appSlice";
import { useAuth } from "../hooks";

function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const tokens = useAuth();
  const { me } = useSelector((state) => state.auth);
  const { pathname = null } = location;

  useEffect(
    () => () => {
      /**
       * to set last visited page url in redux store
       */
      if (pathname) {
        dispatch(setRecentUrl(pathname));
      }
    },
    [pathname, dispatch]
  );

  if (!me || !me?.id || !tokens || !tokens?.access) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  //   <FlexBox>
  //   <SideBar />
  //   <BodyBox>
  //     {!isEmpty(breadCrumbsList) && (
  //       <Header settoggleTheme={settoggleTheme} urls={breadCrumbsList} />
  //     )}
  //     <MainWindow>{children}</MainWindow>
  //   </BodyBox>
  // </FlexBox>

  return <div>{children}</div>;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;
