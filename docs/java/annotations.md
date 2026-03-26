<div align="center">

<h1>Java Annotations & Generics</h1>

</div>

---

**[Multiple Choice]** Which of the following are **standard** Java built-in annotations?

A. `@Override`  
B. `@Deprecated`  
C. `@SuppressWarnings`  
D. `@Inject`

::: details View Answer
**Correct Answer: A, B, C**

**Explanation:**  
*   `@Override`, `@Deprecated`, and `@SuppressWarnings` are defined in the `java.lang` package within the JDK.
*   `@Inject` is part of the `javax.inject` (JSR-330) standard library commonly used in DI frameworks (like Spring, CDI), but it's not a standard annotation in the core JDK runtime.
:::

---

**[Single Choice]** In Java Generics, what does `<? extends T>` represent?

A. An upper-bounded wildcard that limits the type to `T` or a subclass of `T`.  
B. A lower-bounded wildcard that limits the type to `T` or a superclass of `T`.  
C. An unbounded wildcard that accepts any type.  
D. A specific type parameter.

::: details View Answer
**Correct Answer: A**

**Explanation:**  
*   `<? extends T>`: **Upper Bound**. It allows `T` or any of its subclasses. This is useful for "read-only" operations (PECS: Producer Extends, Consumer Super).
*   `<? super T>`: **Lower Bound**. It allows `T` or any of its parent classes. This is useful for "write-only" operations.
:::
