export interface Cliente{
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

export interface Auth {
    email: string;
    password: string;
}