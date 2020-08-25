import React, {Component} from 'react';
import kick from "../../../static/img/kick.png";
import liverpool from "../../../static/img/Liverpool.jpg";
import juventus from "../../../static/img/Juventus.jpg";
import realMadrid from "../../../static/img/Real_madrid.jpg";
import commonLocalize from "../../../store/localize/common";
import landingLocalize from "../../../store/localize/landing";

class Partners2 extends Component {
  render() {
    return (
        <section className="partner">
          <div className="container">
            <img className="partner-img" src={kick} alt="kick"/>
            <h2 className="partner-title"><b>{commonLocalize.partners}</b></h2>
            <div className="partner-border">
              <div className="border"></div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <img className="card-img" src={liverpool} alt="Liverpool"/>
                <div className="card-body">
                  <div className="card-title"><b>Liverpool</b></div>
                  <div className="card-text">{landingLocalize.liverpoolTitle}</div>
                  <div className="card-content">{landingLocalize.liverpoolText}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <img className="card-img" src={juventus} alt="Juventus"/>
                <div className="card-body">
                  <div className="card-title"><b>Juventus</b></div>
                  <div className="card-text">{landingLocalize.juventusTitle}</div>
                  <div className="card-content">{landingLocalize.juventusText}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <img className="card-img" src={realMadrid} alt="Real Madrid"/>
                <div className="card-body">
                  <div className="card-title"><b>Real Madrid</b></div>
                  <div className="card-text">{landingLocalize.realMadridTitle}</div>
                  <div className="card-content">{landingLocalize.realMadridText}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Partners2;