import {Card} from "@/forge/cards/Card";
import {IMMUNITY, SPECIAL, STAT} from "@/forge/enums";

class Spirit_Of_Housework extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Spirit (Housework)"
            case 'jp':
                return "妖精(家事)"
            default:
                return "Faerie [Housework]"
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
        f.increase_stat(STAT.LCK);
        if (f.MANTLE()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Sleep.value);
        }
        if (f.RING()) {
            f.setSpecial(SPECIAL.Extra_Lucre);
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

export {Spirit_Of_Housework};
