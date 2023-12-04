import React from "react";
import add1 from "../../img/Alquila.png";
import buho from "../../img/buho.png";

function Homepage() {
  return (
    <>
      <div className="flex flex-col justify-center px-10">
        <img src={add1} alt="Alquila Pupilajes" />
      </div>

      <div className="flex items-center justify-center p-20">
        <div className="order-2 md:order-1 mx-auto">
          <img src={buho} alt="logo" className="w-90 h-auto object-cover rounded-md mb-4 pr-10 " />
        </div>
        <div className="order-1 md:order-2">
          <div className="bg-gray-200 p-5 rounded-md">
            <p className="text-lg mb-5">
              Bienvenidos a ADDSS, donde nos enorgullece ofrecer a la comunidad
              estudiantil de la Universidad Centroamericana José Simeón Cañas
              (UCA) una plataforma dedicada a facilitar la búsqueda de
              alojamiento estudiantil y la adquisición de materiales educativos.
              Nos esforzamos por crear un espacio donde los estudiantes puedan
              conectarse, compartir recursos y hacer que su experiencia
              universitaria sea más cómoda y enriquecedora.
            </p>

            <div className="bg-gray-200 p-5  rounded-md">
        <p className="text-lg mb-5">
          Nuestra misión es crear una comunidad en línea que promueva la
          colaboración y el apoyo mutuo entre los estudiantes de la UCA. Nos
          esforzamos por simplificar el proceso de búsqueda de pupilajes, así
          como la compra y venta de útiles, libros y calculadoras. Creemos en la
          importancia de la accesibilidad y la conveniencia para mejorar la
          calidad de vida estudiantil.
        </p>
      </div>
          </div>
        </div>
      </div>

    
    </>
  );
}

export default Homepage;
