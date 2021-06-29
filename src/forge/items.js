import {ESSENCE, IMMUNITY, STAT} from "@/forge/enums";
import {
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
    Yggdrasil
} from "@/forge/cards";

class Item {
    constructor() {
        if (this.constructor === Item) {
            // Error: Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        // Check if all instance methods are implemented.
        if (this.IPRINT === Item.prototype.IPRINT) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method CPRINT.");
        }
        if (this.ENERGY === Item.prototype.ENERGY) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method CPRINT.");
        }
        if (this.CODE === Item.prototype.CODE) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method CPRINT.");
        }
    }

    IPRINT() {
    }

    ENERGY() {
    }

    // eslint-disable-next-line no-unused-vars
    CODE(f) {
    } //f : ForgedItem
}

class No_Item extends Item {
    constructor() {
        super();
    }

    IPRINT() {
        return "No Item";
    }

    ENERGY() {
        return 0;
    }

    // eslint-disable-next-line no-unused-vars
    CODE(f) {
    }
}

class Acid extends Item {
    constructor() {
        super();
    }

    IPRINT() {
        return "Acid";
    }

    ENERGY() {
        return 48;
    }

    // eslint-disable-next-line no-unused-vars
    CODE(f) {
        return null
    }

}


class All_Meat extends Item {


    IPRINT() {
        return "Any Meat";
    }


    ENERGY() {
        return 16;
    }

    // eslint-disable-next-line no-unused-vars
    CODE(f) {
    }

}


class Angel_Feather extends Item {


    IPRINT() {
        return "Angel Feather";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.CHM);
        f.increase_stat(STAT.CHM);
        if (f.getSh() === 0 && f.getWi() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Fallen_Angel();
        }
        f.taint(ESSENCE.WISP);
    }

}


class Angry_Eye extends Item {


    IPRINT() {
        return "Angry Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setForce(f.perc125(f.getForce()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Rage();
        }
    }

}


class Applesocks extends Item {


    IPRINT() {
        return "Applesocks";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.SKL);
        f.increase_stat(STAT.SKL);
        if (f.ESSTOTAL() >= 5 && f.getEnergy() >= 16) {
            f.prehidden = new Nymph_Of_Orchards();
        }
    }

}


class Apricat extends Item {


    IPRINT() {
        return "Apricat";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.setForce(f.perc75(f.getForce()));
        f.setTech(f.perc125(f.getTech()));
    }

}


class Aroma_Oil extends Item {


    IPRINT() {
        return "Aroma Oil";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.HIDE()) {
            f.setStrike(f.perc150(f.getStrike()));
            f.setSlash(f.perc150(f.getSlash()));
            f.setThrust(f.perc150(f.getThrust()));
        }
        if (f.ESSTOTAL() >= 6 && f.getEnergy() >= 8) {
            f.prehidden = new Wisdom_Goddess();
        }
    }

}


class Ash extends Item {


    IPRINT() {
        return "Ash";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Volcano();
        }
    }

}


class Aura_Gold extends Item {

    IPRINT() {
        return "Aura Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.AURA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Aura();
        }
    }

}


class Aura_Silver extends Item {

    IPRINT() {
        return "Aura Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.AURA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Aura();
        }
    }

}


class Baked_Roach extends Item {


    IPRINT() {
        return "Baked Roach";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.ROBE()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Poison.value);
        }
    }

}


class Bellgrapes extends Item {


    IPRINT() {
        return "Bellgrapes";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.MAG);
        f.increase_stat(STAT.MAG);
    }

}


class Big_Seed extends Item {

    IPRINT() {
        return "Big Seed";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Blackened_Bat extends Item {


    IPRINT() {
        return "Blackened Bat";
    }


    ENERGY() {
        return 48;
    }


    CODE(f) {
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Darkness.value);
        }
        if (0 === f.getWi() && f.getSh() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Wings_Of_Darkness();
        }
    }

}


class Blank_Eye extends Item {


    IPRINT() {
        return "Blank Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setTech(f.perc125(f.getTech()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Jealousy();
        }
    }

}


class Boarmelon extends Item {


    IPRINT() {
        return "Boarmelon";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.PWR);
        f.increase_stat(STAT.PWR);
    }

}


class Bumpkin extends Item {


    IPRINT() {
        return "Bumpkin";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.LCK);
        f.stat_min(3, STAT.LCK);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Clown();
        }
    }

}


class Cabadillo extends Item {


