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

export interface PersonaState {
  personas: Persona[];
  persona: Persona;
  isLoading: boolean;
}
