use violoncelo;

show tables;

select * from usuario;

select naipe, count(*) as quantidade from usuario group by naipe;

select instrumento, count(*) as quantidade from usuario group by instrumento;

show tables;

select * from quiz;	

select pontuacao, count(*) as quantidade from quiz group by pontuacao;

select pontuacao, count(*) as quantidade from quiz where fkusuario = 1 group by pontuacao;

select * from quiz where fkusuario = 1;

select count(*) as quantidade from usuario;
select * from usuario;

select * from quiz;
select round(avg(pontuacao),1) as mediapontuacao from quiz;