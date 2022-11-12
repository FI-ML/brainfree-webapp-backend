package eu.brainfree.logic.mapper;


import eu.brainfree.domain.cart.CartRequestTO;
import eu.brainfree.domain.cart.CartResponseTO;
import eu.brainfree.domain.cartitem.CartItemResponseTO;
import eu.brainfree.model.Cart;
import eu.brainfree.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;

/**
 * @author Max on 01.01.2022
 * @project brainfree
 * @package
 **/


@Component
@RequiredArgsConstructor
public class CartMapper {

    public CartResponseTO toDto(Cart cart, List<CartItemResponseTO> dtos) {
        return CartResponseTO.builder()
                .id(cart.getId().toString())
                .name(cart.getName())
                .items(dtos)
                .priceSum(priceSum(dtos))
                .build();
    }

    public Cart toEntity(CartRequestTO cartDTO, User user) {
        return Cart.builder()
                .name(cartDTO.name())
                .user(user)
                .build();
    }

    private BigDecimal priceSum(Collection<CartItemResponseTO> items) {
        return items.stream() //
                .map(item -> item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

}
