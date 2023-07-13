export const getTypeColor = (type) => {
  let color = ''
  switch (type) {
    case 'normal':
      color = 'colorNormal'
      break
    case 'fighting':
      color = 'colorFighting'
      break
    case 'flying':
      color = 'colorFlying'
      break
    case 'poison':
      color = 'colorPoison'
      break
    case 'ground':
      color = 'colorGround'
      break
    case 'bug':
      color = 'colorBug'
      break
    case 'ghost':
      color = 'colorGhost'
      break
    case 'steal':
      color = 'colorSteal'
      break
    case 'rock':
      color = 'colorRock'
      break
    case 'fire':
      color = 'colorFire'
      break
    case 'water':
      color = 'colorWater'
      break
    case 'grass':
      color = 'colorGrass'
      break
    case 'electric':
      color = 'colorElectric'
      break
    case 'psychic':
      color = 'colorPsychic'
      break
    case 'ice':
      color = 'colorIce'
      break
    case 'dragon':
      color = 'colorDragon'
      break
    case 'dark':
      color = 'colorDark'
      break
    case 'fairy':
      color = 'colorFairy'
      break
    case 'unknown':
      color = 'colorUnknown'
      break
    case 'shadow':
      color = 'colorShadow'
      break
    case 'steel':
      color = 'colorSteel'
      break
    default:
      color = 'colorNormal'
  }
  return color
}
