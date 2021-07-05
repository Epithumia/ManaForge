import {ESSENCE, PLUNGE1, PLUNGE2, PLUNGE3, SPECIAL, STAT, STICKY_F, WORLD_CARD} from "@/forge/enums";
import {
    Dryad,
    No_Card,
    Phoenix, Pixie_Of_Gluttony, Pixie_Of_Greed,
    Pixie_Of_Jealousy,
    Pixie_Of_Laziness,
    Pixie_Of_Lust, Pixie_Of_Pride, Pixie_Of_Rage,
    Raven,
    Witch,
    Wolf
} from "@/forge/cards";
import {No_Item} from "@/forge/items";
import {equip_props, if_array, mat_props, power2} from "@/forge/lists";

class ForgedItem {

    constructor(seq) {
        if (seq.length >= 2) {
            this.set_equipment(seq[0]);
            this.set_material(seq[1]);
            this.init_essences();
            this.init_cards();
            this.init_stats();
            this.init_item();
            this.init_special();
            this.init_stat_limits();
            this.sub_init_cards();
            this.material_init();
        }
        if (seq.length > 2) {
            for (let i = 2; i < seq.length; i++) {
                if (seq[i] > 0) {
                    this.set_item(seq[i]);
                    this.init_stat_limits();
                    this.sub_init_cards();
                    this.material_init();
                    this.set_active_world_card();
                    this.item_energy();
                    this.material_code();
                    this.item_code();
                    this.push_cards();
                    this.activate_cards();
                    this.calculate_stats()
                    this.increase_essences();
                    this.calculate_stats();
                }
            }
        }
    }

    equip // Forged item type
    energy; // Energy currently on the item

    // Element levels
    wi;
    sh;
    dr;
    au;
    sa;
    gn;
    ji;
    un;

    // Resists from material used
    wiR;
    shR;
    drR;
    auR;
    saR;
    gnR;
    jiR;
    unR;

    // Taint points
    drLR;
    auLR;
    saLR;
    gnLR;
    jiLR;
    unLR;

    // Current values
    pwr;
    skl;
    def;
    mag;
    hp;
    spr;
    chm;
    lck;

    // High values
    hpwr;
    hskl;
    hdef;
    hmag;
    hhp;
    hspr;
    hchm;
    hlck;

    // Low values
    lpwr;
    lskl;
    ldef;
    lmag;
    lhp;
    lspr;
    lchm;
    llck;

    // Min values
    mpwr;
    mskl;
    mdef;
    mmag;
    mhp;
    mspr;
    mchm;
    mlck;

    /**
     * @type PLUNGE1
     */
    plunge1 // Slot 1 plunge attack
    /**
     * @type PLUNGE2
     */
    plunge2 // Slot 1 plunge attack
    /**
     * @type PLUNGE3
     */
    plunge3 // Slot 1 plunge attack
    /**
     * @type SPECIAL
     */
    special // Special effect

    immunity // Status immunities

    sharp
    heavy
    force
    tech
    strike
    slash
    thrust
    magic // Attack/def characteristics

    /**
     * @type STICKY_F
     */
    sticky

    /**
     *
     * @type WORLD_CARD
     */
    awc = null

    /**
     * @type Card
     */
    prehidden = null
    /**
     * @type Card
     */
    hidden = null
    /**
     * @type Card
     */
    first = null
    /**
     * @type Card
     */
    second = null
    /**
     * @type Card
     */
    third = null
    /**
     * @type Card
     */
    leaving = null
    /**
     * @type Item | No_Item
     */
    item = null

    price

    material // What the weapon is made of


    // INITS

    init_item() {
        this.item = new No_Item();
    }

    init_cards() {
        this.hidden = new No_Card();
        this.first = new No_Card();
        this.second = new No_Card();
        this.third = new No_Card();
    }

    sub_init_cards() {
        this.prehidden = new No_Card();
        this.leaving = new No_Card();
        this.sticky = STICKY_F.STICKY;
    }

    init_essences() {
        this.wi = 0;
        this.sh = 0;
        this.dr = 0;
        this.au = 0;
        this.sa = 0;
        this.gn = 0;
        this.ji = 0;
        this.un = 0;
        this.drLR = 0;
        this.auLR = 0;
        this.saLR = 0;
        this.gnLR = 0;
        this.jiLR = 0;
        this.unLR = 0;
        if (this.AEROLITE()) this.sa = 4;
    }

    init_special() {
        this.setSpecial(SPECIAL.No_Effect);
        this.setImmunity(0);
        this.setPlunge1(PLUNGE1.Thrust);
        this.setPlunge2(PLUNGE2.Uppercut);
        this.setPlunge3(PLUNGE3.Jump);
        if (this.BOW()) {
            this.setPlunge1(PLUNGE1.Shot);
            this.setPlunge2(PLUNGE2.Double_Shot);
        }
    }

    init_stats() {
        this.setPwr(0);
        this.setSkl(0);
        this.setDef(0);
        this.setMag(0);
        this.setHp(0);
        this.setSpr(0);
        this.setChm(0);
        this.setLck(0);
    }

