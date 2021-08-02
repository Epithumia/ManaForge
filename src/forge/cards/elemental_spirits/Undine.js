import {Card} from "@/forge/cards/Card";
import {ESSENCE, STAT} from "@/forge/enums";

class Undine extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Undine"
            case 'jp':
                return "ウンディーネ"
            default:
                return "Undine"
        }
    }

    price(price) {
        price += 250;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.increase_stat(STAT.MAG);
        f.taint(ESSENCE.UNDINE);
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

export {Undine};
