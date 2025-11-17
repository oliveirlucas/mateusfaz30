<template>
  <v-app class="v-app-wrapper">
    <div class="landing-page">
      <video autoplay loop muted playsinline webkit-playsinline preload="auto" class="background-video">
        <source src="/mateus carro.mp4" type="video/mp4">
      </video>
      <div class="video-overlay"></div>
      <div class="particles"></div>
      <div class="circuit-lines"></div>

      <section class="hero-section">
        <div class="hero-glow"></div>
        <div class="fireworks-container">
          <div class="firework" v-for="n in 8" :key="n" :style="{left: (n * 12) + '%', animationDelay: (n * 0.5) + 's'}"></div>
        </div>
        <v-container>
          <div class="hero-content">
            <div class="logo-container">
              <img src="/foto perfil-Photoroom copy.png" alt="Mateus 3.0 Turbo" class="hero-logo" />
            </div>
            <p class="hero-subtitle">Vem comemorar meus 30 anos comigo!</p>
            <div class="hero-decorations">
              <v-icon class="deco-icon">mdi-lightning-bolt</v-icon>
              <v-icon class="deco-icon">mdi-flash</v-icon>
              <v-icon class="deco-icon">mdi-lightning-bolt</v-icon>
            </div>
          </div>
        </v-container>
      </section>

      <section class="info-section">
        <v-container>
          <div class="info-card neon-card">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="info-icon">
                <v-icon size="60" color="accent">mdi-map-marker-radius</v-icon>
              </div>
              <div class="info-details">
                <div class="info-item">
                  <v-icon class="info-icon-small">mdi-calendar-clock</v-icon>
                  <span class="info-label">Data:</span>
                  <span class="info-value">31/12/2025</span>
                </div>
                <div class="info-item">
                  <v-icon class="info-icon-small">mdi-clock-outline</v-icon>
                  <span class="info-label">Horário:</span>
                  <span class="info-value">21h</span>
                </div>
                <div class="info-item">
                  <v-icon class="info-icon-small">mdi-map-marker</v-icon>
                  <span class="info-label">Endereço:</span>
                  <span class="info-value">Espaço Bell’s - 
                      Rua Virgílio de Melo Franco, 304 – Vila São Paulo, Contagem (MG)</span>
                </div>
              </div>
            </div>
          </div>

          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.0989736823746!2d-44.0434!3d-19.9145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6969d8d0e4f4f%3A0x8c8c8c8c8c8c8c8c!2sRua%20Virg%C3%ADlio%20de%20Melo%20Franco%2C%20304%20-%20Vila%20S%C3%A3o%20Paulo%2C%20Contagem%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </v-container>
      </section>

      <section class="gifts-section">
        <v-container>
          <h2 class="section-title">
            <v-icon class="title-icon">mdi-gift</v-icon>
            LISTA DE PRESENTES
          </h2>
          <div class="gift-content">
            <p class="gift-description">
              Sua presença é o maior presente! Mas se desejar presentear,
              pode escolher algo da minha lista na Infinity Pay.
            </p>
            <v-btn
              class="gift-main-btn"
              variant="flat"
              color="primary"
              size="x-large"
              href="https://loja.infinitepay.io/altzenpro"
              target="_blank"
            >
              <v-icon class="mr-4" left size="large">mdi-gift-outline</v-icon>
              Ver Lista de Presentes
            </v-btn>
          </div>
        </v-container>
      </section>

      <footer class="footer">
        <p class="footer-text">© 2025 Mateus 3.0 Turbo</p>
        <div class="footer-decorations">
          <div class="footer-glow"></div>
        </div>
      </footer>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const video = document.querySelector('.background-video') as HTMLVideoElement;
  if (video) {
    video.muted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          ['click', 'touchstart', 'scroll'].forEach(event => {
            document.addEventListener(event, () => {
              video.play();
            }, { once: true });
          });
        });
      }
    };

    if (video.readyState >= 3) {
      attemptPlay();
    } else {
      video.addEventListener('canplay', attemptPlay, { once: true });
    }
  }
});
</script>

<style scoped>
.landing-page {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(ellipse at top, #0a0a1f 0%, #000000 100%);
  position: relative;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 50, 150, 0.65);
  z-index: 1;
  pointer-events: none;
}

