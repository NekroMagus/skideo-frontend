import React, {useEffect, useState} from 'react';
import logo from '../static/Cagliari.jpg';
import scoutAvatar from '../static/pngguru2.png';

import {NavLink} from "react-router-dom";
import {scoutAPI} from "../api/api";
import Moment from "react-moment";

const ClubPage = () => {

  const [scouts, setScouts] = useState([]);

  useEffect(() => {
    async function fetchScouts() {
      const response = await scoutAPI.getAll();
      setScouts(response.data);
    }

    fetchScouts();
  }, []);

  return (
      <section className="club">
        <div className="club__container">
          <header className="club__header">
            <div className="club__header-logo">
              <img height="150" width="120" src={logo} alt={"club-logo"}/>
            </div>
            <div className="club__header-title">
              <div className="club__header-title-name">Cagliari</div>
              <div className="club__header-title-date">Since 1988</div>
            </div>
            <div className="club__header-button"><NavLink to="/profile"> EDIT PROFILE</NavLink></div>
          </header>
          <main className="club__main">
            {
              scouts && scouts.length !== 0 && scouts.map((el) => (
                  <>
                  {
                    el.video && el.name && el.surname &&
                        <div className="club__player-card" key={el.id}>
                          <header className="club__player-card-header">
                            <div className="club__player-card-header-logo">
                              <img width="80" height="90" src={scoutAvatar} alt="avatar"/>
                            </div>
                            <div className="club__player-card-header-user">
                              <div className="club__player-card-header-user-name">
                                {el.name || "Unknown"} {el.surname || "Unknown"}
                              </div>
                              <div className="club__player-card-header-user-birthday">
                                Birth date: {el.dateOfBirth && <Moment format={"DD.MM.YYYY"}>{el.dateOfBirth}</Moment>}
                              </div>
                            </div>
                            {
                              el.video &&
                              <div className="club__player-card-header-button">
                                <NavLink to={"/video/" + el.video}>Посмотреть</NavLink>
                              </div>
                            }
                          </header>
                          <main className="club__player-card-main">
                            <div className="club__player-card-main-left">
                              <div>
                                <p className="club__player-card-main-title">Position</p>
                                <p className="club__player-card-main-text">{el.roleFootball}</p>
                              </div>
                              <div>
                                <p className="club__player-card-main-title">Location</p>
                                <p className="club__player-card-main-text">{el.city}</p>
                              </div>
                            </div>
                            <div className="club__player-card-main-right">
                              <div>
                                <p className="club__player-card-main-title">Contacts</p>
                                <p className="club__player-card-main-text">{el.telephoneNumber}</p>
                              </div>
                              <div>
                                <p className="club__player-card-main-title">URL Video</p>
                                <p className="club__player-card-main-text">{el.video}</p>
                              </div>
                            </div>
                          </main>
                        </div>
                  }
                  </>)
              )
            }
          </main>
        </div>
      </section>
  );
};

export default ClubPage;