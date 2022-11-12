package eu.brainfree.logic.mapper;

import eu.brainfree.domain.user.UserResponseTO;
import eu.brainfree.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * @author Max on 01.01.2022
 * @project brainfree
 * @package
 **/

@Component
@RequiredArgsConstructor
public class UserMapper {

    public UserResponseTO toDto(User user) {
        return UserResponseTO.builder() //
                .firstName(user.getFirstName()) //
                .lastName(user.getLastName()) //
                .email(user.getEmail()) //
                .build();
    }
}
