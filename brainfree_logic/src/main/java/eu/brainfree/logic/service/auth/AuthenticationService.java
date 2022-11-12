package eu.brainfree.logic.service.auth;

import eu.brainfree.logic.service.user.UserService;
import eu.brainfree.model.User;
import lombok.RequiredArgsConstructor;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.representations.AccessToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

/**
 * @author Max on 09.09.2022
 * @project brainfree-webapp
 * @date 09.09.2022
 **/

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserService userService;


    public User getUserProfileOfLoggedUser(Authentication authentication) {
        AccessToken accessToken = getAccessToken(authentication);
        return userService.getOrCreateUser(accessToken);
    }

    public String getUserNameFromToken(Authentication authentication) {
        AccessToken token = getAccessToken(authentication);
        return token.getGivenName() + token.getFamilyName();
    }

    private AccessToken getAccessToken(Authentication authentication) {
        return ((KeycloakPrincipal<?>) authentication.getPrincipal()).getKeycloakSecurityContext().getToken();
    }

}
