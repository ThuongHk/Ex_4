import React from 'react';
import {useDispatch} from'react-redux';
import staffSlice, { addNewStaff, getStaffs } from './staffSlice';
import {v4 as uuidv4} from 'uuid';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from 'yup';
import './Staff.css';

const schema = yup.object().shape({
  
  name: yup
    .string()
    .required("Vui lòng nhập username")
    .max(50, "Username tối đa 50 ký tự")
    .min(5, "Username tối thiếu 5 ký tự"),
    doB: yup    
    .string()
    .required('Vui lòng nhập ngày sinh'),
    salaryScale: yup
    .number()
    .required('Vui lòng nhập hệ số lương của bạn')
    .min(1, 'Hệ số lương tối thiếu là 1')
    .max(5, 'Hệ số lương tối đa là 5'),
    startDate: yup    
    .string()
    .required('Vui lòng nhập ngày vào công ty'),
    // department: yup
    // .string()
    // .required('Vui lòng chọn phòng ban'),
    annualLeave: yup
    .number()
    .required('Vui lòng nhập ngày nghỉ còn lại')
    .min(1, 'Ngày nghỉ còn lại tối thiếu là 1')
    .max(5, 'Ngày nghỉ còn lại tối đa là 5'),
    overTime: yup
    .number()  
    .required(' Vui lòng nhập số ngày làm thêm') 
    .min(1, 'Số ngày làm thêm tối thiếu là 1')
    .max(5, 'Số ngày làm thêm tối đa là 5'),  
   
});


function AddStaff(props) {
 
  const dispatch = useDispatch();  
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)}) 

 
  const onLoginSubmit = (data)=> {     
    // dispatch(staffSlice.actions.addStaff({
    //   id: uuidv4(),
    //   name: data.name,
    //   birthday: data.birthday,     
    //   salaryScale: data.salaryScale,
    //   startDate: data.startDate,
    //   department: data.department,
    //   annualLeave: data.annualLeave,
    //   overTime: data.overTime,
    //   image: '/assets/images/daidien.png'
    // }))

    dispatch(addNewStaff({
      id: uuidv4(),
      name: data.name,
      doB: data.doB,     
      salaryScale: data.salaryScale,
      startDate: data.startDate,
      department: data.department,
      annualLeave: data.annualLeave,
      overTime: data.overTime,
      image: "/assets/images/alberto.png"
    })).then((res) => dispatch(getStaffs()))
  }
  
    return (
      <div className='container'>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 +
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Thông Tin Nhân Viên</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <div className="form-group">
          <label>Họ và tên: </label>
          <input type="text" {...register('name')}
            className="form-control"  id="name" /> 
             {errors.name && <p className="error">{errors.name?.message}</p>}                 
        </div>
        <div className="form-group">
          <label>Ngày sinh: </label>
          <input type="date"  {...register('doB')}
            className="form-control"  id="birthday" />           
            {errors.doB && <p className="error">{errors.doB?.message}</p>}          
        </div>
        <div className="form-group">
          <label>Hệ số Lương: </label>
          <input type="number"   {...register('salaryScale')}
            className="form-control"  id="salaryScale" min='0'/> 
             {errors.salaryScale && <p className="error">{errors.salaryScale?.message}</p>}          
        </div>
        <div className="form-group">
          <label>Ngày vào công ty: </label>
          <input type="date" {...register('startDate')}
            className="form-control"  id="startDate"  />   
            {errors.startDate && <p className="error">{errors.startDate?.message}</p>}                 
        </div>
       
          <div className="form-group">
            <label>Phòng ban:</label>
            <select className="form-control"  {...register('department')} id="department" >
              <option value='Sale'>Sale</option>
              <option value='HR'>HR</option>
              <option value='Marketing'>Marketing</option>
              <option value='IT'>IT</option>
              <option value='Finance'>Finance</option>              
            </select>
           
          </div>
          <div className="form-group">
          <label>Số ngày nghỉ còn lại: </label>
          <input type="number" {...register('annualLeave')}
            className="form-control"  id="annualLeave" min='0'  />   
             {errors.annualLeave && <p className="error">{errors.annualLeave?.message}</p>}         
        </div>
        <div className="form-group">
          <label>Số ngày làm thêm: </label>
          <input type="number" {...register('overTime')}
            className="form-control"  id="overTime" min='0' /> 
            {errors.overTime && <p className="error">{errors.overTime?.message}</p>}          
        </div>
        <div className="form-group">
          <label>Hình đại diện</label>
          <input type="file"  placeholder="/assets/images/alberto.png"
           className="form-control-file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx" name="file" id="file" />          
        </div>

        
        <button type="submit" className="btn btn-info text-center mt-2">Submit</button>
      </form>
      </div>
     
    </div>
  </div>
</div>
</div>
    );  
}

export default AddStaff;