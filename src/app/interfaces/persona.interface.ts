export interface Persona {
  idPersona?: number;
  noPersona?: string;
  apPaterno?: string;
  apMaterno?: string;
  nuTelefono?: string;
  nuDNI?: string;
  diPersona?: string;
  tiSexo?: string;
  idBancoComunal?: null;
  esPersona?: string;
}

export interface PersonaReport {
  idPersona: number;
  noPersona: string;
  nuDni: string;
  nuTelefono: string;
  diPersona: string;
}

export interface PersonaState {
  personas: Persona[];
  personasReport: PersonaReport[];
  persona: Persona;
  isLoading: boolean;
}
