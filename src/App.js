import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Preloader from './Components/Common/Preloader/Preloader';
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized){
    return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='content'>
          <Routes>
            <Route path='/dialogs/*'
              element={<DialogsContainer />} />
            <Route path='/profile/:userId?'
              element={<ProfileContainer />} />
            <Route path='/users/*'
              element={<UsersContainer />} />
            <Route path='/login'
              element={<Login />} />
          </Routes>

        </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })) (App);