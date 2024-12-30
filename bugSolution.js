function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately
    console.warn('Null value(s) detected. Returning default value.');
    return 0; // Or return some default value that makes sense for your function
  }
  // ...rest of the function...
}