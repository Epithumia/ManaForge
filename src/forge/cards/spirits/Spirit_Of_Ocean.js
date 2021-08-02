import {Card} from "@/forge/cards/Card";
import {IMMUNITY, STAT} from "@/forge/enums";

class Spirit_Of_Ocean extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Spirit (Ocean)"
            case 'jp':
                return "妖精(森)"
            default:
                return "Faerie [Ocean]"
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
        f.increase_stat(STAT.CHM);
        if (f.HAT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Confusion.value);
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

export {Spirit_Of_Ocean};
