/**
 * Obtener un valor entero aleatorio desde 0 hasta el maxValueNoInclude - 1
 * @param maxValueNoInclude Valor no incluido. Si tenemos 3, devuelve 0, 1 o 2
 * @returns 
 */
export const getRandomInt = (maxValueNoInclude: number) => Math.floor(Math.random() * maxValueNoInclude);