package eu.brainfree.logic.exception.cartItem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Max on 10.09.2022
 * @project brainfree-webapp
 * @date 10.09.2022
 **/
@ResponseStatus(HttpStatus.NOT_FOUND)
public class CartItemNotFoundByProductAndCartException extends RuntimeException {

    public CartItemNotFoundByProductAndCartException(String productName, String cartName) {
        super(String.format("Can't find CartItem by Product %s and Cart %s: ", productName, cartName));
    }
}
