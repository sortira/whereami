        // Sand particle effect
        const section1 = document.getElementById('section1');
        const canvas = section1.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = section1.offsetWidth;
            canvas.height = section1.offsetHeight;
        }

        function createParticles() {
            const text = section1.innerText;
            ctx.font = '16px Arial';
            ctx.fillStyle = 'black';
            ctx.fillText(text, 10, 30);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;

            for (let y = 0; y < canvas.height; y += 4) {
                for (let x = 0; x < canvas.width; x += 4) {
                    const index = (y * canvas.width + x) * 4;
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        particles.push({
                            x: x,
                            y: y,
                            speed: Math.random() * 2 + 1,
                            radius: Math.random() * 1.5 + 0.5
                        });
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
                ctx.fill();

                p.y += p.speed;

                if (p.y > canvas.height) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            if (particles.length > 0) {
                requestAnimationFrame(animateParticles);
            } else {
                section1.style.visibility = 'hidden';
            }
        }

        section1.addEventListener('click', () => {
            resizeCanvas();
            createParticles();
            animateParticles();
        });

        // Cursor halo effect
        const section2 = document.getElementById('section2');
        const halo = section2.querySelector('.halo');

        section2.addEventListener('mousemove', (e) => {
            const rect = section2.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            halo.style.left = `${x}px`;
            halo.style.top = `${y}px`;
        });

        section2.addEventListener('mouseenter', () => {
            halo.style.display = 'block';
        });

        section2.addEventListener('mouseleave', () => {
            halo.style.display = 'none';
        });

        // Typewriter effect
        const typewriterElement = document.querySelector('#section3 .typewriter');
        const startTypewriterButton = document.getElementById('startTypewriter');

        function startTypewriter() {
            typewriterElement.classList.add('typing');
            startTypewriterButton.disabled = true;

            // Remove the 'typing' class after the animation completes
            setTimeout(() => {
                typewriterElement.classList.remove('typing');
                startTypewriterButton.disabled = false;
            }, 3500); // This should match the transition duration in CSS
        }

        startTypewriterButton.addEventListener('click', startTypewriter);

        document.getElementById('section3').style.visibility = 'visible';
        // Function to check if an element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }


