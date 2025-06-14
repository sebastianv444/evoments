// src/pages/Creador.jsx
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function CreadorPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const success = searchParams.get('success'); // “stripe_ok”
    const error = searchParams.get('error');     // “stripe_failed”

    if (success === 'stripe_ok') {
      toast.success('¡Cuenta de Creador creada correctamente! Ahora puedes gestionar tus eventos.');
    } else if (error === 'stripe_failed') {
      toast.error(
        'El proceso de Stripe no se completó. Si deseas ser creador, intenta nuevamente.'
      );
    } else {
      // Si entran directo a /creador sin parámetros, simplemente redirigimos a Home después de un momento
      toast(
        'Para activar tu cuenta de Creador, pulsa el botón correspondiente en el Home.',
        { icon: 'ℹ️' }
      );
    }

    // Después de mostrar el toast, redirigimos al usuario a Home en 3 segundos:
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 2400);

    return () => clearTimeout(timer);
  }, [searchParams, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-3xl font-bold mb-5">Procesando Stripe Connect…</h1>
      <p className="text-gray-600">
        Por favor, espera un momento. Serás redirigido a la página principal.
      </p>
    </div>
  );
}
