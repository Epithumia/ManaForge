import {ESSENCE, IMMUNITY, PLUNGE1, PLUNGE2, PLUNGE3, SPECIAL, STAT, WORLD_CARD} from "@/forge/enums";

class Card {
    constructor() {
        if (this.constructor === Card) {
            // Error: Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        // Check if all instance methods are implemented.
        if (this.CPRINT === Card.prototype.CPRINT) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method CPRINT.");
        }
        if (this.PRICE === Card.prototype.PRICE) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method PRICE.");
        }
        if (this.FIRST === Card.prototype.FIRST) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method FIRST.");
        }
        if (this.SECOND === Card.prototype.SECOND) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method SECOND.");
        }
        if (this.THIRD === Card.prototype.THIRD) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method THIRD.");
        }
        if (this.HIDDEN === Card.prototype.HIDDEN) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method HIDDEN.");
        }
        if (this.LEAVING === Card.prototype.LEAVING) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method LEAVING.");
        }
        if (this.WORLD === Card.prototype.WORLD) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method WORLD.");
        }
    }

    CPRINT() {
    }

    // eslint-disable-next-line no-unused-vars
    PRICE(price) {
    } //price: int

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    } //f : ForgedItem
}

class No_Card extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "--";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
        price += 0;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    }

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
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


class Ancient_Moon extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Ancient Moon";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
        price += 2200;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    }

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.hidden = new No_Card();
        }
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
            f.awc = WORLD_CARD.ANCIENT_MOON;
        }
    }

}

class Aura extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Aura";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
        price += 250;
        return price;
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.increase_stat(STAT.LCK);
        f.taint(ESSENCE.AURA);
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

class Beast_Headed_God extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Beast-headed God";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
        price += 6660;
        return price;
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);

    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.HP);
        f.decrease_stat(STAT.ALL);
        if (f.KNIFE()) {
            f.setPlunge2(PLUNGE2.Poison_Blade);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    LEAVING(f) {
        if (f.third instanceof Sacrificed_Nymph) {
            f.third = this;
        } else if (f.second instanceof Sacrificed_Nymph) {
            f.second = this;
        } else if (f.first instanceof Sacrificed_Nymph) {
            f.first = this;
        }
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}

class Bed_Of_Thorn extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Bed of Thorn";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
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

class Blacksmith_God extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Blacksmith God";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
        price += 2800;
        return price;
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.stat_limits(-5, 10, STAT.DEF);
        f.stat_min(10, STAT.DEF);
        if (f.HAMMER()) {
            f.setPlunge3(PLUNGE3.Sledge_Hammer);
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

class Cleric extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Cleric";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 500;
        return price;
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);

    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if ((f.first instanceof Metropolis || f.second instanceof Metropolis
            || f.third instanceof Metropolis) && !(f.hidden instanceof Metropolis)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.increase_stat(STAT.SPR);
            f.increase_stat(STAT.CHM);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.SPR);
        }
        if (f.STAFF()) {
            f.setPlunge3(PLUNGE3.Demonicide);
        }
        f.setSharp(f.perc50(f.getSharp()));
        f.setHeavy(f.perc150(f.getHeavy()));
        f.setSlash(f.perc50(f.getSlash()));
        f.setStrike(f.perc150(f.getStrike()));
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

class Clown extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Clown";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 250;
        return price;
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);

    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if ((f.first instanceof Metropolis || f.second instanceof Metropolis
            || f.third instanceof Metropolis) && !(f.hidden instanceof Metropolis)) {
            f.stat_limits(-5, 12, STAT.ALL);
        } else {
            f.stat_limits(-3, 9, STAT.ALL);
        }
        if (f.KNIFE()) {
            f.setPlunge2(PLUNGE2.Quick_Blade);
        }
        f.setSharp(f.perc150(f.getSharp()));
        f.setHeavy(f.perc50(f.getHeavy()));
        f.setThrust(f.perc150(f.getThrust()));
        f.setStrike(f.perc50(f.getStrike()));
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

class Dryad extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Dryad";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 250;
        return price;
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.increase_stat(STAT.HP);
        f.taint(ESSENCE.DRYAD);
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

