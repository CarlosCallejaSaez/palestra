import AppRoutes from "./AppRoutes";

import Loading from "./components/Loading/Loading";
import { useLoading } from "./hooks/useLoading";
import { setLoadingInterceptor } from "./interceptors/loadingInterceptor";
import { useEffect } from "react";
import DarkMode from "./components/DarkMode/DarkMode";




function App() {
  const { showLoading, hideLoading } = useLoading();

  

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);

  

  
  return (
    <>

      
    
      <DarkMode/>
      
      <Loading />

      <AppRoutes />

   
    </>
  );
}

export default App;
