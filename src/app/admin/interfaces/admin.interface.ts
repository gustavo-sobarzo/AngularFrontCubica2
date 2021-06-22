export interface Admin{
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

export interface ServicioAdd{
    nombre: string;
    descripcion: string;
    precio: number;
}

export interface ListarClientes{
    name: string;
    email: string;
    apellidoP: string;
    apellidoM: string;
    telefono: string;
    fecha_nacimiento: Date;
}