

function AddInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
      {/* Lado Izquierdo */}
      <div className="md:pr-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Texas nspire cx ll CACHADA!</h3>
        <p className="text-gray-500 mb-2">Diego Calvo</p>
        <img
          src={texasNspire}
          alt="Texas Nspire"
          className="w-500 h-auto md:rounded-md mb-4 object-cover"
        />
      </div>

      {/* Lado Derecho */}
      <div className="flex flex-col justify-between">
        <p className="text-lg md:text-xl font-bold mb-2">Precio: $345</p>
        <p className="text-gray-700 mb-2">Estado: Usado - Como nuevo</p>
        <p className="text-gray-700 mb-2">Publicado el: 08/10/2023</p>
        <div className="border border-gray-700 rounded-md mb-4">
          <p className="text-gray-700 p-4">
            Vendo Texas Instrument TI-nspire. Está nueva, viene con su cargador y el software de estudiantes incluido para un año. No acepto menos. Contenido de la caja:
            *Licencia de software compatible con MAC/Windows o cualquier otro sistema operativo.*Cable cargador de transferencia a computadora.
          </p>
        </div>
        <button className="bg-[#2F4D55] text-white py-4 px-6 rounded-md hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
          Contactar al vendedor
        </button>
      </div>
    </div>
  );
}

export default AddInfo;
