export interface Usuario {
    email: string;
    
}

export interface AuthResponse{
    email?: string;
    token?: string;
    error?: string;
    ok: boolean;
    tipousuario_idTipoUsuario?: number;
}

export interface AuthRegistro {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    apellidoP: string;
    apellidoM: string;
    telefono: string;
    fecha_nacimiento: Date;
    tipousuario_idTipoUsuario: number;
}

export interface Servicio{
    idServicio: number;
    nombre: string;
    descripcion: string;
    precio: number;
}

export interface TipoPago{
    idTipoPago: number;
    nombre: string;
}

export interface Arriendo{
    vencido: number;
    activo: number;
    servicio_idServicio: number;
    tipopago_IdTipoPago: number;
    users_id: number;
}