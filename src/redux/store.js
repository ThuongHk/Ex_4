import {configureStore} from '@reduxjs/toolkit';
import departmentSlice from '../components/Department/departmentSlice';
import staffSlice from '../components/Staff/staffSlice';


const store = configureStore({
    reducer: {
        staffList: staffSlice.reducer,
        departmentList: departmentSlice.reducer
    }
})
export default store;