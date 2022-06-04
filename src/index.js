import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate
} from "react-router-dom";
import Posts from './components/posts';
import Home from './components/home';
import SignUpForm from './components/signUp';
import LoginForm from './components/loginForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './components/notFound'
import { isExpired } from "react-jwt";


ReactDOM.render(
   <React.StrictMode>
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<App/>}>
               <Route path="posts" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/home"/> : <Posts/>}/>
               <Route path="home" element={<Home/>}/>
               <Route path="posts" element={<Posts/>}/>
               <Route path="login" element={<LoginForm/>}/>
               <Route path="signUp" element={<SignUpForm/>}/>
               <Route
                     path="*"
                     element={
                     <NotFound/>
               }/>
               </Route>
           </Routes>
       </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);

reportWebVitals();
