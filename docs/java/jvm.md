<div align="center">

<h1>Java Virtual Machine (JVM)</h1>

</div>

---

**[Multiple Choice]** Which of the following memory areas are part of the **JVM specification**?

A. Method Area  
B. Instance Variables  
C. Static Variables  
D. Program Counter (PC) Register  
E. Virtual Machine Stack

::: details View Answer

**Correct Answer: A, D, E**

**Explanation:**  
The JVM specifies five main memory areas:
1. **Program Counter (PC) Register**: Stores the address of the current instruction.
2. **Virtual Machine Stack**: Stores local variables and partial results for each thread.
3. **Native Method Stack**: Like the VM stack but for native (C/C++) methods.
4. **Heap**: Shared by all threads, stores objects and arrays (garbage collection happens here).
5. **Method Area**: Stores class structures, metadata, and the runtime constant pool.

**Note:** "Instance Variables" and "Static Variables" are **stored within** these areas (Instance in Heap, Static in Method Area/Metaspace), but they are not the memory areas themselves.

:::

---

**[Single Choice]** Regarding Java `ClassLoader`, which of the following is INCORRECT?

A. The three default ClassLoaders provided by Java are Bootstrap, Extension, and App ClassLoader.  
B. `ClassLoader` uses the **Parent Delegation Model** to search for classes.  
C. JVM identifies two classes as identical if their class names are the same, regardless of their ClassLoader.  
D. `ClassLoader` is used to dynamically load class files into memory.

::: details View Answer

**Correct Answer: C**

**Explanation:**  
*   **A, B, D are correct:** Java uses three layers of loaders and delegates to the parent first to avoid duplicate loading of core libraries.
*   **C is incorrect:** In JVM, a class is uniquely identified by its **Fully Qualified Name + ClassLoader instance**. Two classes with the same name loaded by different loaders are considered different types.

:::

---

**[Single Choice]** Which garbage collection (GC) area is responsible for short-lived objects?

A. Young Generation  
B. Old Generation  
C. Metaspace  
D. Stack

::: details View Answer

**Correct Answer: A**

**Explanation:**  
The JVM Heap is divided into **Young** (for new/short-lived objects) and **Old** (for surviving/long-lived objects) generations. Most objects are created in the Eden space within the Young Generation and are collected during Minor GCs.

:::
