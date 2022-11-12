package eu.brainfree.logic.service.product;

import eu.brainfree.domain.product.ProductResponseTO;
import eu.brainfree.domain.product.UpdateProductTO;
import eu.brainfree.logic.mapper.ProductMapper;
import eu.brainfree.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Max on 22.10.2022
 * @project brainfree-webapp
 * @date 22.10.2022
 **/

@Service
@RequiredArgsConstructor
public class ProductControllerService {

    private final ProductBackendService productBackendService;
    private final ProductMapper productMapper;

    public List<ProductResponseTO> findAll() {
        return productBackendService.findAll().stream().map(productMapper::toDto).toList();
    }

    public Page<ProductResponseTO> getByPageRequest(PageRequest pageRequest) {
        List<ProductResponseTO> products =
                productBackendService.getByPageRequest(pageRequest).stream().map(productMapper::toDto).toList();
        return new PageImpl<>(products);
    }

    public ProductResponseTO createProduct(UpdateProductTO updateProductTO) {
        Product product = productMapper.toEntity(updateProductTO);
        return productMapper.toDto(productBackendService.createProduct(product));
    }

    public ProductResponseTO updateProduct(UpdateProductTO updateProductTO) {
        Product product = productMapper.toEntity(updateProductTO);
        return productMapper.toDto(productBackendService.updateProduct(product));
    }

    public ProductResponseTO findProductByArticleNumber(String articleNumber) {
        return productMapper.toDto(productBackendService.findProductByArticleNumber(articleNumber));
    }
}
