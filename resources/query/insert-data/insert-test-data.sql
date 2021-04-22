COPY users("userId", username, email, name)
FROM 'G:\small-cosmos\mock-data\users.csv' 
DELIMITER ',' 
CSV HEADER;

copy genres("genreId", name, description)
FROM 'G:\small-cosmos\mock-data\genres.csv' 
DELIMITER ',' 
CSV HEADER;

copy categories("categoryId", name)
FROM 'G:\small-cosmos\mock-data\categories.csv' 
DELIMITER ',' 
CSV HEADER;

copy publishers("publisherId", name)
FROM 'G:\small-cosmos\mock-data\publishers.csv' 
DELIMITER ',' 
CSV HEADER;

copy books("bookId", "categoryId", "userId","publisherId", title, completed, published, ages)
FROM 'G:\small-cosmos\mock-data\books.csv' 
DELIMITER ',' 
CSV HEADER;

copy books_genres("bookId", "genreId")
FROM 'G:\small-cosmos\mock-data\books_genres.csv' 
DELIMITER ',' 
CSV HEADER;

copy books_genres("bookId", "genreId")
FROM 'G:\small-cosmos\mock-data\books_genres\books_genres 2.csv' 
DELIMITER ',' 
CSV HEADER;