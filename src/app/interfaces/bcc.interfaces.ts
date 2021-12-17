export interface BCC {
  idBCC?: number;
  esBCC?: string;
  idBanco: number;
  idCapacitacion: number;
}

export interface BCCState {
  bcc: BCC;
  bccs: BCC[];
  isLoading: boolean;
}
