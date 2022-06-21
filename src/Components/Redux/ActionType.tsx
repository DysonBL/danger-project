import axios from "axios";
import {Dispatch} from "redux";

export const ActionType ={
    GET_API :"GET_API"
}

export const GET_API =()=>{
    return async (dispatch:Dispatch)=>{
        await axios
        .get("https://indegenerep.s3.ap-south-1.amazonaws.com/cdn/home.json")
        .then((res)=>{
            console.log(res,"get_api_res");
            dispatch({
                type:ActionType.GET_API,
                data:res.data
              })
              console.log(dispatch,"dispatch");
        })
        .catch((error)=>{
            console.log(error,"get_Api_Error")
        })
    }
}


