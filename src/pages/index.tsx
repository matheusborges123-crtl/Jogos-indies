import Pagina from "@/components/Pagina";
import Image from "next/image";
import jogos from "@/api/constants/jogos";
import ConteudoJogo from "@/components/template/ConteudoJogo";

export default function Home() {
  return (
    <Pagina>
      <ConteudoJogo />
    </Pagina>
  );
}
