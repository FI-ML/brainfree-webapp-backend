package eu.brainfree.controller.controller.integration;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package
 **/
//TODO: EDIT TEST
/*@SpringBootTest
@AutoConfigureMockMvc*/

class ProductControllerTest {

 /*   private static final Logger LOGGER = Logger.getLogger(ProductControllerTest.class.getName());

    private static final ObjectMapper om = new ObjectMapper();

    @MockBean
    private PagingProductRepository pagingProductRepository;

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ProductMapper mapper;

    @MockBean
    private ProductService productService;


    @Test
    @WithMockKeycloakAuth(authorities = {"ROLE_NOT_PRODUCT_MANAGER"})
    void get_products_returns_forbidden_403() throws Exception {
        mvc.perform(get("/brainfree/products/")).andExpect(status().isForbidden());
    }

    @Test
    void get_products_returns_unauthorized_401() throws Exception {
        mvc.perform(get("/brainfree/products/")).andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockKeycloakAuth(authorities = {"ROLE_PRODUCT_MANAGER"})
    void save_product_returns_created_201() throws Exception {
        Product product = getMockedProducts().get(0);
        ProductRequestDTO productDTO = productToRequestDTO(product);

        when(productService.createProduct(productDTO)).thenReturn(product);
        MockHttpServletResponse response = mvc.perform(post("/brainfree/products/create/").content(om.writeValueAsString(productDTO))
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON)).andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", is(product.getName())))
                .andExpect(jsonPath("$.articleNumber", is(product.getArticleNumber()))).andReturn().getResponse();
    }


    @Test
    @WithMockKeycloakAuth(authorities = {"ROLE_PRODUCT_MANAGER"})
    void save_product_returns_bad_request_400() throws Exception {
        mvc.perform(post("/brainfree/products/create/")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    @WithMockKeycloakAuth(authorities = {"ROLE_PRODUCT_MANAGER"})
    void get_product_by_code_returns_Ok_200() throws Exception {
        when(productService.getProduct("SX-244008-M")).thenReturn(getMockedProducts().get(0));

        mvc.perform(get("/brainfree/products/SX-244008-M/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("1 man t-shirt")))
                .andExpect(jsonPath("$.articleNumber", is("SX-244008-M")));
    }

    private ProductRequestDTO productToRequestDTO(Product product) {
        return ProductRequestDTO.builder().name(product.getName()).category(product.getCategory())
                .description(product.getDescription()).price(product.getPrice())
                .priceAccording(product.getPriceAccording()).build();
    }

    private List<Product> getMockedProducts() {
        Product p1 = Product.builder().id(UUID.randomUUID()).name("1 man t-shirt").description("man t-shirt description")
                .priceAccording("1 Stk").price(new BigDecimal("12")).articleNumber("SX-244008-M").category("Clothing")
                .build();

        Product p2 = Product.builder().id(UUID.randomUUID()).name("2 man short").description("man short description")
                .priceAccording("1 Stk").price(new BigDecimal("15")).articleNumber("SX-12114-M").category("Clothing")
                .build();

        Product p3 = Product.builder().id(UUID.randomUUID()).name("3 Laptop").description("Laptop hp description")
                .priceAccording("1 Stk").price(new BigDecimal("100")).articleNumber("SX-12571-A").category("Electronic")
                .build();

        return Arrays.asList(p1, p2, p3);
    }

    private Page<ProductResponseDTO> getPage() {
        List<ProductResponseDTO> dtos = getMockedProducts().stream().map(x -> mapper.toDto(x)).toList();
        return new PageImpl<>(dtos);
    }*/
}
