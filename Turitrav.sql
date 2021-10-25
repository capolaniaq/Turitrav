
insert into api_department (name) values ('Antioquia');
insert into api_department (name) values ('Cordoba');
insert into api_department (name) values ('Meta');
insert into api_department (name) values ('Boyaca');
insert into api_department (name) values ('Huila');

insert into api_city (name, iddepartment_id) values ('Ibague', 4);
insert into api_city (name, iddepartment_id) values ('Tunja', 2);
insert into api_city (name, iddepartment_id) values ('chiquinquira', 2);
insert into api_city (name, iddepartment_id) values ('chia', 3);
insert into api_city (name, iddepartment_id) values ('Bucaramanga', 1);
insert into api_city (name, iddepartment_id) values ('Bogota', 3);


insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('lickovici0', 'Lek', 'Ickovici', true, 'lickovici0@virginia.edu', 'SjJCbNB2', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('ndesouza1', 'Norton', 'Desouza', false, 'ndesouza1@eventbrite.com', 'LzhTaSttBN0', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('tpaskell2', 'Tiffany', 'Paskell', true, 'tpaskell2@cnn.com', 'rTgzBtgQQ7gA', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('tgodby3', 'Torr', 'Godby', true, 'tgodby3@bravesites.com', 'Ck7zHGadx5', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('rbroadbere4', 'Roland', 'Broadbere', true, 'rbroadbere4@1und1.de', '0sOqwbsQ', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('cramsay5', 'Carlyn', 'Ramsay', false, 'cramsay5@imageshack.us', 'c24xnApTu', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser)values ('rbinne6', 'Rollie', 'Binne', false, 'rbinne6@instagram.com', 'akROo8fbJF', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('apowell8', 'Alford', 'Powell', true, 'apowell8@51.la', 'SA6MYHWEs', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('mlindenboima', 'Madel', 'Lindenboim', true, 'mlindenboima@ted.com', 'oMOnJ08zVE', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('zwarboysb', 'Zara', 'Warboys', true, 'zwarboysb@wikimedia.org', 'LxqCXKcL', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('amonaghanc', 'Agatha', 'Monaghan', false, 'amonaghanc@smh.com.au', 'DsL9pnQ', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('mduignand', 'Marianna', 'Duignan', true, 'mduignand@ted.com', 'fYa78MT', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('lgoodanewe', 'Lancelot', 'Goodanew', true, 'lgoodanewe@liveinternet.ru', '31dOz2gZ4', true, true, "2021-10-25T01:54:08.595096Z", true);

insert into api_owner (user_id) values (8);
insert into api_owner (user_id) values (10);
insert into api_owner (user_id) values (2);
insert into api_owner (user_id) values (5);
insert into api_owner (user_id) values (1);
insert into api_owner (user_id) values (4);

insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (1, 4, 'Palomar', 'Toche es un corregimiento del municipio de Ibagué dentro del departamento del Tolima y es donde se encuentra el bosque de Palma de Cera más grande de Colombia y del mundo, además es el árbol nacional del país.', 5.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (2, 4, 'Santa ana', 'Toche es un corregimiento del municipio de Ibagué dentro del departamento del Tolima y es donde se encuentra el bosque de Palma de Cera más grande de Colombia y del mundo, además es el árbol nacional del país.', 5.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (3, 2, 'Cataratas la nueva ola', 'Toche es un corregimiento del municipio de Ibagué dentro del departamento del Tolima y es donde se encuentra el bosque de Palma de Cera más grande de Colombia y del mundo, además es el árbol nacional del país.', 3.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (1, 2, 'pescaderia la calera', 'Toche es un corregimiento del municipio de Ibagué dentro del departamento del Tolima y es donde se encuentra el bosque de Palma de Cera más grande de Colombia y del mundo, además es el árbol nacional del país.', 4.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (2, 1, 'Cristaleria don Juan', 'Toche es un corregimiento del municipio de Ibagué dentro del departamento del Tolima y es donde se encuentra el bosque de Palma de Cera más grande de Colombia y del mundo, además es el árbol nacional del país.', 5.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (3, 4, 'Palomar', 'Toche es un corregimiento del municipio de Ibagué dentro del departamento del Tolima y es donde se encuentra el bosque de Palma de Cera más grande de Colombia y del mundo, además es el árbol nacional del país.', 5.0);


insert into api_activity (name) values ('Acampar');
insert into api_activity (name) values ('Ciclomontañismo');
insert into api_activity (name) values ('Senderismo');
insert into api_activity (name) values ('Montañismo');

insert into api_place_activity (idplace_id, idactivity_id) values (1,2);
insert into api_place_activity (idplace_id, idactivity_id)values (4,4);
insert into api_place_activity (idplace_id, idactivity_id) values (2,1);
insert into api_place_activity (idplace_id, idactivity_id) values (5,3);
insert into api_place_activity (idplace_id, idactivity_id) values (6,2);