    IPRINT() {
        return "Cabadillo";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.HAUBERK()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
            f.setMagic(f.perc50(f.getMagic()));
        }
    }

}


class Chaos_Crystal extends Item {


    IPRINT() {
        return "Chaos Crystal";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getEnergy() >= 16) {
            f.prehidden = new Ancient_Moon();
        }
    }

}


class Cherry_Bombs extends Item {


    IPRINT() {
        return "Cherry Bombs";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.RING()) {
            f.stat_limits(-3, 9, STAT.ALL);
        }
    }

}


class Citrisquid extends Item {


    IPRINT() {
        return "Citrisquid";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.setSharp(f.perc75(f.getSharp()));
        f.setHeavy(f.perc125(f.getHeavy()));
        f.setSlash(f.perc75(f.getSlash()));
        f.setStrike(f.perc125(f.getStrike()));
    }

}


class Clear_Feather extends Item {


    IPRINT() {
        return "Clear Feather";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setHeavy(f.perc50(f.getHeavy()));
        f.setTech(f.perc150(f.getTech()));
        if (0 === f.getGn() && f.getJi() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Lord_Of_Flies();
        }
    }

}


class Conchurnip extends Item {


    IPRINT() {
        return "Conchurnip";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.DEF);
        f.increase_stat(STAT.DEF);
        if (f.getEnergy() >= 16) {
            f.prehidden = new Spirit_Of_Ocean();
        }
    }

}


class Cornflower extends Item {


    IPRINT() {
        return "Cornflower";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.taint(ESSENCE.WISP);
    }

}


class Creepy_Eye extends Item {


    IPRINT() {
        return "Creepy Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setMagic(f.perc125(f.getMagic()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Lust();
        }
    }

}


class Crooked_Seed extends Item {

    IPRINT() {
        return "Crooked Seed";
    }

    ENERGY() {
        return 16;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Dangerous_Eye extends Item {


    IPRINT() {
        return "Dangerous Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setStrike(f.perc125(f.getStrike()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Greed();
        }
    }

}


class Dialaurel extends Item {


    IPRINT() {
        return "Dialaurel";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        if (0 === f.getSa() && f.getSh() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Metropolis();
        }
    }

}


class Diceberry extends Item {


    IPRINT() {
        return "Diceberry";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getJi() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Wind_God();
        }
        f.increase_stat(STAT.LCK);
    }

}


class Dragon_Blood extends Item {


    IPRINT() {
        return "Dragon Blood";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.increase_stat(STAT.ALL);
        if (f.getSa() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new God_Of_War();
        }
    }

}


class Dragons_Breath extends Item {


    IPRINT() {
        return "Dragon's Breath";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setForce(f.perc125(f.getForce()));
        f.setTech(f.perc125(f.getTech()));
        if (f.getWi() > 0 && f.getSa() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Man_Of_Valor();
        }
    }

}


class Dryad_Gold extends Item {

    IPRINT() {
        return "Dryad Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Dryad_Silver extends Item {

    IPRINT() {
        return "Dryad Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Ear_Of_Wheat extends Item {


    IPRINT() {
        return "Ear Of Wheat";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getDr() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Fertility_Goddess();
        }
    }

}


class Earth_Stone extends Item {

    IPRINT() {
        return "Earth Stone";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.GNOME);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Gnome();
        }
    }

}


class Electricity extends Item {


    IPRINT() {
        return "Electricity";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.getWi() >= 3 && f.getSa() >= 3 && f.getJi() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Thunder_God();
        }
    }

}


class Ether extends Item {


    IPRINT() {
        return "Ether";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getAu() >= 3 && f.getGn() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Blacksmith_God();
        }
        if (f.getAu() < 3 || f.getGn() < 3) {
            f.prehidden = new Spirit_Of_Mountain();
        }
    }

}


class Fire_Stone extends Item {

    IPRINT() {
        return "Fire Stone";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Sala();
        }
    }

}


class Fishy_Fruit extends Item {


    IPRINT() {
        return "Fishy Fruit";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.prehidden = new Spring();
        f.stat_limits(-1, 3, STAT.MAG);
        f.increase_stat(STAT.MAG);
        f.taint(ESSENCE.UNDINE);
    }

}


class Flaming_Quill extends Item {


    IPRINT() {
        return "Flaming Quill";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.PWR);
        f.stat_min(5, STAT.PWR);
        if (f.getSa() >= 3 && f.getJi() >= 3 && f.getEnergy() >= 4) {
            f.prehidden = new Phoenix();
        }
    }

}


