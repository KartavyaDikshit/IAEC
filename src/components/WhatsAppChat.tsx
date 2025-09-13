'use client';
import { useState, useEffect } from 'react';

interface WhatsAppData {
  number: string;
  message: string;
  enabled: boolean;
}

interface PlatformInfo {
  isMobile: boolean;
  isDesktop: boolean;
  isWindows: boolean;
  isMac: boolean;
  preferWeb: boolean;
}

export default function WhatsAppChat() {
  const [whatsappData, setWhatsappData] = useState<WhatsAppData | null>(null);
  const [platform, setPlatform] = useState<PlatformInfo | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detectPlatform = (): PlatformInfo => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
      const isWindows = /windows/.test(userAgent);
      const isMac = /mac/.test(userAgent);
      const isDesktop = !isMobile;

      return {
        isMobile,
        isDesktop,
        isWindows,
        isMac,
        preferWeb: isDesktop
      };
    };

    setPlatform(detectPlatform());

    fetch('/api/whatsapp-config')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch config');
        return res.json();
      })
      .then((data: WhatsAppData) => {
        setWhatsappData(data);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        console.error('Failed to load WhatsApp config:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return null;
  if (error || !whatsappData?.enabled || !platform) return null;

  const handleWhatsAppClick = () => {
    if (!whatsappData || !platform) return;

    const cleanNumber = whatsappData.number?.replace(/[^0-9]/g, '') || '';
    const message = whatsappData.message || '';

    if (!cleanNumber) {
      console.error('Invalid WhatsApp number');
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    let whatsappUrl: string;

    if (platform.isMobile) {
      whatsappUrl = `whatsapp://send?phone=${cleanNumber}&text=${encodedMessage}`;

      setTimeout(() => {
        window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, '_blank');
      }, 1000);

      window.location.href = whatsappUrl;
    } else {
      whatsappUrl = `https://web.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');

      if (platform.isWindows) {
        setShowInstructions(true);
        setTimeout(() => setShowInstructions(false), 8000);
      }
    }
  };

  const copyMessage = () => {
    if (!whatsappData?.message) return;

    const cleanMessage = whatsappData.message.replace(/\n/g, '\n');
    navigator.clipboard.writeText(cleanMessage)
      .then(() => {
        alert('Message copied to clipboard! You can paste it in WhatsApp.');
      })
      .catch((err: Error) => {
        console.error('Failed to copy message:', err);
        alert('Failed to copy message. Please try again.');
      });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-110"
          aria-label="Chat on WhatsApp"
          title="Chat with IAEC on WhatsApp"
          type="button"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-lg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.786z"/>
          </svg>
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
        </button>

        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {platform.isMobile ? 'Open in WhatsApp App' : 'Open in WhatsApp Web'}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>

        {platform.isDesktop && (
          <button
            onClick={copyMessage}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            title="Copy message template"
            type="button"
          >
            📋
          </button>
        )}
      </div>

      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              💡 Using WhatsApp Desktop App?
            </h3>
            <p className="text-gray-600 mb-4">
              If WhatsApp opened in the desktop app without the message, here&apos;s what to do:
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p>1. 📱 Find &quot;iaec consultants Ahmedabad&quot; in your chat list</p>
              <p>2. 📝 Copy and paste this message:</p>
              <div className="bg-gray-100 p-3 rounded text-xs font-mono max-h-32 overflow-y-auto">
                {whatsappData.message.replace(/\\n/g, '\n')}
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={copyMessage}
                className="flex-1 bg-[#25D366] text-white py-2 px-4 rounded hover:bg-[#128C7E] transition-colors"
                type="button"
              >
                Copy Message
              </button>
              <button
                onClick={() => setShowInstructions(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
                type="button"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
