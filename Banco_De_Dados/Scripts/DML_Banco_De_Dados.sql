--------------------------DML--------------------------

USE MyUserLog;
GO

--------------------------Tabela De TipoDeUsuarios--------------------------
INSERT INTO TipoUsu(nomeTipo)
VALUES ('Root'),('Administrador'),('Geral');
GO

--------------------------Tabela De Status--------------------------
INSERT INTO  StatusUsu(nomeStatus)
VALUES ('Ativo'),('Inativo');
GO

--------------------------Tabela De Usuarios--------------------------
INSERT INTO Usuario(idTipo, idStatusUsu, nomeUsua, emailUsu, senhaUsu)
VALUES  (1, 1, 'Fabio', 'quatrochifabio@gmail.com', '123456'), 
		(2, 1, 'Rene', 'rene@gmail.com', '123456'),
		(3, 1, 'Cath', 'cath@gmail.com', '123456');
GO