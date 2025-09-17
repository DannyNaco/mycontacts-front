import { Navigate, Outlet, useLocation } from "react-router-dom";
export default function ProtectedRoute({ children }) {


  const isLoggedIn = !!localStorage.getItem("token");
  const location = useLocation();

  if(isLoggedIn){
    return <Outlet />;
  }
  else{
    const error = "Veuillez vous connecter pour avoir accès à cette page.";
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
}

