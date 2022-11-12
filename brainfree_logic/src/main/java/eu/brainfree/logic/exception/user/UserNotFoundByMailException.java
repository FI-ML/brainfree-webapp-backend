package eu.brainfree.logic.exception.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Max on 18.06.2022
 * @project brainfree-webapp
 * @date 18.06.2022
 **/

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundByMailException extends RuntimeException {

    public UserNotFoundByMailException(String name) {
        super(String.format("User with mail: %s not found", name));
    }
}
