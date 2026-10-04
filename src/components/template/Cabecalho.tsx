import Logo from "../Logo";

export default function Cabecalho() {
  return (
    <header className="flex flex-col justify-center items-center border-b gap-3   border-cyan-400 h-24 ">
      <Logo></Logo>
    </header>
  );
}
