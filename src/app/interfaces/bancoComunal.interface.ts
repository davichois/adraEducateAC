export interface BancoComunal {
  idBancoComunal: number;
  noBancoComunal: string;
  idBcDistrito: number;
}

export interface BancoComunalReport {
  idBC: number;
  noBC: string;
  disBC: string;
  proBC: string;
  depBC: string;
}

export interface BancoComunalState {
  bancosComunal: BancoComunal[];
  bancosComunalReport: BancoComunalReport[];
  bancoComunal: BancoComunal;
  isLoading: boolean;
}
