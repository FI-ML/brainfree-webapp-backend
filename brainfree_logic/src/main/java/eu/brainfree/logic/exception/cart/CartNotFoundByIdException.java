package eu.brainfree.logic.exception.cart;

/**
 * @author Max on 10.09.2022
 * @project brainfree-webapp
 * @date 10.09.2022
 **/
public class CartNotFoundByIdException extends RuntimeException {
    public CartNotFoundByIdException(String id) {
        super(String.format("Can't find Cart by ID: %s", id));
    }
}
