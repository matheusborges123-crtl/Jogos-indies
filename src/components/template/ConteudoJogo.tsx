import jogos from "@/api/constants/jogos";
import { IconBrandSteam } from "@tabler/icons-react";
import Image from "next/image";
import Arealateral from "./Arealateral";

export default function ConteudoJogo() {
  return (
    <div className="gap-10 flex flex-col">
      <h1 className="text-blue-500 font-bold text-3xl">Principais jogos</h1>
      <h2 className="text-lg text-zinc-400 font-thin">Os jogos mais populares de varios generos</h2>
      {jogos.map((jogo) => (
        <div key={jogo.id}>
          <Image src={jogo.imagem} alt={jogo.nome} width={250} height={250} />

          <h1 className="text-zinc-500 font-bold text-l mb-2">Genero: {jogo.genero}</h1>

          <p className="text-zinc-300 font-thin text-sm mb-3">{jogo.descricao}</p>

          <a href={jogo.steam_link} className="">
            <button className="btn gap-5 mb-4 cursor-pointer">
              Garanta na Steam
              <IconBrandSteam size={20} />
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}
