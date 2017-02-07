// Listing 2-11. setState Using a Function, the currentState Passed into the Function Will Alter the Returned (New) State Being Set

setState( function( currState, currProps ) {
  return { X: currState.X + "state changed" };
});

// setState using an object directly setting the state.
setState( { X: "state changed" });
