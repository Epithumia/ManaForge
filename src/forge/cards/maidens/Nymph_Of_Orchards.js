import {Card} from "@/forge/cards/Card";
import {SPECIAL} from "@/forge/enums";

class Nymph_Of_Orchards extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Nymph of Orchards"
            case 'jp':
                return "リンゴ園の娘"
            default:
                return "Orchard Nymph"
        }
    }

    price(price) {
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
        if (f.RING()) {
            f.setSpecial(SPECIAL.Fast_Revive);
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

export {Nymph_Of_Orchards};