.particles {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image:
    radial-gradient(2px 2px at 20% 30%, #00d4ff, transparent),
    radial-gradient(2px 2px at 60% 70%, #00ffff, transparent),
    radial-gradient(1px 1px at 50% 50%, #0066ff, transparent),
    radial-gradient(1px 1px at 80% 10%, #00d4ff, transparent),
    radial-gradient(2px 2px at 90% 60%, #00ffff, transparent),
    radial-gradient(1px 1px at 33% 90%, #0066ff, transparent);
  background-size: 200% 200%;
  background-position: 0% 0%;
  animation: particlesFloat 20s ease-in-out infinite;
  opacity: 0.3;
  z-index: 2;
}

.circuit-lines {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent 98%, rgba(0, 212, 255, 0.1) 100%),
    linear-gradient(0deg, transparent 98%, rgba(0, 212, 255, 0.1) 100%);
  background-size: 50px 50px;
  opacity: 0.3;
  z-index: 2;
}

@keyframes particlesFloat {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 80px 20px;
  background: linear-gradient(180deg, rgba(10, 10, 31, 0.4) 0%, rgba(0, 50, 100, 0.2) 100%);
  border-bottom: 2px solid rgba(0, 212, 255, 0.3);
  z-index: 3;
}

.hero-glow {
  position: absolute;
  width: 800px;
  height: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
  animation: pulse 3s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.logo-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.hero-logo {
  max-width: 90%;
  width: 600px;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.6)) drop-shadow(0 0 40px rgba(0, 212, 255, 0.4));
}

.fireworks-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
}

.firework {
  position: absolute;
  bottom: -50px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation: fireworkLaunch 3s ease-out infinite;
}

@keyframes fireworkLaunch {
  0% {
    bottom: -50px;
    opacity: 1;
    box-shadow: 0 0 10px #fff;
  }
  70% {
    bottom: 60%;
    opacity: 1;
  }
  71% {
    box-shadow:
      0 0 0 0px rgba(255, 100, 100, 1),
      0 0 0 0px rgba(100, 100, 255, 1),
      0 0 0 0px rgba(255, 255, 100, 1),
      0 0 0 0px rgba(100, 255, 100, 1),
      0 0 0 0px rgba(255, 100, 255, 1),
      0 0 0 0px rgba(100, 255, 255, 1);
  }
  100% {
    bottom: 60%;
    opacity: 0;
    box-shadow:
      0 -150px 0 30px rgba(255, 100, 100, 0),
      100px -100px 0 30px rgba(100, 100, 255, 0),
      -100px -100px 0 30px rgba(255, 255, 100, 0),
      150px 0px 0 30px rgba(100, 255, 100, 0),
      -150px 0px 0 30px rgba(255, 100, 255, 0),
      0px 150px 0 30px rgba(100, 255, 255, 0);
  }
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #a0a0ff;
  margin-top: 30px;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-decorations {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.deco-icon {
  font-size: 40px !important;
  color: #00d4ff;
  animation: bounce 2s ease-in-out infinite;
}

.deco-icon:nth-child(2) {
  animation-delay: 0.3s;
}

.deco-icon:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.info-section {
  padding: 80px 20px;
  position: relative;
  z-index: 3;
  background: linear-gradient(180deg, rgba(0, 50, 100, 0.3) 0%, rgba(30, 0, 60, 0.4) 100%);
  border-bottom: 2px solid rgba(138, 43, 226, 0.3);
}

.neon-card {
  position: relative;
  background: rgba(15, 15, 26, 0.8);
  border: 2px solid #00d4ff;
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.neon-card:hover {
  border-color: #00ffff;
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.4);
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #00d4ff, #0066ff, #00ffff, #00d4ff);
  border-radius: 20px;
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.3s ease;
  z-index: -1;
  animation: borderRotate 3s linear infinite;
  background-size: 300% 300%;
}

@keyframes borderRotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.neon-card:hover .card-glow {
  opacity: 0.6;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.info-icon {
  flex-shrink: 0;
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  min-width: 250px;
}

.info-item {
  gap: 15px;
  font-size: 1.1rem;
}

.info-icon-small {
  color: #00d4ff !important;
  font-size: 24px !important;
  margin-right: 10px;
}

.info-label {
  color: #a0a0ff;
  font-weight: 600;
  min-width: 80px;
  margin-right: 10px;
}

.info-value {
  color: #ffffff;
  font-weight: 400;
  margin-right: 10px;
}

.gifts-section {
  padding: 80px 20px;
  position: relative;
  z-index: 3;
  background: linear-gradient(180deg, rgba(30, 0, 60, 0.4) 0%, rgba(0, 30, 30, 0.5) 100%);
  border-bottom: 2px solid rgba(0, 255, 200, 0.3);
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 60px;
  text-shadow:
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.title-icon {
  font-size: 3rem !important;
  color: #00d4ff !important;
}

.gift-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.gift-description {
  font-size: 1.3rem;
  color: #a0a0ff;
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
}

.gift-main-btn {
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.05em !important;
  padding: 30px 50px !important;
  height: auto !important;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.4) !important;
  transition: all 0.3s ease !important;
  text-transform: uppercase;
}

.gift-main-btn:hover {
  box-shadow: 0 0 50px rgba(0, 212, 255, 0.8) !important;
  transform: translateY(-3px);
}

.map-container {
  margin-top: 40px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 0 30px rgba(0, 212, 255, 0.3),
    0 0 60px rgba(0, 212, 255, 0.1);
  border: 2px solid rgba(0, 212, 255, 0.3);
}

.map-container iframe {
  display: block;
  filter: saturate(0.8) contrast(1.1);
}

.footer {
  padding: 60px 20px;
  text-align: center;
  position: relative;
  z-index: 3;
  background: linear-gradient(180deg, rgba(0, 30, 30, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.footer-text {
  color: #a0a0ff;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  margin: 0;
}

.footer-decorations {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 100px;
}

.footer-glow {
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(0, 212, 255, 0.2) 0%, transparent 70%);
  filter: blur(20px);
}

@media (max-width: 960px) {
  .hero-section {
    padding: 60px 20px;
    min-height: 80vh;
  }

  .turbo-icon {
    margin-bottom: 20px;
  }

  .turbo-icon .v-icon {
    font-size: 80px !important;
  }

  .hero-title {
    gap: 5px;
  }

  .title-version {
    font-size: 0.55em;
  }

  .hero-logo {
    width: 400px;
  }

  .hero-subtitle {
    margin-top: 20px;
  }

  .hero-decorations {
    gap: 30px;
    margin-top: 30px;
  }

  .deco-icon {
    font-size: 32px !important;
  }

  .info-section {
    padding: 60px 20px;
  }

  .neon-card {
    padding: 30px 20px;
  }

  .card-content {
    gap: 20px;
  }

  .info-icon .v-icon {
    font-size: 50px !important;
  }

  .info-item {
    font-size: 1rem;
    gap: 10px;
  }

  .info-icon-small {
    font-size: 20px !important;
  }

  .gifts-section {
    padding: 60px 20px;
  }

  .section-title {
    margin-bottom: 40px;
    gap: 15px;
  }

  .title-icon {
    font-size: 2.5rem !important;
  }

  .gift-content {
    gap: 30px;
  }

  .gift-description {
    font-size: 1.1rem;
  }

  .gift-main-btn {
    font-size: 1rem !important;
    padding: 25px 40px !important;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 40px 15px;
    min-height: 70vh;
  }

  .hero-logo {
    width: 280px;
  }

  .hero-glow {
    width: 400px;
    height: 400px;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-top: 15px;
  }

  .hero-decorations {
    gap: 20px;
    margin-top: 20px;
  }

  .deco-icon {
    font-size: 28px !important;
  }

  .info-section {
    padding: 40px 15px;
  }

  .neon-card {
    padding: 25px 15px;
  }

  .card-content {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }

  .info-icon .v-icon {
    font-size: 45px !important;
  }

  .info-details {
    gap: 15px;
  }

  .info-item {
    flex-direction: column;
    text-align: center;
    gap: 5px;
    font-size: 0.95rem;
  }

  .info-label {
    min-width: auto;
    font-size: 0.9rem;
  }

  .info-value {
    font-size: 1rem;
  }

  .gifts-section {
    padding: 40px 15px;
  }

  .section-title {
    flex-direction: column;
    margin-bottom: 30px;
    gap: 10px;
  }

  .title-icon {
    font-size: 2rem !important;
  }

  .gift-content {
    gap: 25px;
    padding: 0 10px;
  }

  .gift-description {
    font-size: 1rem;
    line-height: 1.5;
  }

  .gift-main-btn {
    font-size: 0.9rem !important;
    padding: 20px 30px !important;
    width: 100%;
  }

  .footer {
    padding: 40px 15px;
  }

  .footer-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 2.5rem !important;
  }

  .turbo-icon .v-icon {
    font-size: 60px !important;
  }

  .gift-main-btn {
    font-size: 0.85rem !important;
    padding: 18px 25px !important;
  }

  .gift-main-btn .v-icon {
    font-size: 18px !important;
  }
}
</style>

<style>
.v-app-wrapper {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

.v-application__wrap {
  min-height: 100vh !important;
}

.v-container {
  max-width: 1200px !important;
}
</style>
