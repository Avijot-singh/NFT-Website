import React, { useState } from "react";
import "../style/ProfileForm.css"; // Importing CSS
import { validateEmail, validatePassword, validateConfirmPassword } from "./Validation";
import { useNavigate } from 'react-router-dom';

function MyForm() {
    // Initializing State Variables
    const [name, setName] = useState("Steve Smith");
    const [email, setEmail] = useState("Steve123@gmail.com");
    const [contact, setContact] = useState("123456789");
    const [password, setPassword] = useState("");
    const [updatePassword, setUpdatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showUpdatePassword, setShowUpdatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    // Replace this with actual login status check
    const isLoggedIn = true;
    if (!isLoggedIn) {
        navigate('/login');
    }

    // Handling Form Submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing Default Form Submission
        
        // Resetting Error Messages
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        // Validating Email
        const emailErrorMsg = validateEmail(email);
        if (emailErrorMsg) setEmailError(emailErrorMsg);

        // Validating Password Strength
        const passwordErrorMsg = validatePassword(password);
        if (passwordErrorMsg) setPasswordError(passwordErrorMsg);

        // Validating Confirm Password
        const confirmPasswordErrorMsg = validateConfirmPassword(updatePassword, confirmPassword);
        if (confirmPasswordErrorMsg) setConfirmPasswordError(confirmPasswordErrorMsg);

        // If no errors, handle successful form submission
        if(!emailErrorMsg && !passwordErrorMsg && !confirmPasswordErrorMsg) {
            console.log("Form Submitted Successfully");
        }
    };

    // Returning JSX to Render
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="left-container">
                <h1 className="left-heading">User Information</h1>
                <div>
                    <label className="form-label">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
                </div>
                <div>
                    <label className="form-label">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
                    {emailError && <div className="error-message">{emailError}</div>}
                </div>
                <div>
                    <label className="form-label">Contact:</label>
                    <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} className="form-input" />
                </div>
                <button type="submit" className="form-button">Save</button>
            </form>

            <form onSubmit={handleSubmit} className="right-container">
                <h1 className="right-heading">Update Password</h1>
                <div>
                    <label className="label-form">Current Password:</label>
                    <input type={showCurrentPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="forrm-input" />
                    <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="show-password-button">
                        {showCurrentPassword ? "Hide" : "Show"}
                    </button>
                    {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
                <div>
                    <label className="label-form">Update Password:</label>
                    <input type={showUpdatePassword ? "text" : "password"} value={updatePassword} onChange={(e) => setUpdatePassword(e.target.value)} className="forrm-input" />
                    <button type="button" onClick={() => setShowUpdatePassword(!showUpdatePassword)} className="show-password-button">
                        {showUpdatePassword ? "Hide" : "Show"}
                    </button>
                </div>
                <div>
                    <label className="label-form">Confirm Password:</label>
                    <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="forrm-input" />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="show-password-button">
                        {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                    {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                </div>
                <button className="form-button">Save</button>
            </form>
        </div>
    );
}

// Exporting the Component
export default MyForm;
