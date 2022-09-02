import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import AuthService from "./service/auth";
import UserService from "./service/user";
import PostService from "./service/post";
import { AuthProvider } from "./context/AuthContext";

const authService = new AuthService();
const userService = new UserService();
const postService = new PostService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider authService={authService} userService={userService}>
        <App postService={postService} />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
