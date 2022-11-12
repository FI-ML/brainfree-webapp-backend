package eu.brainfree.logic.exception.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Max on 09.09.2022
 * @project brainfree-webapp
 * @date 09.09.2022
 **/
@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String name) {
        super(String.format("User %s: can't Found", name));
    }
}
