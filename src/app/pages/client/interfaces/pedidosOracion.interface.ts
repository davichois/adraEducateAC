export interface PedidoOracion {
  idPedido?: number;
  deContenido: string;
  esPedido: string;
  feInicio: Date;
  feFin: Date;
  idPedPersona: number;
}

export interface PedidoOracionState {
  pedidoOracions: PedidoOracion[];
  pedidoOracion: PedidoOracion;
  isLoading: boolean;
}
