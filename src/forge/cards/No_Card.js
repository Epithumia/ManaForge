import {Card} from "@/forge/cards/Card";

class No_Card extends Card {
    constructor() {
        super();
    }

    // eslint-disable-next-line no-unused-vars
    text(language = '') {
        return "--";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    price(price) {
        price += 0;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    }

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }
}

export {No_Card};
