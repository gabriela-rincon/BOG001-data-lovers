import { filterByRol } from '../src/data.js';

const pruebaRol = [{
  name: "Aatrox",
  tags: ["Fighter", "Tank"],
},
{name: "Ahri",
  tags: ["Mage", "Assassin"],
},
  {name: "Akali",
  tags: ["Assassin"],
}];

 describe('filterByRol', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterByRol).toBe('function');
  });
  it('debería retornar [{name:"Aatrox",tags: ["Fighter", "Tank"]}] para tipo Fighter', () => {
    expect(filterByRol(pruebaRol,"Fighter")).toEqual([{name:"Aatrox",tags: ["Fighter", "Tank"]}]);
  });
});