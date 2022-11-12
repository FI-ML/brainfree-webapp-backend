package eu.brainfree.domain.user;

import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

/**
 * @author Max on 01.01.2022
 * @project brainfree
 * @package
 **/

@Value
@Builder
@Jacksonized
public class UserResponseTO {

    String firstName;

    String lastName;

    String email;
}
