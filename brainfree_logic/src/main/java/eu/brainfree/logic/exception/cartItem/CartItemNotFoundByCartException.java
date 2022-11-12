package eu.brainfree.logic.exception.cartItem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Max on 09.09.2022
 * @project brainfree-webapp
 * @date 09.09.2022
 **/
@ResponseStatus(HttpStatus.NOT_FOUND)
public class CartItemNotFoundByCartException extends RuntimeException {
    public CartItemNotFoundByCartException(String cartName) {
        super("Can't find Items by " + cartName);
    }
}
