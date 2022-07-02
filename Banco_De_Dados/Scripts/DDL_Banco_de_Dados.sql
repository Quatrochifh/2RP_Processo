--------------------------DDL--------------------------
CREATE DATABASE MyUserLog; 
GO

USE MyUserLog;
GO

--------------------------Tabela De TipoDeUsuarios--------------------------

--Utilizei o NVARCHAR pois ele é unicode, ou seja, ele aceita qualquer tipo de caracter, sendo ele mandarim ou não.
--Porem o NVARCHAR, por ser unicode ocupa o dobro de espaço do que o VARCHAR normal.

CREATE TABLE TipoUsu(
	idTipo INT PRIMARY KEY IDENTITY,
	nomeTipo NVARCHAR (200) UNIQUE NOT NULL
);
GO

--------------------------Tabela De Status--------------------------
CREATE TABLE StatusUsu(
	idStatusUsu INT PRIMARY KEY IDENTITY,
	nomeStatus NVARCHAR (200) UNIQUE NOT NULL
);
GO

--------------------------Tabela De Usuarios--------------------------
CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY IDENTITY,
	idTipo INT FOREIGN KEY REFERENCES TipoUsu(idTipo),
	idStatusUsu INT FOREIGN KEY REFERENCES StatusUsu(idStatusUsu),
	nomeUsua NVARCHAR (200) NOT NULL,
	emailUsu NVARCHAR (256) UNIQUE NOT NULL,
	senhaUsu NVARCHAR (200) NOT NULL
);
GO