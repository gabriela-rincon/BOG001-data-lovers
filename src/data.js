
/* --------Filtar por Rol--------*/

export const filterByRol = (data,option) =>{
  const filter = data.filter((rol) => rol.tags.join("").includes (option));
  return filter;
  }

/* --------Ordenar de la A-Z y Z-A--------*/

export const orderNames = (data, option) => {
  const orderAZ = data.sort(function(a, b){
    if (a.name < b.name) {
      return -1
    }
   if (a.name < b.name) {
       return 1;
    }
  })
      
 if (option === 'A-Z') {
   return orderAZ;
 }
 if (option === 'Z-A') {
   return orderAZ.reverse();
 }
};