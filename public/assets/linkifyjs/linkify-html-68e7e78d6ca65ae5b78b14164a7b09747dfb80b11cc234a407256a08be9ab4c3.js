"use strict";!function(e,t){var n=function(e){function t(e){this.named=e}function n(e){return y.test(e)}function r(e){return b.test(e)}function i(e){return e.replace(w,"\n")}function o(e,t){this.delegate=e,this.entityParser=t,this.state=null,this.input=null,this.index=-1,this.line=-1,this.column=-1,this.tagLine=-1,this.tagColumn=-1,this.reset()}function a(e,t){this.token=null,this.startLine=1,this.startColumn=0,this.options=t||{},this.tokenizer=new o(this,e)}function s(e,n){var r=new a(new t(d),n);return r.tokenize(e)}function u(e){var t,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=x.tokenize(e),i=[],o=[];for(n=new _(n),t=0;t<r.length;t++){var a=r[t];if(a.type!==E)if(a.type===k){var s=c(a.chars,n);i.push.apply(i,s)}else i.push(a);else{i.push(a);var u=a.tagName.toUpperCase(),h="A"===u||C.contains(n.ignoreTags,u);if(!h)continue;var d=i.length;l(u,r,++t,i),t+=i.length-d-1}}for(t=0;t<i.length;t++){var m=i[t];switch(m.type){case E:var g="<"+m.tagName;if(m.attributes.length>0){var v=f(m.attributes);g+=" "+v.join(" ")}g+=">",o.push(g);break;case S:o.push("</"+m.tagName+">");break;case k:o.push(p(m.chars));break;case T:o.push("<!--"+p(m.chars)+"-->")}}return o.join("")}function c(t,n){for(var r=e.tokenize(t),i=[],o=0;o<r.length;o++){var a=r[o];if("nl"===a.type&&n.nl2br)i.push({type:E,tagName:"br",attributes:[],selfClosing:!0});else if(a.isLink&&n.check(a)){var s=n.resolve(a),u=(s.href,s.formatted),c=s.formattedHref,l=s.tagName,p=s.className,h=s.target,f=s.attributes,d=[["href",c]];p&&d.push(["class",p]),h&&d.push(["target",h]);for(var m in f)d.push([m,f[m]]);i.push({type:E,tagName:l,attributes:d,selfClosing:!1}),i.push({type:k,chars:u}),i.push({type:S,tagName:l})}else i.push({type:k,chars:a.toString()})}return i}function l(e,t,n,r){for(var i=1;n<t.length&&i>0;){var o=t[n];o.type===E&&o.tagName.toUpperCase()===e?i++:o.type===S&&o.tagName.toUpperCase()===e&&i--,r.push(o),n++}return r}function p(e){return e}function h(e){return e.replace(/"/g,"&quot;")}function f(e){for(var t=[],n=0;n<e.length;n++){var r=e[n],i=r[0],o=r[1];t.push(i+'="'+h(o)+'"')}return t}var d={},m=/^#[xX]([A-Fa-f0-9]+)$/,g=/^#([0-9]+)$/,v=/^([A-Za-z0-9]+)$/;t.prototype.parse=function(e){if(e){var t=e.match(m);return t?"&#x"+t[1]+";":(t=e.match(g))?"&#"+t[1]+";":(t=e.match(v),t?"&"+t[1]+";":void 0)}};var y=/[\t\n\f ]/,b=/[A-Za-z]/,w=/\r\n?/g;o.prototype={reset:function(){this.state="beforeData",this.input="",this.index=0,this.line=1,this.column=0,this.tagLine=-1,this.tagColumn=-1,this.delegate.reset()},tokenize:function(e){this.reset(),this.tokenizePart(e),this.tokenizeEOF()},tokenizePart:function(e){for(this.input+=i(e);this.index<this.input.length;)this.states[this.state].call(this)},tokenizeEOF:function(){this.flushData()},flushData:function(){"data"===this.state&&(this.delegate.finishData(),this.state="beforeData")},peek:function(){return this.input.charAt(this.index)},consume:function(){var e=this.peek();return this.index++,"\n"===e?(this.line++,this.column=0):this.column++,e},consumeCharRef:function(){var e=this.input.indexOf(";",this.index);if(e!==-1){var t=this.input.slice(this.index,e),n=this.entityParser.parse(t);return n?(this.index=e+1,n):void 0}},markTagStart:function(){this.tagLine=this.line,this.tagColumn=this.column},states:{beforeData:function(){var e=this.peek();"<"===e?(this.state="tagOpen",this.markTagStart(),this.consume()):(this.state="data",this.delegate.beginData())},data:function(){var e=this.peek();"<"===e?(this.delegate.finishData(),this.state="tagOpen",this.markTagStart(),this.consume()):"&"===e?(this.consume(),this.delegate.appendToData(this.consumeCharRef()||"&")):(this.consume(),this.delegate.appendToData(e))},tagOpen:function(){var e=this.consume();"!"===e?this.state="markupDeclaration":"/"===e?this.state="endTagOpen":r(e)&&(this.state="tagName",this.delegate.beginStartTag(),this.delegate.appendToTagName(e.toLowerCase()))},markupDeclaration:function(){var e=this.consume();"-"===e&&"-"===this.input.charAt(this.index)&&(this.index++,this.state="commentStart",this.delegate.beginComment())},commentStart:function(){var e=this.consume();"-"===e?this.state="commentStartDash":">"===e?(this.delegate.finishComment(),this.state="beforeData"):(this.delegate.appendToCommentData(e),this.state="comment")},commentStartDash:function(){var e=this.consume();"-"===e?this.state="commentEnd":">"===e?(this.delegate.finishComment(),this.state="beforeData"):(this.delegate.appendToCommentData("-"),this.state="comment")},comment:function(){var e=this.consume();"-"===e?this.state="commentEndDash":this.delegate.appendToCommentData(e)},commentEndDash:function(){var e=this.consume();"-"===e?this.state="commentEnd":(this.delegate.appendToCommentData("-"+e),this.state="comment")},commentEnd:function(){var e=this.consume();">"===e?(this.delegate.finishComment(),this.state="beforeData"):(this.delegate.appendToCommentData("--"+e),this.state="comment")},tagName:function(){var e=this.consume();n(e)?this.state="beforeAttributeName":"/"===e?this.state="selfClosingStartTag":">"===e?(this.delegate.finishTag(),this.state="beforeData"):this.delegate.appendToTagName(e)},beforeAttributeName:function(){var e=this.consume();n(e)||("/"===e?this.state="selfClosingStartTag":">"===e?(this.delegate.finishTag(),this.state="beforeData"):(this.state="attributeName",this.delegate.beginAttribute(),this.delegate.appendToAttributeName(e)))},attributeName:function(){var e=this.consume();n(e)?this.state="afterAttributeName":"/"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.state="selfClosingStartTag"):"="===e?this.state="beforeAttributeValue":">"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.delegate.finishTag(),this.state="beforeData"):this.delegate.appendToAttributeName(e)},afterAttributeName:function(){var e=this.consume();n(e)||("/"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.state="selfClosingStartTag"):"="===e?this.state="beforeAttributeValue":">"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.delegate.finishTag(),this.state="beforeData"):(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.state="attributeName",this.delegate.beginAttribute(),this.delegate.appendToAttributeName(e)))},beforeAttributeValue:function(){var e=this.consume();n(e)||('"'===e?(this.state="attributeValueDoubleQuoted",this.delegate.beginAttributeValue(!0)):"'"===e?(this.state="attributeValueSingleQuoted",this.delegate.beginAttributeValue(!0)):">"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.delegate.finishTag(),this.state="beforeData"):(this.state="attributeValueUnquoted",this.delegate.beginAttributeValue(!1),this.delegate.appendToAttributeValue(e)))},attributeValueDoubleQuoted:function(){var e=this.consume();'"'===e?(this.delegate.finishAttributeValue(),this.state="afterAttributeValueQuoted"):"&"===e?this.delegate.appendToAttributeValue(this.consumeCharRef('"')||"&"):this.delegate.appendToAttributeValue(e)},attributeValueSingleQuoted:function(){var e=this.consume();"'"===e?(this.delegate.finishAttributeValue(),this.state="afterAttributeValueQuoted"):"&"===e?this.delegate.appendToAttributeValue(this.consumeCharRef("'")||"&"):this.delegate.appendToAttributeValue(e)},attributeValueUnquoted:function(){var e=this.consume();n(e)?(this.delegate.finishAttributeValue(),this.state="beforeAttributeName"):"&"===e?this.delegate.appendToAttributeValue(this.consumeCharRef(">")||"&"):">"===e?(this.delegate.finishAttributeValue(),this.delegate.finishTag(),this.state="beforeData"):this.delegate.appendToAttributeValue(e)},afterAttributeValueQuoted:function(){var e=this.peek();n(e)?(this.consume(),this.state="beforeAttributeName"):"/"===e?(this.consume(),this.state="selfClosingStartTag"):">"===e?(this.consume(),this.delegate.finishTag(),this.state="beforeData"):this.state="beforeAttributeName"},selfClosingStartTag:function(){var e=this.peek();">"===e?(this.consume(),this.delegate.markTagAsSelfClosing(),this.delegate.finishTag(),this.state="beforeData"):this.state="beforeAttributeName"},endTagOpen:function(){var e=this.consume();r(e)&&(this.state="tagName",this.delegate.beginEndTag(),this.delegate.appendToTagName(e.toLowerCase()))}}},a.prototype={tokenize:function(e){return this.tokens=[],this.tokenizer.tokenize(e),this.tokens},tokenizePart:function(e){return this.tokens=[],this.tokenizer.tokenizePart(e),this.tokens},tokenizeEOF:function(){return this.tokens=[],this.tokenizer.tokenizeEOF(),this.tokens[0]},reset:function(){this.token=null,this.startLine=1,this.startColumn=0},addLocInfo:function(){this.options.loc&&(this.token.loc={start:{line:this.startLine,column:this.startColumn},end:{line:this.tokenizer.line,column:this.tokenizer.column}}),this.startLine=this.tokenizer.line,this.startColumn=this.tokenizer.column},beginData:function(){this.token={type:"Chars",chars:""},this.tokens.push(this.token)},appendToData:function(e){this.token.chars+=e},finishData:function(){this.addLocInfo()},beginComment:function(){this.token={type:"Comment",chars:""},this.tokens.push(this.token)},appendToCommentData:function(e){this.token.chars+=e},finishComment:function(){this.addLocInfo()},beginStartTag:function(){this.token={type:"StartTag",tagName:"",attributes:[],selfClosing:!1},this.tokens.push(this.token)},beginEndTag:function(){this.token={type:"EndTag",tagName:""},this.tokens.push(this.token)},finishTag:function(){this.addLocInfo()},markTagAsSelfClosing:function(){this.token.selfClosing=!0},appendToTagName:function(e){this.token.tagName+=e},beginAttribute:function(){this._currentAttribute=["","",null],this.token.attributes.push(this._currentAttribute)},appendToAttributeName:function(e){this._currentAttribute[0]+=e},beginAttributeValue:function(e){this._currentAttribute[2]=e},appendToAttributeValue:function(e){this._currentAttribute[1]=this._currentAttribute[1]||"",this._currentAttribute[1]+=e},finishAttributeValue:function(){}};var x={HTML5NamedCharRefs:d,EntityParser:t,EventedTokenizer:o,Tokenizer:a,tokenize:s},C=e.options,_=C.Options,E="StartTag",S="EndTag",k="Chars",T="Comment";return u}(t);e.linkifyHtml=n}(window,linkify);