import { ModeToggle } from "./mode-toggle";
import { H3 } from "./styledComponents";

function Navbar() {
  return (
    <div className="flex justify-between p-6  rounded-lg shadow-lg">
      <H3 className="text-2xl font-medium animate-bounce">
        Presab <span className="text-orange-500">Khadka</span>
      </H3>
      <ModeToggle />
    </div>
  );
}
export default Navbar;