    init_stat_limits() {
        this.lpwr = -1;
        this.lskl = -1;
        this.ldef = -1;
        this.lmag = -1;
        this.lhp = -1;
        this.lspr = -1;
        this.lchm = -1;
        this.llck = -1;
        this.hpwr = 1;
        this.hskl = 1;
        this.hdef = 1;
        this.hmag = 1;
        this.hhp = 1;
        this.hspr = 1;
        this.hchm = 1;
        this.hlck = 1;
        this.mpwr = -10;
        this.mskl = -10;
        this.mdef = -10;
        this.mmag = -10;
        this.mhp = -10;
        this.mspr = -10;
        this.mchm = -10;
        this.mlck = -10;
    }

    material_init() {
        this.sharp = mat_props[this.material][1];
        this.heavy = mat_props[this.material][2];
        this.force = mat_props[this.material][3];
        this.tech = mat_props[this.material][4];
        this.strike = mat_props[this.material][5];
        this.slash = mat_props[this.material][6];
        this.thrust = mat_props[this.material][7];
        this.magic = mat_props[this.material][8];
        this.setWiR(mat_props[this.material][9]);
        this.setShR(mat_props[this.material][10]);
        this.setDrR(mat_props[this.material][11]);
        this.setAuR(mat_props[this.material][12]);
        this.setSaR(mat_props[this.material][13]);
        this.setGnR(mat_props[this.material][14]);
        this.setJiR(mat_props[this.material][15]);
        this.setUnR(mat_props[this.material][16]);

    }

    check_type_effects() {
        if (this.BOW()
            && !(this.hidden instanceof Witch || this.hidden instanceof Raven || this.hidden instanceof Wolf)
            && (this.first instanceof Witch || this.second instanceof Witch || this.third instanceof Witch)
            && (this.first instanceof Raven || this.second instanceof Raven || this.third instanceof Raven)
            && (this.first instanceof Wolf || this.second instanceof Wolf || this.third instanceof Wolf)) {
            this.setPlunge1(PLUNGE1.Magical_Shot);
        }
        if ((this.RING() || this.PENDANT()) && this.getSpecial() === SPECIAL.Auto_Revive) {
            if (this.hidden instanceof Phoenix
                || (!(this.first instanceof Phoenix)
                    && !(this.second instanceof Phoenix) && !(this.third instanceof Phoenix))) {
                this.setSpecial(SPECIAL.No_Effect);
            }
        }
    }

    // Getters
    /**
     * @returns int
     */
    getEquip() {
        return this.equip;
    }

    getDrR() {
        return this.drR;
    }

    getAuR() {
        return this.auR;
    }

    getForce() {
        return this.force;
    }

    getMagic() {
        return this.magic;
    }

    getSharp() {
        return this.sharp;
    }

    getHeavy() {
        return this.heavy;
    }

    getStrike() {
        return this.strike;
    }

    getSlash() {
        return this.slash;
    }

    getThrust() {
        return this.thrust;
    }

    getGnR() {
        return this.gnR;
    }

    getJiR() {
        return this.jiR;
    }

    getSaR() {
        return this.saR;
    }

    getShR() {
        return this.shR;
    }

    getUnR() {
        return this.unR;
    }

    getWiR() {
        return this.wiR;
    }

    getWi() {
        return this.wi;
    }

    getSh() {
        return this.sh;
    }

    getDr() {
        return this.dr;
    }

    getAu() {
        return this.au;
    }

    getSa() {
        return this.sa;
    }

    getGn() {
        return this.gn;
    }

    getJi() {
        return this.ji;
    }

    getUn() {
        return this.un;
    }

    getPwr() {
        return this.pwr;
    }

    getMag() {
        return this.mag;
    }

    getSkl() {
        return this.skl;
    }

    getDef() {
        return this.def;
    }

    getHp() {
        return this.hp;
    }

    getSpr() {
        return this.spr;
    }

    getChm() {
        return this.chm;
    }

    getLck() {
        return this.lck;
    }

    /**
     * @return {SPECIAL}
     */
    getSpecial() {
        return this.special;
    }

    getImmunity() {
        return this.immunity;
    }

    getTech() {
        return this.tech;
    }

    getEnergy() {
        return this.energy;
    }

    getPlunge1() {
        return this.plunge1;
    }

    getPlunge2() {
        return this.plunge2;
    }

    getPlunge3() {
        return this.plunge3;
    }

    // noinspection JSUnusedGlobalSymbols
    getEquipProps() { // Convenience function in preparation for proper logging
        let props = []
        for (let i=0;i<4;i++){
            props.push(equip_props[this.getEquip()][i])
        }
        return props;
    }

    getAttack(){
        const esgc = mat_props[this.material][0] + this.ESSTOTAL()
        const denom = mat_props[this.material][0] * 128
        let atk = 0
        if (this.WEAPON()) {
            atk = (this.sharp * equip_props[this.getEquip()][0]
                + this.heavy * equip_props[this.getEquip()][1]
                + this.force * equip_props[this.getEquip()][2]
                + this.tech * equip_props[this.getEquip()][3])
                * esgc / denom;
            atk = Math.floor(atk)
        }
        return atk;
    }

