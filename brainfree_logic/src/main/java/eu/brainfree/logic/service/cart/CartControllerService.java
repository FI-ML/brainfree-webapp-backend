package eu.brainfree.logic.service.cart;

import eu.brainfree.domain.cart.CartRequestTO;
import eu.brainfree.domain.cart.CartResponseTO;
import eu.brainfree.logic.exception.cart.ShoppingCartCantDeleteException;
import eu.brainfree.logic.exception.user.UserNotFoundException;
import eu.brainfree.logic.mapper.CartMapper;
import eu.brainfree.logic.service.auth.AuthenticationService;
import eu.brainfree.model.Cart;
import eu.brainfree.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

import static eu.brainfree.utils.Constants.SHOPPING_CART;

/**
 * @author Max on 09.09.2022
 * @project brainfree-webapp
 * @date 09.09.2022
 **/

@Service
@RequiredArgsConstructor
public class CartControllerService {

    private final AuthenticationService authenticationService;
    private final CartBackendService cartService;

    private final CartMapper cartMapper;


    public CartResponseTO getByUserAndName(Authentication authentication, String name) {
        User user = getUserProfile(authentication);
        Cart cart = cartService.getByUserAndName(user, name);

        return cartMapper.toDto(cart, Collections.emptyList());
    }

    public CartResponseTO getOrCreateShoppingCart(Authentication authentication) {
        User user = getUserProfile(authentication);
        Cart cart = cartService.getOrCreateShoppingCart(user);

        return cartMapper.toDto(cart, Collections.emptyList());
    }

    public CartResponseTO create(Authentication authentication, CartRequestTO cartDto) {
        User user = getUserProfile(authentication);
        Cart cart = cartMapper.toEntity(cartDto, user);
        cart = cartService.create(cart);
        return cartMapper.toDto(cart, Collections.emptyList());
    }

    public CartResponseTO update(Authentication authentication, CartRequestTO cartDto) {
        User user = getUserProfile(authentication);
        Cart cart = cartService.getByUserAndName(user, cartDto.name());
        cart = cartService.update(cart);

        return cartMapper.toDto(cart, Collections.emptyList());
    }

    public void delete(Authentication authentication, String cartName) {

        if (cartName.equals(SHOPPING_CART)) {
            throw new ShoppingCartCantDeleteException();
        }

        User user = getUserProfile(authentication);
        cartService.delete(user, cartName);
    }

    private User getUserProfile(Authentication authentication) {
        return Optional.ofNullable(authenticationService.getUserProfileOfLoggedUser(authentication))
                .orElseThrow(() -> new UserNotFoundException(
                        authenticationService.getUserNameFromToken(authentication)));
    }
}
