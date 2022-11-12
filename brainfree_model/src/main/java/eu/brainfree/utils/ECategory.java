package eu.brainfree.utils;

/**
 * @author Max on 11.12.2021
 * @project brainfree
 * @package helper
 **/

public enum ECategory {

    BABY_PRODUCTS("Baby Products"), //
    BEAUTY("Beauty"), //
    BEER_WINE_AND_LIQUOR("Beer, Wine and Liquor"), //
    BOOK("Book"), //
    CAR_AND_MOTORBIKE("Car and Motorbike"), //
    CLOTHING("Clothing"), //
    COMPUTER_AND_ACCESSORIES("Computer and Accessories"), //
    DRUGSTORE_AND_BODY_CARE("Drugstore and Body Care"), //
    ELECTRONIC("Electronic"), //
    FOOD("Food"), //
    HOME_AND_GARDEN("Home and Garden"), //
    HOME_IMPROVEMENT_STORE("Home Improvement Store"), //
    HYGIENE("Hygiene"),
    LIGHTNING("Lighting"), //
    MUSIC("Music"), //
    OFFICE("Office"),
    TOY_AND_CHILDREN_PRODUCTS("Toys and Children Products"); //;

    private final String category;

    ECategory(String category) {
        this.category = category;
    }

    public static String getByString(String category) {
        if (!category.isEmpty()) {
            if (category.contains(",")) {
                category = category.replaceAll(",", ""); //
            }
            category = category //
                    .toUpperCase() //
                    .replaceAll(" ", "_");
        }
        return ECategory.valueOf(category).toString();
    }

    @Override
    public String toString() {
        return category;
    }
}
