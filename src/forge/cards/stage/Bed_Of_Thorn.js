import {SPECIAL, STAT, WORLD_CARD} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";

class Bed_Of_Thorn extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Bed of Thorn"
            case 'jp':
                return "いばらのしげみ"
            default:
                return "Bed of Thorns"
        }
    }

    /**
     *
     * @param price : int
     * @constructor
     */
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

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.stat_limits(-1, 3, STAT.ALL);
        f.setSpecial(SPECIAL.No_Regen);
        f.setStrike(f.perc150(f.getStrike()));
        f.setSlash(f.perc150(f.getSlash()));
        f.setThrust(f.perc150(f.getThrust()));
        f.setMagic(f.perc150(f.getMagic()));
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.BED_OF_THORN;
        }
    }

}

export {Bed_Of_Thorn};
