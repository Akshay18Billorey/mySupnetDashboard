// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
// import Header from './components/Header/Header';
import LoginPage from './Layout/LoginPage';
import Dashboard from './Layout/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import SelectTableComponent from './pages/Member/MemberList';
import MemberList from './pages/Member/MemberList';
// import { BrowserRouter } from 'react-router-dom';
// import { Route } from 'react-router';
// import { Switch } from '@material-ui/core';
function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <LoginPage setToken={setToken} />
  }
  return (
    <>
      {/* <Header />
      <div style={{ marginLeft: "80px" }}>
        <Dashboard />
      </div> */}
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/member">
            <MemberList />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
