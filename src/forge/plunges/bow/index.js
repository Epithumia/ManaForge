import {Plunge} from "@/forge/plunges";

class Solar_Flare extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Solar Flare"
            case 'jp':
                return "サンアロー"
            default:
                return "Solar Flare"
        }
    }

    value() {
        return 9
    }
}

class Lunar_Shot extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Lunar Shot"
            case 'jp':
                return "ムーンシュート"
            default:
                return "Lunar Shot"
        }
    }

    value() {
        return 8
    }
}

class Phoenix_Falling extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Phoenix Falling"
            case 'jp':
                return "落鳳射"
            default:
                return "Phoenix Falling"
        }
    }

    value() {
        return 8
    }
}

class Elven_Archer extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Elven Archer"
            case 'jp':
                return "エルフショット"
            default:
                return "Elven Archer"
        }
    }

    value() {
        return 4
    }
}

class Magical_Shot extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Magical Shot"
            case 'jp':
                return "マジカルシュート"
            default:
                return "Magical Shot"
        }
    }

    value() {
        return 7
    }
}

class Flaming_Arrow extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Flaming Arrow"
            case 'jp':
                return "炎の矢"
            default:
                return "Flaming Arrow"
        }
    }

    value() {
        return 101
    }
}

class Icicle extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Icicle"
            case 'jp':
                return "氷の矢"
            default:
                return "Icicle"
        }
    }

    value() {
        return 103
    }
}

class Medusas_Arrow extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Medusa's Arrow"
            case 'jp':
                return "メデューサの矢"
            default:
                return "Medusa's Arrow"
        }
    }

    value() {
        return 102
    }
}

export {Solar_Flare, Lunar_Shot, Phoenix_Falling, Elven_Archer, Magical_Shot, Flaming_Arrow, Icicle, Medusas_Arrow}
