import ButtonMotion from "@/components/myButtons/ButtonMotion";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

function Section2() {
  const { user } = useUser(); // Clerk hook para obtener el usuario autenticado

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
      <div className="mx-230">
        <h1 className="text-4xl font-bold text-center mb-11">
          Tienes que saber algo antes
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          praesentium asperiores consequuntur eius vitae nihil, magnam omnis
          harum temporibus quidem cupiditate numquam minima quae possimus velit
          voluptatem accusamus optio voluptates. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dignissimos fugiat repellendus corporis
          alias adipisci, magni distinctio ea laborum unde. Perspiciatis
          quisquam quis dicta non cumque fuga deleniti voluptate laborum! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius
          fugiat dolore ea corrupti pariatur voluptatum, voluptatibus atque sunt
          provident tempore cum iure nulla, odit, soluta asperiores. Officiis,
          dolorum nemo.
        </p>
      </div>
      <ButtonMotion className="mt-6" onClick={handleClick}>Convertirme en creador</ButtonMotion>
    </section>
  );
}

export default Section2;
