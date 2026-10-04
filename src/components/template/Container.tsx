import { mergeClasses } from "../../../utils/mergesClasses";

interface ContainerProps {
  className?: string;
  children: any;
  bigPadding?: boolean;
}

export default function Container({ className, children, bigPadding }: ContainerProps) {
  return (
    <div
      className={mergeClasses(`w-full w-min-7xl mx-auto p-4`, className, { "py-20": !!bigPadding })}
    >
      {children}
    </div>
  );
}