class Flat_Seed extends Item {

    IPRINT() {
        return "Flat Seed";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Garlicrown extends Item {


    IPRINT() {
        return "Garlicrown";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new King();
        }
        f.unsticky();
        f.taint(ESSENCE.AURA);
    }

}


class Ghosts_Howl extends Item {


    IPRINT() {
        return "Ghost's Howl";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Sacrificed_Nymph();
        }
    }

}


class Giants_Horn extends Item {


    IPRINT() {
        return "Giant's Horn";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setSharp(f.perc50(f.getSharp()));
        f.setHeavy(f.perc150(f.getHeavy()));
        if (0 === f.getSa() && f.getGn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Leviathan();
        }
    }

}


class Glow_Crystal extends Item {


    IPRINT() {
        return "Glow Crystal";
    }


    ENERGY() {
        return 96;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Nymph_Of_Dawn();
        }
    }

}


class Gnome_Gold extends Item {

    IPRINT() {
        return "Gnome Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.GNOME);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Gnome();
        }
    }

}


class Gnome_Silver extends Item {

    IPRINT() {
        return "Gnome Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.GNOME);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Gnome();
        }
    }

}


class Gold_Clover extends Item {


    IPRINT() {
        return "Gold Clover";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.setHeavy(f.perc125(f.getHeavy()));
    }

}


class Grave_Dirt extends Item {


    IPRINT() {
        return "Grave Dirt";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dying_Earth();
        }
    }

}


class Greenball_Bun extends Item {


    IPRINT() {
        return "Greenball Bun";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.increase_stat(STAT.HP);
    }

}


class Hairball extends Item {


    IPRINT() {
        return "Hairball";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Spirit_Of_Housework();
        }
    }

}


class Healing_Claw extends Item {


    IPRINT() {
        return "Healing Claw";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.SHIELD()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Poison.value);
        }
        if (0 === f.getSa() && f.getWi() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Tower();
        }
    }

}


class Heart_Mint extends Item {


    IPRINT() {
        return "Heart Mint";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.CHM);
        f.increase_stat(STAT.CHM);
        if (f.getSh() >= 2 && f.getGn() >= 2 && f.getUn() >= 2
            && f.getEnergy() >= 8) {
            f.prehidden = new Mother_Of_Gods();
        }
    }

}


class Holy_Water extends Item {


    IPRINT() {
        return "Holy Water";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getEnergy() > 8) {
            f.prehidden = new Cleric();
        }
        f.unsticky();
    }

}


class Honey_Onion extends Item {


    IPRINT() {
        return "Honey Onion";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Princess();
        }
        f.taint(ESSENCE.DRYAD);
    }

}

class Jinn_Gold extends Item {

    IPRINT() {
        return "Jinn Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.JINN);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Jinn();
        }
    }

}


class Jinn_Silver extends Item {

    IPRINT() {
        return "Jinn Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.JINN);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Jinn();
        }
    }

}


class Knockout_Dust extends Item {


    IPRINT() {
        return "Knockout Dust";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Gluttony();
        }
    }

}


class Lilipods extends Item {


    IPRINT() {
        return "Lilipods";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.SPR);
        f.increase_stat(STAT.SPR);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Enticed_Nymph();
        }
    }

}


class Little_Eye extends Item {


    IPRINT() {
        return "Little Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setSlash(f.perc125(f.getSlash()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Pride();
        }
    }

}


class Long_Seed extends Item {

    IPRINT() {
        return "Long Seed";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Loquat_Shoes extends Item {


    IPRINT() {
        return "Loquat shoes";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.BOOTS() || f.SHOES()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
        }
        if (f.getEnergy() >= 16) {
            f.prehidden = new Spirit_Of_Shoes();
        }
    }

}


class Mangoelephant extends Item {


    IPRINT() {
        return "Mangoelephant";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.HP);
        f.increase_stat(STAT.HP);
    }

}


class Masked_Potato extends Item {


    IPRINT() {
        return "Masked Potato";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setSharp(f.perc75(f.getSharp()));
        f.setHeavy(f.perc125(f.getHeavy()));
    }

}


class Mercury extends Item {


    IPRINT() {
        return "Mercury";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Witch();
        }
    }

}


class Messy_Scroll extends Item {


