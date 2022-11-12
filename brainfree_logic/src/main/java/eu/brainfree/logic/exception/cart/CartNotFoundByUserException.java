package eu.brainfree.logic.exception.cart;

import eu.brainfree.logic.service.utils.user.UserUtilsService;
import eu.brainfree.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CartNotFoundByUserException extends RuntimeException {
    public CartNotFoundByUserException(String name, User user) {
        super(String.format("Cart not found by user: %s and cart name: %s and",
                UserUtilsService.getFullNameFromUser(user), name));
    }
}
