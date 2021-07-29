import {Plunge} from "@/forge/plunges";

class Sunlight extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Sunlight"
            case 'jp':
                return "サンレイ"
            default:
                return "Sunlight"
        }
    }

    value() {
        return 11
    }
}

class Moonlight extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Moonlight"
            case 'jp':
                return "ムーンライト"
            default:
                return "Moonlight"
        }
    }

    value() {
        return 7
    }
}

class Vampsword extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Vampsword"
            case 'jp':
                return "吸血剣"
            default:
                return "Vampsword"
        }
    }

    value() {
        return 12
    }
}

class Flame_Tongue extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Flame Tongue"
            case 'jp':
                return "フレイムタン"
            default:
                return "Flame Tongue"
        }
    }

    value() {
        return 5
    }
}

export {Sunlight, Moonlight, Vampsword, Flame_Tongue}
