export interface Capacitacion {
  idCapacitacion: number;
  noCapacitacion: string;
  deCapacitacion: string;
  feInicioCapacitacion: Date;
  feFinCapacitacion: Date;
  tiCapacitacion: string;
  idCapCategoria: number;
  totalRecCapacitacion: string;
  esCapacitacion: string;
  fiImageURL: string;
  sesions: Sesion[];
}

export interface CapacitacionReport {
  idCapacitacion: number;
  noCapacitacion: string;
  noCategoria: string;
  tiCapacitacion: string;
  nuSesiones: number;
}

export interface CapacitacionState {
  capacitacionesReport: CapacitacionReport[];
  capacitaciones: Capacitacion[];
  capacitacion: Capacitacion;
  isLoading: boolean;
}

export interface Sesion {
  idSesion: number;
  noSesion: string;
  deSesion: string;
  feInicioSesion: Date;
  feFinSesion: Date;
  idSesCapacitacion: number;
}
