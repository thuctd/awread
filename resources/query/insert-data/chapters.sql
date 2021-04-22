copy chapters("chapterId", position, "bookId", title, "createdAt", "updatedAt")
FROM 'G:\small-cosmos\mock-data\chapters\chapters.csv' 
DELIMITER ',' 
CSV HEADER;

copy chapters("chapterId", position, "bookId", title, "createdAt", "updatedAt")
FROM 'G:\small-cosmos\mock-data\chapters\chapters (1).csv' 
DELIMITER ',' 
CSV HEADER;

copy chapters("chapterId", position, "bookId", title, "createdAt", "updatedAt")
FROM 'G:\small-cosmos\mock-data\chapters\chapters (2).csv' 
DELIMITER ',' 
CSV HEADER;

copy chapters("chapterId", position, "bookId", title, "createdAt", "updatedAt")
FROM 'G:\small-cosmos\mock-data\chapters\chapters (3).csv' 
DELIMITER ',' 
CSV HEADER;

copy chapters("chapterId", position, "bookId", title, "createdAt", "updatedAt")
FROM 'G:\small-cosmos\mock-data\chapters\chapters (4).csv' 
DELIMITER ',' 
CSV HEADER;

copy chapters("chapterId", position, "bookId", title, "createdAt", "updatedAt")
FROM 'G:\small-cosmos\mock-data\chapters\chapters (5).csv' 
DELIMITER ',' 
CSV HEADER;

copy book_visits(ip,"userId", "bookId", "chapterId", "visitTime", count, "isMobile")
FROM 'G:\small-cosmos\mock-data\book_visits.csv' 
DELIMITER ',' 
CSV HEADER;