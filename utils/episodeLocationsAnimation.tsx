import gsap from 'gsap'
export const episodeLocationsAnimation = () => {
  let tl = gsap.timeline({
    defaults: {
      ease: 'none',
      duration: 0.7,
      stagger: 0.1,
    },
  })
  tl.fromTo('.episodeSection', { opacity: 0 }, { opacity: 1 })
  tl.fromTo(
    '.episodeCards',
    { y: '-20%', ease: 'bounce.out', opacity: 0 },
    { y: '0%', ease: 'bounce.out', opacity: 1 },
    '<'
  )
}
