export interface Pregunta {
  idRecPregunta: number;
  noPregunta: string;
  idPreRec: number;
  alternativas: Alternativa[];
}

export interface Alternativa {
  idPreAlternativa: number;
  noAlternativa: string;
  esAlternativa: string;
  idAltPregunta: number;
}

export interface PreguntaState {
  preguntas: Pregunta[];
  pregunta: Pregunta;
  isLoading: boolean;
}

