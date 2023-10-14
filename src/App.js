import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import Friend from "./components/Friend";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <PrivateRoute exact path="/friends">
            <FriendList />
          </PrivateRoute>
          <PrivateRoute exact path="/friend/add">
            <AddFriend />
          </PrivateRoute>
          <PrivateRoute path="/logout">
            <Logout />
          </PrivateRoute>
          <PrivateRoute path="/friends/:id">
            <Friend />
          </PrivateRoute>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
