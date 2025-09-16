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

SELECT 
	first_name, 
	last_name, 
	UPPER(last_name), 
	LOWER(last_name), 
	CONCAT(first_name, ' ', last_name, ' - ', CAST(55.0 AS INT)) AS "full_name"
FROM actor;

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

/*
	CAST
*/

SELECT '2025-09-16', CAST('2025-09-16' AS DATE), DATE('2025-09-16');

SELECT 
	cmn_date_01,
	cmn_date_02,
	cmn_date_03,
	EXTRACT(YEAR FROM cmn_date_01)
	
FROM (
		SELECT 
			'2025-09-16' AS cmn_text, 
			CAST('2025-09-16' AS DATE) AS cmn_date_01, 
			DATE('2025-09-16') AS cmn_date_02,
			DATE '2025-09-16' AS cmn_date_03
	) AS some_query;

/*
	Logical operators
	>, <, >=, <=, =, <> or !=

	AND, OR
	&&, ||
*/

SELECT * FROM payment;
SELECT * FROM payment WHERE amount > 2 AND amount < 7;
SELECT * FROM payment WHERE customer_id >= 100 AND customer_id <= 120;
SELECT * FROM payment WHERE customer_id < 100 OR customer_id > 120;

/*
	DISTINCT
*/

SELECT DISTINCT first_name FROM actor;
SELECT DISTINCT first_name, last_name FROM actor;

SELECT DISTINCT customer_id FROM payment WHERE customer_id < 50 OR customer_id > 550;

SELECT DISTINCT customer_id FROM payment 
WHERE customer_id >= 100 AND customer_id <= 120 OR (customer_id < 50 OR customer_id > 550);

/*
	ORDER BY
*/

SELECT first_name FROM actor ORDER BY first_name;
SELECT first_name FROM actor ORDER BY first_name DESC;
SELECT * FROM actor ORDER BY first_name DESC;

SELECT *, LENGTH(first_name) FROM actor WHERE LENGTH(first_name) > 5 ORDER BY first_name DESC;

SELECT *, LENGTH(first_name) 
FROM actor 
WHERE LENGTH(first_name) > 5 
-- ORDER BY LENGTH(first_name) ASC, first_name DESC;
ORDER BY 5 ASC, 2 DESC;

/*
	BETWEEN AND
*/

SELECT * FROM payment WHERE customer_id >= 100 AND customer_id <= 120;
SELECT * FROM payment WHERE customer_id BETWEEN 100 AND 120;

SELECT DISTINCT customer_id FROM payment WHERE customer_id < 50 OR customer_id > 550;
SELECT DISTINCT customer_id FROM payment WHERE customer_id NOT BETWEEN 50 AND 550;


/*
	IN()
*/

SELECT * FROM city;

SELECT * FROM country 
WHERE country = 'Lithuania' OR country = 'Latvia' OR country = 'Estonia';

SELECT * FROM country 
WHERE country IN ('Lithuania', 'Latvia', 'Estonia');

SELECT * FROM city
WHERE country_id IN (30, 54, 56)

-- subquery:
-- 1st stp
SELECT country_id FROM country 
WHERE country IN ('Lithuania', 'Latvia', 'Estonia');

-- 2nd st:
SELECT * FROM city
WHERE country_id IN (
	SELECT country_id FROM country 
	WHERE country IN ('Lithuania', 'Latvia', 'Estonia', 'Poland')
);

-- neagtion

SELECT * FROM country 
WHERE country NOT IN ('Lithuania', 'Latvia', 'Estonia', 'Unated States', 'Germany', 'Poland');

/*
	LIKE
*/

SELECT * FROM city;

SELECT * FROM city
-- WHERE city = 'Vilnius';
-- WHERE city LIKE 'Vilnius';
-- WHERE city LIKE 'V%';
-- WHERE city LIKE 'V% % %'; 
-- WHERE city LIKE '%v';
-- WHERE city LIKE 'V_l%';
-- WHERE city LIKE '%u_';
-- WHERE city LIKE '%pur';
-- WHERE city LIKE '% %' AND city NOT LIKE '% % %';
WHERE (city LIKE '% %' AND city NOT LIKE '% % %') AND city NOT LIKE '%-%' AND city NOT LIKE '%(%';

SELECT *
FROM (
	SELECT * FROM city WHERE city LIKE '% %' AND city NOT LIKE '% % %'
) some_name
WHERE city NOT LIKE '%-%' AND city NOT LIKE '%(%'

/*
	COUNT, AVG, MIN, MAX, SUM
*/

SELECT * FROM payment;
SELECT count(*), SUM(amount), MIN(amount), MAX(amount), AVG(amount) FROM payment;

SELECT customer_id, count(*), SUM(amount), MIN(amount), MAX(amount), AVG(amount) 
FROM payment
GROUP BY customer_id;

SELECT customer_id, staff_id, count(*) AS total_count, SUM(amount), MIN(amount), MAX(amount), AVG(amount) 
FROM payment
GROUP BY 1, 2
-- ORDER BY total_count;
-- ORDER BY  SUM(amount);
ORDER BY 1, 3;


/*
	WHERE -> filter data for not agregated columns
	HAVING -> filter data for agregated columns
*/

SELECT customer_id, COUNT(*) AS total_count, SUM(amount) AS total_sum, MIN(amount), MAX(amount), AVG(amount) 
FROM payment
WHERE customer_id BETWEEN 10 AND 20
GROUP BY 1
HAVING COUNT(*) >= 22 AND SUM(amount) >= 100
ORDER BY 2
;

SELECT
*
FROM (
	SELECT customer_id, COUNT(*) AS total_count, SUM(amount) AS total_sum, MIN(amount), MAX(amount), AVG(amount) 
	FROM payment
	GROUP BY 1
	ORDER BY 2
)my_name
WHERE customer_id BETWEEN 10 AND 20 AND total_count >= 22 AND total_sum >= 100
