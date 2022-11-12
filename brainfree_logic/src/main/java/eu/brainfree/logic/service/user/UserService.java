package eu.brainfree.logic.service.user;

import eu.brainfree.logic.service.cart.CartBackendService;
import eu.brainfree.model.Role;
import eu.brainfree.model.User;
import eu.brainfree.repo.RoleRepository;
import eu.brainfree.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.keycloak.representations.AccessToken;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final CartBackendService cartBackendService;

    public User getOrCreateUser(AccessToken accessToken) {
        Optional<User> user = userRepository.findByEmail(accessToken.getEmail());
        return user.orElseGet(() -> createAndGetUser(accessToken));

    }

    private User createAndGetUser(AccessToken accessToken) {
        User user = new User();
        user.setFirstName(accessToken.getGivenName());
        user.setLastName(accessToken.getFamilyName());
        user.setEmail(accessToken.getEmail());
        user.setUUID(accessToken.getId());
        user.setRoles(getRoles(accessToken));

        user = userRepository.save(user);
        cartBackendService.getOrCreateShoppingCart(user);

        return user;
    }

    private List<Role> getRoles(AccessToken accessToken) {
        return accessToken.getRealmAccess() //
                .getRoles() //
                .stream().map(this::createRoleIfNotFound) //
                .toList();
    }

    @Transactional
    Role createRoleIfNotFound(String name) {
        Optional<Role> role = roleRepository.findByName(name);
        if (role.isPresent()) {
            return role.get();
        } else {
            Role newRole = new Role();
            newRole.setName(name);
            return roleRepository.save(newRole);
        }
    }
}
