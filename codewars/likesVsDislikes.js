// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing

// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

// link: https://www.codewars.com/kata/62ad72443809a4006998218a

function likeOrDislike(buttons) {
  let state = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    let currentPress = buttons[i];
    if (currentPress !== state) {
      state = currentPress;
    } else if (currentPress === state) {
      state = "Nothing";
    }
  }
  return state;
}
