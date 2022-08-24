import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const departmentSlice = createSlice({
    name: 'departmentSlice',
    initialState: {
        status: 'idle',
        departments: []
    },
    reducers: {
        depfilter: (state, action)=>{
            state.status = 'idle';
            state.departments = action.payload
        }
    },
    extraReducers: builder =>{
        builder
        .addCase(getDepartments.fulfilled, (state, action)=>{
            state.status = 'success';
            state.departments = action.payload
            console.log(action.payload);
        })
    }
})

export const getDepartments = createAsyncThunk('getDepartments', async ()=>{
    const res = await fetch('https://rjs101xbackend.herokuapp.com/departments')
    const data = await res.json();
    console.log(data);
    return data
})

export default departmentSlice;