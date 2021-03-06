import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/"}/>
      return <Component {...this.props}/>
    }
  }

  return connect(mapStateToProps, {})(RedirectComponent);
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});
