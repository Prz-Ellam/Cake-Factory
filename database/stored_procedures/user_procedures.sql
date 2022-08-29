
CREATE PROCEDURE sp_create_user(
    IN _email               VARCHAR(255),
    IN _username            VARCHAR(18),
    IN _first_name          VARCHAR(50),
    IN _last_name           VARCHAR(50),
    IN _birth_date          DATE,
    IN _password            VARCHAR(255),
    IN _sex                 INT,
    IN _visibility          INT,
    IN _user_role           INT,
    IN _profile_picture     INT
)
BEGIN

    INSERT INTO users(
        email, 
        username, 
        first_name, 
        last_name, 
        birth_date, 
        password, 
        sex, 
        visibility, 
        user_role, 
        profile_picture
    )
    VALUES(
        _email, 
        _username, 
        _first_name, 
        _last_name, 
        _birth_date, 
        _password, 
        _sex, 
        _visibility, 
        _user_role, 
        _profile_picture
    );

END;

DELIMITER ;


CREATE PROCEDURE sp_update_user();

CREATE PROCEDURE sp_delete_user();

CREATE PROCEDURE sp_get_users();



