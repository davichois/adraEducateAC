export interface Capacitacion {
  idCapacitacion?: number;
  noCapacitacion?: string;
  deCapacitacion?: string;
  feInicioCapacitacion?: Date;
  feFinCapacitacion?: Date;
  tiCapacitacion?: string;
  idCapCategoria?: number;
  totalRecCapacitacion?: string;
  esCapacitacion?: string;
  fiImageURL?: string;
}

export interface CapacitacionState {
  capacitaciones: Capacitacion[];
  capacitacion: Capacitacion;
  isLoading: boolean;
}
