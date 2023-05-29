# Going beyond the test pyramid: Achieving strong code correctness

This repository contains the code samples and examples discussed in the talk "Going beyond the test pyramid: Achieving strong code correctness." This talk explores several "lightweight" approaches and techniques from formal methods, including property-based testing with [fast-check], model checking with [Alloy], and an overview of the [refinement types] proposal (Panagiotis Vekris et al. Refinement Types for TypeScript).

## Contents

- `property-based-testing/`: Code samples showcasing property-based testing using the fast-check library. These examples demonstrate how to write property-based tests that generate a wide range of test cases and verify the correctness of the code based on properties and invariants.

- `model-checking/`: Code samples demonstrating the use of Alloy for model checking. These examples show how to define models and specifications using Alloy and perform analysis to identify potential issues and ensure code correctness.

- `refinement-types/`: Notes on the "refinement types" proposal and how it can enhance code correctness in TypeScript.

## Notes

I'm referring to property-based testing, types, and model checking as "lightweight" formal methods, as inspired by Benjamin C. Pierce's keynote talk at the Yow! Lambda Jam Conference.

## References

- [fast-check] for property based testing
- [Refinement Types for Typescript: Implementation](https://github.com/UCSD-PL/refscript)
- [Refinement Types for Typescript: Paper](https://dl.acm.org/doi/10.1145/2908080.2908110). Vekris, Panagiotis, Benjamin Cosman, and Ranjit Jhala. "Refinement types for TypeScript." Proceedings of the 37th ACM SIGPLAN Conference on Programming Language Design and Implementation. 2016.
- [Alloy] for model checking
- Benjamin C. Pierce. (When) Will Property-Based Testing Rule The World?, May 2022. Keynote at Yow! Lambda Jam Conference. [Slides](https://www.cis.upenn.edu/~bcpierce/papers/Yow2022-Pierce.pdf)

[fast-check]: https://github.com/dubzzz/fast-check
[refinement types]: https://dl.acm.org/doi/10.1145/2908080.2908110
[Alloy]: http://alloytools.org/