    IPRINT() {
        return "Messy Scroll";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getJi() > 0 && f.getUn() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Sage();
        }
    }

}


class Mirror_Piece extends Item {


    IPRINT() {
        return "Mirror Piece";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.ESSTOTAL() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Mirrored_World();
        }
    }

}


class Moon_Crystal extends Item {


    IPRINT() {
        return "Moon Crystal";
    }


    ENERGY() {
        return 48;
    }


    CODE(f) {
        if (f.getSh() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Moon_Goddess();
        }
        f.taint(ESSENCE.SHADE);
    }

}


class Moss extends Item {


    IPRINT() {
        return "Moss";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.HELM()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Darkness.value);
        }
    }

}


class Moth_Wing extends Item {


    IPRINT() {
        return "Moth Wing";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setStrike(f.perc75(f.getStrike()));
        f.setSlash(f.perc75(f.getSlash()));
        f.setThrust(f.perc75(f.getThrust()));
        f.setMagic(f.perc150(f.getMagic()));
        if (f.getEnergy() >= 8) {
            f.prehidden = new Spirit_Of_Forest();
        }
    }

}


class Mush_In_A_Box extends Item {


    IPRINT() {
        return "Mush-In-A-Box";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.taint(ESSENCE.SHADE);
    }

}


class Needle extends Item {


    IPRINT() {
        return "Needle";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (0 === f.getSa() && f.getDr() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Bed_Of_Thorn();
        }
    }

}


class Needlettuce extends Item {


    IPRINT() {
        return "Needletuce";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
        f.setHeavy(f.perc75(f.getHeavy()));
        if (0 === f.getSa() && f.getDr() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Bed_Of_Thorn();
        }
    }

}


class Oblong_Seed extends Item {

    IPRINT() {
        return "Oblong Seed";
    }

    ENERGY() {
        return 16;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Orangeopus extends Item {


    IPRINT() {
        return "Orange'opus";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.DEF);
        f.increase_stat(STAT.DEF);
        if (0 === f.getSa() && f.getGn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Leviathan();
        }
    }

}


class Orcaplant extends Item {


    IPRINT() {
        return "Orcaplant";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getUn() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Ocean_God();
        }
    }

}


class Peach_Puppy extends Item {


    IPRINT() {
        return "Peach Puppy";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Wolf();
        }
        f.setSharp(f.perc125(f.getSharp()));
        f.setHeavy(f.perc75(f.getHeavy()));
    }

}


class Pear_Oheels extends Item {


    IPRINT() {
        return "Pear O'Heels";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.BOOTS() || f.SHOES()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
        }
        if (f.getEnergy() >= 16) {
            f.prehidden = new Spirit_Of_Shoes();
        }
    }

}


class Pine_Oclock extends Item {


    IPRINT() {
        return "Pine O'Clock";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setImmunity(IMMUNITY.Sleep.value);
        if (f.getSa() * f.getGn() * f.getJi() * f.getUn() > 0
            && f.getEnergy() >= 8) {
            f.prehidden = new Ragnarok();
        }
    }

}


class Poison_Fang extends Item {


    IPRINT() {
        return "Poison Fang";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.setForce(f.perc50(f.getForce()));
        f.setTech(f.perc150(f.getTech()));
        if (0 === f.getAu() && f.getDr() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Beast_Headed_God();
        }
    }

}


class Poison_Powder extends Item {


    IPRINT() {
        return "Poison Powder";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Rage();
        }
    }

}


class Raven_Feather extends Item {


    IPRINT() {
        return "Raven Feather";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.SPR);
        f.increase_stat(STAT.SPR);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Raven();
        }
        f.taint(ESSENCE.SHADE);
    }

}


class Rhinoloupe extends Item {


    IPRINT() {
        return "Rhinoloupe";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
        f.setImmunity(IMMUNITY.Poison.value);
    }

}


class Rocket_Papaya extends Item {


    IPRINT() {
        return "Rocket Papaya";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.CHM);
        f.increase_stat(STAT.CHM);
        if (0 === f.getJi() && f.getWi() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Tower();
        }
    }

}


class Round_Seed extends Item {

    IPRINT() {
        return "Round Seed";
    }

    ENERGY() {
        return 16;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Rust extends Item {


    IPRINT() {
        return "Rust";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Laziness();
        }
    }

}


class Sala_Gold extends Item {

    IPRINT() {
        return "Salamander Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Sala();
        }
    }

}


class Sala_Silver extends Item {

