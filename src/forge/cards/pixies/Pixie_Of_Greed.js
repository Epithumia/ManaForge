import {Card} from "@/forge/cards/Card";
import {STAT, WORLD_CARD} from "@/forge/enums";
import {Beast_Headed_God} from "@/forge/cards/evil_gods";

class Pixie_Of_Greed extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Pixie (No Hat) [Greed]"
            case 'jp':
                return "小悪魔(強欲)"
            default:
                return "Pixie (No Hat) [Greed]"
        }
    }

    PRICE(price) {
        price += 150;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        if (WORLD_CARD.RAGNAROK === f.awc) {
            if (f.getEnergy() >= 8) {
                if (f.third instanceof Pixie_Of_Greed) {
                    f.setThird(new Beast_Headed_God());
                } else if (f.second instanceof Pixie_Of_Greed) {
                    f.setSecond(new Beast_Headed_God());
                } else if (f.first instanceof Pixie_Of_Greed) {
                    f.setFirst(new Beast_Headed_God());
                }
            }
            f.find_and_run_s13(Beast_Headed_God);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.DEF);
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

export {Pixie_Of_Greed};
