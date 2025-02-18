import { useState, useEffect } from "react"

const useFetch = (url) =>{
    const [data,setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(()=>{

        const abortCont = new AbortController()
    
    
        fetch(url, {signal:abortCont.signal}).then(
            response => {
                console.log(response)
                if (!response.ok){
                    throw Error("Could not fetch data for that resource")
                }
                return response.json()
            }
        ).then((data)=>{
            setData(data)
            setIsPending(false)
            setError(null)
        }).catch(
            err=>{
                if (err.name !== "AbortError"){
                    setError(err.message);
                    setIsPending(false);
                }
  
                
            }
        )
        return () => abortCont.abort()
    },[url])
    return {data,isPending, error}
}


export default useFetch