import React from 'react';
import Link from 'next/link';

const AdminErrorPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Access Denied</h1>
      <p>You do not have permission to access the admin panel. Please ensure your email is authorized.</p>
      <Link href="/api/auth/signin">Sign In</Link>
    </div>
  );
};

export default AdminErrorPage;
