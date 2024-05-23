## React Price Card Task

   * Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.
   
   * Code in  the [App.jsx](./src/App.jsx) and style in [App.css](./src/App.css).

 **Description**

   * Component Structure: The `App` component is a functional React component that renders pricing cards.

   * Content Array: An array `content` contains objects representing three pricing . plans: FREE, PLUS, and PRO. Each object has properties: `amount`, `head`, `body`, `button`, and `added`.

   * Header Section: A header with the title "React Price Card Task" is rendered.

   * Container for Cards: A container div holds the card list. The card list is mapped from the `content` array.

   * Card Rendering: Each card displays the `amount`, `head` (price), and a list of features (`body`).Features are conditionally displayed with check marks or cross marks.

   * Conditional Logic: For the PLUS plan, features beyond the seventh item are marked with a cross. For the FREE plan, features beyond the fourth item are marked with a cross. For the PRO plan, all features are marked with check marks.

   * Button Styling: A button is included in each card.The button has a conditional `lite` class if the card contains crossed items.

   * CSS File: The `App.css` file is imported for styling. Basic styles include layout (flexbox), card appearance, and feature icons (check and cross marks).
   
 **CSS**
      
   * Head Section: Centered text alignment and margin.

   * Container: Flexbox layout for centering card list.

   * Card List: Flexbox layout with wrapping and gap for spacing.

   * Card Item: Background, border, shadow, width, padding, and text alignment.

   * Card: Padding for internal spacing.

   * Header: Centered text alignment and margin-bottom.

   * Amount: Font size and margin for the amount text.

   * Card Divider: Top border for a horizontal line.

   * Card Body: List style set to none and no padding.

   * Icons: Check mark color set to green. Cross mark color set to red.

   * Button: Full width, padding, border radius, color, background color, and cursor style. Conditional `lite` class for light blue background.


