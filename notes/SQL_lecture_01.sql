-- cia mano komentaras
/*
cia mano komentaras
cia mano komentaras
cia mano komentaras
cia mano komentaras
*/

/*
	SELECT
*/

SELECT 'Sveikas', 'Pasauli';
SELECT 'Hello', 'World';

SELECT 'Sveikas', 'Pasauli'
UNION
SELECT 'Hello', 'World'
UNION
SELECT 'Bonjour', 'la Monde';

SELECT 'Sveikas' AS "Pavadinimas_A", 'Pasauli' "Pav_B", '!'
UNION
SELECT 'Hello', 'World', null
UNION
SELECT 'Bonjour', 'la Monde', null;

/*
 	SELECT * FROM
*/

SELECT * FROM actor;
SELECT first_name, last_name FROM actor;
SELECT first_name, last_name, last_name, last_name FROM actor;
SELECT first_name, last_name, UPPER(last_name), LOWER(last_name) FROM actor;

/*
	WHERE
*/

SELECT * FROM actor WHERE first_name = 'Penelope';
SELECT * FROM country WHERE country = 'Lithuania';
SELECT * FROM country WHERE country = 'USA';
SELECT * FROM country WHERE country = 'United States';


SELECT * FROM city WHERE country_id = 56;
SELECT * FROM city WHERE country_id = 103;

SELECT * FROM city WHERE country_id = (SELECT country_id FROM country WHERE country = 'Estonia');


