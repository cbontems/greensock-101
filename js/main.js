gsap.from(
    'body', {
        backgroundColor: '#fff',
        duration: 1.7,
        ease: 'none'
    });

gsap.from(
    ['h1', '.intro'], {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power1.out',
        delay: 1.5,
        stagger: 0.2
    });

gsap.from(
    ['img','h2'], {
    opacity: 0,
    duration: 0.7,
    ease: 'none',
    delay: 2.8
});

gsap.from('ul li', {
    y: -20,
    opacity: 0,
    duration: 0.6,
    ease: 'power1.out',
    delay: 4,
    stagger: 0.2
});