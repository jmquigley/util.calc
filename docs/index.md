## Functions

<dl>
<dt><a href="#calc">calc(inp, oper)</a> ⇒</dt>
<dd><p>Takes an HTML width/size string and performs a calcuation against it.  This
would be used to dynamically size an attribute for inline styles in a
React component (e.g.).  It uses four basic operations (addition, subtraction
multiplication, and division).</p>
<p>e.g.</p>
<p>taking &quot;20px&quot; and doubling its size =&gt; calc(&#39;20px&#39;, &#39;* 2&#39;); // &#39;40px&#39;</p>
</dd>
<dt><a href="#toEM">toEM(inp, fontSize, precision)</a> ⇒</dt>
<dd><p>Takes an input sizing value as a px value and converts it to an
equivalent &quot;em&quot; value.  It divides the size of the input value
by the given font size.</p>
</dd>
<dt><a href="#toREM">toREM(inp, fontSize, precision)</a> ⇒</dt>
<dd><p>Takes an input sizing value as a px value and converts it to an
equivalent &quot;rem&quot; value.  It divides the size of the input value
by the given font size.</p>
</dd>
</dl>

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

<a name="toEM"></a>

## toEM(inp, fontSize, precision) ⇒
Takes an input sizing value as a px value and converts it to an
equivalent "em" value.  It divides the size of the input value
by the given font size.

**Kind**: global function  
**Returns**: the new "em" conversion value.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| inp | <code>string</code> \| <code>number</code> |  | the value that will be modified.  This is a number or a string representing a number as a "##px" value. |
| fontSize | <code>number</code> | <code>16</code> | (16) the pixel height of the font used in this calculation. |
| precision | <code>number</code> | <code>3</code> | (3) the maximum number of decimal places returned by the calculation |

<a name="toREM"></a>

## toREM(inp, fontSize, precision) ⇒
Takes an input sizing value as a px value and converts it to an
equivalent "rem" value.  It divides the size of the input value
by the given font size.

**Kind**: global function  
**Returns**: the new "rem" conversion value.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| inp | <code>string</code> \| <code>number</code> |  | the value that will be modified.  This is a number or a string representing a number as a "##px" value. |
| fontSize | <code>number</code> | <code>16</code> | (16) the pixel height of the font used in this calculation. |
| precision | <code>number</code> | <code>3</code> | (3) the maximum number of decimal places returned by the calculation |

