import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {STAFFS, DEPARTMENTS} from './staffs';


const staffSlice = createSlice({
    // const {DEPARTMENTS, STAFFS} = staffs
    name: 'staff',
    initialState: {
        status: 'idle',
        searchStaff: '',
        allStaff: [],
        department: DEPARTMENTS
    },
    reducers: {
        searchStaff: (state, action) => {
            state.searchStaff = action.payload
            // console.log(action);
        },
        addStaff: (state, action) =>{            
            state.addStaff.push(action.payload)
            console.log(action.payload);
        }
    },
    extraReducers: builder => {
      builder
      .addCase(getStaffs.pending, (state, action) =>{
        state.status = 'loading';
      })
      .addCase(getStaffs.fulfilled, (state, action) =>{
        state.status = 'success';
        state.allStaff = action.payload
        console.log(action.payload);
      })
      .addCase(getStaffs.rejected, (state, action) =>{
        state.status = 'failed'
      })
      .addCase(addNewStaff.fulfilled, (state, action) =>{
        state.status = 'success';
        state.allStaff.push(action.payload);
      })
    }
})

export const getStaffs = createAsyncThunk('staff/getStaff', async ()=>{
    const res = await fetch('https://nodejstesthatn.herokuapp.com/');
    const data = await res.json();
    console.log(data);
    return data
})

export const addNewStaff = createAsyncThunk('staff/addNewStaff', async (newStaff) => {
    const res = await fetch('https://nodejstesthatn.herokuapp.com/',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newStaff)
    })
    const data = await res.json();
    return data
    
})
export default staffSlice;