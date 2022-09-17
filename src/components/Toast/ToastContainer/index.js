import { useEffect, useState } from 'react';
import EventManager from '../../../libs/EventManager';
import ToastMessage from '../ToastMessage';

import { Container } from './styles';

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    EventManager.on('addtoast', handleAddToast);

    return () => {
      EventManager.removeListener(handleAddToast);
    };
  }, []);

  function handleAddToast({ text, type, duration }) {
    const toast = { id: Math.random(), text, type, duration };

    setToasts((prevState) => [
      ...prevState,
      toast
    ]);
  }

  function handleRemoveToast(id) {
    setToasts((prevState) => prevState.filter(toast => toast.id !== id));
  }

  return (
    <Container>
      {toasts.map(toast => (
        <ToastMessage
          key={toast.id}
          data={{
            id: toast.id,
            text: toast.text,
            type: toast.type,
            duration: toast.duration,
          }}
          onRemoveToast={handleRemoveToast}
        />
      ))}
    </Container>
  );
}