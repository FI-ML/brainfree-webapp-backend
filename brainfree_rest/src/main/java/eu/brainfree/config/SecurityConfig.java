package eu.brainfree.config;

import org.keycloak.adapters.springsecurity.KeycloakConfiguration;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package config
 **/

@KeycloakConfiguration
class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter {
    @Override
    protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
        return null;
    }

    @Override
    public void init(WebSecurity builder) throws Exception {

    }

    @Override
    public void configure(WebSecurity builder) throws Exception {

    }

    /*@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) {
        KeycloakAuthenticationProvider keycloakAuthenticationProvider = keycloakAuthenticationProvider();
        keycloakAuthenticationProvider.setGrantedAuthoritiesMapper(new SimpleAuthorityMapper());
        auth.authenticationProvider(keycloakAuthenticationProvider);
    }

    @Bean
    @Override
    protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
        return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        super.configure(http);
        ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry expressionInterceptUrlRegistry = http
                .cors() //
                .and() //
                .csrf().disable() //
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) //
                .and() //
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/brainfree/products/**").hasRole("PRODUCT_MANAGER");


        //For Get Request
        expressionInterceptUrlRegistry = expressionInterceptUrlRegistry.antMatchers("/brainfree/products/*")
                .hasRole("PRODUCT_MANAGER");

        expressionInterceptUrlRegistry.anyRequest().permitAll();
    }*/

    /**
     * Registers the KeycloakAuthenticationProvider with the authentication manager.
     */
  /*  @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(keycloakAuthenticationProvider());
    }

    *//**
     * Defines the session authentication strategy.

     @Bean
     @Override protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
     return new RegisterSessionAuthenticationStrategy(buildSessionRegistry());
     }

     @Bean protected SessionRegistry buildSessionRegistry() {
     return new SessionRegistryImpl();
     }

     @Override protected void configure(HttpSecurity http) throws Exception {
     super.configure(http);
     http
     .authorizeRequests()
     .anyRequest().permitAll();
     }

     @Override public void init(WebSecurity builder) throws Exception {

     }*/


}
