import ReactMarkdown from "react-markdown";

export default function Biografia({ texto }: { texto: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p className="wrap-break-word-words whitespace-pre-wrap tracking-widest text-zinc-400 leading-relaxed text-sm lg:text-md text-justify mt-3">
            {children}
          </p>
        ),
        h2: ({ children }) => <h2 className="text-lg font-bold text-zinc-700 mt-4">{children}</h2>,
        pre: ({ children }) => (
          <pre className=" text-zinc-500 p-3 rounded-md overflow-x-auto">{children}</pre>
        ),
      }}
    >
      {texto}
    </ReactMarkdown>
  );
}
