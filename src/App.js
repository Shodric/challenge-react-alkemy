import React from "react";
import { Switch, Route, HashRouter as Hash } from "react-router-dom";

//Context
import { AuthProvider } from "./Context/ContextAuth";
import { FavProvider } from "./Context/ContextFav";

//Components
import Article from "./Components/Main/Article";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Header/Login";
import Error404 from "./Components/Error404";
import PrivateRoute from "./Components/PrivateRoute";

//Pages
import Details from "./Pages/Details";
import Publisher from "./Pages/Publisher";
import Favorites from "./Pages/Favorites";

//Styles
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <FavProvider>
        <Hash>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Article} />
            <PrivateRoute exact path="/details/" component={Details} />
            <PrivateRoute exact path="/favorites" component={Favorites} />
            <PrivateRoute exact path="/details/:heroId" component={Details} />
            <PrivateRoute
              exact
              path="/publisher/:publisher"
              component={Publisher}
            />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={Error404} />
          </Switch>
          <Footer />
        </Hash>
      </FavProvider>
    </AuthProvider>
  );
}

export default App;
