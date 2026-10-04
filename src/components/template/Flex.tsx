import { mergeClasses } from "../../../utils/mergesClasses";

interface FlexProps {
  col?: boolean;
  row?: boolean;
  children: any;
  className?: string;
}

export default function Flex({ col, children, className, row }: FlexProps) {
  return (
    <div
      className={mergeClasses(
        `flex items-center gap-2`,
        className,

        { "flex-col": !!col, "flex-row": !!row },
      )}
    >
      {children}
    </div>
  );
}
