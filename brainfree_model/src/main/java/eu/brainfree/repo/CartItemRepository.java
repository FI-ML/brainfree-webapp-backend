package eu.brainfree.repo;

import eu.brainfree.model.Cart;
import eu.brainfree.model.CartItem;
import eu.brainfree.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/

public interface CartItemRepository extends JpaRepository<CartItem, UUID> {
    Optional<Set<CartItem>> findAllByCart(Cart cart);

    Optional<CartItem> findByProductAndCart(Product product, Cart cart);

    @Modifying
    @Query("update CartItem ci set ci.quantity = :quantity where ci.id = :id")
    void updateQuantity(@Param(value = "id") UUID id, @Param(value = "quantity") int quantity);

    @Modifying
    @Query("delete from CartItem ci where ci.cart=:cart")
    void deleteItemByCart(@Param("cart") Cart cart);
}

