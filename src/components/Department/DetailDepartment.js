import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listDepartmentSelector, listStaffSelector } from '../../redux/selector';
// import { getStaffs } from '../Staff/staffSlice';
// import { getDepartments } from './departmentSlice';

const DetailDepartment = () => {   
    const { departmentId } = useParams()
    console.log(departmentId);
    const departmentStaffs = useSelector(listDepartmentSelector)
    const allDepartments   = useSelector(listStaffSelector)
    // console.log(departmentStaffs);
    const show1Departments = departmentStaffs.filter(show1 => show1.id === (departmentId));
    const show2Departments = allDepartments.filter(show2 => show2.departmentId === (departmentId))
    console.log(show1Departments);
    const show1 = show1Departments.map(show =>{
        return (
            <div key={show.id}>
                <h5>Nhân viên phòng: {show.name}</h5>
            </div>
        )
    })
    return (
        <div className='container-fluid'>
            <div className='row'>{show1}</div>
            <div className='row'>{show2Departments.map(staff =>{
                return(
                      <div className='col-md-2 col-sm-3 col-xs-12' key={staff.id}>
                        <Link to={`/staff/${staff.id}`}>
                            <div className="card">
                            <img className="card-img-top" src={staff.image} alt={staff.name} />
                            <div className="card-body">
                            <h6 className="card-title">{staff.name}</h6>                            
                            </div>
                            </div>
                            </Link>
                      </div>
                )
            })}</div>
        </div>
    );
};

export default DetailDepartment;