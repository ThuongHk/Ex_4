import React, {useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {Card, CardBody, CardTitle, Navbar, NavbarBrand, CardImg, CardText } from 'reactstrap';
import dateFormat from "dateformat";
// import { STAFFS } from "./staffs";
import EditStaff from "./EditStaff";
import { useDispatch, useSelector } from "react-redux";
import { listStaffSelector, listDepartmentSelector } from "../../redux/selector";
import { getDepartments } from "../Department/departmentSlice";
import { getStaffs } from "./staffSlice";




function DetailStaff(props) {
  const params = useParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //  dispatch(getDepartments())
  //  dispatch(getStaffs())
  // },[])
  
  const staffDetail = useSelector(listStaffSelector);
//   const department = useSelector(listDepartmentSelector);
 console.log(staffDetail);
  const staffInfo = staffDetail.find(staff => staff.id.toString() === params.id)

  console.log( staffInfo); 

  return (
  <div className="container mt-5">
    <Link to='/staff' >NHÂN VIÊN</Link> <br/><br/>
    { 
  <div className="col-sm-6 col-md-6 mb-4">   
  <Card>
  <div className='row'>
      <div className="col-6">
    <CardImg width="auto" height="100%" src={staffInfo.image} alt={staffInfo.name} />
    </div>
    <div className="col-6">
    <CardBody>
      <CardTitle><b>Họ và tên:</b> {staffInfo.name}</CardTitle>
      <CardText>
       <b>Ngày sinh:</b>  {dateFormat(staffInfo.doB, "dd/mm/yyyy")}
      </CardText>
      <CardText>
       <b>Ngày vào công ty:</b>  {dateFormat(staffInfo.startDate, "dd/mm/yyyy")}
      </CardText>
      <CardText><b>Phòng ban:</b></CardText>
      <CardText><b>Số ngày nghỉ còn lại:</b> {staffInfo.annualLeave}</CardText>
      <CardText><b>Số ngày đã làm thêm:</b> {staffInfo.overTime}</CardText>
    </CardBody>
    </div>
    </div>
  </Card>

  <EditStaff/>
  </div>
}
</div>)
}

export default DetailStaff;
