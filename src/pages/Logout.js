import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user data or tokens (assuming local storage in this example)
        localStorage.removeItem('userToken'); // Replace 'userToken' with your token key

        // Redirect user to Sign In page
        navigate('/SignIn');
    }, [navigate]);

    return null; // Return null since we don't need to render anything
}

export default Logout;
