import {Card} from "@/forge/cards/Card";
import {IMMUNITY, SPECIAL, STAT} from "@/forge/enums";

class Spirit_Of_Shoes extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Spirit (Shoes)"
            case 'jp':
                return "妖精(靴屋)"
            default:
                return "Faerie (Shoes)"
        }
    }

    PRICE(price) {
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
        f.increase_stat(STAT.SKL);
        if (f.BOOTS()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis.value);
        }
        if (f.SHOES()) {
            f.setSpecial(SPECIAL.Extra_Exp);
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

export {Spirit_Of_Shoes};