    getDefenses(){
        let def = []
        if (this.ARMOR()){
            def.push(Math.trunc(this.strike * equip_props[this.getEquip()][0] / 64))
            def.push(Math.trunc(this.slash * equip_props[this.getEquip()][1] / 64))
            def.push(Math.trunc(this.thrust * equip_props[this.getEquip()][2] / 64))
            def.push(Math.trunc(this.magic * equip_props[this.getEquip()][3] / 64))
        }
        return def
    }

    /**
     * @typedef IMMUNITY
     * @type {object}
     * @property {string} text - name
     * @property {string} code - short name
     * @property {int} value - ID
     */
    /**
     * @param imm : IMMUNITY
     * @return {String}
     */
    getShortImmunity(imm) {
        if (!this.ARMOR()) return ''

        if ((this.getImmunity() & imm.value) > 0) return imm.code
        return ''
    }

    getPrice() {
        return Math.trunc(equip_props[this.getEquip()][5] * mat_props[this.material][17] / 150) + this.card_price()
    }

    card_price() {
        let price = 0
        price += this.hidden.PRICE(price)
        price += this.first.PRICE(price)
        price += this.second.PRICE(price)
        price += this.third.PRICE(price)

        this.price = price
        return price
    }

    /**
     * @param ess : ESSENCE
     * @return {String}
     */
    getMarker(ess) {
        const level = equip_props[this.getEquip()][4];
        if (this.WEAPON()) {
            switch (ess) {
                case ESSENCE.WISP:
                    if (this.wi >= level) return "wi"
                    return ""
                case ESSENCE.SHADE:
                    if (this.sh >= level) return "sh"
                    return ""
                case ESSENCE.DRYAD:
                    if (this.dr >= level) return "dr"
                    return ""
                case ESSENCE.AURA:
                    if (this.au >= level) return "au"
                    return ""
                case ESSENCE.SALA:
                    if (this.sa >= level) return "sa"
                    return ""
                case ESSENCE.GNOME:
                    if (this.gn >= level) return "gn"
                    return ""
                case ESSENCE.JINN:
                    if (this.ji >= level) return "ji"
                    return ""
                case ESSENCE.UNDINE:
                    if (this.un >= level) return "un"
                    return ""
            }
        } else {
            switch (ess) {
                case ESSENCE.WISP:
                    if (this.sh >= level) return "wi"
                    return ""
                case ESSENCE.SHADE:
                    if (this.wi >= level) return "sh"
                    return ""
                case ESSENCE.DRYAD:
                    if (this.au >= level) return "dr"
                    return ""
                case ESSENCE.AURA:
                    if (this.dr >= level) return "au"
                    return ""
                case ESSENCE.SALA:
                    if (this.gn >= level) return "sa"
                    return ""
                case ESSENCE.GNOME:
                    if (this.ji >= level) return "gn"
                    return ""
                case ESSENCE.JINN:
                    if (this.un >= level) return "ji"
                    return ""
                case ESSENCE.UNDINE:
                    if (this.sa >= level) return "un"
                    return ""
            }
        }
    }

    // Setters

    /**
     * @param m : int
     */
    set_material(m) {
        this.material = m;
    }

    set_item(item_code) {
        this.item = if_array[item_code];
    }

    set_active_world_card() {
        this.awc = WORLD_CARD.NONE;
        this.third.WORLD(this);
        this.second.WORLD(this);
        this.first.WORLD(this);
        this.hidden.WORLD(this);
    }

    /**
     * @typedef PLUNGE1
     * @type {object}
     * @property {string} text - name
     * @property {int} value - ID
     */
    /**
     * @param plunge1 : PLUNGE1
     * @constructor
     */
    setPlunge1(plunge1) {
        this.plunge1 = plunge1;
    }

    /**
     * @typedef PLUNGE2
     * @type {object}
     * @property {string} text - name
     * @property {int} value - ID
     */
    /**
     * @param plunge2 : PLUNGE2
     * @constructor
     */
    setPlunge2(plunge2) {
        this.plunge2 = plunge2;
    }

    /**
     * @typedef PLUNGE3
     * @type {object}
     * @property {string} text - name
     * @property {int} value - ID
     */
    /**
     * @param plunge3 : PLUNGE3
     * @constructor
     */
    setPlunge3(plunge3) {
        this.plunge3 = plunge3;
    }

    /**
     * @param drR : int
     */
    setDrR(drR) {
        this.drR = drR;
    }

    /**
     * @param auR : int
     */
    setAuR(auR) {
        this.auR = auR;
    }

    setMagic(magic) {
        this.magic = magic;
    }

    setForce(force) {
        this.force = force;
    }

    setSharp(sharp) {
        this.sharp = sharp;
    }

    setHeavy(heavy) {
        this.heavy = heavy;
    }

    setStrike(strike) {
        this.strike = strike;
    }

    setSlash(slash) {
        this.slash = slash;
    }

    setThrust(thrust) {
        this.thrust = thrust;
    }

    setGnR(gnR) {
        this.gnR = Math.trunc(gnR);
    }

    setJiR(jiR) {
        this.jiR = jiR;
    }

    setSaR(saR) {
        this.saR = Math.trunc(saR);
    }

    setShR(shR) {
        this.shR = shR;
    }

