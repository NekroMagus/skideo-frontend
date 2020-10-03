import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";

import Headerr from "./components/header/Headerr";
import ClubPage from "./pages/ClubPage";
import Footer from "./components/footer/Footer";
import ProfilePage from "./pages/ProfilePage";
import VideoPage from "./pages/VideoPage";

const App = () => {

  return (
      <>
        <Headerr/>
        <Switch>
          <Route path="/" exact render={() => <ClubPage/>}/>
          <Route path="/profile" exact render={()=><ProfilePage/>}/>
          <Route path="/video/:name" render={(props)=><VideoPage {...props}/>}/>
          <Route path="*"
                 render={() => <div>Not found <NavLink style={{color: "blue"}} to="/">back to main</NavLink></div>}/>
        </Switch>
        <Footer/>
      </>
  );
};

export default App;
