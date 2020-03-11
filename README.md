
# REQUIREMENTS----------------------------------------------------------------------

1. You must not use eval()
2. The calculator must be Object Oriented, utilizing Class, not Object.prototype
3. The app should be completely rendered via JS, no HTML besides a <div id="app">
4. The calculator should have a display area at the top.
5. The display should show 0 by default.
6. The calculator should have 6 function buttons:
    * Division /
    * Multiplication *
    * Subtraction -
    * Addition +
    * Calculate =
    * Clear c
7. The calculator should have 10 number buttons, 0-9.
8. The calculator should have a decimal button .
9.  The display area should update as a user presses buttons.
10. When the user clicks a function button after the first and second values are entered (instead of =), the result of the calculation should be saved and the calculator should allow for a new number input (for example: 1 then + then 3 then -, etc.)
11. When the calculate button = is pressed, the calculator should apply the operation to the two stored numbers in the appropriate order (important for subtraction and division) and update the display.
12. When the clear button c is pressed, all stored data should be erased and the display should show 0 again.


# PSEUDO-CODE----------------------------------------------------------------------

## components
1. atoms:
    - buttons
2. molecules:
    - ?
3. organisms:
    - calculator

## steps

1. Need to structure main page
    * 1 row (maybe 2) and 3 columns
    * Main input screen will be in R1/C2
2. Need to structure calculator
    * 5 rows and 4 columns (col-3)
    * potentially rounded
    * Give each column an ID
    * EACH ONE WILL NEED A UNIQUE(?) CLICK HANDLER
3. Need to create operator function
    * should handle all math
4. Need a place to store all input but not replace
    * should keep each input
    * HOW DO I DO THIS???
5. 

## pattern

1. Model 
   * Number stored for each button
   * math functions stored for each operator

2. View
   * Number shown in input screen onclick
   * update math function result on screen

3. Controller
   * click buttons


## Questions
  - how can I keep multiple inputs?
  - 