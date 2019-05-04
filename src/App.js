import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";
import StudentList from "./containers/StudentList";
import SubjectList from "./containers/SubjectList";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/students" component={StudentList} />
      <Route path="/subjects" component={SubjectList} />
    </Switch>
  </BrowserRouter>
);

export default App;
