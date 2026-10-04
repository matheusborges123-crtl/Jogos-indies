interface MenuProps {
  titulo: string;
  children: any;
}

export default function Menu(props: MenuProps) {
  return (
    <div className="text-xl p-5 pr-3 font-bold  flex flex-col gap-5 ml- text-zinc-50 min-h-auto  ">
      {props.titulo}

      {props.children}
    </div>
  );
}
