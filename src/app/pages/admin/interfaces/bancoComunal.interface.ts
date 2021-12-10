export interface BancoComunal {
  idBancoComunal?: number;
  noBancoComunal?: string;
  idBcDistrito?: number;
}

export interface BancoComunalState {
  bancosComunal: BancoComunal[];
  bancoComunal: BancoComunal;
  isLoading: boolean;
}
