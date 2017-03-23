/**
 * Created by lastc on 26.02.2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import Index from "./react_modules/Index.jsx";
import {Router, Route, Link, hashHistory, browserHistory, IndexRoute} from "react-router";
import ArticleList from "./react_modules/ArticleList.jsx";
import Home from "./react_modules/Home.jsx"
import About from "./react_modules/About.jsx";
import ArticleExtended from "./react_modules/ArticleExtended.jsx";
import ArticleEditor from "./react_modules/ArticleEditor.jsx";
import UserProfile from "./react_modules/UserProfile.jsx";
import Authors from "./react_modules/Authors.jsx";
import Login from "./react_modules/Login.jsx";
import Register from "./react_modules/Register.jsx";



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Index}>
            <Route path='/about' component={About}/>
            <Route path="/editor" component={ArticleEditor}/>
            <Route path="/authors" component={Authors}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/user/:id" component={UserProfile}/>
            <Route path="article/:id" component={ArticleExtended}/>
            <IndexRoute component={Home}/>
        </Route>
    </Router>,
    document.getElementById("root")
);

