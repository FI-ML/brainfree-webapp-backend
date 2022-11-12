package eu.brainfree.logic.service.cartitem;

import eu.brainfree.domain.cart.CartResponseTO;
import eu.brainfree.domain.cartitem.AddItemToCartTO;
import eu.brainfree.domain.cartitem.CartItemResponseTO;
import eu.brainfree.domain.cartitem.UpdateCartItemQuantityTO;
import eu.brainfree.logic.exception.user.UserNotFoundException;
import eu.brainfree.logic.mapper.CartItemMapper;
import eu.brainfree.logic.mapper.CartMapper;
import eu.brainfree.logic.service.auth.AuthenticationService;
import eu.brainfree.logic.service.cart.CartBackendService;
import eu.brainfree.model.Cart;
import eu.brainfree.model.CartItem;
import eu.brainfree.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import static eu.brainfree.utils.Constants.SHOPPING_CART;

/**
 * @author Max on 10.09.2022
 * @project brainfree-webapp
 * @date 10.09.2022
 **/

@Service
@RequiredArgsConstructor
public class CartItemControllerService {

    private final AuthenticationService authenticationService;
    private final CartItemBackendService itemService;
    private final CartItemMapper itemMapper;

    private final CartMapper cartMapper;

    private final CartBackendService cartService;

    public CartResponseTO addItem(AddItemToCartTO addItemToCartTO) {
        Cart cart = getCart(addItemToCartTO.cartId());

        CartItem item = itemMapper.toEntity(addItemToCartTO.articleNumber(), 1, cart);

        List<CartItemResponseTO> items = itemService
                .createOrUpdateQuantityAndGet(item).stream()
                .map(itemMapper::toDto)
                .toList();

        return cartMapper.toDto(cart, items);
    }


    public List<CartResponseTO> findAllCartsByUser(Authentication authentication) {
        User user = getUserProfile(authentication);
        List<Cart> carts = cartService.getCartsByUser(user);
        Map<Cart, List<CartItem>> cartItemsMap = carts
                .stream()
                .filter(Objects::nonNull)
                .map(itemService::findAllByCart)
                .flatMap(Collection::stream)
                .collect(Collectors.groupingBy(CartItem::getCart));

        if (CollectionUtils.isEmpty(cartItemsMap.keySet())) {
            return carts.stream().map(x -> cartMapper.toDto(x, Collections.emptyList())).toList();
        }

        return cartItemsMap.keySet()
                .stream()
                .map(cart -> cartMapper.toDto(cart, cartItemsMap.get(cart)
                        .stream()
                        .filter(Objects::nonNull)
                        .map(itemMapper::toDto)
                        .toList()))
                .toList();
    }

    public CartResponseTO findAllByShoppingCart(Authentication authentication) {
        User user = getUserProfile(authentication);
        Cart cart = cartService.getByUserAndName(user, SHOPPING_CART);
        List<CartItemResponseTO> items = itemService.findAllByCart(cart).stream().map(itemMapper::toDto).toList();
        return cartMapper.toDto(cart, items);
    }

    public CartResponseTO updateQuantity(UpdateCartItemQuantityTO updateCartItemQuantityTO) {


        int quantity = updateCartItemQuantityTO.quantity();
        UUID id = UUID.fromString(updateCartItemQuantityTO.itemId());

        CartItem item = itemService.updateQuantity(id, quantity);

        if (item == null) {
            return cartMapper.toDto(new Cart(), Collections.emptyList());
        }

        Cart cart = item.getCart();
        List<CartItemResponseTO> items = itemService.findAllByCart(cart).stream().map(itemMapper::toDto).toList();
        return cartMapper.toDto(cart, items);
    }

    public void removeItemFromCart(String itemId) {

        if (!StringUtils.hasLength(itemId)) {
            return;
        }
        itemService.deleteItem(UUID.fromString(itemId));
    }

    private User getUserProfile(Authentication authentication) {
        return Optional.ofNullable(authenticationService.getUserProfileOfLoggedUser(authentication)).orElseThrow(() -> new UserNotFoundException(authenticationService.getUserNameFromToken(authentication)));
    }

    private Cart getCart(String cartId) {

        UUID uuid = UUID.fromString(cartId);
        return cartService.findCartById(uuid);
    }
}
