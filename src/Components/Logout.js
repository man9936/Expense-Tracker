import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";
import { authActions } from "../Store/AuthSlice";
import "./Logout.css";

const Logout = () => {
  const logoutCntxt = useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logoutCntxt.logout();
    dispatch(authActions.logout());
    history.replace("/authform");
  };
  const url = (
    <img
      src="https://e7.pngegg.com/pngimages/918/229/png-clipart-computer-icons-login-logo-logout-emblem-trademark-thumbnail.png"
      alt="logout image"
    />
  );

  return (
    <div className="navigation">
      <a onClick={logoutHandler}>{url}</a>
    </div>
  );
};

export default Logout;
