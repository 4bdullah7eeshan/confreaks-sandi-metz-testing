export default function createGear(chainRing, cog, wheel, observer) {
    let internalCog = cog;

    const ratio = () => chainRing / internalCog;

    const changed = () => {
        if (observer && typeof observer.changed === 'function') {
            observer.changed(chainRing, internalCog);
        }
    };

    return {
        chainRing,
        get cog() {
            return internalCog;
        },
        wheel,
        gearInches() {
            return ratio() * wheel.diameter();
        },
        setCog(newCog) {
            internalCog = newCog;
            changed();
            return internalCog;
        },
        observer,
    };
}
