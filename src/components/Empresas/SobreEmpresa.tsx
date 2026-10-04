import Image from "next/image";
import Flex from "../template/Flex";
import Biografia from "../template/Biografia";

export interface SobreEmpresaPropps {
  id: string;
  nome: string;
  imagem: string;
  biografia: string;
}

export default function SobreEmpresa({ id, nome, imagem, biografia }: SobreEmpresaPropps) {
  return (
    <Flex col className="flex gap-6 max-w-3xl w-full mt-10 mx-auto px-4">
      <Image
        src={imagem}
        alt={`Imagem da logo de ${nome}`}
        width={300}
        height={300}
        className="object-contain max-w-full h-auto"
      />
      <h2 className="mt-10 text-zinc-300 text-3xl self-start">Sobre a empresa</h2>
      <div className="prose prose-zinc max-w-full">
        <Biografia texto={biografia} />
      </div>
    </Flex>
  );
}
