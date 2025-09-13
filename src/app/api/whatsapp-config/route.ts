import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const configPath = join(process.cwd(), 'data/whatsapp-config.json');

// Updated default configuration with new contact details
const defaultConfig = {
  number: "+918639706102",  // Updated mobile number
  message: "Hello IAEC Team! 👋\n\nI'm interested in studying abroad and would like to know more about:\n\n• University selection and applications\n• Visa assistance\n• Scholarship opportunities\n• Test preparation (IELTS/TOEFL/GRE)\n\nCould you please guide me through the process?\n\nThank you!",
  enabled: true,
  businessHours: {
    start: "09:00",
    end: "18:00",
    timezone: "Asia/Kolkata"
  }
};

export async function GET() {
  try {
    if (!existsSync(configPath)) {
      // Create data directory if it doesn't exist
      const dataDir = join(process.cwd(), 'data');
      if (!existsSync(dataDir)) {
        mkdirSync(dataDir, { recursive: true });
      }
      writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
      return NextResponse.json(defaultConfig);
    }

    const config = JSON.parse(readFileSync(configPath, 'utf8'));
    return NextResponse.json(config);
  } catch (error) {
    console.error('WhatsApp config error:', error);
    return NextResponse.json(defaultConfig);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updatedConfig = {
      ...defaultConfig,
      ...body,
      updatedAt: new Date().toISOString()
    };

    writeFileSync(configPath, JSON.stringify(updatedConfig, null, 2));
    return NextResponse.json(updatedConfig);
  } catch (error) {
    console.error('Failed to update WhatsApp config:', error);
    return NextResponse.json({ error: 'Failed to update config' }, { status: 500 });
  }
}
