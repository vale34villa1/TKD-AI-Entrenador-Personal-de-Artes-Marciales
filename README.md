# TKD-AI-Entrenador-Personal-de-Artes-Marciales
Sistema basado en html, js, json y Python para el seguimiento y corrección de técnicas como complemento en la disciplina de Taekwondo.

### Estructura del Proyecto
```bash
├── index.html          # Interfaz principal (UI/UX)
├── css/
│   └── style.css       # Diseño Neo-Seoul y Branding
├── js/
│   ├── main.js         # Lógica de la cámara y MediPipe
│   └── instructor.js   # Lógica de validación y niveles
├── data/
│   ├── levels.json     # Configuración técnica de cinturones
│   ├── history.json    # Base de datos histórica
│   └── motivation.json # Frases motivacionales
└── assets/             # (Opcional) Sonidos de éxito o logos
```

### 🥋 Lógica de Entrenamiento (Niveles)
El sistema evalúa el desempeño basándose en la precisión geométrica de las técnicas:
⚪ Cinta Blanca (Principiante)
- Técnica Foco: Ap Chagi (Patada Frontal).
- Requisito: Ángulo de rodilla $\theta > 160^\circ$ en extensión.
- Teoría: Significado del "Tae", "Kwon" y "Do".

🟢 Cinta Verde (Intermedio)
- Técnica Foco: Dollyo Chagi (Patada Circular).
- Requisito: Rotación de cadera y alineación del pie de apoyo.
- Teoría: Los 5 principios del Taekwondo.

⚫ Cinta Negra (Avanzado)
- Técnica Foco: Poomsae y patadas con giro (Mondollyo).
- Requisito: Estabilidad del centro de gravedad y velocidad de ejecución.💻


Ejemplo de Ejecución: El núcleo del sistema utiliza el cálculo de ángulos para validar la ejecución:

$$\theta = \arccos\left(\frac{\vec{BA} \cdot \vec{BC}}{|\vec{BA}| |\vec{BC}|}\right)$$

Donde:
* $\vec{BA} \cdot \vec{BC}$ es el producto punto de los vectores.
* $|\vec{BA}| |\vec{BC}|$ es el producto de sus magnitudes (normas).


# Ejemplo rápido de uso del motor de detección
```bash
from src.engine import TKDTrainer
trainer = TKDTrainer(belt_level='White')
trainer.start_session()
```

🌟 Motivación Diaria, Contribuciones (¡Las contribuciones son bienvenidas!

Si tienes ideas para mejorar los algoritmos de detección de patadas con giro o quieres añadir más contenido histórico, por favor abre un Pull Request.)

📄 Licencia
---
Este proyecto está bajo la Licencia MIT.

### ¿Cómo usar este README?
1. Crea un repositorio en **GitHub**.
2. En la raíz de tu proyecto, crea un archivo llamado `README.md`.
3. Pega el código anterior.
4. GitHub renderizará automáticamente las fórmulas matemáticas, las tablas y los bloques de código, dándole un aspecto profesional y académico a tu sistema.
