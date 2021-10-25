/*Insert value name on api_department table*/
insert into api_department (name) values ('Antioquia');
insert into api_department (name) values ('Cordoba');
insert into api_department (name) values ('Meta');
insert into api_department (name) values ('Boyaca');
insert into api_department (name) values ('Huila');
insert into api_department (name) values ('Caldas');
insert into api_department (name) values ('Norte de Santander');
insert into api_department (name) values ('Risaralda');
insert into api_department (name) values ('Santander');
insert into api_department (name) values ('Tolima');
insert into api_department (name) values ('Cundinamarca');




/*Insert value name, iddepartment_id on api_city table*/
insert into api_city (name, iddepartment_id) values ('Santa Isabel', 10);
insert into api_city (name, iddepartment_id) values ('Cajamarca', 10);
insert into api_city (name, iddepartment_id) values ('Murillo', 10);
insert into api_city (name, iddepartment_id) values ('Mariquita', 10);
insert into api_city (name, iddepartment_id) values ('Ibague', 10);
insert into api_city (name, iddepartment_id) values ('Anzoategui', 10);
insert into api_city (name, iddepartment_id) values ('Chaparral', 10);
insert into api_city (name, iddepartment_id) values ('Falam', 10);
insert into api_city (name, iddepartment_id) values ('San Luis', 10);
insert into api_city (name, iddepartment_id) values ('Prado', 10);
insert into api_city (name, iddepartment_id) values ('Roncesvalles', 10);