    setUnR(unR) {
        this.unR = unR;
    }

    setWiR(wiR) {
        this.wiR = wiR;
    }

    setSa(sa) {
        this.sa = sa;
    }

    /* Unused
    setWi(wi) {
        this.wi = wi;
    }

    setSh(sh) {
        this.sh = sh;
    }

    setDr(dr) {
        this.dr = dr;
    }

    setAu(au) {
        this.au = au;
    }



    setGn(gn) {
        this.gn = gn;
    }

    setJi(ji) {
        this.ji = ji;
    }*/

    setPwr(pwr) {
        this.pwr = pwr;
    }

    setMag(mag) {
        this.mag = mag;
    }

    setSkl(skl) {
        this.skl = skl;
    }

    setDef(def) {
        this.def = def;
    }


    setHp(hp) {
        this.hp = hp;
    }

    setSpr(spr) {
        this.spr = spr;
    }

    setChm(chm) {
        this.chm = chm;
    }

    setLck(lck) {
        this.lck = lck;
    }

    setUn(un) {
        this.un = un;
    }

    setTech(tech) {
        this.tech = tech;
    }

    unsticky() {
        this.sticky = STICKY_F.UNSTICKY;
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    set_equipment(e) {
        this.setEquip(e);
    }

    setEquip(equip) {
        this.equip = equip;
    }

    /**
     * @typedef SPECIAL
     * @type {object}
     * @property {string} text - name
     * @property {int} value - ID
     */

    /**
     * @param special : SPECIAL
     */
    setSpecial(special) {
        this.special = special;
    }

    setImmunity(immunity) {
        this.immunity = immunity;
    }

    material_code() {
        if (this.WOOD()) {
            this.taint(ESSENCE.DRYAD);
            if (this.energy >= 8) {
                this.prehidden = new Dryad();
            }
        } else if (this.AEROLITE()) {
            this.decrease(ESSENCE.SALA);
        }
    }

    item_code() {
        this.item.CODE(this);
    }

    item_energy() {
        this.setEnergy(this.item.ENERGY());
    }

    push_cards() {
        if (!(this.prehidden instanceof No_Card)) {
            if (this.hidden instanceof No_Card) {
                this.hidden = this.prehidden;
            } else if (this.first instanceof No_Card) {
                this.first = this.hidden;
                this.hidden = this.prehidden;
            } else if (this.second instanceof No_Card) {
                this.second = this.first;
                this.first = this.hidden;
                this.hidden = this.prehidden;
            } else if (this.third instanceof No_Card) {
                this.third = this.second;
                this.second = this.first;
                this.first = this.hidden;
                this.hidden = this.prehidden;
            } else if (STICKY_F.STICKY === this.sticky) {
                if (this.PIXIE(this.third)) {
                    if (this.PIXIE(this.second)) {
                        if (this.PIXIE(this.first)) {
                            this.leaving = this.hidden;
                            this.hidden = this.prehidden;
                        } else {
                            this.leaving = this.first;
                            this.first = this.hidden;
                            this.hidden = this.prehidden;
                        }
                    } else {
                        this.leaving = this.second;
                        this.second = this.first;
                        this.first = this.hidden;
                        this.hidden = this.prehidden;
                    }
                } else {
                    this.leaving = this.third;
                    this.third = this.second;
                    this.second = this.first;
                    this.first = this.hidden;
                    this.hidden = this.prehidden;
                }
            } else {
                this.leaving = this.third;
                this.third = this.second;
                this.second = this.first;
                this.first = this.hidden;
                this.hidden = this.prehidden;
            }
        }
    }

    /**
     * @param pos : Card
     * @return {boolean}
     * @constructor
     */
    PIXIE(pos) {
        return (pos instanceof Pixie_Of_Jealousy
            || pos instanceof Pixie_Of_Laziness
            || pos instanceof Pixie_Of_Lust
            || pos instanceof Pixie_Of_Pride
            || pos instanceof Pixie_Of_Gluttony
            || pos instanceof Pixie_Of_Rage || pos instanceof Pixie_Of_Greed);
    }

    activate_cards() {
        this.leaving.LEAVING(this);
        this.third.THIRD(this);
        this.second.SECOND(this);
        this.first.FIRST(this);
        this.hidden.HIDDEN(this);
    }

    // Temp

    // Material functions

    /**
     * @return {boolean}
     * @constructor
     */
    WOOD() {
        return ((this.material > 11) && (this.material < 20));
    }

    /**
     * @return {boolean}
     * @constructor
     */
    AEROLITE() {
        return ((this.material > 39) && (this.material < 48));
    }

    /**
     * @return {boolean}
     * @constructor
     */
    ESSTOTAL() {
        return (this.wi + this.sh + this.dr + this.au + this.sa + this.gn + this.ji + this.un);
    }

    /**
     * @return {boolean}
     * @constructor
     */
    HIDE() {
        return ((this.material > 23) && (this.material < 28));
    }

    // Type functions

    /**
     * @returns {boolean}
     * @constructor
     */
    KNIFE() {
        return (1 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    SWORD() {
        return (2 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    AXE() {
        return (3 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    THSWORD() {
        return (4 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    THAXE() {
        return (5 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    HAMMER() {
        return (6 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    SPEAR() {
        return (7 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    STAFF() {
        return (8 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    GLOVE() {
        return (9 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    FLAIL() {
        return (10 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    BOW() {
        return (11 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    SHIELD() {
        return (12 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    HELM() {
        return (13 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    HAT() {
        return (14 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    HAUBERK() {
        return (15 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    ROBE() {
        return (16 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    RING() {
        return (18 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    BOOTS() {
        return (19 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    SHOES() {
        return (20 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    MANTLE() {
        return (22 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    PENDANT() {
        return (23 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    WEAPON() {
        return (this.getEquip() < 12);
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    ARMOR() {
        return (this.getEquip() > 11);
    }

    // Utilities
    /**
     * @param num : int
     * @returns {number}
     */
    perc150(num) {
        num = Math.trunc(num * 3 / 2);
        if (num > 255) {
            num = 255;
        }
        return num;
    }

    /**
     * @param num : int
     * @returns {number}
     */
    perc125(num) {
        num = Math.trunc(num * 5 / 4);
        if (num > 255) {
            num = 255;
        }
        return num;
    }

    /**
     * @param num : int
     * @returns {number}
     */
    perc75(num) {
        num = Math.trunc(num / 4 * 3);
        return num;
    }

    /**
     * @param num : int
     * @returns {number}
     */
    perc50(num) {
        num = Math.trunc(num / 2);
        return num;
    }

    find_and_run_s13(c) {
        if (this.third instanceof c) {
            this.third.THIRD(this);
        } else if (this.second instanceof c) {
            this.second.SECOND(this);
        } else if (this.first instanceof c) {
            this.first.FIRST(this);
        } else {
            console.log("error with " + c.name + "\n");
        }
    }

    // Stat functions
    /**
     * @param min : int
     * @param stat : STAT
     */
    stat_min(min, stat) {
        switch (stat) {
            case STAT.PWR:
                this.mpwr = min;
                break;
            case STAT.SKL:
                this.mskl = min;
                break;
            case STAT.DEF:
                this.mdef = min;
                break;
            case STAT.MAG:
                this.mmag = min;
                break;
            case STAT.HP:
                this.mhp = min;
                break;
            case STAT.SPR:
                this.mspr = min;
                break;
            case STAT.CHM:
                this.mchm = min;
                break;
            case STAT.LCK:
                this.mlck = min;
                break;
            case STAT.ALL:
                this.stat_min(min, STAT.PWR);
                this.stat_min(min, STAT.SKL);
                this.stat_min(min, STAT.DEF);
                this.stat_min(min, STAT.MAG);
                this.stat_min(min, STAT.HP);
                this.stat_min(min, STAT.SPR);
                this.stat_min(min, STAT.CHM);
                this.stat_min(min, STAT.LCK);
                break;
        }
    }

    /**
     * @param low : int
     * @param high : int
     * @param stat : STAT
     */
    stat_limits(low, high, stat) {
        switch (stat) {
            case STAT.PWR:
                if (low < this.lpwr) {
                    this.lpwr = low;
                }
                if (high > this.hpwr) {
                    this.hpwr = high;
                }
                break;
            case STAT.SKL:
                if (low < this.lskl) {
                    this.lskl = low;
                }
                if (high > this.hskl) {
                    this.hskl = high;
                }
                break;
            case STAT.DEF:
                if (low < this.ldef) {
                    this.ldef = low;
                }
                if (high > this.hdef) {
                    this.hdef = high;
                }
                break;
            case STAT.MAG:
                if (low < this.lmag) {
                    this.lmag = low;
                }
                if (high > this.hmag) {
                    this.hmag = high;
                }
                break;
            case STAT.HP:
                if (low < this.lhp) {
                    this.lhp = low;
                }
                if (high > this.hhp) {
                    this.hhp = high;
                }
                break;
            case STAT.SPR:
                if (low < this.lspr) {
                    this.lspr = low;
                }
                if (high > this.hspr) {
                    this.hspr = high;
                }
                break;
            case STAT.CHM:
                if (low < this.lchm) {
                    this.lchm = low;
                }
                if (high > this.hchm) {
                    this.hchm = high;
                }
                break;
            case STAT.LCK:
                if (low < this.llck) {
                    this.llck = low;
                }
                if (high > this.hlck) {
                    this.hlck = high;
                }
                break;
            case STAT.ALL:
                this.stat_limits(low, high, STAT.PWR);
                this.stat_limits(low, high, STAT.SKL);
                this.stat_limits(low, high, STAT.DEF);
                this.stat_limits(low, high, STAT.MAG);
                this.stat_limits(low, high, STAT.HP);
                this.stat_limits(low, high, STAT.SPR);
                this.stat_limits(low, high, STAT.CHM);
                this.stat_limits(low, high, STAT.LCK);
                break;
        }
    }

    /**
     * @param value : int
     * @return {number}
     */
    up_value(value) {
        switch (value) {
            case -10:
                return -5;
            case -5:
                return -3;
            case -3:
                return -1;
            case -1:
                return 0;
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 3:
                return 4;
            case 4:
                return 5;
            case 5:
                return 7;
            case 7:
                return 9;
            case 9:
                return 10;
            case 10:
                return 12;
            case 12:
                return 15;
            case 15:
                return 20;
            case 20:
                return 20;
            default:
                console.log(String.format("stat error: %d found\n", value));
                return 0;
        }
    }

    /**
     *
     * @param value : int
     * @return {number}
     */
    down_value(value) {
        switch (value) {
            case -10:
                return -10;
            case -5:
                return -10;
            case -3:
                return -5;
            case -1:
                return -3;
            case 0:
                return -1;
            case 1:
                return 0;
            case 2:
                return 1;
            case 3:
                return 2;
            case 4:
                return 3;
            case 5:
                return 4;
            case 7:
                return 5;
            case 9:
                return 7;
            case 10:
                return 9;
            case 12:
                return 10;
            case 15:
                return 12;
            case 20:
                return 15;
            default:
                console.log(String.format("stat error: %d found\n", value));
                return 0;
        }
    }

    /**
     * @param stat : STAT
     */
    increase_stat(stat) {
        switch (stat) {
            case STAT.PWR:
                this.setPwr(this.up_value(this.getPwr()));
                break;
            case STAT.SKL:
                this.setSkl(this.up_value(this.getSkl()));
                break;
            case STAT.DEF:
                this.setDef(this.up_value(this.getDef()));
                break;
            case STAT.MAG:
                this.setMag(this.up_value(this.getMag()));
                break;
            case STAT.HP:
                this.setHp(this.up_value(this.getHp()));
                break;
            case STAT.SPR:
                this.setSpr(this.up_value(this.getSpr()));
                break;
            case STAT.CHM:
                this.setChm(this.up_value(this.getChm()));
                break;
            case STAT.LCK:
                this.setLck(this.up_value(this.getLck()));
                break;
            case STAT.ALL:
                this.increase_stat(STAT.PWR);
                this.increase_stat(STAT.SKL);
                this.increase_stat(STAT.DEF);
                this.increase_stat(STAT.MAG);
                this.increase_stat(STAT.HP);
                this.increase_stat(STAT.SPR);
                this.increase_stat(STAT.CHM);
                this.increase_stat(STAT.LCK);
                break;
        }
    }

    /**
     * @param stat : STAT
     */
    decrease_stat(stat) {
        switch (stat) {
            case STAT.PWR:
                this.setPwr(this.down_value(this.getPwr()));
                break;
            case STAT.SKL:
                this.setSkl(this.down_value(this.getSkl()));
                break;
            case STAT.DEF:
                this.setDef(this.down_value(this.getDef()));
                break;
            case STAT.MAG:
                this.setMag(this.down_value(this.getMag()));
                break;
            case STAT.HP:
                this.setHp(this.down_value(this.getHp()));
                break;
            case STAT.SPR:
                this.setSpr(this.down_value(this.getSpr()));
                break;
            case STAT.CHM:
                this.setChm(this.down_value(this.getChm()));
                break;
            case STAT.LCK:
                this.setLck(this.down_value(this.getLck()));
                break;
            case STAT.ALL:
                this.decrease_stat(STAT.PWR);
                this.decrease_stat(STAT.SKL);
                this.decrease_stat(STAT.DEF);
                this.decrease_stat(STAT.MAG);
                this.decrease_stat(STAT.HP);
                this.decrease_stat(STAT.SPR);
                this.decrease_stat(STAT.CHM);
                this.decrease_stat(STAT.LCK);
                break;
        }
    }

    calculate_stats() {
        if (this.getPwr() < this.lpwr) {
            this.setPwr(this.lpwr);
        }
        if (this.getPwr() > this.hpwr) {
            this.setPwr(this.hpwr);
        }
        if (this.getSkl() < this.lskl) {
            this.setSkl(this.lskl);
        }
        if (this.getSkl() > this.hskl) {
            this.setSkl(this.hskl);
        }
        if (this.getDef() < this.ldef) {
            this.setDef(this.ldef);
        }
        if (this.getDef() > this.hdef) {
            this.setDef(this.hdef);
        }
        if (this.getMag() < this.lmag) {
            this.setMag(this.lmag);
        }
        if (this.getMag() > this.hmag) {
            this.setMag(this.hmag);
        }
        if (this.getHp() < this.lhp) {
            this.setHp(this.lhp);
        }
        if (this.getHp() > this.hhp) {
            this.setHp(this.hhp);
        }
        if (this.getSpr() < this.lspr) {
            this.setSpr(this.lspr);
        }
        if (this.getSpr() > this.hspr) {
            this.setSpr(this.hspr);
        }
        if (this.getChm() < this.lchm) {
            this.setChm(this.lchm);
        }
        if (this.getChm() > this.hchm) {
            this.setChm(this.hchm);
        }
        if (this.getLck() < this.llck) {
            this.setLck(this.llck);
        }
        if (this.getLck() > this.hlck) {
            this.setLck(this.hlck);
        }

        if (this.getPwr() < this.mpwr) {
            this.setPwr(this.mpwr);
        }
        if (this.getSkl() < this.mskl) {
            this.setSkl(this.mskl);
        }
        if (this.getDef() < this.mdef) {
            this.setDef(this.mdef);
        }
        if (this.getMag() < this.mmag) {
            this.setMag(this.mmag);
        }
        if (this.getHp() < this.mhp) {
            this.setHp(this.mhp);
        }
        if (this.getSpr() < this.mspr) {
            this.setSpr(this.mspr);
        }
        if (this.getChm() < this.mchm) {
            this.setChm(this.mchm);
        }
        if (this.getLck() < this.mlck) {
            this.setLck(this.mlck);
        }
    }

    // Essence functions

    /**
     * @param essence : ESSENCE
     */
    increase(essence) {
        switch (essence) {
            case ESSENCE.WISP:
                if (this.wi < 15 && this.energy >= this.getWiR() * power2[this.wi]) {
                    this.energy -= this.getWiR() * power2[this.wi];
                    this.wi++;
                }
                break;
            case ESSENCE.SHADE:
                if (this.sh < 15 && this.energy >= this.getShR() * power2[this.sh]) {
                    this.energy -= this.getShR() * power2[this.sh];
                    this.sh++;
                }
                break;
            case ESSENCE.DRYAD:
                if (this.dr < 15 && this.energy >= this.getDrR() * power2[this.dr]) {
                    this.energy -= this.getDrR() * power2[this.dr];
                    this.dr++;
                }
                break;
            case ESSENCE.AURA:
                if (this.au < 15 && this.energy >= this.getAuR() * power2[this.au]) {
                    this.energy -= this.getAuR() * power2[this.au];
                    this.au++;
                }
                break;
            case ESSENCE.SALA:
                if (this.sa < 15 && this.energy >= this.getSaR() * power2[this.sa]) {
                    this.energy -= this.getSaR() * power2[this.sa];
                    this.sa++;
                }
                break;
            case ESSENCE.GNOME:
                if (this.gn < 15 && this.energy >= this.getGnR() * power2[this.gn]) {
                    this.energy -= this.getGnR() * power2[this.gn];
                    this.gn++;
                }
                break;
            case ESSENCE.JINN:
                if (this.ji < 15 && this.energy >= this.getJiR() * power2[this.ji]) {
                    this.energy -= this.getJiR() * power2[this.ji];
                    this.ji++;
                }
                break;
            case ESSENCE.UNDINE:
                if (this.un < 15 && this.energy >= this.getUnR() * power2[this.un]) {
                    this.energy -= this.getUnR() * power2[this.un];
                    this.un++;
                }
                break;
        }
    }

    increase_essences() {
        for (; this.drLR > 0; this.drLR--)
            this.increase(ESSENCE.DRYAD);
        for (; this.auLR > 0; this.auLR--)
            this.increase(ESSENCE.AURA);
        for (; this.saLR > 0; this.saLR--)
            this.increase(ESSENCE.SALA);
        for (; this.gnLR > 0; this.gnLR--)
            this.increase(ESSENCE.GNOME);
        for (; this.jiLR > 0; this.jiLR--)
            this.increase(ESSENCE.JINN);
        for (; this.unLR > 0; this.unLR--)
            this.increase(ESSENCE.UNDINE);
    }

    /**
     * @param essence : ESSENCE
     */
    decrease(essence) {
        switch (essence) {
            case ESSENCE.WISP:
                if (this.wi > 0) {
                    this.wi--;
                    this.energy += this.getWiR() * power2[this.wi];
                }
                break;
            case ESSENCE.SHADE:
                if (this.sh > 0) {
                    this.sh--;
                    this.energy += this.getShR() * power2[this.sh];
                }
                break;
            case ESSENCE.DRYAD:
                if (this.dr > 0 && this.energy >= 4) {
                    this.dr--;
                    this.energy += this.getDrR() * power2[this.dr];
                }
                break;
            case ESSENCE.AURA:
                if (this.au > 0 && this.energy >= 4) {
                    this.au--;
                    this.energy += this.getAuR() * power2[this.au];
                }
                break;
            case ESSENCE.SALA:
                if (this.sa > 0 && this.energy >= 4) {
                    this.sa--;
                    this.energy += this.getSaR() * power2[this.sa];
                }
                break;
            case ESSENCE.GNOME:
                if (this.gn > 0 && this.energy >= 4) {
                    this.gn--;
                    this.energy += this.getGnR() * power2[this.gn];
                }
                break;
            case ESSENCE.JINN:
                if (this.ji > 0 && this.energy >= 4) {
                    this.ji--;
                    this.energy += this.getJiR() * power2[this.ji];
                }
                break;
            case ESSENCE.UNDINE:
                if (this.un > 0 && this.energy >= 4) {
                    this.un--;
                    this.energy += this.getUnR() * power2[this.un];
                }
                break;
        }
    }

    /**
     * @param essence : ESSENCE
     */
    taint(essence) {
        if (WORLD_CARD.ANCIENT_MOON === this.awc) {
            switch (essence) {
                case ESSENCE.WISP:
                    if (this.energy >= 8) {
                        this.increase(ESSENCE.WISP);
                    }
                    break;
                case ESSENCE.SHADE:
                    if (this.energy >= 8) {
                        this.increase(ESSENCE.SHADE);
                    }
                    break;
                case ESSENCE.DRYAD:
                    if (this.energy >= 8) {
                        this.drLR++;
                    }
                    break;
                case ESSENCE.AURA:
                    if (this.energy >= 8) {
                        this.auLR++;
                    }
                    break;
                case ESSENCE.SALA:
                    if (this.energy >= 8) {
                        this.saLR++;
                    }
                    break;
                case ESSENCE.GNOME:
                    if (this.energy >= 8) {
                        this.gnLR++;
                    }
                    break;
                case ESSENCE.JINN:
                    if (this.energy >= 8) {
                        this.jiLR++;
                    }
                    break;
                case ESSENCE.UNDINE:
                    if (this.energy >= 8) {
                        this.unLR++;
                    }
                    break;
            }
        } else if (WORLD_CARD.MIRRORED_WORLD === this.awc) {
            switch (essence) {
                case ESSENCE.WISP:
                    if (0 === this.sh && this.energy >= 8) {
                        this.increase(ESSENCE.WISP);
                    } else if (this.wi < this.sh) {
                        while (this.wi > 0)
                            this.decrease(ESSENCE.WISP);
                    }
                    break;
                case ESSENCE.SHADE:
                    if (this.energy >= 8) {
                        this.increase(ESSENCE.SHADE);
                    }
                    if (this.wi < this.sh) {
                        while (this.wi > 0)
                            this.decrease(ESSENCE.WISP);
                    }
                    break;
                case ESSENCE.DRYAD:
                    if (0 === this.au || this.wi === this.sh) {
                        if (this.energy >= 8)
                            this.drLR++;
                    } else if (this.wi < this.sh) {
                        this.decrease(ESSENCE.AURA);
                        if (this.energy >= 8)
                            this.drLR++;
                    }
                    break;
                case ESSENCE.AURA:
                    if (0 === this.dr || this.wi === this.sh) {
                        if (this.energy >= 8)
                            this.auLR++;
                    } else if (this.sh < this.wi) {
                        this.decrease(ESSENCE.DRYAD);
                        if (this.energy >= 8)
                            this.auLR++;
                    }
                    break;
                case ESSENCE.SALA:
                    if (0 === this.gn) {
                        this.decrease(ESSENCE.UNDINE);
                        if (this.energy >= 8)
                            this.saLR++;
                    }
                    break;
                case ESSENCE.GNOME:
                    if (0 === this.ji) {
                        this.decrease(ESSENCE.SALA);
                        if (this.energy >= 8)
                            this.gnLR++;
                    }
                    break;
                case ESSENCE.JINN:
                    if (0 === this.un) {
                        this.decrease(ESSENCE.GNOME);
                        if (this.energy >= 8)
                            this.jiLR++;
                    }
                    break;
                case ESSENCE.UNDINE:
                    if (0 === this.sa) {
                        this.decrease(ESSENCE.JINN);
                        if (this.energy >= 8)
                            this.unLR++;
                    }
                    break;
            }
        } else { /* normal_world */
            switch (essence) {
                case ESSENCE.WISP:
                    if (this.energy >= 8) {
                        this.increase(ESSENCE.WISP);
                    }
                    if (this.wi > this.sh) {
                        while (this.sh > 0)
                            this.decrease(ESSENCE.SHADE);
                    }
                    break;
                case ESSENCE.SHADE:
                    if (0 === this.wi && this.energy >= 8) {
                        this.increase(ESSENCE.SHADE);
                    } else if (this.wi > this.sh) {
                        while (this.sh > 0)
                            this.decrease(ESSENCE.SHADE);
                    }
                    break;
                case ESSENCE.DRYAD:
                    if (0 === this.au || this.wi === this.sh) {
                        if (this.energy >= 8)
                            this.drLR++;
                    } else if (this.wi > this.sh) {
                        this.decrease(ESSENCE.AURA);
                        if (this.energy >= 8)
                            this.drLR++;
                    }
                    break;
                case ESSENCE.AURA:
                    if (0 === this.dr || this.wi === this.sh) {
                        if (this.energy >= 8)
                            this.auLR++;
                    } else if (this.sh > this.wi) {
                        this.decrease(ESSENCE.DRYAD);
                        if (this.energy >= 8)
                            this.auLR++;
                    }
                    break;
                case ESSENCE.SALA:
                    if (0 === this.un) {
                        this.decrease(ESSENCE.GNOME);
                        if (this.energy >= 8)
                            this.saLR++;
                    }
                    break;
                case ESSENCE.GNOME:
                    if (0 === this.sa) {
                        this.decrease(ESSENCE.JINN);
                        if (this.energy >= 8)
                            this.gnLR++;
                    }
                    break;
                case ESSENCE.JINN:
                    if (0 === this.gn) {
                        this.decrease(ESSENCE.UNDINE);
                        if (this.energy >= 8)
                            this.jiLR++;
                    }
                    break;
                case ESSENCE.UNDINE:
                    if (0 === this.ji) {
                        this.decrease(ESSENCE.SALA);
                        if (this.energy >= 8)
                            this.unLR++;
                    }
                    break;
            }
        }
    }
}

export {
    ForgedItem
}
