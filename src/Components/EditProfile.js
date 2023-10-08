import React, { useState } from 'react';
import './EditProfile.css';

function EditProfile() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="editprofile-container">
            <form className="editprofile-form" onSubmit={handleSubmit}>
                <h2 className="editprofile-title">Edit Profile</h2>
                <div className="input-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        value={fullName} 
                        onChange={(e) => setFullName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">New Password (leave blank to keep unchanged)</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button className="editprofile-btn" type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default EditProfile;
