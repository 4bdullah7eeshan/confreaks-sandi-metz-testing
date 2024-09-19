export default function createWheel(rim, tire) {
    const diameter = () => {
        return rim + (tire * 2);
    };

    return {
        rim,
        tire,
        diameter
    };
}
