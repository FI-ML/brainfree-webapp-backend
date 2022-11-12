package eu.brainfree.logic.service.product;


import eu.brainfree.logic.exception.product.ProductNotFoundByArticleNumber;
import eu.brainfree.model.Product;
import eu.brainfree.repo.PagingProductRepository;
import eu.brainfree.repo.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/

@Service
@RequiredArgsConstructor
public class ProductBackendService {

    private final ProductRepository productRepository;

    private final PagingProductRepository pagingProductRepository;


    public List<Product> findAll() {
        return productRepository.findAll().stream().toList();
    }

    public Page<Product> getByPageRequest(PageRequest pageRequest) {
        return pagingProductRepository.findAll(pageRequest);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Product product) {
        Optional<Product> productOptional = productRepository.findByArticleNumber(product.getArticleNumber());


        if (productOptional.isPresent()) {
            productOptional.get().setName(product.getName());
            productOptional.get().setCategory(product.getCategory());
            productOptional.get().setDescription(product.getDescription());
            productOptional.get().setPriceAccording(product.getPriceAccording());
            productOptional.get().setPrice(product.getPrice());
            return productRepository.save(productOptional.get());
        }
        throw new ProductNotFoundByArticleNumber(product.getArticleNumber());
    }

    public Product findProductByArticleNumber(String code) {
        return productRepository.findByArticleNumber(code)
                .orElseThrow(() -> new ProductNotFoundByArticleNumber(code));
    }
}
