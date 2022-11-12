package eu.brainfree.repo;

import eu.brainfree.model.Cart;
import eu.brainfree.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/

public interface CartRepository extends JpaRepository<Cart, UUID> {
    List<Cart> findByUser(User user);

    Optional<Cart> findByUserAndName(User user, String name);
}
