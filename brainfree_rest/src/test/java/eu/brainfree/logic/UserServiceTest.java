package eu.brainfree.logic;

/**
 * @author Max on 12.12.2021
 * @project brainfree-webapp
 * @package
 **/

//TODO: EDIT TEST
/*@SpringBootTest*/
class UserServiceTest {

 /*   @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;


    @Test
    @WithMockKeycloakAuth(
            authorities = {"USER"},
            oidc = @OidcStandardClaims(
                    email = "testDoesntExist.mail@gmail.com"))
    void getUserProfileOfLoggedUser_should_return_UserNotFoundByMailException() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        when(userRepository.findByEmail("testDoesntExist.mail@gmail.com")).thenReturn(Optional.empty());

        Exception exception = assertThrows(UserNotFoundByMailException.class, () -> {
            userService.getUserProfileOfLoggedUser(authentication);
        });
        assertEquals("User with mail: testDoesntExist.mail@gmail.com not found"
                , exception.getMessage());
    }

    private User getUser() {
        Role role = new Role();
        role.setName("PRODUCT_MANAGER");
        return User.builder()
                .id(UUID.randomUUID())
                .UUID("1")
                .email("test.mail@gmail.com")
                .firstName("testerFirstName")
                .lastName("testerLastName")
                .roles(List.of(role))
                .build();
    }*/
}
