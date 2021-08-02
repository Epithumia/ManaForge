import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";

class Tower extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Tower"
            case 'jp':
                return "塔"
            default:
                return "Tower"
        }
    }

    price(price) {
        price += 1500;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.ALL);
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

export {Tower};
