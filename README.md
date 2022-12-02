# brainfree-webapp

---

* [About](#about)
* [Backend-Frontend](#Backend-Frontend)
* [Setup-Guide](#Setup-Guide)
* [Contact](#contact)
* [Thanks](#thanks)
* [References](#references)

---

## About

I was looking for a project that would allow me to familiarize myself with the technologies listed and expand my
knowledge. In addition, it was important to me that it has a real function for me. Therefore, in the first step, it
should be possible to select products and add them to your shopping cart. But the shopping cart should be seen as a
shopping list. <br/>

The next steps are the following:

* One should be able to create/ join a group. To share the shopping list in the group.
* So that one does not buy e.g. the products several times in the store.
* To make multiple shopping lists obsolete, e.g. a wish list or similar. Something like Amazon.
* You can upload your own recipes and e.g. create a shopping list from the recipe.
    * From this you can then create your meal plan.
* And as a cool feature if it should be possible that brainfree can suggest you at which supermarket your whole food can
  buy cheapest. However, I don't know if this is possible without further ado, it depends on the supermarkets. And there
  are more features to come.

My current focus is on shopping lists. So the creation, editing, deleting etc. of shopping lists.

## Why did I choose this technology stack?

Java and Spring are a lot of fun for me and I find Java very versatile.

Angular is the first web framework I came into contact with. At the beginning I found it hard to learn. In the meantime
I changed my mind and got to know some advantages of a modern web framework.

To give an example:

* The Angular material has saved me a lot of pixel pushing.

I got to know Keycloak through my last employer. And since I never heard of Identity Providers, I thought that sounds
super exciting, so I included it.

If you have any criticism or suggestions, or even find a bug, I would love to hear from you.

If you have any criticism or suggestions, or even if you find a bug, I would be happy to hear from you.

---

## Backend-Frontend

### [Backend](/brainfree-rest/README.md)

### [UI](/https://github.com/FI-ML/brainfree-webapp-ui/blob/main/README.md)

## Setup-Guide

### Prerequisites

* Docker installed

### Docker

Note that this requires you to have access to the Accses_Token. If not, you need to modify the docker-compose.yml. If
you have any questions, please do not hesitate to contact us, you will find contact details under Contact.

```bash
  $ cd brainfree/docker/
  $ docker login docker.pkg.github.com
  $ docker-compose pull 
  $ docker-compose build 
  $ docker-compose up -d
```

If you want to delete the docker compose:

```bash
  $ docker-compose down
```

---

## Contact

- support@brainfree.eu
- [https://www.xing.com/profile/Maximilian_Lamm5/cv](https://www.xing.com/profile/Maximilian_Lamm5/cv)

---

## Thanks

- [https://github.com/m1well](https://github.com/m1well)
- [https://github.com/czetsuya](https://github.com/czetsuya)
- [https://github.com/JohnChangUK](https://github.com/JohnChangUK)

---

## References

- [https://spring.io/why-spring](https://spring.io/why-spring)
- [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
- [https://www.keycloak.org/](https://www.keycloak.org/)
- [https://cli.angular.io/](https://cli.angular.io/)
- [https://hub.docker.com/r/jboss/keycloak](https://hub.docker.com/r/jboss/keycloak)

---
