package eu.brainfree.controller;

import eu.brainfree.domain.user.UserResponseTO;
import eu.brainfree.logic.mapper.UserMapper;
import eu.brainfree.logic.service.auth.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package controller
 **/

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/brainfree/users", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class UserController {
    private final AuthenticationService authenticationService;

    private final UserMapper userMapper;

    @GetMapping
    public UserResponseTO profileOfCurrentUser(Authentication authentication) {
        return userMapper.toDto(authenticationService.getUserProfileOfLoggedUser(authentication));
    }
}
