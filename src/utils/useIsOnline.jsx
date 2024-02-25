import { useEffect, useState } from "react";

const useIsOnline=()=>{
  const [isOnline,setIsOnline]=useState(true)



  useEffect(()=>{

//need to be clean event listener so this

handleOnline=()=>{

  setIsOnline(true)
}

handleOffline=()=>{
  setIsOnline(false)
}

  window.addEventListener('online',handleOnline);
  window.addEventListener('offline', handleOffline);

  return ()=>{
    window.removeEventListener('online',handleOnline);
    window.removeEventListener('offline', handleOffline);
  }

  },[])


  return isOnline;
}

export default useIsOnline;