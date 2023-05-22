import { useState, useEffect } from "react";
import { useFetchState } from "./interfaces";

export default function useFetch<T>(url:string){
    const [fetchState, setFetchState] =useState<useFetchState<T>>({
        state:"idle",
        data:null,
        error:null
    })

    useEffect(()=>{
        async function getData(){
            try {
                setFetchState((oldValud)=>({
                    ...oldValud,
                    state:"loading"
                }))
                const response = await fetch(url)
                if(response.status == 200){
                    const json = await response.json()
                    setFetchState((oldValue)=>({
                    ...oldValue,
                    state:"success",
                    data: json,
                    error: null
                    }))
                }else{
                    setFetchState((oldValue)=>({
                        ...oldValue,
                        state:"error",
                        data: null,
                        error: new Error(response.statusText)
                        }))
                }
            } catch (error) {
                setFetchState((oldValud)=>({
                    ...oldValud,
                    state:"error",
                    data: null,
                    error: error as Error
                }))
            }
            
        }
        getData()

    },[url])
    
    return fetchState
}