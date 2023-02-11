# 1. CREATE FILE ".env"

Write

```env
    APLICATION_PORT = {{YOUR_PORT_APP}}

    # Database MYSQL configuration
    DB_HOST = {{YOUR_HOST_DB}}
    DB_USER = {{YOUR_USER_DB}}
    DB_PASS = {{YOUR_PASS_DB}}
    DB_NAME = {{YOUR_NAME_DB}}
    DB_PORT = {{YOUR_PORT_DB}}
```

# 2. Execute this creation code in MYSQL:

```sql
    CREATE DATABASE {{YOUR_NAME_DATABASE}};
    USE {{YOUR_NAME_DATABASE}};
    CREATE TABLE users (
        user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        user_name VARCHAR(255) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        user_pass VARCHAR(255) NOT NULL
    ) ENGINE INNODB;
```

# 3. Execute this inserts code in MYSQL:

```sql
    INSERT INTO
        users
    VALUES
        (
            1,
            'Administrador',
            'admin',
            'admin'
        );
```
