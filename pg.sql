set names 'utf8';
set session_replication_role = 'replica';

drop table if exists "user";
create table "user" (
    "id" serial primary key,
    "created_at" timestamptz(0) not null,
    "updated_at" timestamptz(0) not null,
    "email" varchar(255) not null,
    "password" varchar(255) not null,
    "first_name" varchar(255) not null,
    "last_name" varchar(255) not null,
    "api_key" varchar(255) null,
    "is_admin" bool not null,
    "photo" bytea null
);

drop table if exists "testimonial";
create table "testimonial" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "title" varchar(255) not null, "message" varchar(255) not null);

set session_replication_role = 'origin';
--password is admin
INSERT INTO public."user" (
    created_at,
    updated_at,
    email,
    password,
    first_name,
    last_name,
    api_key,
    is_admin,
    photo
) VALUES (
    now(),
    now(),
    'admin',
    '$2b$10$BBJjmVNNdyEgv7pV/zQR9u/ssIuwZsdDJbowW/Dgp28uws3GmO0Ky',
    'admin',
    'admin',
    '40e634b3a1415be5ad2469d030662e6b078c800a', -- admin
    false,
    null
),(
    now(),
    now(),
    'john@deegouser.net',
    '$2b$10$wMkAlYIVDP.S96Jre2MW2etBnlnLTTPt4xpRQI2z1d2wAtUv9Qo7a',
    'John',
    'Doe',
    '0ede8e7ff889671a67a79e9e750ad9582f7b3e34', -- 123456
    false,
    null
),(
    now(),
    now(),
    'taro@deegouser.net',
    '$2b$10$wMkAlYIVDP.S96Jre2MW2etBnlnLTTPt4xpRQI2z1d2wAtUv9Qo7a',
    'Taro',
    'Yamada',
    '668c15901e8877afb13405132b0e249d3996f311', -- 123456
    false,
    null
);
