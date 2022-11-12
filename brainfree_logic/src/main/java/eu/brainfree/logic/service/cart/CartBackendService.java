package eu.brainfree.logic.service.cart;

import eu.brainfree.logic.exception.cart.CartNotFoundByIdException;
import eu.brainfree.logic.exception.cart.CartNotFoundByUserException;
import eu.brainfree.logic.service.cartitem.CartItemBackendService;
import eu.brainfree.model.Cart;
import eu.brainfree.model.User;
import eu.brainfree.repo.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

import static eu.brainfree.utils.Constants.SHOPPING_CART;

/**
 * @author Max on 09.09.2022
 * @project brainfree-webapp
 * @date 09.09.2022
 **/

@Service
@RequiredArgsConstructor
public class CartBackendService {

    private final CartRepository cartRepository;
    private final CartItemBackendService cartItemBackendService;

    public Cart getByUserAndName(User user, String name) {
        return cartRepository.findByUserAndName(user, name)
                .orElseThrow(() -> new CartNotFoundByUserException(name, user));
    }

    public Cart getOrCreateShoppingCart(User user) {
        return cartRepository
                .findByUserAndName(user, SHOPPING_CART)
                .orElseGet(() -> createShoppingCart(user));
    }

    public Cart findCartById(UUID cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(() -> new CartNotFoundByIdException(cartId.toString()));
    }

    public List<Cart> getCartsByUser(User user) {
        return cartRepository.findByUser(user).stream().filter(Objects::nonNull).toList();
    }

    @Transactional
    public Cart create(Cart cart) {
        return cartRepository.save(cart);
    }

    @Transactional
    public Cart update(Cart cart) {
        return cartRepository.save(cart);
    }

    @Transactional
    public void delete(User user, String cartName) {
        List<Cart> carts = getCartsByUser(user);
        for (Cart cart : carts) {
            if (cart.getName().equals(cartName)) {
                cartItemBackendService.deleteItemByCart(cart);
                cartRepository.delete(cart);
            }
        }
    }

    private Cart createShoppingCart(User user) {
        Cart cart = new Cart();
        cart.setName(SHOPPING_CART);
        cart.setUser(user);
        return cartRepository.save(cart);
    }
}
