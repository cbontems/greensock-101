const timeline = gsap.timeline({
    duration: 1
});

timeline
    .from(
        'body', {
            backgroundColor: '#fff',
            ease: 'none'
        })
    .from(
        ['h1', '.intro'], {
            y: -20,
            opacity: 0,
            ease: 'power1.out',
            stagger: 0.2
        }
    )
    .from(
        ['img', 'h2'], {
            opacity: 0,
            ease: 'none'
        })
    .from('ul li', {
        y: -20,
        opacity: 0,
        ease: 'power1.out',
        stagger: 0.2
    });