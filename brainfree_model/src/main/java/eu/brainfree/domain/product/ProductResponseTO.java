package eu.brainfree.domain.product;

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
public class ProductResponseTO {

    String name;

    String description;

    String priceAccording;

    BigDecimal price;

    String category;

    String articleNumber;
}
