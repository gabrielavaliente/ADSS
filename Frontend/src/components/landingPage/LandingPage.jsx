import add1 from "../../img/Alquila.png";
import buho from "../../img/buho.png"

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center px-10">
      <img src={add1} alt="Alquila Pupilajes" className="mb-8" />
      <div className="flex items-center justify-center p-20">
<div className="order-2 md:order-1 mx-auto">
  <img src={buho} alt="logo" className="w-80 h-auto object-cover rounded-md mb-4 pr-10 " />
</div>
<div className="order-1 md:order-2">
  <div className="bg-gray-200 p-5 rounded-md">
    <p className="text-6xl mb-5">
    ¡Bienvenido! Comienza a Navegar con Nosotros
    </p>

    <div className="bg-gray-200 p-5  rounded-md">
<p className="text-lg mb-5">
Gracias por ser parte de ADSS. ¡Esperamos que encuentres todo lo que
        necesitas para que tu experiencia universitaria sea aún más increíble!
</p>
</div>
  </div>
</div>
</div>
    </div>
  );
}

export default LandingPage;