/*Insert values username, firts_name, last_name, is_owner, email, password, is_staff, is_active, is_superuser, data_joined on api_user table*/
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('lickovici0', 'Lek', 'Ickovici', true, 'lickovici0@virginia.edu', 'SjJCbNB2', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('ndesouza1', 'Norton', 'Desouza', false, 'ndesouza1@eventbrite.com', 'LzhTaSttBN0', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('tpaskell2', 'Tiffany', 'Paskell', true, 'tpaskell2@cnn.com', 'rTgzBtgQQ7gA', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('tgodby3', 'Torr', 'Godby', true, 'tgodby3@bravesites.com', 'Ck7zHGadx5', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('rbroadbere4', 'Roland', 'Broadbere', true, 'rbroadbere4@1und1.de', '0sOqwbsQ', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('cramsay5', 'Carlyn', 'Ramsay', false, 'cramsay5@imageshack.us', 'c24xnApTu', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('rbinne6', 'Rollie', 'Binne', false, 'rbinne6@instagram.com', 'akROo8fbJF', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('apowell8', 'Alford', 'Powell', true, 'apowell8@51.la', 'SA6MYHWEs', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('mlindenboima', 'Madel', 'Lindenboim', true, 'mlindenboima@ted.com', 'oMOnJ08zVE', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('zwarboysb', 'Zara', 'Warboys', true, 'zwarboysb@wikimedia.org', 'LxqCXKcL', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('amonaghanc', 'Agatha', 'Monaghan', false, 'amonaghanc@smh.com.au', 'DsL9pnQ', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('mduignand', 'Marianna', 'Duignan', true, 'mduignand@ted.com', 'fYa78MT', true, true, "2021-10-25T01:54:08.595096Z", true);
insert into api_user (username, first_name, last_name, is_owner, email, password, is_staff, is_active, date_joined, is_superuser) values ('lgoodanewe', 'Lancelot', 'Goodanew', true, 'lgoodanewe@liveinternet.ru', '31dOz2gZ4', true, true, "2021-10-25T01:54:08.595096Z", true);



/*Insert value user_id on api_user_profile table*/
insert into api_owner (user_id) values (1);
insert into api_owner (user_id) values (2);
insert into api_owner (user_id) values (3);
insert into api_owner (user_id) values (4);
insert into api_owner (user_id) values (5);
insert into api_owner (user_id) values (6);
insert into api_owner (user_id) values (7);
insert into api_owner (user_id) values (8);
insert into api_owner (user_id) values (9);
insert into api_owner (user_id) values (10);



/*insert values muni_id, idowner_id, lugar, description, calificacion, on api_place table*/
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (1, 1, 'Nevado de Santa Isabel', 'El nevado de Santa Isabel es una de las montañas de la cordillera Central de Colombia. Su cima se eleva a 4965 metros sobre el nivel del mar, y marca la frontera entre los departamentos de Risaralda, Tolima y Caldas, siendo el punto más alto del primero.​ ', 5.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (2, 2, 'Termales del Machin', 'Este volcán que es llamado Machín, Cerro Machín, Alto Machín y El Hoyo, perteneciente a la cadena volcánica de la Cordillera Central colombiana, se localiza en el departamento del Tolima, en las coordenadas geográficas 4° 29 N y 75° 22 O, a una dista de 17 km al oeste de Ibagué.', 5.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (3, 3, 'Termales La Cabaña', 'Los Termales de la Cabaña se encuentran en el municipio de Murillo, en el departamento del Tolima, exactamente en el Parque Nacional Natural Los Nevados, un escenario natural sin igual.', 5.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (4, 4, 'Cataratas de Medina', '7 kilómetros de Mariquita, Tolima; se encuentran las Cascadas del río Medina. Un lugar que se ha hecho famoso por sus aguas frescas y cristalinas y por el imponente paisaje que allí se conforma.', 4.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (5, 5, 'Toche', 'Toche es un corregimiento del municipio de Ibagué dentro del departamento del Tolima y es donde se encuentra el bosque de Palma de Cera más grande de Colombia y del mundo, además es el árbol nacional del país.', 4.9);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (6, 6, 'Palomar', 'El Palomar es un destino turístico en el Tolima, se encuentra a 2850 metros sobre el nivel del mar, con una temperatura promedio de 14 grados. Reconocido por ser una de las entradas al Parque Nacional Natural de los Nevados', 5.0);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (7, 7, 'Cascadas El Tambor', 'Es un bañadero formado por el represamiento del Río Tuluny, con fines agroindustriales que genera una gran caída de agua, formando un charco profundo, aprovechado por turistas y chaparralunos', 4.8);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (8, 8, 'Ciudad Perdida', 'Un poco más de 200 kilómetros separan a Bogotá de este histórico asentamiento ubicado al norte del departamento del Tolima.', 4.9);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (5, 9, 'El Rancho', 'El rancho tolima es un gran sitio turistico destacado por sus naturales termales y se encuentra ubicado en el camino hacia el nevado del tolima', 4.9);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (3, 10, 'Cascada El Silencio', 'Con una altura de alrededor de 35 metros este atractivo conocido como la Cascada El Silencio, es uno de los lugares más imponentes de esta localidad al norte tolimense.', 4.7);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (5, 9, 'Juntas', 'Juntas está en el Cañón del Combeima, para llegar hay que salir de Ibagué por la ruta del barrio Chapetón, sin embargo la ruta de bus número 48 lo puede llevar.', 4.9);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (5, 9, 'Cascada La Plata', 'La Cascada La Plata en Ibagué es considerada la más alta del Cañón del Combeima, con 490 metros de altura. Una maravilla natural que disfrutarás de conocer.', 4.9);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (5, 5, 'El Mirador de Juntas', 'Allí podrás llenar tus pulmones de aire puro y deleitarte con los sonidos que te brinda la naturaleza. El corregimiento de Juntas te brinda todas las posibilidades para tener un día inolvidable con tu familia y con tus amigos.', 4.5);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (9, 4, 'Cascadas de Payande', 'El corregimiento de Payandé tiene la gran fortuna de contar con un atractivo natural:  Seis cascadas que se caracterizan por su riqueza hídrica y su paisajes naturales, razón por la cual se ha convertido en uno de los lugares favoritos para los Ibaguereños.', 4.7);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (10, 2, 'Represa de Prado', 'Prado es un municipio del departamento de Tolima, ubicado a 2 horas de Ibagué, la capital del departamento, y a 5 horas de Bogotá. Su principal atractivo es la Represa de Hidroprado, ubicada a 15 minutos del municipio y alimentada por las aguas de los ríos Cunday y Negro, de la que nace el río Prado.', 4.6);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (11, 3, 'Laguna de las Garzas', 'Laguna de las Garzas, Roncesvalles, Tolima, Páramo de Anaime.', 4.9);
insert into api_place (muni_id, idowner_id, lugar, description, calificacion) values (5, 3, 'Termales de cañon', 'Ruta que comienza en la vereda de Juntas, ubicada a 24 kilometros, aprox. de la ciudad de Ibagué, y que cuenta con servicio regular de transporte público. la travesía completa comienza a unos 1500 m.s.n.m. y aciende hasta una altura de 4000 m.s.n.m. y se estima que se recorre una distancia de 30 km y se realiza en aproximadamente 14-16 horas de un ascenso permanente.', 4.9);




/*Insert name on api_activity table*/
insert into api_activity (name) values ('Acampar');
insert into api_activity (name) values ('Ciclomontañismo');
insert into api_activity (name) values ('Senderismo');
insert into api_activity (name) values ('Montañismo');




/*Inser idplace_id, idactivity_id on api_activity_place table*/
insert into api_place_activity (idplace_id, idactivity_id) values (1,4);
insert into api_place_activity (idplace_id, idactivity_id)values (2,4);
insert into api_place_activity (idplace_id, idactivity_id)values (3,4);
insert into api_place_activity (idplace_id, idactivity_id)values (4,3);
insert into api_place_activity (idplace_id, idactivity_id)values (5,4);
insert into api_place_activity (idplace_id, idactivity_id)values (6,3);
insert into api_place_activity (idplace_id, idactivity_id) values (7,3);
insert into api_place_activity (idplace_id, idactivity_id) values (8,4);
insert into api_place_activity (idplace_id, idactivity_id) values (9,4);
insert into api_place_activity (idplace_id, idactivity_id)values (10,3);
insert into api_place_activity (idplace_id, idactivity_id)values (11,3);
insert into api_place_activity (idplace_id, idactivity_id)values (12,3);
insert into api_place_activity (idplace_id, idactivity_id)values (13,3);
insert into api_place_activity (idplace_id, idactivity_id)values (14,3);
insert into api_place_activity (idplace_id, idactivity_id)values (15,4);
insert into api_place_activity (idplace_id, idactivity_id)values (16,4);