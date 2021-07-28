import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {PLUNGE2} from "@/forge/plunges/enums";

class God_Of_War extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "God of War"
            case 'jp':
                return "軍神"
            default:
                return "God of War"
        }
    }

    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-5, 10, STAT.PWR);
        f.stat_min(10, STAT.PWR);
        if (f.AXE()) {
            f.setPlunge2(PLUNGE2.Dragonslayer);
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

export {God_Of_War};
