// src/utils/mergesClasses.ts

export function mergeClasses(
  ...classes: (string | undefined | null | Record<string, boolean | undefined>)[]
): string {
  return classes
    .flatMap((cls) => {
      if (!cls) return [];
      if (typeof cls === "string") return [cls];
      return Object.entries(cls)
        .filter(([_, condition]) => condition)
        .map(([className]) => className);
    })
    .join(" ");
}
