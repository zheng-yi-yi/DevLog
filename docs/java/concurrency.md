<div align="center">

<h1>Java Concurrency</h1>

</div>

---

**[Single Choice]** Which of the following statements about Java concurrency is CORRECT?

A. `CopyOnWriteArrayList` is suitable for concurrent scenarios with high write and low read frequency.  
B. `ReadWriteLock` is suitable for concurrent scenarios with high read and low write frequency.  
C. `ConcurrentHashMap` requires locks for both read and write operations.  
D. Defining an `int` member variable `i` with the `volatile` keyword makes `i++` thread-safe.

::: details View Answer

**Correct Answer: B**

**Explanation:**  
*   **A is false:** `CopyOnWriteArrayList` (COW) is optimized for **many reads and few writes**, as every write operation creates a full copy of the underlying array.
*   **B is true:** `ReadWriteLock` allows multiple threads to read concurrently while ensuring mutual exclusion for write operations, which is efficient for read-intensive tasks.
*   **C is partially incorrect:** In modern `ConcurrentHashMap` (Java 8+), most read operations (like `get()`) do NOT use locks; they rely on volatile reads and CAS.
*   **D is false:** `volatile` only ensures visibility, not atomicity. `i++` is a three-step operation (read, increment, write), which still requires synchronization or `AtomicInteger`.

:::

---

**[Multiple Choice]** Which of the following can be used to wait for multiple threads to complete before continuing?

A. `Thread.join()`  
B. `CountDownLatch`  
C. `CyclicBarrier`  
D. `Semaphore`

::: details View Answer

**Correct Answer: A, B, C**

**Explanation:**  
*   `Thread.join()`: Allows one thread to wait for another specific thread to finish.
*   `CountDownLatch`: A synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.
*   `CyclicBarrier`: Allows a set of threads to all wait for each other to reach a common barrier point.
*   `Semaphore` is used for limiting the number of threads accessing a resource (rate limiting), not primarily for waiting for completion.

:::
