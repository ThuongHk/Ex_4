import React from 'react';
import {useState} from 'react';

const EditStaff = () => {

    

    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
      <form>
        <div className="form-group">
          <label for="">Họ và tên: </label>
          <input type="text"
            className="form-control"  id="name" /> 
                         
        </div>
        <div className="form-group">
          <label for="">Ngày sinh: </label>
          <input type="date"  
            className="form-control"  id="birthday" />           
            
        </div>
        <div className="form-group">
          <label for="">Hệ số Lương: </label>
          <input type="number"  
            className="form-control"  id="salaryScale" min='0'/> 
             
        </div>
        <div className="form-group">
          <label for="">Ngày vào công ty: </label>
          <input type="date" 
            className="form-control"  id="startDate"  />   
            
        </div>
       
          <div className="form-group">
            <label for="department">Phòng ban:</label>
            <select className="form-control" id="department" >
              <option value='Sale'>Sale</option>
              <option value='HR'>HR</option>
              <option value='Marketing'>Marketing</option>
              <option value='IT'>IT</option>
              <option value='Finance'>Finance</option>              
            </select>
            
          </div>
          <div className="form-group">
          <label for="">Số ngày nghỉ còn lại: </label>
          <input type="number" 
            className="form-control"  id="annualLeave" min='0'  />   
            
        </div>
        <div className="form-group">
          <label for="">Số ngày làm thêm: </label>
          <input type="number"
            className="form-control"  id="overTime" min='0' /> 
            
        </div>
        <div className="form-group">
          <label for="">Hình đại diện</label>
          <input type="file"  placeholder="/assets/images/alberto.png"
           className="form-control-file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx" name="file" id="file" />          
        </div>

        
        <button type="submit" className="btn btn-info text-center mt-2">Edit Staff</button>
      </form>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default EditStaff;