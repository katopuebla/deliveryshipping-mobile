export interface Envio { 
    guia: number
    , remitente? : {
      id? : number
      ,nombre?: string
      ,compania?: string
      ,direccion?: string
      ,telefono?: string
    }
    , consignatario?: {
      id? : number
      ,nombre?: string
      ,compania?: string
      ,direccion?: string
      ,telefono?: string
    }
    , peso?: number
    , alto?: number
    ,ancho?: number
    , largo?: number
    , servicio?: {
      mismodia?: boolean
      ,diasiguiente?: boolean
    }
}