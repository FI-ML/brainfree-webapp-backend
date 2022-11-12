package eu.brainfree.logic.service.cartitem;

import eu.brainfree.logic.exception.cartItem.CartItemNotFoundByCartException;
import eu.brainfree.logic.exception.cartItem.CartItemNotFoundByIDException;
import eu.brainfree.model.Cart;
import eu.brainfree.model.CartItem;
import eu.brainfree.repo.CartItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/


@Service
@RequiredArgsConstructor
public class CartItemBackendService {

    private final CartItemRepository cartItemRepository;


    @Transactional
    public Set<CartItem> createOrUpdateQuantityAndGet(CartItem cartItem) {
        Optional<CartItem> itemOptional = cartItemRepository
                .findByProductAndCart(cartItem.getProduct(), cartItem.getCart());

        if (itemOptional.isPresent()) {
            int quantity = itemOptional.get().getQuantity() + 1;
            cartItem = mapOptionalItemToItem(itemOptional, quantity);
            cartItemRepository.updateQuantity(cartItem.getId(), quantity);
        } else {
            cartItem.setId(UUID.randomUUID());
            cartItem = cartItemRepository.save(cartItem);
        }
        return findAllByCart(cartItem.getCart());


    }

    public Set<CartItem> findAllByCart(Cart cart) {
        return cartItemRepository
                .findAllByCart(cart).orElseThrow(() -> new CartItemNotFoundByCartException(cart.getName()));
    }

    @Transactional
    public CartItem updateQuantity(UUID id, int quantity) {
        Optional<CartItem> itemByID = cartItemRepository.findById(id);

        if (itemByID.isPresent()) {
            itemByID.get().setQuantity(quantity);
            cartItemRepository.updateQuantity(itemByID.get().getId(), quantity);
        }
        return itemByID.orElseThrow(() -> new CartItemNotFoundByIDException(id.toString()));
    }

    @Transactional
    public void deleteItem(UUID id) {
        cartItemRepository.deleteById(id);
    }

    @Transactional
    public void deleteItemByCart(Cart cart) {
        cartItemRepository.deleteItemByCart(cart);
    }

    private CartItem mapOptionalItemToItem(Optional<CartItem> itemOptional, int quantity) {
        CartItem cartItem = new CartItem();
        cartItem.setId(itemOptional.orElseThrow().getId());
        cartItem.setCart(itemOptional.orElseThrow().getCart());
        cartItem.setProduct(itemOptional.orElseThrow().getProduct());
        cartItem.setQuantity(quantity);

        return cartItem;
    }
}
