import {Card} from "@/forge/cards/Card";

class Enticed_Nymph extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Enticed Nymph"
            case 'jp':
                return "かどわかされし娘"
            default:
                return "Enticed Nymph"
        }
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    price(price) {
        price += 1000;
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

export {Enticed_Nymph};
