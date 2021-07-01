export interface Usuario {
    email: string;
    
}

export interface AuthResponse{
    email?: string;
    token?: string;
    error?: string;
    ok: boolean;
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