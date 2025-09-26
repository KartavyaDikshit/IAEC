'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface WhatsAppConfig {
  number: string;
  message: string;
  enabled: boolean;
  businessHours: {
    start: string;
    end: string;
    timezone: string;
  };
}

export default function WhatsAppAdmin() {
  const { status } = useSession();
  const [config, setConfig] = useState<WhatsAppConfig>({
    number: '',
    message: '',
    enabled: true,
    businessHours: {
      start: '09:00',
      end: '18:00',
      timezone: 'Asia/Kolkata'
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/admin/login');
    }

    if (status === 'authenticated') {
      fetchConfig();
    }
  }, [status]);

  const fetchConfig = async () => {
    try {
      const response = await fetch('/api/whatsapp-config');
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.error('Failed to fetch config:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch('/api/whatsapp-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      });

      if (response.ok) {
        alert('WhatsApp configuration updated successfully!');
      } else {
        alert('Failed to update configuration');
      }
    } catch (error) {
      console.error('Failed to save config:', error);
      alert('Failed to update configuration');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="flex justify-center py-8">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">WhatsApp Configuration</h1>

      <form onSubmit={handleSave} className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp Number (with country code)
          </label>
          <input
            type="text"
            value={config.number}
            onChange={(e) => setConfig({...config, number: e.target.value})}
            placeholder="+918639706102"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Default Message Template
          </label>
          <textarea
            value={config.message}
            onChange={(e) => setConfig({...config, message: e.target.value})}
            rows={8}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
            placeholder="Enter default message template..."
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Use \n for line breaks. This message will be pre-filled when users click the WhatsApp button.
          </p>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="enabled"
            checked={config.enabled}
            onChange={(e) => setConfig({...config, enabled: e.target.checked})}
            className="mr-2"
          />
          <label htmlFor="enabled" className="text-sm font-medium text-gray-700">
            Enable WhatsApp Chat Button
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Hours Start
            </label>
            <input
              type="time"
              value={config.businessHours.start}
              onChange={(e) => setConfig({
                ...config, 
                businessHours: {...config.businessHours, start: e.target.value}
              })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Hours End
            </label>
            <input
              type="time"
              value={config.businessHours.end}
              onChange={(e) => setConfig({
                ...config, 
                businessHours: {...config.businessHours, end: e.target.value}
              })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#08bcb4]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-[#08bcb4] text-white py-2 px-4 rounded-md hover:bg-[#06a599] transition-colors disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Configuration'}
        </button>
      </form>

      {/* Preview Section */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div className="bg-white rounded-lg p-4 border">
          <p className="text-sm text-gray-600 mb-2">WhatsApp message preview:</p>
          <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
              {config.message.replace(/\n/g, '\n')}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
