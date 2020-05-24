# JSSCHEME Scheme interpreter

## TODO

- everything

## Lambda vs define 

(define (square x) (* x x))
is a syntactic sugar for 
(define (square) (lambda (x) ))

Do we expand the former for the latter and implement the lambda special form only?

## Evaluating

To evaluate an expression:

1. Evaluate the operator to get the procedure
2. Evaluate the operands to get the arguments


(having an environment:)
(define (sq n) (* n n))

(+ (sq 4) (sq 3))
we evaluate all operands by substitution
(+ (sq 4) (* 3 3))
(+ (sq 4) 9)
(+ (* 4 4) 9)
(+ 16 9)
25

# Quoting

Quoting produces a literal expression
Quote <something> evaluates to <something>

Numbers, strings, booleans evaluate to themselves

# Procedures
[syntax] (lambda <formals> <body>)
Evaluates to a procedure

The environment in effect when the lambda expression was evaluated is remembered as part of the procedure.

# Binding
let, let*, letrec
[syntax] (let <bindings> <body>)

(let ((x 2)) x)
x
-> 2

(let ((x 2) (y 3))
  (*x y))  
-> 6

# Sequencing
[syntax] (begin <expression[1]> <expression[2]> ...)

The <expression>s are evaluated sequentially from left to right, and the value(s) of the last <expression> is(are) returned. This expression type is used to sequence side effects such as input and output.

# Iteration
[syntax] (do ((<variable[1]> <init[1]> <step[1]>) ...) (<test> <expression> ...) <command> ...)

# Definitions

Definitions are valid in some, but not all, contexts where expressions are allowed. They are valid only at the top level of a <program> and at the beginning of a <body>.

[syntax] (define <variable> <expression>)
[syntax] (define (<variable> <formals>) <body>)


In a let expression, the initial values are computed before any of the variables become bound; in a let* expression, the bindings and evaluations are performed sequentially; while in a letrec expression, all the bindings are in effect while their initial values are being computed, thus allowing mutually recursive definitions.

# Lists
## Dotted notation

A more streamlined notation can be used for lists: the elements of the list are simply enclosed in parentheses and separated by spaces. The empty list is written () . For example,

(a b c d e)

and

(a . (b . (c . (d . (e . ())))))

are equivalent notations for a list of symbols.

# Eval
Takes an expression and environment
(eval '(+ 1 2) user-initial-environment)


### R5RS standard
https://wiki.call-cc.org/man/4/The%20R5RS%20standard

