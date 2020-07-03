import React, {Component} from 'react';
import HeaderSecond from "../components/common/header-another/HeaderSecond";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import profileLocalize from "../store/localize/profile";

class ProfileVideo extends Component {
  render() {
    return (
        <>
          <HeaderSecond/>
          <section className="text-center" style={{"paddingBottom": "100px", "paddingTop": "100px"}}>
            <div className="container">
              <h1 className="" style={{"color": "#000"}}>{profileLocalize.myVideos}</h1>
              <div className="push20"></div>
              {this.props.video ? null :  <p style={{"color": "#000"}}>{profileLocalize.didntAdd}</p>}
              <div className="row">
                <div className="col">
                  {
                    this.props.video
                      ?<iframe width="240" height="200" src={`${this.props.video.replace("watch?v=", "embed/").replace("youtu.be","youtube.com/embed")}`} frameBorder="0"
                               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                               allowFullScreen/>
                      : <iframe width="240" height="200" src="https://www.youtube.com/embed/npnp--SSx_8" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                  }

                </div>
              </div>
              <div className="push20"></div>
              <NavLink to={"/profile"} className="btn open-modal2">{profileLocalize.backToProfile}</NavLink>
              <div className="push20"></div>
            </div>

          </section>
        </>
    );
  }
}

const mapStateToProps = state => ({
  video: state.profile.video
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{}))(ProfileVideo);