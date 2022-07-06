export const CharCounterTitle = () => {
    return (
      <div className="section flex mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-[60px] max-w-[710px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Ejercicio 1
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
              Get Char Counter
            </h2>
            <div className="text-base text-body-color">
              <p>
                - cuántas veces aparece la letra "l" (case insensitive) en los
                nombres de todos los `location`
              </p>
              <p>
                - cuántas veces aparece la letra "e" (case insensitive) en los
                nombres de todos los `episode`
              </p>
              <p>
                - cuántas veces aparece la letra "c" (case insensitive) en los
                nombres de todos los `character`
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