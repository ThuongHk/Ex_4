import React, { useEffect } from 'react';
// import {DEPARTMENTS} from '../Staff/staffs';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {listDepartmentSelector} from '../../redux/selector';
import { getStaffs } from '../Staff/staffSlice';
import { getDepartments } from './departmentSlice';

function Department() {

   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(getDepartments())
      dispatch(getStaffs())

   },[])
  
   const allDepartments = useSelector(listDepartmentSelector)
       console.log(allDepartments);
    const departmentList  = allDepartments?.map(dep =>{
        return (
                <div className='col-md-4 col-sm-4 col-xs-12 mb-2 mt-3' key={dep.id}>
                  <Link to={`/department/${dep.id}`}>
                   <div className="card" style={{width: '18rem'}}> 
                     <div className="card-body">
                        <h5 className="card-title"> Phòng ban: {dep.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted ">Số lượng nhân viên : {dep.numberOfStaff}</h6>
                     </div>
                   </div>
                   </Link>
                </div>
        )
    })
    return (
       <div className="container-fluid">
         <div className='row'>
            {departmentList}           
        </div>
       </div>
    );
}

export default Department;