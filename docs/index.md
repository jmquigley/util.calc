<a name="calc"></a>

## calc(inp, oper) ⇒
Takes an HTML width/size string and performs a calcuation against it.  This
would be used to dynamically size an attribute for inline styles in a
React component (e.g.).  It uses four basic operations (addition, subtraction
multiplication, and division).

e.g.

taking "20px" and doubling its size => calc('20px', '* 2'); // '40px'

**Kind**: global function  
**Returns**: a new string after the simple math operation has been applied.  

| Param | Type | Description |
| --- | --- | --- |
| inp | <code>string</code> \| <code>number</code> | the value that will be modified.  This is a number or a string representing a number. |
| oper | <code>string</code> | the operation that will be applied to the text number |

