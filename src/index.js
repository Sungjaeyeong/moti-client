import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import AuthService from "./service/auth";
import UserService from "./service/user";
import PostService from "./service/post";
import CommentService from "./service/comment";
import TeamService from "./service/team";
import ChatService from "./service/chat";
import { AuthProvider } from "./context/AuthContext";

const authService = new AuthService();
const userService = new UserService();
const postService = new PostService();
const commentService = new CommentService();
const teamService = new TeamService();
const chatService = new ChatService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider authService={authService} userService={userService}>
        <App
          userService={userService} //
          postService={postService}
          commentService={commentService}
          teamService={teamService}
          chatService={chatService}
        />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
