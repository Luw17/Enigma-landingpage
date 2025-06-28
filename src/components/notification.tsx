import { useEffect } from 'react';
import './notification.css';

interface NotificationModalProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export default function NotificationModal({ message, type = 'info', onClose }: NotificationModalProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // fecha depois de 3 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
}
