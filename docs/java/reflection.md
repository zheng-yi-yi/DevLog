<div align="center">

<h1>Java Reflection & Exception Handling</h1>

</div>

---

**[Multiple Choice]** Which of the following can be achieved using **Java Reflection**?

A. Instantiating a class whose name is only known at runtime.  
B. Accessing private fields and methods of an object.  
C. Improving application performance for high-load systems.  
D. Analyzing the internal structure of a class (constructors, methods, fields).

::: details View Answer

**Correct Answer: A, B, D**

**Explanation:**  
*   **A, B, D are true:** Reflection allows inspecting and manipulating class behavior at runtime, including breaking encapsulation (accessing private members).
*   **C is false:** Reflection is generally **slower** than direct code execution because of the dynamic resolution involved.

:::

---

**[Single Choice]** What is the difference between `checked` and `unchecked` exceptions?

A. Checked exceptions are caught by the JVM, while unchecked ones are not.  
B. Checked exceptions must be either caught or declared in the `throws` clause; unchecked do not.  
C. Unchecked exceptions occur at compile-time, checked at runtime.  
D. There is no functional difference; they are just naming conventions.

::: details View Answer

**Correct Answer: B**

**Explanation:**  
*   **Checked Exceptions** (e.g., `IOException`): The compiler forces you to handle them.
*   **Unchecked Exceptions** (e.g., `NullPointerException`): Subclasses of `RuntimeException`. The compiler does not enforce handling.

:::

---

**[Single Choice]** Which keyword is used to explicitly throw an exception from a method?

A. `throws`  
B. `catch`  
C. `throw`  
) D. `finally`

::: details View Answer

**Correct Answer: C**

**Explanation:**  
*   `throw`: Used inside a method to throw a specific exception instance.
*   `throws`: Used in the method signature to declare which exceptions the method might throw.

:::
