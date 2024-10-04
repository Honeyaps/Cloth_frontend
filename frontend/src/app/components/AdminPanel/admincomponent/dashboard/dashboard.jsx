import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const navigate = useNavigate();

useEffect(() => {
    
    if (!localStorage.getItem('admintoken')) {
        navigate('/adminsignin');
    }

},[navigate])


return (
    <div>
        <h1>Admin Dashboard</h1>
    </div>
);
   
}