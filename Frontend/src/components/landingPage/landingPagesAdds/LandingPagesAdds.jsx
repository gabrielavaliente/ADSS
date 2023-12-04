import { NavLink } from "react-router-dom";
import Add from "../../add/Add";

function LandingPageAdds() {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg mb-2">Ultimos anuncios</h3>
      <div className="flex flex-col md:flex-row md:justify-between px-4 lg:px-10">
        <NavLink to="/AddInfo" className="mb-4 md:mb-0 md:pr-4">
          <Add />
        </NavLink>

        <NavLink to="/AddInfo" className="mb-4 md:mb-0 md:pr-4">
          <Add />
        </NavLink>

        <NavLink to="/AddInfo" className="mb-4 md:mb-0 md:pr-4">
          <Add />
        </NavLink>

        <NavLink to="/AddInfo" className="mb-4 md:mb-0 md:pr-4">
          <Add />
        </NavLink>
      </div>
    </div>
  );
}

export default LandingPageAdds;