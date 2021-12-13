export interface Usuario {
  idUsuPersona: number;
  usuCredencial: string;
  pwdCredencial: string;
  esUsuario: string;
  rols: Rol[];
}

export interface Rol {
  idRol: number;
  noRol: string;
  esRol: string;
  privilegios: any[];
}
