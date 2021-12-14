export interface Recurso {
  idRecurso: number;
  noRecurso: string;
  deRecurso: string;
  fiURL: string;
  idRecTipoDoc: number;
}

export interface RecursoState {
  recursos: Recurso[];
  recurso: Recurso;
  isLoading: boolean;
}