class Dying_Earth extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Dying Earth";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 2600;
        return price;
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.stat_limits(-5, 12, STAT.ALL);
        if ((f.hidden instanceof Enticed_Nymph)
            || (!(f.first instanceof Enticed_Nymph)
                && !(f.second instanceof Enticed_Nymph)
                && !(f.third instanceof Enticed_Nymph))) {
            f.decrease_stat(STAT.ALL);
        }
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.hidden = new No_Card();
        }
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.DYING_EARTH;
        }
    }
}

class Enticed_Nymph extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Enticed Nymph";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 1000;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    }

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
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

class Fallen_Angel extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Fallen Angel";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 6660;
        return price;
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.CHM);
        f.decrease_stat(STAT.ALL);
        if (f.THSWORD()) {
            f.setPlunge1(PLUNGE1.Chaotic_Avenger);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    LEAVING(f) {
        if (f.third instanceof Sacrificed_Nymph) {
            f.third = this;
        } else if (f.second instanceof Sacrificed_Nymph) {
            f.second = this;
        } else if (f.first instanceof Sacrificed_Nymph) {
            f.first = this;
        }
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}

class Fertility_Goddess extends Card {


    CPRINT() {
        return "Fertility Goddess";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-5, 10, STAT.HP);
        f.stat_min(10, STAT.HP);
        f.setImmunity(f.getImmunity() | IMMUNITY.Petrify);
        if (f.RING()) {
            f.setSpecial(SPECIAL.Share_Exp);
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

class Gnome extends Card {

    CPRINT() {
        return "Gnome";
    }

    PRICE(price) {
        price += 250;
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
        f.taint(ESSENCE.GNOME);
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

class God_Of_Destruction extends Card {


    CPRINT() {
        return "God of Destruction";
    }


    PRICE(price) {
        price += 6660;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.PWR);
        f.decrease_stat(STAT.ALL);
        if (f.SWORD()) {
            f.setPlunge2(PLUNGE2.Flame_Tongue);
        }
        f.setImmunity(f.getImmunity() | IMMUNITY.Freeze);
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }


    LEAVING(f) {
        if (f.third instanceof Sacrificed_Nymph) {
            f.third = this;
        } else if (f.second instanceof Sacrificed_Nymph) {
            f.second = this;
        } else if (f.first instanceof Sacrificed_Nymph) {
            f.first = this;
        }
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}

class God_Of_War extends Card {


    CPRINT() {
        return "God of War";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-5, 10, STAT.PWR);
        f.stat_min(10, STAT.PWR);
        if (f.AXE()) {
            f.setPlunge2(PLUNGE2.Dragonslayer);
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

class Goddess_Of_Love extends Card {


    CPRINT() {
        return "Goddess of Love";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 9, STAT.SPR);
        f.stat_limits(-3, 9, STAT.CHM);
        f.stat_min(7, STAT.SPR);
        f.stat_min(7, STAT.CHM);
        if (f.PENDANT()) {
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

class Heavens_Scale extends Card {


    CPRINT() {
        return "Heaven's Scale";
    }


    PRICE(price) {
        price += 1800;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.setSpecial(SPECIAL.No_Revive);
    }


    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.hidden = new No_Card();
        }
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }


    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.HEAVENS_SCALE;
        }
    }

}


class Jinn extends Card {

    CPRINT() {
        return "Jinn";
    }

    PRICE(price) {
        price += 250;
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
        f.taint(ESSENCE.JINN);
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


class King extends Card {

    CPRINT() {
        return "King";
    }

    PRICE(price) {
        price += 1500;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);

    }

    THIRD(f) {
        if ((f.first instanceof Metropolis || f.second instanceof Metropolis
            || f.third instanceof Metropolis) && !(f.hidden instanceof Metropolis)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.PWR);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.PWR);
        }

        if (f.GLOVE()) {
            f.setPlunge2(PLUNGE2.Hand_of_Midas);
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


class Leviathan extends Card {


    CPRINT() {
        return "Leviathan";
    }


    PRICE(price) {
        price += 6660;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.DEF);
        f.decrease_stat(STAT.ALL);
        if (f.THAXE()) {
            f.setPlunge3(PLUNGE3.Treefeller);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }


    LEAVING(f) {
        if (f.third instanceof Sacrificed_Nymph) {
            f.third = this;
        } else if (f.second instanceof Sacrificed_Nymph) {
            f.second = this;
        } else if (f.first instanceof Sacrificed_Nymph) {
            f.first = this;
        }
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}


class Lord_Of_Flies extends Card {


    CPRINT() {
        return "Lord of Flies";
    }


    PRICE(price) {
        price += 6660;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.SKL);
        f.decrease_stat(STAT.ALL);
        if (f.KNIFE()) {
            f.setPlunge3(PLUNGE3.Sinister_Blade);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }


    LEAVING(f) {
        if (f.third instanceof Sacrificed_Nymph) {
            f.third = this;
        } else if (f.second instanceof Sacrificed_Nymph) {
            f.second = this;
        } else if (f.first instanceof Sacrificed_Nymph) {
            f.first = this;
        }
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}


class Man_Of_Valor extends Card {


    CPRINT() {
        return "Man of Valor";
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
        f.stat_limits(-3, 5, STAT.ALL);
        f.increase_stat(STAT.PWR);
        f.increase_stat(STAT.HP);
        if (f.SPEAR()) {
            f.setPlunge1(PLUNGE1.Spear_of_Light);
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


class Metropolis extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Metropolis";
    }

    /**
     * @param price : int
     * @returns int
     * @constructor
     */
    PRICE(price) {
        price += 1500;
        return price;
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if (f.ROBE()) {
            f.setMagic(f.perc150(f.getMagic()));
            f.setImmunity(f.getImmunity() | IMMUNITY.Confusion);
        } else {
            f.setMagic(f.perc125(f.getMagic()));
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


class Mirrored_World extends Card {


    CPRINT() {
        return "Mirrored World";
    }


    PRICE(price) {
        price += 2200;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    }

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
    }


    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.hidden = new No_Card();
        }
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }


    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.MIRRORED_WORLD;
        }
    }

}


class Moon_Goddess extends Card {


    CPRINT() {
        return "Moon Goddess";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-5, 10, STAT.SPR);
        f.stat_min(10, STAT.SPR);
        if (f.SWORD()) {
            f.setPlunge3(PLUNGE3.Moonlight);
        } else if (f.BOW()) {
            f.setPlunge2(PLUNGE2.Lunar_Shot);
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


class Mother_Of_Gods extends Card {


    CPRINT() {
        return "Mother of Gods";
    }


    PRICE(price) {
        price += 4000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 5, STAT.MAG);
        f.stat_limits(-3, 5, STAT.SPR);
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_min(5, STAT.MAG);
        f.stat_min(5, STAT.SPR);
        f.stat_min(5, STAT.CHM);
        if (f.FLAIL()) {
            f.setPlunge1(PLUNGE1.Green_Princess);
            f.setPlunge2(PLUNGE2.Game_of_Death);
            f.setPlunge3(PLUNGE3.Red_Dream);
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


class Nymph_Of_Dawn extends Card {


    CPRINT() {
        return "Nymph of Dawn";
    }


    PRICE(price) {
        price += 1000;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.getEnergy() <= 24) {
            if (f.third instanceof Nymph_Of_Dawn) {
                f.third = new No_Card();
            } else if (f.second instanceof Nymph_Of_Dawn) {
                f.second = new No_Card();
            }
            f.setEnergy(f.getEnergy() + 192);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }


    LEAVING(f) {
        f.setEnergy(f.getEnergy() + 192);
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}


class Nymph_Of_Orchards extends Card {


    CPRINT() {
        return "Nymph of Orchards";
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


class Nymph_Of_The_Sky extends Card {


    CPRINT() {
        return "Nymph of the Sky";
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


class Ocean_God extends Card {


    CPRINT() {
        return "Ocean God";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 9, STAT.PWR);
        f.stat_limits(-3, 9, STAT.SKL);
        f.stat_min(7, STAT.PWR);
        f.stat_min(7, STAT.SKL);
        if (f.SPEAR()) {
            f.setPlunge1(PLUNGE1.Trident);
        }
        f.setImmunity(f.getImmunity() | IMMUNITY.Flameburst);
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


class Phoenix extends Card {

    CPRINT() {
        return "Phoenix";
    }

    PRICE(price) {
        price += 2500;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.PWR);
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_min(3, STAT.PWR);
        f.stat_min(3, STAT.SKL);
        if (f.RING() || f.PENDANT()) {
            if ((f.first instanceof Volcano || f.second instanceof Volcano
                || f.third instanceof Volcano) && !(f.hidden instanceof Volcano)) {
                f.setSpecial(SPECIAL.Auto_Revive);
            }
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


class Pixie_Of_Gluttony extends Card {

    CPRINT() {
        return "Pixie of Gluttony";
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
                if (f.third instanceof Pixie_Of_Gluttony) {
                    f.third = new Leviathan();
                } else if (f.second instanceof Pixie_Of_Gluttony) {
                    f.second = new Leviathan();
                } else if (f.first instanceof Pixie_Of_Gluttony) {
                    f.first = new Leviathan();
                }
            }
            f.find_and_run_s13(Leviathan.class);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.HP);
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


class Pixie_Of_Greed extends Card {

    CPRINT() {
        return "Pixie of Greed";
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
                    f.third = new Beast_Headed_God();
                } else if (f.second instanceof Pixie_Of_Greed) {
                    f.second = new Beast_Headed_God();
                } else if (f.first instanceof Pixie_Of_Greed) {
                    f.first = new Beast_Headed_God();
                }
            }
            f.find_and_run_s13(Beast_Headed_God.class);
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


class Pixie_Of_Jealousy extends Card {

    CPRINT() {
        return "Pixie of Jealousy";
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
                if (f.third instanceof Pixie_Of_Jealousy) {
                    f.third = new Lord_Of_Flies();
                } else if (f.second instanceof Pixie_Of_Jealousy) {
                    f.second = new Lord_Of_Flies();
                } else if (f.first instanceof Pixie_Of_Jealousy) {
                    f.first = new Lord_Of_Flies();
                }
            }
            f.find_and_run_s13(Lord_Of_Flies.class);
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


class Pixie_Of_Laziness extends Card {

    CPRINT() {
        return "Pixie of Laziness";
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
                if (f.third instanceof Pixie_Of_Laziness) {
                    f.third = new Witch_Of_Moon();
                } else if (f.second instanceof Pixie_Of_Laziness) {
                    f.second = new Witch_Of_Moon();
                } else if (f.first instanceof Pixie_Of_Laziness) {
                    f.first = new Witch_Of_Moon();
                }
            }
            f.find_and_run_s13(Witch_Of_Moon.class);
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


class Pixie_Of_Lust extends Card {

    CPRINT() {
        return "Pixie of Lust";
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
                if (f.third instanceof Pixie_Of_Lust) {
                    f.third = new Wings_Of_Darkness();
                } else if (f.second instanceof Pixie_Of_Lust) {
                    f.second = new Wings_Of_Darkness();
                } else if (f.first instanceof Pixie_Of_Lust) {
                    f.first = new Wings_Of_Darkness();
                }
            }
            f.find_and_run_s13(Wings_Of_Darkness.class);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.SPR);
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


class Pixie_Of_Pride extends Card {

    CPRINT() {
        return "Pixie of Pride";
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
                if (f.third instanceof Pixie_Of_Pride) {
                    f.third = new Fallen_Angel();
                } else if (f.second instanceof Pixie_Of_Pride) {
                    f.second = new Fallen_Angel();
                } else if (f.first instanceof Pixie_Of_Pride) {
                    f.first = new Fallen_Angel();
                }
            }
            f.find_and_run_s13(Fallen_Angel.class);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.CHM);
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


class Pixie_Of_Rage extends Card {

    CPRINT() {
        return "Pixie of Rage";
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
                if (f.third instanceof Pixie_Of_Rage) {
                    f.third = new God_Of_Destruction();
                } else if (f.second instanceof Pixie_Of_Rage) {
                    f.second = new God_Of_Destruction();
                } else if (f.first instanceof Pixie_Of_Rage) {
                    f.first = new God_Of_Destruction();
                }
            }
            f.find_and_run_s13(God_Of_Destruction.class);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.PWR);
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


class Princess extends Card {

    CPRINT() {
        return "Princess";
    }

    PRICE(price) {
        price += 1500;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);

    }

    THIRD(f) {
        if ((f.first instanceof Metropolis || f.second instanceof Metropolis
            || f.third instanceof Metropolis) && !(f.hidden instanceof Metropolis)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.DEF);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
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


class Ragnarok extends Card {


    CPRINT() {
        return "Ragnarok";
    }


    PRICE(price) {
        price += 10000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.THSWORD()) {
            f.setPlunge3(PLUNGE3.Ragnarok);
        }
    }


    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.hidden = new No_Card();
        }
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }


    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.RAGNAROK;
        }
    }

}


class Raven extends Card {

    CPRINT() {
        return "Raven";
    }

    PRICE(price) {
        price += 300;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.MAG);
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_min(3, STAT.MAG);
        f.stat_min(3, STAT.CHM);
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


class Ruler_Of_The_Sky extends Card {


    CPRINT() {
        return "Ruler of the Sky";
    }


    PRICE(price) {
        price += 5000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 9, STAT.PWR);
        f.stat_limits(-3, 9, STAT.MAG);
        f.stat_min(9, STAT.PWR);
        f.stat_min(9, STAT.MAG);
        if (f.SPEAR()) {
            f.setPlunge1(PLUNGE1.Gungnir);
        } else if (f.STAFF()) {
            f.setPlunge3(PLUNGE3.Electrosceptre);
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



class Sacrificed_Nymph extends Card {
    constructor() {
        super();
    }


    CPRINT() {
        return "Sacrificed Nymph";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
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

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Petrify);
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

class Sage extends Card {


    CPRINT() {
        return "Sage";
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
        f.stat_limits(-3, 5, STAT.ALL);
        f.increase_stat(STAT.MAG);
        f.increase_stat(STAT.DEF);
        if (f.BOW()) {
            f.setPlunge1(PLUNGE1.Phoenix_Falling);
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


class Sala extends Card {

    CPRINT() {
        return "Salamander";
    }

    PRICE(price) {
        price += 250;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.PWR);
        f.taint(ESSENCE.SALA);
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


class Shade extends Card {

    CPRINT() {
        return "Shade";
    }

    PRICE(price) {
        price += 250;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.increase_stat(STAT.SPR);
        f.taint(ESSENCE.SHADE);
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


class Sorcerer extends Card {

    CPRINT() {
        return "Sorcerer";
    }

    PRICE(price) {
        price += 300;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        if ((f.first instanceof Tower || f.second instanceof Tower
            || f.third instanceof Tower) && !(f.hidden instanceof Tower)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.increase_stat(STAT.SPR);
            f.increase_stat(STAT.CHM);
            f.setWiR(Math.trunc(f.getWiR() / 2));
            if (f.getWiR() < 1)
                f.setWiR(1);
            f.setDrR(Math.trunc(f.getDrR() / 2));
            if (f.getDrR() < 1)
                f.setDrR(1);
            f.setSaR(Math.trunc(f.getSaR() / 2));
            if (f.getSaR() < 1)
                f.setSaR(1);
            f.setGnR(Math.trunc(f.getGnR() / 2));
            if (f.getGnR() < 1)
                f.setGnR(1);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.setWiR(Math.trunc(f.getWiR() / 4) * 3);
            if (f.getWiR() < 1)
                f.setWiR(1);
            f.setDrR(Math.trunc(f.getDrR() / 4) * 3);
            if (f.getDrR() < 1)
                f.setDrR(1);
            f.setSaR(Math.trunc(f.getSaR() / 4) * 3);
            if (f.getSaR() < 1)
                f.setSaR(1);
            f.setGnR(Math.trunc(f.getGnR() / 4) * 3);
            if (f.getGnR() < 1)
                f.setGnR(1);
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


class Spirit_Of_Forest extends Card {


    CPRINT() {
        return "Spirit of Forest";
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
        f.increase_stat(STAT.SPR);
        f.increase_stat(STAT.CHM);
        if (f.BOW()) {
            f.setPlunge2(PLUNGE2.Elven_Archer);
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


class Spirit_Of_Housework extends Card {


    CPRINT() {
        return "Spirit of Housework";
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
        f.increase_stat(STAT.LCK);
        if (f.MANTLE()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Sleep);
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


class Spirit_Of_Mountain extends Card {


    CPRINT() {
        return "Spirit of Mountain";
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


class Spirit_Of_Ocean extends Card {


    CPRINT() {
        return "Spirit of Ocean";
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
        f.increase_stat(STAT.CHM);
        if (f.HAT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Confusion);
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


class Spirit_Of_Shoes extends Card {


    CPRINT() {
        return "Spirit of Shoes";
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
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis);
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


class Spring extends Card {


    CPRINT() {
        return "Spring";
    }


    PRICE(price) {
        price += 1500;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 5, STAT.ALL);
        if (f.ROBE()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Flameburst);
        }
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Sleep);
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


class Sun_God extends Card {


    CPRINT() {
        return "Sun God";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-5, 10, STAT.CHM);
        f.stat_min(10, STAT.CHM);
        if (f.SWORD()) {
            f.setPlunge2(PLUNGE2.Sunlight);
        } else if (f.BOW()) {
            f.setPlunge1(PLUNGE1.Solar_Flare);
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


class Thunder_God extends Card {


    CPRINT() {
        return "Thunder God";
    }


    PRICE(price) {
        price += 4000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 5, STAT.PWR);
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_limits(-3, 5, STAT.DEF);
        f.stat_min(5, STAT.PWR);
        f.stat_min(5, STAT.SKL);
        f.stat_min(5, STAT.DEF);
        if (f.HAMMER()) {
            f.setPlunge3(PLUNGE3.Mjolnir);
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


class Tower extends Card {

    CPRINT() {
        return "Tower";
    }

    PRICE(price) {
        price += 1500;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 5, STAT.ALL);
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


class Undine extends Card {

    CPRINT() {
        return "Undine";
    }

    PRICE(price) {
        price += 250;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.MAG);
        f.taint(ESSENCE.UNDINE);
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


class Unicorn extends Card {


    CPRINT() {
        return "Unicorn";
    }


    PRICE(price) {
        price += 2500;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 5, STAT.DEF);
        f.stat_limits(-3, 5, STAT.MAG);
        f.stat_min(3, STAT.DEF);
        f.stat_min(3, STAT.MAG);
        if (f.RING() || f.PENDANT()) {
            if ((f.first instanceof Spring || f.second instanceof Spring
                || f.third instanceof Spring) && !(f.hidden instanceof Spring)) {
                f.setSpecial(SPECIAL.Fast_Revive);
            }
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


class Volcano extends Card {

    CPRINT() {
        return "Volcano";
    }

    PRICE(price) {
        price += 1300;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.setForce(f.perc150(f.getForce()));
        f.setTech(f.perc50(f.getTech()));
        if (f.HAMMER()) {
            f.setPlunge3(PLUNGE3.Magma_Hammer);
        }
        if (f.HAUBERK()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Freeze);
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


class Wanderer extends Card {


    CPRINT() {
        return "Wanderer";
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
        f.stat_limits(-3, 5, STAT.ALL);
        f.increase_stat(STAT.SKL);
        f.increase_stat(STAT.SPR);
        if (f.AXE()) {
            f.setPlunge3(PLUNGE3.Woodchopper);
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


class Wind_God extends Card {


    CPRINT() {
        return "Wind God";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-5, 10, STAT.SKL);
        f.stat_min(10, STAT.SKL);
        if (f.STAFF()) {
            f.setPlunge1(PLUNGE1.Caduceus);
        }
        if (f.SHOES()) {
            f.setStrike(f.getStrike() + 10);
            f.setSlash(f.getSlash() + 10);
            f.setThrust(f.getThrust() + 10);
            f.setMagic(f.getMagic() + 10);
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis);
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


class Wings_Of_Darkness extends Card {

    CPRINT() {
        return "Wings of Darkness";
    }


    PRICE(price) {
        price += 6660;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.SPR);
        f.decrease_stat(STAT.ALL);
        if (f.STAFF()) {
            f.setPlunge3(PLUNGE3.Golden_Touch);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }


    LEAVING(f) {
        if (f.third instanceof Sacrificed_Nymph) {
            f.third = this;
        } else if (f.second instanceof Sacrificed_Nymph) {
            f.second = this;
        } else if (f.first instanceof Sacrificed_Nymph) {
            f.first = this;
        }
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}


class Wisdom_Goddess extends Card {


    CPRINT() {
        return "Wisdom Goddess";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-5, 10, STAT.MAG);
        f.stat_min(10, STAT.MAG);
        if (f.SHIELD()) {
            f.setSpecial(SPECIAL.Stare_Immunity);
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


class Wisp extends Card {

    CPRINT() {
        return "Wisp";
    }

    PRICE(price) {
        price += 250;
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
        f.taint(ESSENCE.WISP);
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


class Witch extends Card {

    CPRINT() {
        return ("Witch");
    }

    PRICE(price) {
        price += 300;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        if ((f.first instanceof Tower || f.second instanceof Tower
            || f.third instanceof Tower) && !(f.hidden instanceof Tower)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.increase_stat(STAT.SPR);
            f.increase_stat(STAT.CHM);
            f.setShR(Math.trunc(f.getShR() / 2));
            if (f.getShR() < 1)
                f.setShR(1);
            f.setAuR(f.getAuR() / 2);
            if (f.getAuR() < 1)
                f.setAuR(1);
            f.setJiR(f.getJiR() / 2);
            if (f.getJiR() < 1)
                f.setJiR(1);
            f.setUnR(f.getUnR() / 2);
            if (f.getUnR() < 1)
                f.setUnR(1);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.setShR(Math.trunc(f.getShR() / 4) * 3);
            if (f.getShR() < 1)
                f.setShR(1);
            f.setAuR(Math.trunc(f.getAuR() / 4) * 3);
            if (f.getAuR() < 1)
                f.setAuR(1);
            f.setJiR(Math.trunc(f.getJiR() / 4) * 3);
            if (f.getJiR() < 1)
                f.setJiR(1);
            f.setUnR(Math.trunc(f.getUnR() / 4) * 3);
            if (f.getUnR() < 1)
                f.setUnR(1);
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


class Witch_Of_Moon extends Card {


    CPRINT() {
        return "Witch of Moon";
    }


    PRICE(price) {
        price += 6660;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.MAG);
        f.decrease_stat(STAT.ALL);
        if (f.SWORD()) {
            f.setPlunge2(PLUNGE2.Vampsword);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }


    LEAVING(f) {
        if (f.third instanceof Sacrificed_Nymph) {
            f.third = this;
        } else if (f.second instanceof Sacrificed_Nymph) {
            f.second = this;
        } else if (f.first instanceof Sacrificed_Nymph) {
            f.first = this;
        }
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}


class Wolf extends Card {

    CPRINT() {
        return "Wolf";
    }

    PRICE(price) {
        price += 300;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_limits(-3, 5, STAT.HP);
        f.stat_min(3, STAT.SKL);
        f.stat_min(3, STAT.HP);
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


class Yggdrasil extends Card {


    CPRINT() {
        return "Yggdrasil";
    }


    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.STAFF()) {
            f.stat_limits(-3, 9, STAT.ALL);
        } else {
            f.stat_limits(-5, 10, STAT.ALL);
        }
        f.increase_stat(STAT.ALL);
    }


    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.hidden = new No_Card();
        }
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }


    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.YGGDRASIL;
        }
    }

}


export {
    Card,
    Ancient_Moon,
    Aura,
    Beast_Headed_God,
    Bed_Of_Thorn,
    Blacksmith_God,
    Cleric,
    Clown,
    Dryad,
    Dying_Earth,
    Enticed_Nymph,
    Fallen_Angel,
    Fertility_Goddess,
    Gnome,
    God_Of_Destruction,
    God_Of_War,
    Goddess_Of_Love,
    Heavens_Scale,
    Jinn,
    King,
    Leviathan,
    Lord_Of_Flies,
    Man_Of_Valor,
    Metropolis,
    Mirrored_World,
    Moon_Goddess,
    Mother_Of_Gods,
    Nymph_Of_Dawn,
    Nymph_Of_Orchards,
    Nymph_Of_The_Sky,
    Ocean_God,
    Phoenix,
    Pixie_Of_Gluttony,
    Pixie_Of_Greed,
    Pixie_Of_Jealousy,
    Pixie_Of_Laziness,
    Pixie_Of_Lust,
    Pixie_Of_Pride,
    Pixie_Of_Rage,
    Princess,
    Ragnarok,
    Raven,
    Ruler_Of_The_Sky,
    Sacrificed_Nymph,
    Sage,
    Sala,
    Shade,
    Sorcerer,
    Spirit_Of_Forest,
    Spirit_Of_Housework,
    Spirit_Of_Mountain,
    Spirit_Of_Ocean,
    Spirit_Of_Shoes,
    Spring,
    Sun_God,
    Thunder_God,
    Tower,
    Undine,
    Unicorn,
    Volcano,
    Wanderer,
    Wind_God,
    Wings_Of_Darkness,
    Wisdom_Goddess,
    Wisp,
    Witch,
    Witch_Of_Moon,
    Wolf,
    Yggdrasil,
    No_Card
}
