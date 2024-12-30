# Unexpected Null Handling in foo Function

This repository demonstrates an uncommon bug related to null value handling in a JavaScript function. The `foo` function exhibits unexpected behavior when null values are passed as arguments.  The issue is addressed in the `bugSolution.js` file.

## Bug Description

The `foo` function does not explicitly handle null values, leading to potential errors or unexpected results depending on how the rest of the function is implemented.  This behavior can be difficult to track down, especially in more complex codebases.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Execute the `foo` function with null values as arguments.
4. Observe the unexpected output or error.

## Solution

The solution provided in `bugSolution.js` demonstrates how to explicitly check for null values and handle them appropriately. This makes the function's behavior more predictable and robust.
