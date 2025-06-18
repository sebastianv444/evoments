import ButtonMotion from "@/components/myButtons/ButtonMotion";
import ButtonBlocker from "@/components/myButtons/ButttonBlocker";
import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function Section2() {
  const {
    register,
    formState: { errors },
    watch
  } = useForm();
  const { user } = useUser(); // Clerk hook para obtener el usuario autenticado

  const licenciaAceptada = watch("licencia", false);
  const alerta = () => {
    alert(" ⚠️ Acepta los terminos y condiciones sino no podras ser creador");
  }

  const handleClick = async () => {
    try {
      // Si no hay usuario logueado, mostramos error
      if (!user) {
        toast.error("Debes iniciar sesión antes de convertirte en creador.");
        return;
      }

      const clerkUserId = user.id;

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/stripe/crear-cuenta`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ clerkUserId }),
        }
      );

      if (!response.ok) {
        const errorJson = await response.json().catch(() => null);
        const msg =
          (errorJson && errorJson.error) ||
          "No se pudo iniciar el flujo de Stripe Connect.";
        toast.error(msg);
        return;
      }

      const { url } = await response.json();
      if (!url) {
        toast.error("No se recibió un enlace válido de Stripe.");
        return;
      }

      window.location.href = url;
    } catch (err) {
      console.error("Error en ConvertirmeEnCreador:", err);
      toast.error("Ha ocurrido un error inesperado. Intenta de nuevo.");
    }
  };
  return (
    <section className="h-screen w-full bg-[#3bcedc] flex items-center justify-center flex-col">
      <div className="max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold mb-11 ">
          Tienes que saber algo antes
        </h1>
        <div className="text-left list-disc list-inside mb-4 ml-8">
        <p className="mb-4">
          Al utilizar los servicios de <strong>Evoments</strong> para la promoción de tu evento,
          reconoces y aceptas que tú, como creador o responsable del mismo, asumes
          total y exclusiva responsabilidad sobre su organización, ejecución y
          consecuencias. Esta responsabilidad incluye, pero no se limita a:
        </p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>
            El cumplimiento de todas las normativas legales locales, incluyendo permisos,
            licencias y autorizaciones requeridas.
          </li>
          <li>
            La seguridad de los asistentes, del personal y de todos los involucrados en el evento.
          </li>
          <li>
            La gestión de cualquier tipo de reclamación legal, administrativa o civil
            que pudiera derivarse del evento.
          </li>
        </ul>
        <p>
          <strong>Evoments</strong> actúa únicamente como una plataforma de difusión y
          promoción, sin intervenir en la organización logística ni en la ejecución del evento.
          Por tanto, liberas a Evoments de cualquier tipo de responsabilidad legal, económica
          o moral derivada de incidentes, incumplimientos o conflictos relacionados con tu evento.
        </p>
      </div>
      </div>
      <label className="flex items-center gap-2 mb-4 text-white pt-4">
        <input
          type="checkbox"
          {...register("licencia", { required: true })}
          className="w-5 h-5"
        />
        Acepto los términos y condiciones
      </label>

      <ButtonBlocker
        className="mt-6"
        onClick={licenciaAceptada ? handleClick : alerta}
        disable={!licenciaAceptada}
      >
        Convertirme en creador
      </ButtonBlocker>
    </section>
  );
}

export default Section2;
