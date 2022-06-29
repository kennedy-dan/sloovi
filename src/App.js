import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom'
import Task from './components/Task';
import { useDispatch, useSelector } from 'react-redux';



function App() {

  return (
    <div className="">
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<Task />} path = '/task' />
      </Routes>
        
    </div>
  );
}

export default App;
