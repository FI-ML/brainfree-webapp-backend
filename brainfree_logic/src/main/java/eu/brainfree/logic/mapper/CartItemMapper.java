package eu.brainfree.logic.mapper;

import eu.brainfree.domain.cartitem.CartItemResponseTO;
import eu.brainfree.model.Cart;
import eu.brainfree.model.CartItem;
import eu.brainfree.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * @author Max on 01.01.2022
 * @project brainfree-webapp
 * @package
 **/

@Component
@RequiredArgsConstructor
public class CartItemMapper {

    private final ProductMapper productMapper;


    public CartItemResponseTO toDto(CartItem cartItem) {
        return CartItemResponseTO.builder() //
                .id(cartItem.getId().toString())
                .name(cartItem.getProduct().getName()) //
                .description(cartItem.getProduct().getDescription()) //
                .price(cartItem.getProduct().getPrice()) //
                .priceAccording(cartItem.getProduct().getPriceAccording())
                .articleNumber(cartItem.getProduct().getArticleNumber())//
                .quantity(cartItem.getQuantity()) //
                .build();
    }

    public CartItem toEntity(String articleNumber, int quantity, Cart cart) {
        return CartItem.builder()//
                .cart(cart)//
                .quantity(quantity) //
                .product(getProductByArticleNumber(articleNumber))
                .build();
    }

    private Product getProductByArticleNumber(String articleNumber) {
        return productMapper.codeToEntity(articleNumber);
    }
}
