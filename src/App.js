import {Outlet} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getStaffs } from './components/Staff/staffSlice';
import { getDepartments } from './components/Department/departmentSlice';


export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getStaffs())
   dispatch(getDepartments())
  })
  return (
    <div>
      <NavBar/>        
      <Outlet/>
      <Footer/>
    </div>
  )
}