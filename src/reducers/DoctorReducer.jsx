import { actions } from "../actions";

const initialState={
    username:"",
    phone:"",
    email:"",
    speciality:[],
    conditions:[],
    availability:[],
    error:false,
    loading:false
}

const DoctorInfoReducer=(state,action)=>{
    switch(action.type){
        case actions.doctor.DATA_FETCHING:{
            return{
                ...state,
                loading:true

            }
        }
        case actions.doctor.DATA_FETCHED:{
            return{
                ...state,
                username:action.data.username,
                phone:action.data.phone,
                
            }
        }
    }
}