package eu.brainfree.logic.exception.cartItem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Max on 10.09.2022
 * @project brainfree-webapp
 * @date 10.09.2022
 **/

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CartItemNotFoundByIDException extends RuntimeException {

    public CartItemNotFoundByIDException(String id) {
        super(String.format("Can't find CartItem by ID: %s", id));
    }
}
