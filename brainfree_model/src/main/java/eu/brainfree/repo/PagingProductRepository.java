package eu.brainfree.repo;

import eu.brainfree.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.UUID;

/**
 * @author Max on 01.07.2022
 * @project brainfree-webapp
 * @date 01.07.2022
 **/
public interface PagingProductRepository extends PagingAndSortingRepository<Product, UUID> {
}
