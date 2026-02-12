import fetch from 'node-fetch';

async function setupDatabase() {
  try {
    const response = await fetch('http://localhost:3000/api/setup-database');
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}

setupDatabase();