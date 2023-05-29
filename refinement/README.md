# Refinement Type

Examples from Panagiotis Vekris. Refinement Types for TypeScript (PLDI’16)

```
{ v: b | p }
  |  |   |-----> logical predicate
  |  |---------> base type
  |------------> value types


```

“Set of values v of type b such that formula p is true”

```
{ v: number | 0 ≤ v ∧ v < len a }
```

## Example: Type reduce to account for valid indexes

What we have so far:

```ts
function reduce<A, B>(a: A[], f: (B, A, number) => B, x: B): B {}
```

Type reduce to account for valid indexes

```ts
function reduce<A,B>(a: A[ ], f: (B, A, idx<a>) => B, x: B): B { ... }
```

where

```ts
type idx<a> = { v: number | 0 ≤ v ∧ v < len a }
```

## Note

In their most general form, type checking and type inference of refined types is undecidable.

However, in the liquid type system inference becomes decidable by restricting the boolean expressions.

## References

- [Refinement Types for Typescript: Implementation](https://github.com/UCSD-PL/refscript)
- [Refinement Types for Typescript: Paper](https://dl.acm.org/doi/10.1145/2908080.2908110). Vekris, Panagiotis, Benjamin Cosman, and Ranjit Jhala. "Refinement types for TypeScript." Proceedings of the 37th ACM SIGPLAN Conference on Programming Language Design and Implementation. 2016.
