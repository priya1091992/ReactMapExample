export function duplicateValidation (values) {
  return values.some((value) => {
    return values.indexOf(value) !== values.lastIndexOf(value);
 })
}

export function rangeValidation (values, expectedArray) {
   return values.every((element)=> expectedArray.includes(element) );
 }
