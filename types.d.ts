export type SquidResponse = {
  uid: string;
  link: string;
  upvotes: number;
  comentarios: number;
  criadoEm: string;
  legenda: string;
  usuario: {
    nome: string;
  };
  imagens: {
    resolucaoPadrao: {
      url: string;
      width: number;
      height: number;
    };
    resolucaoMedia: {
      url: string;
      width: number;
      height: number;
    };
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
  };
}[];

export type SquidProps = {
  props: {
    uid: string;
    link: string;
    upvotes: number;
    comentarios: number;
    criadoEm: string;
    legenda: string;
    usuario: {
      nome: string;
    };
    imagens: {
      resolucaoPadrao: {
        url: string;
        width: number;
        height: number;
      };
      resolucaoMedia: {
        url: string;
        width: number;
        height: number;
      };
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};
