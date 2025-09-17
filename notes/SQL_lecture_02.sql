/*
	Array
*/

SELECT * FROM film;
SELECT special_features, special_features[1], special_features[2], special_features[3]  FROM film;

SELECT special_features, special_features[1], special_features[2], special_features[3]  
FROM film
-- WHERE special_features[3] IS NULL;
-- WHERE special_features[3] IS NOT NULL
WHERE special_features[4] IS NOT NULL
ORDER BY 4 DESC;

SELECT special_features FROM film
WHERE special_features[2] = 'Commentaries';

SELECT special_features FROM film
WHERE 'Commentaries' = ANY(special_features);

/*
	MySQL: date_formatter()
	PostgreSQL: to_char()
*/

SELECT * FROM rental;

SELECT 
	rental_date, 
	to_char(rental_date, 'YYYY'),
	to_char(rental_date, 'YY'),
	to_char('', 'mm'),
	to_char(rental_date, 'mon'),
	to_char(rental_date, 'month')
FROM rental;

SELECT
	CURRENT_DATE,
	to_char(CURRENT_DATE, 'yy'),
	to_char(CURRENT_DATE, 'mm'),
	to_char(CURRENT_DATE, 'mon'),
	to_char(CURRENT_DATE, 'month'),
	to_char(CURRENT_DATE, 'month'),
	to_char(CURRENT_DATE, 'Q'),
	to_char(CURRENT_DATE, 'DDD'),
	to_char(CURRENT_DATE, 'WW'),
	to_char(CURRENT_DATE, 'YYYY | "quater:" Q | "day of year:" DDD'),
	to_char(CURRENT_DATE, 'YYYY/mon/dd')
;

SELECT * FROM rental
WHERE to_char(rental_date, 'YYYY-mm') = '2005-06';


SELECT 
	-- EXTRACT(MONTH FROM rental_date),
	-- to_char(rental_date, 'mm'),
	to_char(rental_date, 'YYYY'),
	to_char(rental_date, '"quater: "Q'),
	to_char(rental_date, 'mon'),
	COUNT(*) 
FROM rental
-- WHERE to_char(rental_date, 'YYYY-mm') = '2005-06'
GROUP BY 1,2,3
ORDER BY 1;

/*
	JOIN
*/

SELECT * FROM city; -- country.country_id = city.country_id
SELECT * FROM country;

SELECT 
	country,
	city
FROM city
JOIN country ON city.country_id = country.country_id;

SELECT 
	cn.country,
	c.city
FROM city c
JOIN country cn ON c.country_id = cn.country_id;

SELECT 
	cn.country,
	c.city,
	a.address,
	a.*
FROM city c
JOIN country cn ON c.country_id = cn.country_id
JOIN address a ON c.city_id = a.city_id;


/*
	film f				f.film_id = fc.film_id
	film_category fc	fc.category_id = c.category_id
	category c		

	title, rating, category.name
*/

SELECT
	f.title,
	f.rating,
	c.name
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id;

SELECT
	f.title,
	f.rating,
	c.name
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Documentary';

SELECT
	c.name,
	count(*)
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
-- WHERE c.name IN ('Family', 'Animation', 'Documentary')
GROUP BY c.name
HAVING count(*) > 60
ORDER BY 2;

/*
LEFT JOIN
RIGHT JOIN

film f		f.language_id = l.language_id
language l
*/

-- INNER JOIN
SELECT * FROM language;

SELECT 
	*
FROM film f
JOIN language l ON f.language_id = l.language_id
-- WHERE l.name = 'Italian'
;

SELECT 
	f.film_id,
	f.title,
	l.language_id,
	l.name
FROM film f
RIGHT JOIN language l ON f.language_id = l.language_id
ORDER BY l.language_id DESC;

SELECT 
	f.film_id,
	f.title,
	l.language_id,
	l.name
FROM  language l
LEFT JOIN film f ON f.language_id = l.language_id
ORDER BY l.language_id DESC;
