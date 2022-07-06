import gsap from 'gsap'
export const episodeLocationsAnimation = () => {
  let tl = gsap.timeline({
    defaults: {
      ease: 'none',
      duration: 1,
      stagger: 0.1,
    },
  })
  tl.fromTo(
    '.episodeSection',
    { y: '-10%', opacity: 0 },
    { y: '0%', opacity: 1 }
  )
  tl.fromTo(
    '.episodeCards',
    { y: '-10%', ease: 'bounce.out', opacity: 0 },
    { y: '0%', ease: 'bounce.out', opacity: 1 },
    '<'
  )
}
