<div align="center">

<h1>Java Basic Knowledge</h1>

</div>

---

**[Single Choice]** Given the following code:

```java
public class SwitchTest {
    public static void main(String[] args) {
        System.out.println("value=" + switchit(4));
    }
    public static int switchit(int x) {
        int j = 1;
        switch (x) {
            case 1: j++;
            case 2: j++;
            case 3: j++;
            case 4: j++;
            case 5: j++;
            default: j++;
        }
        return j + x;
    }
}
```

What is the output?

A. value=6  
B. value=8  
C. value=3  
D. value=5  
E. value=4  

::: details View Answer

**Correct Answer: B**

**Explanation:**  
Since there is no `break` statement, execution starts at `case 4` and "falls through" all subsequent cases and the `default` block. 
1. `j` starts at 1.
2. `case 4`: `j` becomes 2.
3. `case 5`: `j` becomes 3.
4. `default`: `j` becomes 4.
5. Returns `j + x` (4 + 4 = 8).

:::

---

**[Single Choice]** What is the result of compiling and executing this code?

```java
public class Main {
    public static void main(String[] args) {
        Boolean flag = false;
        if (flag = true) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}
```

A. Compilation fails at the `if` statement.  
B. A runtime exception is thrown.  
C. Prints "true".  
D. Prints "false".  
E. Nothing is displayed.

::: details View Answer

**Correct Answer: C**

**Explanation:**  
The `if` condition uses the assignment operator `=` instead of the equality operator `==`. 
1. `flag = true` assigns `true` to `flag` and returns the assigned value (`true`).
2. The `if` condition evaluates to `true`, executing the first block.

:::

---

**[Multiple Choice]** Which of the following statements about `final` are FALSE?

A. Methods marked `final` cannot be overloaded.  
B. `final` can be used to modify classes, interfaces, abstract classes, methods, and attributes.  
C. Methods marked `final` cannot be overridden.  
D. Attributes marked `final` are constants and cannot be modified after initialization.

::: details View Answer

**Correct Answer: A, B**

**Explanation:**  
*   **A is false:** `final` prevents overriding, but has no effect on overloading.
*   **B is false:** `final` cannot be applied to `abstract classes` or `interfaces` (as they are meant to be extended/implemented).
*   C and D are correct definitions of the `final` keyword.

:::

---

**[Multiple Choice]** If the sequence of elements entering a stack is e1, e2, e3, e4, which output sequences are possible? (Note: Elements can be popped immediately after pushing).

- `A` :  `e3, e1, e4, e2`
- `B` :  `e2, e4, e3, e1`
- `C` :  `e2, e3, e4, e1`
- `D` :  `Any order is possible`

::: details View Answer

**Correct Answer: B, C**

**Explanation:**  
*   **A is impossible:** If `e3` is popped first, `e1` and `e2` must already be in the stack. To get `e1` out, `e2` MUST be popped first because it is on top of `e1`.
*   **B is possible:** Push e1, Push e2, Pop e2 (e2), Push e3, Push e4, Pop e4 (e4), Pop e3 (e3), Pop e1 (e1).
*   **C is possible:** Push e1, Push e2, Pop e2 (e2), Push e3, Pop e3 (e3), Push e4, Pop e4 (e4), Pop e1 (e1).

:::

---

**[Single Choice]** What is the output after executing this code?

```java
public class Test {
    public static void main(String[] args) {
        System.out.println(test());
    }
    public static int test() {
        int temp = 1;
        try {
            System.out.println(temp);
            return ++temp;
        } finally {
            ++temp;
            System.out.println(temp);
        }
    }
}
```

A. 1 2 2  
B. 1 2 3  
C. 1 3 3  
D. 1 3 2  

::: details View Answer

**Correct Answer: D**

**Explanation:**  
1. `temp` is initialized to 1.
2. `try` block prints `1`.
3. `return ++temp;` increments `temp` to 2. This value (2) is "saved" to be returned later.
4. The `finally` block executes before the method actually returns.
5. In `finally`, `++temp` increments `temp` to 3, and it prints `3`.
6. Finally, the method returns the "saved" value from step 3, which is `2`.

:::
