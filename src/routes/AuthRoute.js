import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks';

function AuthRoute({ children }) {
	const location = useLocation();
	const tokens = useAuth();
	const { me } = useSelector((state) => state.auth);
	if (me && me?.id && tokens && tokens?.access && location?.pathname !== '/forget-password') {
		return <Navigate to="/dashboard" state={{ from: location }} replace />;
	}
	return children;
}

AuthRoute.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AuthRoute;
