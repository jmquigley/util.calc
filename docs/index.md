<a name="calc"></a>

## calc(text, oper) ⇒
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
| text | <code>string</code> | the value that will be modified (a number "string") |
| oper | <code>string</code> | the operation that will be applied to the text number |

