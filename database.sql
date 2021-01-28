-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping_List(
  “id” serial primary key not null
       "name" VARCHAR (80) NOT NULL,
       "quantity" DECIMAL (3, 2),
       "unit" VARCHAR (20) NOT NULL,
      “purchased” boolean DEFAULT = false
)

INSERT INTO "shopping_list" ("name", "quantity", "unit")
VALUES ('eggs', '2', 1);
