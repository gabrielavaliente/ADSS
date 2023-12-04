

function PupilajeAddInfo() {
    return (
        <div className="flex flex-col mx-5 lg:mx-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10">
                <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Cachada pupilaje para la UCA</h3>
                    <p className="text-gray-500 mb-4">Antiguo Cuscatlan</p>
                    <p className="text-gray-500 mb-6">Diego Calvo</p>
                    
                </div>

                <div className="flex flex-col justify-between">
                    <p className="text-lg lg:text-xl font-bold">Precio: $180 / mes</p>
                    <p className="text-gray-700 mb-2">Meses a hospedarse: </p>
                    <p className="text-gray-700 mb-2">Publicado el: 08/10/2023</p>
                    <p className="text-gray-700 mb-2">Total a pagar: $180</p>
                    <div className="bg-gray-200 p-4 rounded-md border border-gray-300 mb-4">
                        <p className="text-gray-700">
                            Pupilaje a dos cuadras de la Basílica de Guadalupe. Zona UCA. Incluye: servicios de Luz, agua, WiFi, sala, comedor y cocina (área común). Información. Tef. 2413-0807.
                        </p>
                    </div>
                    <button className="bg-[#2F4D55] text-white py-12 px-4 rounded-md mb-1 hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
                        Contactar al vendedor
                    </button>
                    <button className="bg-[#2F4D55] text-white py-12 px-4 rounded-md hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
                        Reservar
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-10 my-10">
                <div className="bg-gray-300 p-4 rounded-md border border-gray-300">
                    <p className="text-gray-700 p-2">Luz eléctrica</p>
                    <p className="text-gray-700 p-2">Agua potable</p>
                    <p className="text-gray-700 p-2">WI-FI</p>
                    <p className="text-gray-700 p-2">Garage</p>
                </div>

                <div className="bg-gray-300 p-4 rounded-md border border-gray-300">
                    <div>Mapa</div>
                </div>
            </div>

            <div className="p-4">
                <div className="bg-gray-100 p-4 rounded-md border border-gray-300 mb-4">
                    <div className="flex items-center mb-2">
                        <img src={pupilajeFoto} alt="Foto de usuario" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <p className="font-bold">Usuario1</p>
                            <p className="text-gray-500">Fecha de publicación</p>
                        </div>
                    </div>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque sequi magni quam? Expedita excepturi illum, modi distinctio, recusandae natus voluptas quam, aperiam dolorum aliquam molestias repellat laborum minima ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur esse voluptatibus, fuga aspernatur eligendi illo sequi a obcaecati similique voluptates nihil est, nemo tempora ducimus et eveniet adipisci veniam necessitatibus.
                    </p>
                </div>

                {/* Otros comentarios */}
                {/* ... */}                {/* Otros comentarios */}
                {/* ... */}

                <form className="flex items-center justify-between w-full px-4 m-2 mb-6 lg:mb-10">
                    <input
                        type="text"
                        placeholder="Ingresa tu comentario..."
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button
                        type="submit"
                        className="shadow appearance-none border rounded w-auto py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
                    >
                        Publicar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PupilajeAddInfo;
