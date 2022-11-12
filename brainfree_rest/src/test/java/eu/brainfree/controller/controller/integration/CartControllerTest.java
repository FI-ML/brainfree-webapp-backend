package eu.brainfree.controller.controller.integration;

/**
 * @author Max on 12.12.2021
 * @project brainfree-webapp
 * @package
 **/

//TODO: EDIT TEST
/*@SpringBootTest
@AutoConfigureMockMvc*/
class CartControllerTest {


   /* @Autowired
    private MockMvc mvc;

    @MockBean
    private CartService cartService;

    //TODO: ITEMS

    @Test
    @DisplayName("Test findCartByUser 200")
    @WithMockKeycloakAuth(authorities = {
            "PRODUCT_MANAGER"}, oidc = @OidcStandardClaims(email = "test.mail@gmail.com",
            familyName = "testerLastName", givenName = "testerFirstName"))
    void find_carts_by_user_returns_ok_200() throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        List<Cart> carts = getMockedCarts();

        when(cartService.getCartsByUser(authentication)).thenReturn(carts);

        mvc.perform(get("/brainfree/carts/")).andExpect(status().isOk()).andDo(print())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[1].name", is(carts.get(1).getName())));

    }

    @Test
    @DisplayName("Test getShoppingCartByUser 200")
    @WithMockKeycloakAuth(authorities = {
            "PRODUCT_MANAGER"}, oidc = @OidcStandardClaims(email = "test.mail@gmail.com",
            familyName = "testerLastName", givenName = "testerFirstName"))
    void get_shoppingCart_by_user_returns_OK_200() throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Cart shoppingCart = getMockedShoppingCart();

        when(cartService.getShoppingCart(authentication)).thenReturn(shoppingCart);

        mvc.perform(get("/brainfree/carts/shopping-cart/")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()).andDo(print())
                .andExpect(jsonPath("$.name", is(Constants.SHOPPING_CART)));

    }

    private Cart getMockedShoppingCart() {

        return Cart.builder()
                .id(UUID.randomUUID())
                .name(Constants.SHOPPING_CART)
                .build();
    }

    private List<Cart> getMockedCarts() {

        Cart c1 = Cart.builder().id(UUID.randomUUID()).name("first cart").build();

        Cart c2 = Cart.builder().id(UUID.randomUUID()).name("second cart").build();

        Cart c3 = Cart.builder().id(UUID.randomUUID()).name("third cart").build();

        return Arrays.asList(c1, c2, c3);
    }

    private List<CartItem> getMockedItems() {
        CartItem item1 = CartItem.builder().id(UUID.randomUUID()).product(getProductDummy()).quantity(2).build();

        CartItem item2 = CartItem.builder().id(UUID.randomUUID()).product(getProductDummy()).quantity(2).build();

        CartItem item3 = CartItem.builder().id(UUID.randomUUID()).product(getProductDummy()).quantity(2).build();

        return Arrays.asList(item1, item2, item3);
    }


    private Product getProductDummy() {

        Product product = new Product();

        product.setArticleNumber("SF-LL37472-W");
        product.setCategory("BOOK");
        product.setName("Der Weg zum Java Profi");
        product.setPrice(BigDecimal.valueOf(45.00));
        product.setCreatedDate(LocalDateTime.now());
        product.setDescription("Autor ist Michael Inden");

        return product;
    }*/

}
