import {
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconHexagonNumber5,
  IconHome,
} from "@tabler/icons-react";
import Menu from "../Menu";
import MenuItem from "../MenuItem";

export default function AreaLateral() {
  return (
    <aside className="w-72 text-zinc-500 p-5 mr-8 flex flex-col">
      <Menu titulo="Empresas Principais">
        <MenuItem titulo="Team Cherry" url="/Empresa/team-cherry">
          <IconHexagonNumber1 />
        </MenuItem>

        <MenuItem titulo="Motion Twin" url="/Empresa/motion-twin">
          <IconHexagonNumber2 />
        </MenuItem>

        <MenuItem titulo="ConcernedApe" url="/Empresa/concerned-ape">
          <IconHexagonNumber3 />
        </MenuItem>

        <MenuItem titulo="Studio MDHR" url="/Empresa/studio-mdhr">
          <IconHexagonNumber4 />
        </MenuItem>

        <MenuItem titulo="New Blood Interactive" url="/Empresa/new-blood-interactive">
          <IconHexagonNumber5 />
        </MenuItem>
      </Menu>

      <hr className="w-auto" />

      <Menu titulo="Principal">
        <MenuItem titulo="Empresas" url="/Empresas" />
        <MenuItem titulo="Principais jogos" url="/" />
      </Menu>
    </aside>
  );
}
