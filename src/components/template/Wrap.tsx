import { mergeClasses } from "../../../utils/mergesClasses";

interface WrapProps {
  children: any;
  className?: string;
}

export default function Wrap({ children, className }: WrapProps) {
  return <div className={mergeClasses(`w-full overflow-hidden`, className)}>{children}</div>;
}
