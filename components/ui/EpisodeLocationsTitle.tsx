export const EpisodeLocationsTitle = () => {
  return (
    <div className="episodeSection flex mx-4">
      <div className="w-full px-4">
        <div className="text-center mx-auto mb-[60px] max-w-[710px]">
          <span className="font-semibold text-lg text-primary mb-2 block">
            Ejercicio 2
          </span>
          <h2
            className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
          >
            Get episode locations
          </h2>
          <div className="text-base text-body-color">
            <p>
              - para cada episode, indicar la cantidad y un listado con las
              location (origin) de todos los character que aparecieron en ese
              episode (sin repetir)
            </p>
            <p>
              - cuánto tardó el programa 👆 en total (desde inicio ejecución
              hasta entrega de resultados)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
