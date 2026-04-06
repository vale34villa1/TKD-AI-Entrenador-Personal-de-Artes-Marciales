export class TKDInstructor {
    constructor(levelsData) {
        this.levels = levelsData;
    }

    // Valida la técnica comparando el ángulo actual con el objetivo del nivel
    validateTechnique(levelKey, currentAngle) {
        const target = this.levels[levelKey].target;
        
        if (currentAngle >= target) {
            return { status: "PERFECT", message: "완벽해 | ¡PERFECTO!", color: "#ffcc00" };
        } else if (currentAngle > target - 30) {
            return { status: "GOOD", message: "더 뻗어 | EXTIENDE MÁS", color: "#ff3e3e" };
        } else {
            return { status: "LOAD", message: "준비 | CARGANDO...", color: "#007aff" };
        }
    }
}
