package eu.brainfree.logic.exception.cart;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Max on 25.06.2022
 * @project brainfree-webapp
 * @date 25.06.2022
 **/

@ResponseStatus(HttpStatus.CONFLICT)
public class ShoppingCartCantDeleteException extends RuntimeException {

    public ShoppingCartCantDeleteException() {
        super("You can't delete shopping-cart");
    }
}
