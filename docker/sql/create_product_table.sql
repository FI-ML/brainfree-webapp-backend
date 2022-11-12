DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products
(
    id                 uuid
        constraint products_primary_key_constraint not null unique primary key,

    category           varchar(40),
    created_date       timestamp,
    description        text,
    last_modified_date timestamp,
    name               varchar(255)   not null
        constraint product_name_unique_constraint
            unique,
    price              numeric(19, 2) not null,
    price_according    varchar(255)   not null,
    article_number     varchar(255)   not null
        constraint product_code_unique
            unique
);

TRUNCATE TABLE products RESTART IDENTITY CASCADE;

alter table products
    owner to docker;

grant select on products to replicator;
