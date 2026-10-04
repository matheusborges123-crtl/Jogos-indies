import { IconDeviceGamepad } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-4 pt-7">
      <IconDeviceGamepad size={70} className="text-cyan-500" />

      <div className="text-xl font-bold gap-4 leading-10 ">
        <div className="text-blue-500">Mundo</div>

        <div className="text-red-600 tracking-widest">INDIE</div>
      </div>
    </Link>
  );
}
