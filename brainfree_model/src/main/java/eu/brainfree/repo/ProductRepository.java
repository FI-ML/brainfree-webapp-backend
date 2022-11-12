package eu.brainfree.repo;

import eu.brainfree.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/


public interface ProductRepository extends JpaRepository<Product, UUID> {
    Optional<Product> findByArticleNumber(String articleNumber);
}

