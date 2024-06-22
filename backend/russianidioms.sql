CREATE DATABASE IDIOMS;

CREATE TABLE weather (
    city            varchar(80),
    temp_lo         int,           -- low temperature
    temp_hi         int,           -- high temperature
    prcp            real,          -- precipitation
    date            date
);

SELECT * FROM idioms;

CREATE TABLE idioms (
    idiom_stub uuid,
    russian text,
    english text,
    added_date date,
    added_by char(20)
);
id uuid PRIMARY KEY DEFAULT uuid_generate_v4();
CREATE EXTENSION pgcrypto;
select pg_get_functiondef(to_regproc('gen_random_uuid'));
alter table idioms
add example text;
insert into idioms values
                       ('9f174174-bd51-4932-bb98-ed45759179d5', 'Дырявая голова', 'Head full of holes', CURRENT_DATE, current_user, 'Used to describe someone who is forgetful');
select * from idioms;

update idioms
set example = '"Хочешь со мной работать в поле?" "Эх... Нас и здесь ниплохо кормят"'
where idiom_stub = '9f174174-bd51-4932-bb98-ed45759179d5';