/*
	FULL OUTER JOIN
*/
SELECT 
	film_id, title, name
FROM
	(SELECT 
		*
	FROM film f
	RIGHT JOIN language l ON f.language_id = l.language_id
	
	UNION
	
	SELECT 
		*
	FROM film f
	LEFT JOIN language l ON f.language_id = l.language_id) some_name
-- ORDER BY language_id DESC;
-- ORDER BY some_name.language_id DESC;

/*
	CREATE TABLE
	https://www.postgresql.org/docs/current/sql-createtable.html

	DATA TYPES
	https://www.postgresql.org/docs/current/datatype.html
	https://neon.com/docs/data-types/decimal
*/	

CREATE TABLE IF NOT EXISTS user_dtls(
		user_id SERIAL PRIMARY KEY, 
		user_name VARCHAR(50) UNIQUE NOT NULL,
		first_name VARCHAR(50) NOT NULL,
		last_name VARCHAR(50) NOT NULL,
		created_at TIMESTAMP NOT NULL
	);

SELECT * FROM user_dtls;
/*
	!!!!!!!! NEVER EVER USE DROP
*/
-- DROP TABLE user_dtls;

CREATE TABLE IF NOT EXISTS film_copy AS (SELECT * FROM film);
SELECT * FROM film_copy;

CREATE TEMPORARY TABLE IF NOT EXISTS temp_film_copy AS (SELECT * FROM film);
SELECT * FROM temp_film_copy;

CREATE TABLE IF NOT EXISTS credentials(
		credentials_id SERIAL PRIMARY KEY,
		user_id INT,
		email VARCHAR(50) UNIQUE NOT NULL,
		user_password VARCHAR(255),
		created_at TIMESTAMP NOT NULL,
		FOREIGN KEY (user_id) REFERENCES user_dtls(user_id)
	)

/*
	INSERT INTO
*/
INSERT INTO user_dtls(user_name, first_name, last_name, created_at)
	VALUES
		('usr_nm_01', 'frst_nm_01', 'lst_nm_01', '2025-09-10 15:47'),
		('usr_nm_02', 'frst_nm_02', 'lst_nm_02', '2025-09-10 15:47'),
		('usr_nm_03', 'frst_nm_03', 'lst_nm_03', '2025-09-10 15:47'),
		('usr_nm_04', 'frst_nm_04', 'lst_nm_04', '2025-09-10 15:47');

SELECT * FROM user_dtls;

INSERT INTO user_dtls(user_name, first_name, last_name, created_at)
	VALUES
		('usr_nm_05', 'frst_nm_01', 'lst_nm_01', CURRENT_TIMESTAMP);

INSERT INTO credentials(user_id, email, user_password, created_at)
	VALUES
		(5, 'mail@demo.com', 'asdfasdfa', CURRENT_TIMESTAMP);

SELECT * FROM credentials;

/*
	ALTER TABLE
	https://www.postgresql.org/docs/current/sql-altertable.html
	https://www.postgresql.org/docs/current/ddl-alter.html
*/

SELECT * FROM user_dtls;

ALTER TABLE user_dtls
	ALTER COLUMN created_at TYPE TIMESTAMPTZ;
	
ALTER TABLE user_dtls
  ADD COLUMN IF NOT EXISTS column_name_new VARCHAR(50)

/*
	UDATE TABLE
	https://www.postgresql.org/docs/current/sql-update.html
*/
UPDATE user_dtls
	SET first_name = 'name_a',
	    last_name = 'name_b'
	WHERE user_id in (4,6);

SELECT * FROM user_dtls;

DELETE FROM user_dtls
WHERE user_id in (2);

 