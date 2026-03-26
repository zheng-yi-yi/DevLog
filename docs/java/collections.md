<div align="center">

<h1>Java Collections Framework</h1>

</div>

---

**[Multiple Choice]** Which of the following can implement a **thread-safe** Map in Java?

A. `Map map = new HashMap()`  
B. `Map map = new TreeMap()`  
C. `Map map = new ConcurrentHashMap()`  
D. `Map map = Collections.synchronizedMap(new HashMap())`  

::: details View Answer

**Correct Answer: C, D**

**Explanation:**  
1. `HashMap` and `TreeMap` are not synchronized and are not thread-safe.
2. `ConcurrentHashMap` uses a segment-locking/CAS mechanism to provide high concurrency with thread safety.
3. `Collections.synchronizedMap()` wraps any Map into a synchronized (thread-safe) Map by locking the entire object for every operation.

:::

---

**[Multiple Choice]** Regarding the `HashMap` class in Java, which of the following are CORRECT?

A. `HashMap` stores data in key/value pairs.  
B. `HashMap` guarantees the order of its elements.  
C. `HashMap` allows `null` to be used as a key.  
D. `HashMap` allows `null` to be used as a value.  

::: details View Answer

**Correct Answer: A, C, D**

**Explanation:**  
*   **B is false:** `HashMap` does not guarantee any specific order of elements. If you need order, use `LinkedHashMap` (insertion order) or `TreeMap` (natural order).
*   **A, C, D are true:** `HashMap` supports one `null` key and multiple `null` values.

:::

---

**[Single Choice]** Which interface does `ArrayList` implement to indicate that it supports fast random access?

A. `RandomAccess`  
B. `Serializable`  
C. `Cloneable`  
D. `Iterable`

::: details View Answer

**Correct Answer: A**

**Explanation:**  
`RandomAccess` is a marker interface used by `List` implementations to indicate that they support fast (usually constant time) random access. `ArrayList` implements it, while `LinkedList` does not.

:::
