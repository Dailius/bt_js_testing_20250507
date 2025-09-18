SELECT 
	c.first_name, c.last_name,
	s.first_name, s.last_name,
	SUM(p.amount)
FROM staff s
JOIN customer c ON s.store_id = c.store_id
JOIN payment p ON c.customer_id = p.customer_id
GROUP BY 1,2,3,4
HAVING SUM(p.amount) BETWEEN 150 AND 200
ORDER BY c.first_name;


SELECT 
	c.first_name, c.last_name,
	s.first_name, s.last_name,
	CONCAT()
	SUM(p.amount)
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
JOIN staff s ON p.staff_id = s.staff_id
GROUP BY 1,2,3,4
-- HAVING SUM(p.amount) BETWEEN 150 AND 200
ORDER BY c.first_name;

SELECT
	*
FROM payment p
JOIN staff s ON p.staff_id = s.staff_id


 