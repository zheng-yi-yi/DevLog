<div align="center">

<h1>Java I/O (Input/Output)</h1>

</div>

---

**[Multiple Choice]** Which of the following statements about **Java I/O** are CORRECT?

A. `Reader` and `Writer` are for character-based streams like text files.  
B. `InputStream` and `OutputStream` are for byte-oriented data like images or binary files.  
C. `BufferedReader` uses a memory buffer to improve efficiency of reading.  
D. All streams must be closed manually to avoid memory leaks.

::: details View Answer

**Correct Answer: A, B, C, D**

**Explanation:**  
*   **A, B are fundamental:** Streams are split into text (Reader/Writer) and binary (In/Out) versions.
*   **C is efficiency:** Wrapping a `FileReader` in a `BufferedReader` minimizes direct disk accesses.
*   **D is essential:** Closing streams (manually or via `try-with-resources`) is critical for releasing system resources (file handles, memory).

:::

---

**[Single Choice]** Which of the following is used for **efficient non-blocking I/O**?

A. Java NIO (New I/O)  
B. Standard Java IO  
C. Serialization  
D. FileOutputStream

::: details View Answer

**Correct Answer: A**

**Explanation:**  
Java NIO introduces `Channels`, `Buffers`, and `Selectors`, allowing multiple connections to be handled by a few threads without blocking, which is more scalable for high-concurrency systems.

:::
