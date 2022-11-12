package eu.brainfree.domain.product;

import lombok.extern.jackson.Jacksonized;

import java.math.BigDecimal;

/**
 * @author Max on 01.01.2022
 * @project brainfree
 * @package
 **/

@Jacksonized
public record UpdateProductTO(String name,
                              String category,
                              String description,
                              String priceAccording,
                              BigDecimal price,
                              String articleNumber
) {
}
