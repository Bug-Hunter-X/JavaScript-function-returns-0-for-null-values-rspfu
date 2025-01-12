# JavaScript function returns 0 for null values
This repository contains a JavaScript function that has a bug where it always returns 0 if either of its arguments is null. The expected behavior is to return the sum of the arguments if both are numbers, and to handle null or undefined values more gracefully.

The bug is in the `foo` function. The current implementation returns 0 if either `a` or `b` is null.  The `bug.js` file demonstrates this behavior.  The solution, in `bugSolution.js`, provides a corrected implementation.