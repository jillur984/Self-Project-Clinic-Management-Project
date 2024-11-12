import { useContext } from "react";
import { DoctorsContext } from "../context";

export const useDoctors=()=>{
    return useContext(DoctorsContext)
}