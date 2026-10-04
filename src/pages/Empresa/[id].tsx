import Empresas from "@/api/constants/Empresas";
import SobreEmpresa from "@/components/Empresas/SobreEmpresa";
import Pagina from "@/components/Pagina";

export async function getStaticPaths() {
  const paths = Empresas.map((empresa) => ({
    params: { id: empresa.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const empresa = Empresas.find((e) => e.id === params.id);
  return { props: { empresa } };
}

export default function EmpresaPage({ empresa }: any) {
  return (
    <Pagina>
      <SobreEmpresa
        id={empresa.id}
        nome={empresa.nome}
        imagem={empresa.imagem}
        biografia={empresa.biografia}
      />
    </Pagina>
  );
}
