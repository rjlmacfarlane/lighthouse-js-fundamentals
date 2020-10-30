const smartGarbage = function(trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1; 
  }
  return bins
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))

// Note to self: the 'bins' object need not be defined in the function, as this is passed into the function via console.log.
// (A previous interation of this code stumbled over that.)