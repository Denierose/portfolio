import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
       
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
        <Particles
            className="w-100 h-100 object-cover"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { 
                    enable: false,
                    zIndex: -1 },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#fff",
                    },
                    links: {
                        color: "#fff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
  )
}

export default Particle
