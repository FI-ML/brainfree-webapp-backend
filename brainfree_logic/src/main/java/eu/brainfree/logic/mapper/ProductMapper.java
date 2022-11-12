package eu.brainfree.logic.mapper;

import eu.brainfree.domain.product.ProductResponseTO;
import eu.brainfree.domain.product.UpdateProductTO;
import eu.brainfree.logic.service.product.ProductBackendService;
import eu.brainfree.model.Product;
import eu.brainfree.utils.ECategory;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;
import org.springframework.stereotype.Component;

/**
 * @author Max on 01.01.2022
 * @project brainfree
 * @package
 **/

@Component
@RequiredArgsConstructor
public class ProductMapper {

    private final ProductBackendService productService;

    public ProductResponseTO toDto(Product product) {
        return ProductResponseTO.builder() //
                .name(product.getName()) //
                .description(product.getDescription()) //
                .priceAccording(product.getPriceAccording()) //
                .price(product.getPrice()) //
                .category(product.getCategory()) //
                .articleNumber(product.getArticleNumber()) //
                .build();
    }

    public Product toEntity(UpdateProductTO dto) {
        return Product.builder() //
                .name(dto.name()) //
                .description(dto.description()) //
                .priceAccording(dto.priceAccording()) //
                .price(dto.price()) //
                .articleNumber(getGeneratedArticleNumber()) //
                .category(ECategory.getByString(dto.category())) //
                .build();
    }

    public Product codeToEntity(String articleNumber) {
        return productService.findProductByArticleNumber(articleNumber);
    }

    protected String getGeneratedArticleNumber() {
        return String.format("%s-%s-%s",
                RandomStringUtils.randomAlphabetic(2).toUpperCase(),
                RandomUtils.nextInt(99999, 1000000),
                RandomStringUtils.randomAlphabetic(1).toUpperCase());
    }
}
