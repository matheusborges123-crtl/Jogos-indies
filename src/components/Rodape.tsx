export default function Rodape() {
  return (
    <footer className="flex justify-end px-20 items-center border-t border-blue-700 h-16">
      <span className=" font-bold text-blue-500 ">
        Todos os direitos reservados Matheus Borges &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
