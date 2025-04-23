"use client"
import { useState } from 'react';
export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert('Password changed successfully!');
  };

  return (
    <div className="mt-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="currentPassword" className="block text-gray-700">Current Password</label>
          <input 
            type="password" 
            id="currentPassword" 
            value={currentPassword} 
            onChange={(e) => setCurrentPassword(e.target.value)} 
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-gray-700">New Password</label>
          <input 
            type="password" 
            id="newPassword" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirm New Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg">Change Password</button>
      </form>
    </div>
  );
};

