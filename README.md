# 📘 Calculator Project 

Welcome! Your task is to build a **Calculator web app** using **Next.js + TypeScript**.  
This project will test both your **UI building skills** and your **logic implementation skills**.

---

## 🎯 Your Goal
Create a calculator that:
- Lets users type or click buttons to build an expression.  
- Correctly evaluates expressions with **operator precedence** (`*` and `/` before `+` and `-`) and **parentheses**.  
- Handles **invalid input** and **division by zero** gracefully with error messages.  
- Provides a clean and responsive UI.  

---

## 🛠️ Where to Code
1. **Logic** → `src/calculator.ts`  
   - Implement:
     ```ts
     export class Calculator {
       static evaluate(expr: string): number {
         // TODO: implement logic
       }
     }
     ```
   - Must return a number for valid expressions.  
   - Must `throw new Error("message")` for invalid cases.  

2. **UI** → `pages/index.tsx`  
   - Build:
     - A display area for expression & result.  
     - Buttons for digits `0–9`, `.`, `+ - * / ( )`, equals `=`, clear `C`, backspace `←`.  
     - Keyboard support:  
       - Numbers/operators insert into expression.  
       - Enter (`=`) evaluates.  
       - Backspace deletes.  
       - Escape or `C` clears.  

---

## 📂 Required Project Structure
Keep these files (do not rename or remove):
```
src/calculator.ts        # logic file
pages/index.tsx          # UI page
pages/_app.tsx
styles/globals.css
package.json
tsconfig.json
harness_contract.json    # testing contract
```

---

## 🚦 Rules
- **Do not** import third-party math libraries.  
- **Do not** modify `Calculator.evaluate()` signature — the grader calls it directly.  
- **Do not** change `harness_contract.json`.  
- Show clear errors like `"Invalid expression"` or `"Division by zero"`.  

---

## ▶️ Run Locally
```bash
npm i
npm run dev
```
Then open **http://localhost:3000**

---

## 🧪 How Your Code Will Be Tested
Our grader will:
1. Install dependencies (`npm ci`).  
2. Run hidden test cases that call:  
   ```ts
   Calculator.evaluate(expr: string)
   ```  
   - ✅ Correct outputs must match expected numbers.  
   - ❌ Invalid inputs must throw an Error.  
3. (Optional) Run UI tests to check button & keyboard behavior.  

Example public tests:
```json
[
  { "input": "2+2", "expected": "4" },
  { "input": "10/2", "expected": "5" },
  { "input": "3*(2+4)", "expected": "18" }
]
```

---

## 📤 Submitting Your Work
1. Commit your finished code.  
2. Push to your repository (branch: `main`).  
3. The grader will automatically run and return results.  

---

✅ Follow this README and you’ll go from the starter zip → full working calculator → passing test cases.
