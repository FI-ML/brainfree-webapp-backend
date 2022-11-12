package eu.brainfree.logic.exception.product;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Max on 18.06.2022
 * @project brainfree-webapp
 * @date 18.06.2022
 **/

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProductNotFoundByArticleNumber extends RuntimeException {

    public ProductNotFoundByArticleNumber(String articleNumber) {
        super(String.format("Product with article number: %s not found", articleNumber));
    }
}
