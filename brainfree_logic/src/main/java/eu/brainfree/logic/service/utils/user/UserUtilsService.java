package eu.brainfree.logic.service.utils.user;

import eu.brainfree.model.User;

/**
 * @author Max on 22.10.2022
 * @project brainfree-webapp
 * @date 22.10.2022
 **/


public class UserUtilsService {

    private UserUtilsService() {
    }

    public static String getFullNameFromUser(User user) {
        return user.getFirstName() + " " + user.getLastName();
    }
}
