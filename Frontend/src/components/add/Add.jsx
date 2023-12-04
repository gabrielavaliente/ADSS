import texasNspire from "../../img/TexasNspire.png";

function Add() {
  return (
    <div className=" bg-slate-100 max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-4 mb-4">

      <img
        src={texasNspire} alt="Texas nspire cx ll cas CACHADA!" className="w-80 h-auto object-cover rounded-md mb-4"/>
      <h3 className="text-xl font-semibold mb-2">Texas nspire cx ll cas CACHADA!</h3>
      <p className="text-lg font-bold text-green-500">$345</p>
    </div>
  );
}

export default Add;
