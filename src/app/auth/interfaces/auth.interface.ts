export interface Usuario {
    email: string;
    name?: string;
    tipousuario_idTipoUsuario?: number;
}


  

export interface AuthResponse{
    email: string;
    token: string;
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