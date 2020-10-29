const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let position = [0,0]
  for (let cardinal of moves) {
    if (cardinal === 'north') {
      position[1] += 1
    }
    if (cardinal === 'south') {
      position[1] -= 1
    }
    if (cardinal === 'west') {
      position[0] -= 1
    }
    if (cardinal === 'east') {
      position[0] += 1
    }
  }
  return position
}
console.log(finalPosition(moves));