package eu.brainfree.domain.cartitem;

import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

import java.math.BigDecimal;

/**
 * @author Max on 01.01.2022
 * @project brainfree
 * @package
 **/


@Value
@Builder
@Jacksonized
public class CartItemResponseTO {

    String id;

    String name;

    String description;

    String articleNumber;

    String priceAccording;

    BigDecimal price;

    int quantity;

}
