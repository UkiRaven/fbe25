/**
 * Created by lastc on 26.02.2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import Home from "./react_modules/Home.jsx";
import {Router, Route, Link, hashHistory, browserHistory, IndexRoute} from "react-router";
import ArticleList from "./react_modules/ArticleList.jsx";
import About from "./react_modules/About.jsx";
import ArticleExtended from "./react_modules/ArticleExtended.jsx";
import ArticleEditor from "./react_modules/ArticleEditor.jsx";


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
            <Route path='/about' component={About}/>
            <Route path="/editor" component={ArticleEditor}/>
            <Route path="article/:id" component={ArticleExtended}/>
            <IndexRoute component={ArticleList}/>
        </Route>
    </Router>,
    document.getElementById("root")
);

