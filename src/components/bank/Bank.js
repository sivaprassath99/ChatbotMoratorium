import React, { useState }  from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import CustomChatbot from "../chatbot/CustomChatbot";
import './bank.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Processed from './Processed';

const Bank= (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

    return (

      <div>
        <div className="header">
          <h2>Bank Application</h2>
          <BrowserRouter>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small></small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            <NavLink activeClassName="active" to="/processed">Processed</NavLink>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/processed" component={Processed} />
            </Switch>
          </BrowserRouter>
        </div>
        <div className="footer">
          <div style = {{padding:"20px"}}>
            <h1>CHATBOT</h1>
            <p>To use the Chatbot, Please click the "💬" button.</p>
            <p>To stop the Chatbot, Please click the "❌" button.</p>
          </div>
          <div className = "CustomChatbot">
            <div style ={{display: showChat ? "" : "none"}}>
              <CustomChatbot></CustomChatbot>
            </div>      
            <div>
              {!showChat 
                ? <button className="btn" onClick={() => startChat()}>💬</button> 
                : <button className="btn" onClick={() => hideChat()}>❌</button>}
            </div>
          </div>
        </div>
      </div>
    )
}


export default Bank;
