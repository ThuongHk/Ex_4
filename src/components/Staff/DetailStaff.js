import React, {useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {Card, CardBody, CardTitle, Navbar, NavbarBrand, CardImg, CardText } from 'reactstrap';
import dateFormat from "dateformat";
// import { STAFFS } from "./staffs";
import EditStaff from "./EditStaff";
import { useDispatch, useSelector } from "react-redux";
import { listStaffSelector } from "../../redux/selector";





function DetailStaff(props) {
  const params = useParams();
 
  
  const staffDetail1 = useSelector(listStaffSelector);

  console.log(staffDetail1);
  const staffInfo1 = staffDetail1.find(staffDeta => staffDeta.id.toString() === params.id)

  console.log(staffInfo1); 

  return (
  <div className="container mt-5">
    <Link to='/staff' >NHÂN VIÊN</Link> / <span>{staffInfo1?.name}</span><br/><br/>
    { 
  <div className="col-sm-6 col-md-6 mb-4">   
  <Card>
  <div className='row'>
      <div className="col-6">
    <CardImg width="auto" height="100%" src={staffInfo1?.image} alt={staffInfo1?.name} />
  
    </div>
    <div className="col-6">
    <CardBody>
      <CardTitle><b>Họ và tên:</b> {staffInfo1?.name}</CardTitle>
      <CardText>
       <b>Ngày sinh:</b>  {dateFormat(staffInfo1?.doB, "dd/mm/yyyy")}
      </CardText>
      <CardText>
       <b>Ngày vào công ty:</b>  {dateFormat(staffInfo1?.startDate, "dd/mm/yyyy")}
      </CardText>
      <CardText><b>Phòng ban:  </b></CardText>
      <CardText><b>Số ngày nghỉ còn lại:</b> {staffInfo1?.annualLeave}</CardText>
      <CardText><b>Số ngày đã làm thêm:</b> {staffInfo1?.overTime}</CardText>
    </CardBody>
    </div>
    </div>
  </Card>

  <EditStaff  staffInfo={staffInfo1}/>
  </div>
}
</div>)
}

export default DetailStaff;
