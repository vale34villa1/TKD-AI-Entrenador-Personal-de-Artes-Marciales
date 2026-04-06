// Este script iría vinculado en tu index.html
import { TKDInstructor } from './instructor.js';

// ... Configuración de MediPipe (Pose) ...

function onResults(results) {
    // 1. Limpiar y dibujar frame
    canvasCtx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    
    if (results.poseLandmarks) {
        // 2. Dibujar puntos de referencia (Estilo K-Tech)
        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {color: '#007aff'});
        
        // 3. Obtener ángulos de articulaciones clave
        // (Usando la lógica de vectores que definimos antes)
        const angle = calculateAngle(
            results.poseLandmarks[24], // Cadera
            results.poseLandmarks[26], // Rodilla
            results.poseLandmarks[28]  // Tobillo
        );

        // 4. Actualizar UI
        updateDisplay(angle);
    }
}
