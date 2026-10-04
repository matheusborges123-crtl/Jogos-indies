import { mergeClasses } from "../../utils/mergesClasses";

interface GridProps {
  children: any;
  className?: string;
  collum?: boolean;
  numCols: number;
  numRows?: number;
}

export default function Grid({ children, className, collum, numCols, numRows }: GridProps) {
  const rowClass = numRows ? `grid-rows-${numRows}` : "";
  const colClass = numCols && collum ? `grid-cols-${numCols}` : "";
  return <div className={mergeClasses(`grid`, rowClass, colClass, className)}>{children}</div>;
}
