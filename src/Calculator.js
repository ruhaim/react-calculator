import React from 'react';

export default class Calculator extends React.Component{
  render() {
	  return(
		  <div class="calculator">
			  <div class="calc-row">
			      <div class="screen">0</div>
			  </div>
			  <div class="calc-row">
			      <div class="button" data-value="clear" data-key="func">CLR</div>
			  </div>
			  <div class="calc-row">
			      <div class="button" data-value="7" data-key="numeric">7</div>
			      <div class="button" data-value="8" data-key="numeric">8</div>
			      <div class="button" data-value="9" data-key="numeric">9</div>
			      <div class="button divide" data-value="/" data-key="operator">/</div>
			  </div>
		  

			  <div class="calc-row">
			      <div class="button" data-value="4" data-key="numeric" >4</div>
			      <div class="button" data-value="5" data-key="numeric" >5</div>
			      <div class="button" data-value="6" data-key="numeric" >6</div>
			      <div class="button multiply" data-value="*" data-key="operator">*</div>
			  </div>

			  <div class="calc-row">
			      <div class="button" data-value="1" data-key="numeric" >1</div>
			      <div class="button" data-value="2" data-key="numeric" >2</div>
			      <div class="button" data-value="3" data-key="numeric" >3</div>
			      <div class="button" data-value="-" data-key="operator">-</div>
			  </div>

			  <div class="calc-row">
			      <div class="button decimal" data-value="." data-key="fractional" >.</div>
			      <div class="button" data-value="0" data-key="numeric" >0</div>
			      <div class="button equal" data-value="=" data-key="evaluator">=</div>
			      <div class="button" data-value="+" data-key="operator">+</div>
			  </div>
		</div>
	  )
  }
}