    IPRINT() {
        return "Salamander Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Sala();
        }
    }

}


class Scissors extends Item {


    IPRINT() {
        return "Scissors";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        f.setForce(f.perc150(f.getForce()));
        f.setTech(f.perc50(f.getTech()));
    }

}


class Shade_Gold extends Item {

    IPRINT() {
        return "Shade Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.SHADE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Shade();
        }
    }

}


class Shade_Silver extends Item {

    IPRINT() {
        return "Shade Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.SHADE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Shade();
        }
    }

}


class Sharp_Claw extends Item {


    IPRINT() {
        return "Sharp Claw";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setSharp(f.perc150(f.getSharp()));
        f.setHeavy(f.perc50(f.getHeavy()));
        if (0 === f.getUn() && f.getSa() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new God_Of_Destruction();
        }
    }

}


class Silly_Eye extends Item {


    IPRINT() {
        return "Silly Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setHeavy(f.perc125(f.getHeavy()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Gluttony();
        }
    }

}


class Sleepy_Eye extends Item {


    IPRINT() {
        return "Sleepy Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setThrust(f.perc125(f.getThrust()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Laziness();
        }
    }

}


class Sleepy_Powder extends Item {


    IPRINT() {
        return "Sleepy Powder";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Jealousy();
        }
    }

}


class Small_Seed extends Item {

    IPRINT() {
        return "Small Seed";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}


class Spade_Basil extends Item {


    IPRINT() {
        return "Spade Basil";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
        if (f.getWi() >= 3 && f.ESSTOTAL() >= 6 && f.getEnergy() >= 8) {
            f.prehidden = new Ruler_Of_The_Sky();
        }
    }

}


class Spiny_Carrot extends Item {


    IPRINT() {
        return "Spiny Carrot";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
        f.setHeavy(f.perc75(f.getHeavy()));
        f.taint(ESSENCE.UNDINE);
    }

}


class Spiny_Seed extends Item {

    IPRINT() {
        return "Spiny Seed";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getDr() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Yggdrasil();
        }
        f.taint(ESSENCE.DRYAD);
    }

}


class Springanana extends Item {


    IPRINT() {
        return "Springanana";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Heavens_Scale();
        }
    }

}


class Squalphin extends Item {


    IPRINT() {
        return "Squalphin";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getUn() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Ocean_God();
        }
        f.taint(ESSENCE.UNDINE);
    }

}


class Stinky_Breath extends Item {


    IPRINT() {
        return "Stinky Breath";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        f.setImmunity(IMMUNITY.Poison.value
            | IMMUNITY.Confusion.value);
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Lust();
        }
    }

}


class Sulpher extends Item {


    IPRINT() {
        return "Sulpher";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Sorcerer();
        }
    }

}


class Sun_Crystal extends Item {


    IPRINT() {
        return "Sun Crystal";
    }


    ENERGY() {
        return 48;
    }


    CODE(f) {
        if (f.getWi() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Sun_God();
        }
        f.taint(ESSENCE.WISP);
    }

}


class Sweet_Moai extends Item {


    IPRINT() {
        return "Sweet Moai";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.HELM()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
        } else if (f.HAT()) {
            f.setStrike(f.perc150(f.getStrike()));
            f.setSlash(f.perc150(f.getSlash()));
            f.setThrust(f.perc150(f.getThrust()));
        }
    }

}


class Tako_Bug extends Item {


    IPRINT() {
        return "Tako Bug";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.increase_stat(STAT.CHM);
    }

}


class Toadstoolshed extends Item {


    IPRINT() {
        return "Toadstoolshed";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.increase_stat(STAT.ALL);
        f.taint(ESSENCE.SHADE);
    }

}


class Undine_Gold extends Item {

    IPRINT() {
        return "Undine Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

}


class Undine_Silver extends Item {

    IPRINT() {
        return "Undine Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

}


class Vampire_Fang extends Item {


    IPRINT() {
        return "Vampire Fang";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_limits(-3, 5, STAT.SPR);
        f.increase_stat(STAT.CHM);
        f.increase_stat(STAT.SPR);
        if (0 === f.getJi() && f.getUn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Witch_Of_Moon();
        }
    }

}


class Virgins_Sigh extends Item {


    IPRINT() {
        return "Virgin's Sigh";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getSh() >= 3 && f.getDr() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Goddess_Of_Love();
        }
    }

}


class Wad_Of_Wool extends Item {


