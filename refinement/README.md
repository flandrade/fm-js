# Refinement Type

Examples from Panagiotis Vekris. Refinement Types for TypeScript (PLDI’16)

```
{ v: b | p }
  |  |   |-----> predicate
  |  |---------> base type
  |------------> value types

```

In their most general form, type checking and type inference of refined types is undecidable.

However, in the liquid type system inference becomes decidable by restricting the boolean expressions.
