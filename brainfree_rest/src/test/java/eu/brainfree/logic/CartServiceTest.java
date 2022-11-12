package eu.brainfree.logic;

/**
 * @author Max on 12.12.2021
 * @project brainfree-webapp
 * @package
 **/

//TODO: EDIT TEST

/*@SpringBootTest*/
class CartServiceTest {

   /* @MockBean
    UserService userService;
    @MockBean
    CartRepository cartRepository;


    @Test
    @WithMockKeycloakAuth(oidc = @OidcStandardClaims(
            email = "test.mail@gmail.com",
            familyName = "testerLastName",
            givenName = "testerFirstName"))
    void getByUserAndName_should_return_cart() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = createTestUser();
        Cart cart = createUserShoppingCart(user);

        when(userService.getUserProfileOfLoggedUser(authentication)).thenReturn(user);
        when(cartRepository.findByUserAndName(user, "shopping-cart")).thenReturn(Optional.of(cart));

        Cart foundCart = cartService.getByUserAndName(authentication, "shopping-cart");

        assertEquals(foundCart.getName(), cart.getName());
        assertEquals(foundCart.getUser().getEmail(), user.getEmail());
    }

    @Test
    @WithMockKeycloakAuth(oidc = @OidcStandardClaims(
            email = "test.mail@gmail.com",
            familyName = "testerLastName",
            givenName = "testerFirstName"))
    void createCart_should_return_created_cart() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        //TODO: ITEMS

        CartRequestDTO cartRequestDTO = createTestCartRequestDTO();
        Cart cart = Cart.builder().name(cartRequestDTO.getName()).build();
        User user = createTestUser();

        // We are mocking the repository behaviour
        // The cart service's create() method calls the getUserProfileOfLoggedUser() method which calls userRepository.findByEmail, we have to mock it.
        // And for sur, we mock the save method. Basically, you have to mock each call to the repository.
        when(userService.getUserProfileOfLoggedUser(authentication)).thenReturn(user);
        when(cartRepository.save(any(Cart.class))).thenReturn(cart);

        Cart createdCart = cartService.create(authentication, cartRequestDTO);
        assertEquals(createdCart.getName(), cart.getName());
    }

    @Test
    @WithMockKeycloakAuth(oidc = @OidcStandardClaims(
            email = "test.mail@gmail.com",
            familyName = "testerLastName",
            givenName = "testerFirstName"))
    void deleteCart_should_throw_ShoppingCartCantDeleteException() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = createTestUser();
        List<Cart> userCarts = Arrays.asList(createUserShoppingCart(user),
                createUserShoppingCart(user));

        when(userService.getUserProfileOfLoggedUser(authentication)).thenReturn(user);
        when(cartRepository.findByUser(user)).thenReturn(userCarts);
        doNothing().when(cartRepository).delete(any());

        ShoppingCartCantDeleteException thrown = assertThrows(ShoppingCartCantDeleteException.class, () -> {
            cartService.delete(authentication, Constants.SHOPPING_CART);
        });

        assertEquals("You can't delete shopping-cart", thrown.getMessage());
    }

    private User createTestUser() {
        Role role = new Role();
        role.setName("PRODUCT_MANAGER");
        return User.builder()
                .email("test.mail@gmail.com")
                .firstName("testerFirstName")
                .lastName("testerLastName")
                .roles(List.of(role))
                .build();
    }

    //TODO: ITEMS
    private Cart createUserCart(User user) {
        return Cart.builder()
                .user(user)
                .name(Constants.SHOPPING_CART)
                .build();
    }


    private Cart createUserShoppingCart(User user) {

        return this.createUserCart(user);
    }


    private CartRequestDTO createTestCartRequestDTO() {
        String cartId = UUID.randomUUID().toString();
        return CartRequestDTO.builder()
                .name("wish-list")
                .items(List.of(CartItemRequestDTO.builder()
                                .quantity(1)
                                .cartId(cartId).articleNumber("p-code").quantity(10).build(),
                        CartItemRequestDTO.builder()
                                .quantity(4)
                                .cartId(cartId).articleNumber("p-code-1").quantity(10).build()))
                .build();
    }*/
}
