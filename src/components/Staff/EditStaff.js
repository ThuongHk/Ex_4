import React, { useEffect, useState } from 'react';
// import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { editStaff,getStaffs } from './staffSlice';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const EditStaff = ({ staffInfo }) => {
  const [nameInput, setNameInput] = useState('');
  const [staffInfo2, setStaffInfo2] = useState(staffInfo);
  const [open, setOpen] = useState(false);

  console.log(staffInfo);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(!open);
  const handleEditStaff = (e) => {

    e.preventDefault();
    // console.log(e.target);
    dispatch(editStaff(staffInfo2)).then(()=> {handleOpen()
     dispatch(getStaffs())
    })
  }
  const dynamicChangeValue = (e, field) => {
    const { value } = e.target;
    setStaffInfo2({ ...staffInfo2, [field]: value });
  }

  
  

  useEffect(() => {
    if (staffInfo) {
      setStaffInfo2(staffInfo)
    }
  }, [staffInfo]);

  console.log();


  return (
    <div>
      <button type="button" onClick={handleOpen} className="btn btn-primary" >
        Edit
      </button>
      <Modal isOpen={open} toggle={handleOpen} >
        <ModalHeader toggle={handleOpen}>Modal title</ModalHeader>
        <ModalBody><form onSubmit={handleEditStaff}>
          <div className="form-group">
            <label >Họ và tên: </label>
            <input type="text" name='name' value={staffInfo2?.name}
              onChange={(e) => dynamicChangeValue(e, 'name')}
              className="form-control" id="name" />

          </div>
          <div className="form-group">
            <label >Ngày sinh: </label>
            <input type="date" name='doB' value={staffInfo2?.doB}
              onChange={(e) => dynamicChangeValue(e, 'doB')}
              className="form-control" id="birthday" />

          </div>
          <div className="form-group">
            <label >Hệ số Lương: </label>
            <input type="number" name='salaryValue' value={staffInfo2?.salaryScale}
              onChange={(e) => dynamicChangeValue(e, 'salaryScale')}
              className="form-control" id="salaryScale" min='0' />

          </div>
          <div className="form-group">
            <label >Ngày vào công ty: </label>
            <input type="date" name='startDate' value={staffInfo2?.startDate}
              onChange={(e) => dynamicChangeValue(e, 'startDate')}
              className="form-control" id="startDate" />

          </div>

          <div className="form-group">
            <label>Phòng ban:</label>
            <select className="form-control" name='department' id="department" value={staffInfo2?.department}
              onChange={(e) => dynamicChangeValue(e, 'department')}
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
            <input type="number" name='annualLeave' value={staffInfo2?.annualLeave}
              onChange={(e) => dynamicChangeValue(e, 'annualLeave')}
              className="form-control" id="annualLeave" min='0' />

          </div>
          <div className="form-group">
            <label >Số ngày làm thêm: </label>
            <input type="number" value={staffInfo2?.overTime}
              onChange={(e) => dynamicChangeValue(e, 'overTime')}
              className="form-control" id="overTime" min='0' />

          </div>
          <div className="form-group">
            <label >Hình đại diện</label>
            <input type="file" placeholder="/assets/images/alberto.png"
              className="form-control-file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx" name="file" id="file" />
          </div>


          <button type="submit" className="btn btn-info text-center mt-2" >Edit Staff</button>
        </form></ModalBody>
      </Modal>     
    </div>
  );
};

export default EditStaff;