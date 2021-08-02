import {Card} from "@/forge/cards/Card";
import {STAT, WORLD_CARD} from "@/forge/enums";
import {Lord_Of_Flies} from "@/forge/cards/evil_gods";

class Pixie_Of_Jealousy extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Pixie (Yellow Hat) [Envy]"
            case 'jp':
                return "小悪魔(嫉妬)"
            default:
                return "Pixie (Yellow Hat) [Envy]"
        }
    }

    price(price) {
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
                if (f.third instanceof Pixie_Of_Jealousy) {
                    f.setThird(new Lord_Of_Flies());
                } else if (f.second instanceof Pixie_Of_Jealousy) {
                    f.setSecond(new Lord_Of_Flies());
                } else if (f.first instanceof Pixie_Of_Jealousy) {
                    f.setFirst(new Lord_Of_Flies());
                }
            }
            f.find_and_run_s13(Lord_Of_Flies);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.SKL);
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

export {Pixie_Of_Jealousy};
