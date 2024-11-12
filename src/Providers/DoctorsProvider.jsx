import { useReducer } from "react"
import { initialState,DoctorInfoReducer } from "../reducers/DoctorReducer"
import { DoctorsContext } from "../context"


const DoctorsProvider = ({children}) => {

    const [state,dispatch]=useReducer(DoctorInfoReducer,initialState)

  return (
    <DoctorsContext.Provider value={{state,dispatch}}>
     {children}
    </DoctorsContext.Provider>
  )
}

export default DoctorsProvider