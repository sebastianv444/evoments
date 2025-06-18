import Footer from "@/components/footer";
import ButtonMotion from "@/components/myButtons/ButtonMotion";
import { useForm } from "react-hook-form";
import { MdLocalPhone, MdAccessTime, MdLocationOn, MdEmail } from "react-icons/md";
export default function contacto() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (formData) => {
    fetch("https://formsubmit.co/ajax/evoments032@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#00308E] to-teal-300 text-white p-6">
        <div className="flex flex-col lg:flex-row items-start justify-center max-w-4xl mx-auto p-4 rounded-2xl shadow-2xl gap-6 bg-white/20 backdrop-blur-md mt-40">

          {/* Formulario */}
          <form
            onSubmit={handleSubmit(onSubmit)}

            className="w-full lg:w-1/2 p-6 rounded-lg shadow-lg"
          >
            <div className="space-y-4">
              <label>Nombre:</label>
              <input
                type="text"
                {...register("nombre", { required: true })}
                className="w-full p-2 border rounded text-white"
                placeholder="Nombre del evento"
              />
              {errors?.nombre && <p className="text-red-500 text-sm">El Nombre es requerido</p>}

              <label>Correo electrónico:</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full p-2 border rounded text-black"
                placeholder="Correo electrónico"
              />
              {errors?.email && <p className="text-red-500 text-sm">El Correo electrónico es requerido</p>}

              <label>Asunto:</label>
              <input
                type="text"
                {...register("asunto")}
                className="w-full p-2 border rounded text-black"
                placeholder="Asunto del mensaje"
              />

              <label>Mensaje:</label>
              <input
                type="text"
                {...register("mensaje", { required: true })}
                className="w-full p-2 border rounded text-black"
                placeholder="Mensaje"
              />
              {errors?.mensaje && (
                <p className="text-red-500 text-sm">El mensaje es requerido</p>
              )}
            </div>
            <div className="flex justify-center mt-4 p-2">
              <ButtonMotion
                type="submit"
                className="border-blue-600 border-3 hover:bg-blue-700"
              >
                Enviar
              </ButtonMotion>
            </div>
          </form>

          {/*Iconos*/}
          <div className="w-full lg:w-1/2 p-6 flex flex-col items-center space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pr-3">
              <div className="flex items-start space-x-2">
                <MdLocalPhone size={30} />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p>+34 623 451 789</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 ">
                <a href="https://mail.google.com/" target="_blank">
                  <MdEmail size={30} className=" hover:text-blue-700 transition-colors duration-200" />
                </a>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>evoments032@gmail.com</p>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex items-start space-x-2">
                 <a href="https://www.google.es/maps?hl=es" target="_blank">
                   <MdLocationOn size={30} className=" hover:text-blue-700 transition-colors duration-200" />
                 </a>
                <div>
                  <p className="font-semibold">Nuestras oficinas</p>
                  <p>Calle Villablanca, 79, 28032 Madrid, España</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MdAccessTime size={40} />
                <div>
                  <p className="font-semibold">Horario</p>
                  <p>Lunes a Viernes: 9:00 – 15:00</p>
                </div>
              </div>
            </div>


            <div className="w-full">
              <iframe
                className="w-full h-64 md:h-80 lg:h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.3101465261684!2d-3.621212!3d40.4120454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422ef86f75b1fd%3A0xd15163e2bb7d69e6!2sC.%20de%20Villablanca%2C%2079%2C%2028032%20Madrid!5e0!3m2!1ses!2ses!4v1718556389507!5m2!1ses!2ses"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
