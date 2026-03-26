<div align="center">

<h1>Java Web Development</h1>

</div>

---

**[Multiple Choice]** To configure a `Servlet Filter` in a Java J2EE `web.xml` file, which elements are required?

A. `<filter>`  
B. `<filter-mapping>`  
C. `<servlet-filter>`  
D. `<filter-config>`

::: details View Answer

**Correct Answer: A, B**

**Explanation:**  
The `web.xml` configuration for a Filter involves two parts:
1. **Definition**: Under `<filter>`, specifying the name and its implementation class.
2. **Mapping**: Under `<filter-mapping>`, mapping the filter to specific `URL patterns` or individual `Servlets`.

:::

---

**[Single Choice]** Which of the following is **NOT** a function of the `HttpServletResponse` interface?

A. Setting HTTP headers  
B. Setting cookies  
C. Reading path information  
D. Writing response data

::: details View Answer

**Correct Answer: C**

**Explanation:**  
*   `HttpServletResponse` (Response object) handles **outgoing** communication: setting headers (`setHeader`), cookies (`addCookie`), and writing content (`getWriter`/`getOutputStream`).
*   **Reading path information** (like `getContextPath`, `getServletPath`) is the responsibility of the `HttpServletRequest` object, which handles **incoming** data.

:::

---

**[Single Choice]** Which HTTP method is typically used to create a new resource in a RESTful API?

A. GET  
B. POST  
C. PUT  
D. DELETE

::: details View Answer

**Correct Answer: B**

**Explanation:**  
*   **POST**: Create a new resource.
*   **GET**: Retrieve an existing resource.
*   **PUT**: Replace/update an existing resource.
*   **DELETE**: Remove a resource.

:::
