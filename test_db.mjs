import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';

// Simple env parser
function loadEnv(filePath) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, ''); // Remove quotes
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    }
  }
}

// Load envs
loadEnv('.env');
loadEnv('.env.local');

const url = process.env.NEON_DATABASE_URL;

if (!url) {
  console.error('NEON_DATABASE_URL is not set');
  process.exit(1);
}

console.log(`Testing connection to Neon DB... (URL length: ${url.length})`);

const sql = neon(url);

async function test() {
  try {
    console.log('Executing SELECT 1...');
    const start = Date.now();
    const result = await sql`SELECT 1`;
    const duration = Date.now() - start;
    console.log('Connection successful!');
    console.log('Result:', result);
    console.log(`Duration: ${duration}ms`);
  } catch (error) {
    console.error('Connection failed:', error);
    if (error.cause) {
        console.error('Cause:', error.cause);
    }
  }
}

test();
