package eu.brainfree.controller;

import eu.brainfree.domain.cart.CartRequestTO;
import eu.brainfree.domain.cart.CartResponseTO;
import eu.brainfree.domain.cartitem.AddItemToCartTO;
import eu.brainfree.domain.cartitem.UpdateCartItemQuantityTO;
import eu.brainfree.logic.service.cart.CartControllerService;
import eu.brainfree.logic.service.cartitem.CartItemControllerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static eu.brainfree.utils.Constants.SHOPPING_CART;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package controller
 **/


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/brainfree/carts/", produces = MediaType.APPLICATION_JSON_VALUE)
public class CartController {

    private final CartControllerService cartService;
    private final CartItemControllerService itemService;


    @GetMapping(SHOPPING_CART)
    public ResponseEntity<CartResponseTO> getShoppingCartByUser(Authentication authentication) {
        return ResponseEntity.ok(itemService.findAllByShoppingCart(authentication));
    }

    @GetMapping
    public ResponseEntity<List<CartResponseTO>> getCartsByUser(Authentication authentication) {
        return ResponseEntity.ok(itemService.findAllCartsByUser(authentication));
    }

    @PostMapping
    public ResponseEntity<CartResponseTO> create(Authentication authentication, @RequestBody CartRequestTO cartDto) {
        return ResponseEntity.ok(cartService.create(authentication, cartDto));
    }

    @PutMapping("add-item")
    public ResponseEntity<CartResponseTO> addItem(@RequestBody AddItemToCartTO addItemToCartTO) {
        return ResponseEntity.ok(itemService.addItem(addItemToCartTO));
    }

    @PutMapping("update-quantity")
    public ResponseEntity<CartResponseTO> updateQuantity(@RequestBody
                                                         UpdateCartItemQuantityTO updateCartItemQuantityTO) {
        return ResponseEntity.ok(itemService.updateQuantity(updateCartItemQuantityTO));
    }

    @DeleteMapping("delete-item/{itemId}")
    public ResponseEntity<Void> removeItem(@PathVariable String itemId) {
        itemService.removeItemFromCart(itemId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("delete-cart/{cartName}")
    public ResponseEntity<Void> delete(Authentication authentication, @PathVariable String cartName) {
        cartService.delete(authentication, cartName);
        return ResponseEntity.ok().build();
    }

}
