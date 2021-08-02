import {IMMUNITY, STAT} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";

class Spring extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Spring"
            case 'jp':
                return "泉"
            default:
                return "Spring"
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
        if (f.ROBE()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Flameburst.value);
        }
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Sleep.value);
        }
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

export {Spring};
