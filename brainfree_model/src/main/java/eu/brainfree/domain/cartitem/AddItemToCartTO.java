package eu.brainfree.domain.cartitem;

import lombok.extern.jackson.Jacksonized;

/**
 * @author Max on 21.10.2022
 * @project brainfree-webapp
 * @date 21.10.2022
 **/

@Jacksonized
public record AddItemToCartTO(String cartId, String articleNumber) {
}
