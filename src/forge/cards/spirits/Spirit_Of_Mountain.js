import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {PLUNGE3} from "@/forge/plunges/enums";

class Spirit_Of_Mountain extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Spirit (Mountain)"
            case 'jp':
                return "世界樹"
            default:
                return "Faerie [Mountain]"
        }
    }

    price(price) {
        price += 800;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.DEF);
        f.increase_stat(STAT.HP);
        if (f.HAMMER()) {
            f.setPlunge3(PLUNGE3.Quake_Hammer);
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

export {Spirit_Of_Mountain};
