//1. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation (here.)

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(number1){
    return function(number2){
        return number1 + number2;
    }
}

//2. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

//Functional Programming, emphasizes on the evaluation of functions. Functional programming uses immutable data. It follows declarative programming model. Parallel programming is supported by functional programming.
// In functional programming, statements can be executed in any order. Recursion is used for iterative data. The basic elements of functional programming are variables and functions. Functional programming is used only when there are few things with more operations.

//Object-Oriented Programming, based on concept of objects. OOP uses mutable data. It follow imperative programming model. OOP does not support parallel programming.
// In OOPs, statements should be executed in particular order. Loops are used for iterative data. The basic elements of OOP are objects and methods. OOp is used when there are many things with few operations.


//Pros of Functional programming
// Functions don't change any states and are entirely dependent on the input, they are simple to understand. The return value given by such functions is the same as the output produced by them. The arguments and return typ of pure functions are given by their function signature.
// Due to the nature of pure functions to avoid changing variables or any data outside it, implementing concurrency becomes efficacious
// It supports the concept of lazy evaluation, which means that the value is evaluated and stored only when it is required.
// Pure functions take arguments once and produce unchangeable output. Hence, they don’t produce any hidden output. They use immutable values, making debugging and testing easier.
// It's style treats functions as values and passes the same to other functions as parameters. It enhances the comprehension and readability of the code.

//Cons of Functional programming
//Immutable values combined with recursion might lead to a reduction in performance
//In some cases, writing pure functions causes a reduction in the readability of the code
//Though writing pure functions is easy, combining the same with the rest of the application as well as the I/O operations is tough
//Writing programs in recursive style in place of using loops for the same can be a daunting task

//Pros of OOP

//We can build the programs from standard working modules that communicate with one another, rather than having to start writing the code from scratch which leads to saving of development time and higher productivity,
//OOP language allows to break the program into the bit-sized problems that can be solved easily (one object at a time).
//The new technology promises greater programmer productivity, better quality of software and lesser maintenance cost.
//OOP systems can be easily upgraded from small to large systems.
//It is possible that multiple instances of objects co-exist without any interference,
//It is very easy to partition the work in a project based on objects.
//It is possible to map the objects in problem domain to those in the program.
//The principle of data hiding helps the programmer to build secure programs which cannot be invaded by the code in other parts of the program.
//By using inheritance, we can eliminate redundant code and extend the use of existing classes.
//Message passing techniques is used for communication between objects which makes the interface descriptions with external systems much simpler.
//The data-centered design approach enables us to capture more details of model in an implementable form.

//Cons of OOP
//The length of the programmes developed using OOP language is much larger than the procedural approach. Since the programme becomes larger in size, it requires more time to be executed that leads to slower execution of the programme.
//We can not apply OOP everywhere as it is not a universal language. It is applied only when it is required.  It is not suitable for all types of problems.
//Programmers need to have brilliant designing skill and programming skill along with proper planning because using OOP is little bit tricky.
//OOPs take time to get used to it.  The thought process involved in object-oriented programming may not be natural for some people.
//Everything is treated as object in OOP so before applying it we need to have excellent thinking in terms of objects.