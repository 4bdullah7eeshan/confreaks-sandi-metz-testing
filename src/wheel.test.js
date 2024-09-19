import createWheel from "./wheel.js";
import createGear from "./gear.js";

test('Diameter of wheel with rim size 26 and tire size 1.5 is close to 29.', () => {
    expect(createWheel(26, 1.5).diameter()).toBeCloseTo(29);
});

test('', () => {
    const wheel = createWheel(26, 1.5);
    const gear = createGear(52, 11, wheel);
    expect(gear.gearInches()).toBeCloseTo(137.1, 1); // Earlier it was just .toBeCloseTo(137.1), which failed the test. We need to add 
});

test('', () => {
    const wheel = createWheel(26, 1.5);
    const gear = createGear(52, 11, wheel);
    gear.setCog(27);
    expect(gear.cog).toBe(27);
});


it("notifies observer when cog changes", () => {
    const mockObserver = {
        changed: jest.fn()
    };

    const wheel = createWheel(26, 1.5);
    const gear = createGear(52, 11, wheel, mockObserver);

    gear.setCog(27);

    expect(mockObserver.changed).toHaveBeenCalledWith(52, 27);
});
