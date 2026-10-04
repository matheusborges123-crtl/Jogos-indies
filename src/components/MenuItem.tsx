import Link from "next/link";

interface MenuItemProps {
  url: string;
  titulo: string;
  children: any;
}
export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      className="text-zinc-500 text-lg flex items-center font-thin rounded-md hover:bg-zinc-500/30 hover:underline"
      href={props.url}
    >
      <span>{props.titulo}</span>
      <span className="ml-6">{props.children}</span>
    </Link>
  );
}
