import React, {Component} from 'react';
import kick from "../../../static/img/kick.png";
import dream from "../../../static/img/011-min.jpg";
import landingLocalize from "../../../store/localize/landing";

class Dream2 extends Component {
  render() {
    return (
        <section className="start">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img className="start-img" src={kick} alt="kick"/>
                <h2 className="start-title"><b>{landingLocalize.dreamTitle}</b></h2>
                <div className="start-border">
                  <div className="border"></div>
                </div>
                <p>{landingLocalize.dreamText}</p>
              </div>
              <div className="col-md-6">
                <img className="w-100" src={dream} style={{"marginTop": "100px"}} alt=""/>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Dream2;