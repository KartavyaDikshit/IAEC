import React from 'react';

const AdminErrorPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Access Denied</h1>
      <p>You do not have permission to access the admin panel. Please ensure your email is authorized.</p>
      <a href="/api/auth/signin">Sign In</a>
    </div>
  );
};

export default AdminErrorPage;
