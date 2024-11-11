CREATE DATABASE Proyecto_Anderson;
USE Proyecto_Anderson;
CREATE TABLE Sede (
    Sede_id INT PRIMARY KEY AUTO_INCREMENT,
    Sede_nombre VARCHAR(200) UNIQUE,
    Sede_direccion VARCHAR(200),
    Sede_ciudad VARCHAR(100),
	Sede_barrio VARCHAR(100),
    Sede_capacidad int,
    Sede_Cupos int
);


CREATE TABLE SedePersona (
    Sepe_id INT PRIMARY KEY AUTO_INCREMENT,
    Sepe_fecha_ingreso date,
	Sepe_fecha_salida date,
    Sepe_estado enum ('Activo', 'Inactivo'),
    Sede_id int,
    per_id int,
    FOREIGN KEY (Sede_id) REFERENCES Sede(Sede_id),
    FOREIGN KEY (per_id) REFERENCES Persona(per_id)
);

CREATE TABLE Persona (
    per_id INT PRIMARY KEY AUTO_INCREMENT,
    per_documento VARCHAR(20) unique,
    per_nombres VARCHAR(200),
    per_correo VARCHAR(100),
    per_fecha_nacimiento date,
    per_genero enum ('Masculino', 'Femenino'),
    per_telefono VARCHAR(100),
    rol_id int,
    FOREIGN KEY (rol_id) REFERENCES Rol(rol_id)
);


CREATE TABLE Rol (
    rol_id INT PRIMARY KEY AUTO_INCREMENT,
    rol_nombre varchar (100) unique,
    rol_descripcion varchar (255)
);

CREATE TABLE Paciente (
    per_id int primary key,
    pa_alergias varchar (255),
    pa_estado_civil enum ('Soltero', 'Casado', 'Divorciado', 'Viudo'),
    pa_peso int,
    pa_estatura int,
    pa_talla_pantalon int,
    pa_talla_camisa varchar(50),
    pa_protesis enum ('Si', 'No'),
    pa_pañal enum ('Si', 'No'),
    pa_antecedentes varchar (255),
    pa_tipo_afiliacion enum ('Contributivo', 'Beneficiario'),
    pa_estado_general varchar (255),
    pa_rh enum ('A+', 'A-', 'B+','B-','O+','O-'),
    FOREIGN KEY (per_id) REFERENCES Persona(per_id)
);

CREATE TABLE Ingreso (
	ing_id INT PRIMARY KEY AUTO_INCREMENT,
    ing_usuario VARCHAR(100) UNIQUE,
    ing_contraseña VARCHAR(100),
    ing_ultimo_acceso date,
    per_id int,
    FOREIGN KEY (per_id) REFERENCES Persona(per_id)
);

CREATE TABLE Acudiente (
    per_id INT PRIMARY KEY,
    acu_parentesco VARCHAR(100),
    acu_telefono VARCHAR(100),
    FOREIGN KEY (per_id) REFERENCES Persona(per_id)
);

CREATE TABLE Enfermero (
    per_id int PRIMARY KEY,
    enf_codigo VARCHAR(100),
    enf_turnos_dia int,
    enf_turnos_noche int,
    FOREIGN KEY (per_id) REFERENCES Persona(per_id)
);

CREATE TABLE Enfermero_Paciente (
    enfa_id INT PRIMARY KEY AUTO_INCREMENT,
    per_id_enfermero int,
    per_id_paciente int,
    enfa_fecha_inicio date,
    enfa_fecha_finalizacion date,
    enfa_observacion varchar (255),
    FOREIGN KEY (per_id_paciente) REFERENCES Paciente(per_id),
    FOREIGN KEY (per_id_enfermero) REFERENCES Enfermero(per_id)
);
CREATE TABLE Medicamento (
    med_id INT PRIMARY KEY AUTO_INCREMENT,
    med_nombre VARCHAR(200),
    med_presentacion VARCHAR(200),
    med_observacion VARCHAR(255)
);

CREATE TABLE Seguimiento (
    se_id INT PRIMARY KEY AUTO_INCREMENT,
    se_presion_arterial VARCHAR(100),
    se_ritmo_cardiaco VARCHAR(100),
    se_fecha date,
    se_temperatura int,
    se_peso int,
    se_frecuencia_respiratoria VARCHAR(200),
    se_observacion VARCHAR(255),
    per_id int,
    FOREIGN KEY (per_id) REFERENCES Paciente(per_id)
    
);
CREATE TABLE Suministro (
    su_id INT PRIMARY KEY AUTO_INCREMENT,
    med_id int,
    per_id int,
    su_hora datetime,
    su_fecha_ingreso date,
    su_fecha_finalizacion date,
    su_capacidad int,
    FOREIGN KEY (per_id) REFERENCES Paciente(per_id),
    FOREIGN KEY (med_id) REFERENCES Medicamento(med_id)
);
CREATE TABLE Dosis (
    dosis_id INT PRIMARY KEY AUTO_INCREMENT,
    su_id int,
    dosis_fecha date,
    dosis_hora datetime,
    dosis_observacion VARCHAR(200),
    FOREIGN KEY (su_id) REFERENCES Suministro(su_id)
);
