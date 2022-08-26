import React from 'react';
// import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { editStaff } from './staffSlice';

const EditStaff = ({staffInfo}) => {

  const dispatch = useDispatch();
const handleEditStaff = (values) => {
   dispatch(editStaff({
    id: staffInfo.id,
    name: values.name,
    doB: values.doB,
    salaryScale: values.salaryScale,
    startDate: values.startDate,
    annualLeave: values.annualLeave,
    overTime: values.overTime

   }))
}


    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 Edit 
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Thông Tin Nhân Viên</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form submit={handleEditStaff}>
        <div className="form-group">
          <label >Họ và tên: </label>
          <input type="text" defaultValue={staffInfo?.name}
           
            className="form-control"  id="name" /> 
                         
        </div>
        <div className="form-group">
          <label >Ngày sinh: </label>
          <input type="date" defaultValue={staffInfo?.doB}
            className="form-control"  id="birthday" />           
            
        </div>
        <div className="form-group">
          <label >Hệ số Lương: </label>
          <input type="number"  defaultValue={staffInfo?.salaryScale}
            className="form-control"  id="salaryScale" min='0'/> 
             
        </div>
        <div className="form-group">
          <label >Ngày vào công ty: </label>
          <input type="date" defaultValue={staffInfo?.startDate}
            className="form-control"  id="startDate"  />   
            
        </div>
       
          <div className="form-group">
            <label>Phòng ban:</label>
            <select className="form-control" id="department"  defaultValue={staffInfo?.department}
            >
              <option value='Sale'>Sale</option>
              <option value='HR'>HR</option>
              <option value='Marketing'>Marketing</option>
              <option value='IT'>IT</option>
              <option value='Finance'>Finance</option>              
            </select>
            
          </div>
          <div className="form-group">
          <label >Số ngày nghỉ còn lại: </label>
          <input type="number" defaultValue={staffInfo?.annualLeave}
            className="form-control"  id="annualLeave" min='0'  />   
            
        </div>
        <div className="form-group">
          <label >Số ngày làm thêm: </label>
          <input type="number" defaultValue={staffInfo?.overTime}
            className="form-control"  id="overTime" min='0' /> 
            
        </div>
        <div className="form-group">
          <label >Hình đại diện</label>
          <input type="file"  placeholder="/assets/images/alberto.png"
           className="form-control-file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx" name="file" id="file" />          
        </div>

        
        <button type="submit" className="btn btn-info text-center mt-2" >Edit Staff</button>
      </form>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default EditStaff;