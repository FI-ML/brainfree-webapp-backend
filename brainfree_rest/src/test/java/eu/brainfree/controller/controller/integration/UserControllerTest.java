package eu.brainfree.controller.controller.integration;


/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/

//TODO: EDIT TEST

/*@SpringBootTest
@AutoConfigureMockMvc*/
class UserControllerTest {


   /* @Autowired
    private MockMvc mvc;

    @MockBean
    private UserService userService;

    @Test
    @DisplayName("Test getOrCreateUser 200")
    @WithMockKeycloakAuth(authorities = {
            "PRODUCT_MANAGER"}, oidc = @OidcStandardClaims(email = "test.mail@gmail.com", familyName = "testerLastName", givenName = "testerFirstName"))
    void create_user_returns_200() throws Exception {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User mockedUser = createTestUser();

        when(userService.getUserProfileOfLoggedUser(authentication)).thenReturn(mockedUser);

        mvc.perform(get("/brainfree/users/").header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()).andExpect(jsonPath("$.firstName", is(mockedUser.getFirstName())));
    }

    private User createTestUser() {
        Role role = new Role();
        role.setName("PRODUCT_MANAGER");
        return User.builder().id(UUID.randomUUID()).email("test.mail@gmail.com").firstName("testerFirstName")
                .lastName("testerLastName").roles(Arrays.asList(role)).build();
    }*/
}
