<div align="center">

<h1>Object-Oriented Programming (OOP)</h1>

</div>

---

**[Multiple Choice]** Given `String a = "a"`, `String b = "b"`, `String c = a + b`, and `String d = new String("ab")`. Which of the following operations return **true**?

A. `(a + b).equals(c)`  
B. `a + b == c`  
C. `c == d`  
D. `c.equals(d)`  

::: details View Answer

**Correct Answer: A, D**

**Explanation:**  
1. **== operator:** Compares reference addresses (shallow comparison).
2. **equals() method:** String overrides this to compare the actual text content (deep comparison).
3. `a + b` (concatenation) creates a **new object** in the Heap.
4. `d = new String("ab")` explicitly creates a **second object** in the Heap.
5. All three objects (`a+b`, `c`, `d`) contain `"ab"`, but they reside in **different memory addresses**. Thus, `==` is false, but `.equals()` is true.

:::

---

**[Single Choice]** Which of the following is an **INVALID** method signature for overriding `public int max(int a, int b)` in class `A`?

- `A` :  `public float max(float a, float b, float c)` (Overloading)
- `B` :  `public int max(int c, int d)` (Invalid Overloading)
- `C` :  `public float max(float a, float b)` (Invalid Return Type)
- `D` :  `private int max(int a, int b, int c)` (Valid Overloading)

::: details View Answer

**Correct Answer: B**

**Explanation:**  
*   **B is invalid:** It has the **same signature** (name + parameter types) as the parent method. Just changing parameter names (`a, b` to `c, d`) doesn't count as overloading. This would be interpreted as overriding, but for successful overriding, return types must match or be covariant.

:::

---

**[Single Choice]** What is the result of the following Java program execution?

```java
class X {
    Y y = new Y();
    X() { System.out.print("X"); }
}

class Y {
    Y() { System.out.print("Y"); }
}

public class Z extends X {
    Y y = new Y();
    Z() { System.out.print("Z"); }
    public static void main(String[] args) {
        new Z();
    }
}
```

A. ZYXX  
B. ZYXY  
C. YXYZ  
D. XYZX  

::: details View Answer

**Correct Answer: C**

**Explanation:**  
Order of initialization during object creation:
1. **Parent Fields Initialized**: `X.y` initialized (Prints `Y`).
2. **Parent Constructor Executed**: `X()` (Prints `X`).
3. **Child Fields Initialized**: `Z.y` initialized (Prints `Y`).
4. **Child Constructor Executed**: `Z()` (Prints `Z`).

Total output: `YXYZ`.

:::

---

**[Single Choice]** "Compile time looks left, Runtime looks right" refers to which concept?

A. Polymorphism  
B. Encapsulation  
C. Inheritance  
D. Abstraction  

::: details View Answer

**Correct Answer: A**

**Explanation:**  
In Polymorphism, given `Parent p = new Child();`:
*   **At compile time**, the compiler only checks if the method exists in the `Parent` (left side).
*   **At runtime**, JVM executes the method in the actual `Child` object (right side).

:::
