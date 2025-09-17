// pages/index.tsx - Minimal starter page
//
// Students: build the Calculator UI here and call Calculator.evaluate(expr)
// HINTS: Add display area, buttons for digits/operators, keyboard handling, and call evaluate.
import Calculator from '../src/calculator'

export default function Home() {
  return (
    <div style={{maxWidth:480, margin:'40px auto', fontFamily:'Arial, sans-serif'}}>
      <h1 style={{textAlign:'center'}}>Calculator Project</h1>
      <p style={{color:'#666'}}>TODO: implement UI (display, keypad, keyboard support).</p>
      <p style={{fontSize:12, color:'#666'}}>Use <code>Calculator.evaluate(expr: string)</code> to compute results.</p>
    </div>
  )
}
