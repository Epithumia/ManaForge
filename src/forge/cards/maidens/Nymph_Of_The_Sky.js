import {Card} from "@/forge/cards/Card";
import {SPECIAL} from "@/forge/enums";

class Nymph_Of_The_Sky extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Nymph of the Sky"
            case 'jp':
                return "天かける娘"
            default:
                return "Valkyrie"
        }
    }

    PRICE(price) {
        price += 1000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.MANTLE()) {
            f.setSpecial(SPECIAL.Move_Regen);
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

export {Nymph_Of_The_Sky};
