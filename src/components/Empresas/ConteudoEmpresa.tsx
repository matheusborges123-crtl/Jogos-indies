import Empresas from "@/api/constants/Empresas";
import Image from "next/image";

export default function ConteudoEmpresa() {
  return (
    <div className="grid grid-cols-2 gap-5 relative flex-1 h-200 w-auto">
      {Empresas.map((empresa: any) => (
        <a key={empresa.id} href={`/Empresa/${empresa.id}`} className="relative cursor-pointer">
          <Image
            alt={`Logo da ${empresa.nome}`}
            width={200}
            height={200}
            src={empresa.imagem}
            className="object-cover"
          />
          <span className="absolute bottom-4 hover:bg-zinc-800 bg-zinc-500/70 text-lg font-bold text-white p-1">
            {empresa.nome}
          </span>
        </a>
      ))}
    </div>
  );
}
