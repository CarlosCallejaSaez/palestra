import AppRoutes from "./AppRoutes";

import Loading from "./components/Loading/Loading";
import { useLoading } from "./hooks/useLoading";
import { setLoadingInterceptor } from "./interceptors/loadingInterceptor";
import { useEffect } from "react";
import DarkMode from "./components/DarkMode/DarkMode";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




function App() {
  const { showLoading, hideLoading } = useLoading();

  

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);

  

  
  return (
    <>

      
<Header/>
      <DarkMode/>
      
      <Loading />

      <AppRoutes />
      <Footer/>
   
    </>
  );
}

export default App;
