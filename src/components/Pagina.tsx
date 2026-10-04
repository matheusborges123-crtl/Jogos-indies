import Arealateral from "./template/Arealateral";
import Cabecalho from "./template/Cabecalho";
import Rodape from "./Rodape";

interface PaginaProps {
  children: any;
  className?: string;
}
export default function Pagina({ children, className }: PaginaProps) {
  return (
    <div className={`min-h-screen flex flex-col gap-10 ${className ?? "bg-black text-white"}`}>
      <Cabecalho />
      <div className="flex flex-1 max-w-7xl mx-auto w-full p-5 gap-5">
        <Arealateral />
        <main className="flex-1">{children}</main>
      </div>
      <Rodape />
    </div>
  );
}
