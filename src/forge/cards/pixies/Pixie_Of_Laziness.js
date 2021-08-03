import {Card} from "@/forge/cards/Card";
import {STAT, WORLD_CARD} from "@/forge/enums";
import {Witch_Of_Moon} from "@/forge/cards/evil_gods";

class Pixie_Of_Laziness extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Pixie (Sloth)"
            case 'jp':
                return "小悪魔(怠惰)"
            default:
                return "Pixie (Blue Hat)"
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
                if (f.third instanceof Pixie_Of_Laziness) {
                    f.setThird(new Witch_Of_Moon());
                } else if (f.second instanceof Pixie_Of_Laziness) {
                    f.setSecond(new Witch_Of_Moon());
                } else if (f.first instanceof Pixie_Of_Laziness) {
                    f.setFirst(new Witch_Of_Moon());
                }
            }
            f.find_and_run_s13(Witch_Of_Moon);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.MAG);
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

export {Pixie_Of_Laziness};
