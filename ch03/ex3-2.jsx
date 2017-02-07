// Listing 3-2. JSX

var box =
  <Box>
    {
      shouldShowAnswer(user) ?
      <Answer value=${false}>no</Answer> :
      <Box.Comment>
         Text Content
      </Box.Comment>
    }
  </Box>;