    IPRINT() {
        return "Wad Of Wool";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getSh() > 0 && f.getDr() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Wanderer();
        }
    }

}


class Water_Stone extends Item {

    IPRINT() {
        return "Water Stone";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

}


class Whalamato extends Item {


    IPRINT() {
        return "Whalamato";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.HP);
        f.stat_min(10, STAT.HP);
        if (f.getGn() >= 3 && f.getUn() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Unicorn();
        }
    }

}


class White_Feather extends Item {


    IPRINT() {
        return "White Feather";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_min(5, STAT.SKL);
        if (f.getWi() > 0 && f.ESSTOTAL() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Nymph_Of_The_Sky();
        }
    }

}


class Wicked_Eye extends Item {


    IPRINT() {
        return "Wicked Eye";
    }


    ENERGY() {
        return 48;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
    }

}


class Wind_Stone extends Item {

    IPRINT() {
        return "Wind Stone";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.JINN);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Jinn();
        }
    }

}


class Wisp_Gold extends Item {

    IPRINT() {
        return "Wisp Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.WISP);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Wisp();
        }
    }

}


class Wisp_Silver extends Item {

    IPRINT() {
        return "Wisp Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.WISP);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Wisp();
        }
    }

}


class Zombie_Claw extends Item {


    IPRINT() {
        return "Zombie Claw";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis.value);
        }
    }

}


export {
    Item,
    Acid,
    All_Meat,
    Angel_Feather,
    Angry_Eye,
    Applesocks,
    Apricat,
    Aroma_Oil,
    Ash,
    Aura_Gold,
    Aura_Silver,
    Baked_Roach,
    Bellgrapes,
    Big_Seed,
    Blackened_Bat,
    Blank_Eye,
    Boarmelon,
    Bumpkin,
    Cabadillo,
    Chaos_Crystal,
    Cherry_Bombs,
    Citrisquid,
    Clear_Feather,
    Conchurnip,
    Cornflower,
    Creepy_Eye,
    Crooked_Seed,
    Dangerous_Eye,
    Dialaurel,
    Diceberry,
    Dragon_Blood,
    Dragons_Breath,
    Dryad_Gold,
    Dryad_Silver,
    Ear_Of_Wheat,
    Earth_Stone,
    Electricity,
    Ether,
    Fire_Stone,
    Fishy_Fruit,
    Flaming_Quill,
    Flat_Seed,
    Garlicrown,
    Ghosts_Howl,
    Giants_Horn,
    Glow_Crystal,
    Gnome_Gold,
    Gnome_Silver,
    Gold_Clover,
    Grave_Dirt,
    Greenball_Bun,
    Hairball,
    Healing_Claw,
    Heart_Mint,
    Holy_Water,
    Honey_Onion,
    Jinn_Gold,
    Jinn_Silver,
    Knockout_Dust,
    Lilipods,
    Little_Eye,
    Long_Seed,
    Loquat_Shoes,
    Mangoelephant,
    Masked_Potato,
    Mercury,
    Messy_Scroll,
    Mirror_Piece,
    Moon_Crystal,
    Moss,
    Moth_Wing,
    Mush_In_A_Box,
    Needle,
    Needlettuce,
    Oblong_Seed,
    Orangeopus,
    Orcaplant,
    Peach_Puppy,
    Pear_Oheels,
    Pine_Oclock,
    Poison_Fang,
    Poison_Powder,
    Raven_Feather,
    Rhinoloupe,
    Rocket_Papaya,
    Round_Seed,
    Rust,
    Sala_Gold,
    Sala_Silver,
    Scissors,
    Shade_Gold,
    Shade_Silver,
    Sharp_Claw,
    Silly_Eye,
    Sleepy_Eye,
    Sleepy_Powder,
    Small_Seed,
    Spade_Basil,
    Spiny_Carrot,
    Spiny_Seed,
    Springanana,
    Squalphin,
    Stinky_Breath,
    Sulpher,
    Sun_Crystal,
    Sweet_Moai,
    Tako_Bug,
    Toadstoolshed,
    Undine_Gold,
    Undine_Silver,
    Vampire_Fang,
    Virgins_Sigh,
    Wad_Of_Wool,
    Water_Stone,
    Whalamato,
    White_Feather,
    Wicked_Eye,
    Wind_Stone,
    Wisp_Gold,
    Wisp_Silver,
    Zombie_Claw,
    No_Item
}
