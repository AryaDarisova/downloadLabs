import React from 'react'
import { HashRouter, Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/index'
import Home from './components/home/index'
import UserLogin from './components/login/user/index'
import AdminLogin from './components/login/admin/index'
import AdminReg from './components/registration/admin'
import AdminProfile from './components/profile/admin/index'
import UserProfile from "./components/profile/user";
// import UserProfile from './components/profile/user'


function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/login/user" component={UserLogin} />
                <Route path="/login/admin" component={AdminLogin} />
                <Route path="/registration/admin" component={AdminReg} />
                <Route path="profile/admins" component={AdminProfile} />
                <Route path="profile/user" component={UserProfile} />
                {/* <UserProfile /> */}
            </HashRouter>
        </div>
    );
}

export default App;
