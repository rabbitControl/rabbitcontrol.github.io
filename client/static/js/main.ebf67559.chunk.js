(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(162)},119:function(e,t,a){},121:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),o=a.n(i),s=(a(113),a(115),a(117),a(119),a(9)),l=a(10),c=a(13),u=a(11),p=a(12),m=(a(121),a(39)),d=a(169),h=a(4),v=a(97),b={whiteSpace:"nowrap",color:v.a.GRAY1,fontSize:16},f="Connecting to unsecure websocket from secure context. You may need to adjust your browser settings.",g=function(e){return function(t){var a,r;return r=a=function(a){function r(t){var a;return Object(s.a)(this,r),(a=Object(c.a)(this,Object(u.a)(r).call(this,t))).ignoreReadonly=e?e.ignoreReadonly:void 0,a.handleValue=function(e){var t=a.state.parameter;t instanceof h.ValueParameter?(t.value=e,a.props.onSubmitCb()):t instanceof h.BangParameter&&(t.doBang(),a.props.onSubmitCb()),a.setState({value:e})},a.handleParameterValueChange=function(e){e instanceof h.ValueParameter&&(M.VERBOSE_LOG&&console.log("setting widget value (".concat(e.userid,"): ").concat(e.value)),a.setState({value:e.value}))},a.handleParameterChange=function(e){a.setState({label:e.label,description:e.description,readonly:e.readonly})},a.state={label:a.props.label,value:null,parameter:void 0},a}return Object(p.a)(r,a),Object(l.a)(r,[{key:"componentDidMount",value:function(){this.props.registerElement(this)}},{key:"componentWillUnmount",value:function(){var e=this.state.parameter;e&&this.unregisterParameterHandlers(e),this.props.unregisterElement(this)}},{key:"setParameter",value:function(e){e.userid===this.props.userid?(M.VERBOSE_LOG&&console.log("set parameter for widget (".concat(this.props.userid,")")),this.registerParameterHandlers(e),this.setState({parameter:e,label:e.label,readonly:e.readonly})):console.error("userid mismatch! parameter: ".concat(e.userid," - widget: ").concat(this.props.userid))}},{key:"removeParameter",value:function(e){this.unregisterParameterHandlers(e),this.setState({parameter:void 0})}},{key:"getUserid",value:function(){return this.props.userid}},{key:"render",value:function(){var e=this.state.parameter,a=this.state.readonly;return n.createElement(t,Object.assign({},this.props,this.state,{handleValue:this.handleValue,disabled:!e||!!a&&!(!0===this.ignoreReadonly)}))}},{key:"registerParameterHandlers",value:function(e){e instanceof h.ValueParameter&&(e.addValueChangeListener(this.handleParameterValueChange),this.setState({value:e.value})),e.addChangeListener(this.handleParameterChange)}},{key:"unregisterParameterHandlers",value:function(e){e instanceof h.ValueParameter&&e.removeValueChangedListener(this.handleParameterValueChange),e.removeChangedListener(this.handleParameterChange)}}]),r}(n.Component),a.displayName="ParameterComponentWrapper(".concat(t.displayName||t.name,")"),r}},O=a(66),y=a(171),C=a(48),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){var t=a.props.parameter,n=!1;t&&t.widget&&(n=!!t.widget.needsConfirmation),n?a.handleDialogOpen():a.doSendBang()},a.handleDialogOpen=function(){return a.setState({isOpen:!0})},a.handleDialogConfirm=function(){a.setState({isOpen:!1}),a.doSendBang()},a.handleDialogCancel=function(){return a.setState({isOpen:!1})},a.state={isOpen:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.labelDisabled,t=this.props.label;return this.props.parameter&&(t=this.props.parameter.label),n.createElement("section",null,n.createElement(O.a,Object.assign({style:{whiteSpace:"nowrap"}},this.props,{text:e?"":t,onClick:this.handleClick})),n.createElement(y.a,{className:"bp3-dark ".concat(this.props.className),canEscapeKeyCancel:!0,cancelButtonText:"Cancel",confirmButtonText:"Send",icon:"warning-sign",intent:C.a.DANGER,isOpen:this.state.isOpen,onCancel:this.handleDialogCancel,onConfirm:this.handleDialogConfirm},n.createElement("p",null,this.props.confirmationText?this.props.confirmationText:"text ".concat(t,"?"),n.createElement("br",null),this.props.parameter&&this.props.parameter.description?"(".concat(this.props.parameter.description,")"):"")))}},{key:"doSendBang",value:function(){this.props.handleValue&&this.props.handleValue(null)}}]),t}(n.Component),j=(g()(E),a(164)),S=a(103),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.props.handleValue&&a.props.handleValue(e.target.checked),a.props.onSubmitCb&&a.props.onSubmitCb()},a.state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.value,a=this.props.parameter;return a&&(e=a.readonly),n.createElement(j.a,Object.assign({},this.props,{checked:t||!1,onChange:this.handleChange,disabled:!0===e,alignIndicator:S.a.LEFT,large:!0}))}}]),t}(n.Component),k=(g()(V),a(157)),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.props.handleValue&&a.props.handleValue(e.target.value),a.props.onSubmitCb&&a.props.onSubmitCb()},a.handleSubmit=function(e){e&&e.preventDefault&&e.preventDefault(),a.props.parameter instanceof h.ValueParameter&&(a.props.parameter.setStringValue(a.props.value)?a.props.onSubmitCb&&a.props.onSubmitCb():console.error("could not set stringvalue..."))},a.state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.value,a=this.props.parameter;return a&&(e=a.readonly),n.createElement(k.a,Object.assign({},this.props,{value:t,type:"color",onChange:this.handleChange,disabled:!0===e}))}}]),t}(n.Component),P=(g()(w),a(165)),T=a(37),x=a(166),D=a(167),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleButtonClick=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="no label",t=this.props.parameter;return t&&void 0!==t.label&&(e=t.label),n.createElement("div",{style:this.props.style},n.createElement(P.a,{vertical:!1},n.createElement(T.a,{icon:this.state.isOpen?"remove":"add",onClick:this.handleButtonClick}),n.createElement("div",{style:{marginLeft:10}}),n.createElement(x.a,null,e)),n.createElement(D.a,{isOpen:this.state.isOpen},this.props.children))}}]),t}(n.Component);R.COMPONENT_DEFAULT_COLOR=v.a.GRAY1;g({ignoreReadonly:!0})(R);var N=a(168),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.props.handleValue&&a.props.handleValue(e.target.value),a.props.onSubmitCb&&a.props.onSubmitCb()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a=this.props.value,r=this.props.parameter;return r&&(e=r.readonly),r instanceof h.EnumParameter&&(t=r.enumDefinition.entries),console.log("selected:"+a),console.log("entries:"+t),n.createElement(N.a,Object.assign({},this.props,{onChange:this.handleChange,disabled:!0===e,className:"test"}),this.renderOptions(a,t))}},{key:"renderOptions",value:function(e,t){if(t)return t.map(function(t){return n.createElement("option",Object.assign({},t===e?"selected":null,{key:t,value:t}),t)})}}]),t}(n.Component),A=(g()(L),a(172)),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e,t){a.props.handleValue&&a.props.handleValue(e),a.props.onSubmitCb&&a.props.onSubmitCb()},a.state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a,r,i=this.props.value,o=1,s=C.a.NONE,l=this.props.parameter;if(l){r=l.readonly,e=l.typeDefinition.datatype===h.RcpTypes.Datatype.FLOAT32||l.typeDefinition.datatype===h.RcpTypes.Datatype.FLOAT64;var c=l.typeDefinition;void 0!==c&&(void 0!==c.minimum&&void 0!==c.maximum&&(c.minimum<c.maximum?(t=c.minimum,a=c.maximum):(console.error("NumberInput: minimum >= maximum"),s=C.a.DANGER)),c.multipleof&&(o=c.multipleof))}return n.createElement(A.a,Object.assign({},this.props,{value:i||0,min:t,max:a,stepSize:o,minorStepSize:e?.1:1,onValueChange:this.handleChange,disabled:!0===r,selectAllOnFocus:!0,buttonPosition:S.a.RIGHT,placeholder:"-",intent:s}))}}]),t}(n.Component),G=(g()(B),a(170)),W=a(105),I=a.n(W),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.props.handleValue&&a.props.handleValue(e),a.props.continuous&&a.handleRelease(e)},a.handleRelease=function(e){a.props.onSubmitCb&&a.props.onSubmitCb()},a.renderLabel=function(e){var t,r=a.props.parameter,i=e.toFixed(2);return r&&(t=r.typeDefinition.unit),n.createElement("div",{style:{whiteSpace:"nowrap"}},t?"".concat(i," ").concat(t):i)},a.state={dimensions:{width:-1,height:-1}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a,r,i=this,o=this.props.value,s=1,l=this.props.parameter;if(l){r=l.readonly;var c=l.typeDefinition;if(void 0!==c&&void 0!==c.minimum&&void 0!==c.maximum){t=c.minimum,a=c.maximum;var u=c.maximum-c.minimum;e=l.typeDefinition.datatype===h.RcpTypes.Datatype.FLOAT32||l.typeDefinition.datatype===h.RcpTypes.Datatype.FLOAT64,c.multipleof?s=c.multipleof:e&&(s=u>0&&this.state.dimensions.width>0?u/this.state.dimensions.width:1)}}return n.createElement(I.a,{onResize:function(e){i.setState({dimensions:e.entry})}},function(l){var c=l.measureRef;return n.createElement("div",{ref:c},n.createElement(G.a,Object.assign({},i.props,{value:o||0,min:t,max:a,stepSize:s,labelPrecision:e?2:0,labelStepSize:a,onChange:i.handleChange,onRelease:i.handleRelease,labelRenderer:i.renderLabel,disabled:!0===r})))})}}]),t}(n.Component),H=(g()(F),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.props.handleValue&&a.props.handleValue(e.target.value)},a.handleSubmit=function(e){e&&e.preventDefault&&e.preventDefault(),a.props.parameter instanceof h.ValueParameter&&(a.props.parameter.setStringValue(a.props.value)?a.props.onSubmitCb&&a.props.onSubmitCb():console.error("could not set stringvalue..."))},a.state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.value,a=this.props.parameter;return a&&(e=a.readonly),n.createElement("form",{onSubmit:this.handleSubmit},n.createElement(k.a,Object.assign({},this.props,{value:t,onChange:this.handleChange,disabled:!0===e})))}}]),t}(n.Component)),U=(g()(H),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.parameter,t=this.props.defaultValue,a=this.props.label;if(e&&(a=e.label),void 0!==this.props.value&&null!==this.props.value&&(t=this.props.value),e instanceof h.NumberParameter){var r=e.typeDefinition;void 0!==this.props.fixedNumber&&(t=this.props.value.toFixed(this.props.fixedNumber)),r.unit&&(t+=" "+e.typeDefinition.unit),r.maximum&&r.minimum&&(e.value<r.minimum||e.value>r.maximum)&&(t="Err")}return n.createElement("section",{style:this.props.style},n.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:"1px 0px 2px 0px"}},n.createElement("div",{style:{width:this.props.labelDisabled?0:this.props.labelWidth?this.props.labelWidth:void 0,color:this.props.disabled?v.a.GRAY1:v.a.LIGHT_GRAY5}},this.props.labelDisabled?"":a),n.createElement("div",{style:{marginLeft:this.props.labelDisabled?0:"6px",background:v.a.DARK_GRAY1,flex:"content",flexGrow:1}},n.createElement("div",{style:{margin:this.props.labelDisabled?0:"0px 0px 0px 6px",color:this.props.disabled?v.a.GRAY1:v.a.LIGHT_GRAY5,whiteSpace:"nowrap"}},t))))}}]),t}(n.Component)),Y=(g({ignoreReadonly:!0})(U),function(e){function t(e){var a,n;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getWidth=function(){return 1},a.handleValueChange=function(e){a.props.parameter instanceof h.ValueParameter&&(a.props.parameter.value=e),a.setState({value:e})},a.handleValueSubmit=function(e){console.log("submit"),e&&e.preventDefault&&e.preventDefault(),a.props.parameter instanceof h.ValueParameter&&(a.props.parameter.setStringValue(a.state.value)?a.props.onSubmitCb():(console.error("could not set stringvalue..."),a.setState({value:a.props.parameter.value})))},a.handleButtonClick=function(){a.props.parameter.setDirty(),a.props.onSubmitCb()},a.props.parameter instanceof h.ValueParameter&&null!=a.props.parameter.value&&(n=a.props.parameter.value),a.state={enabled:!0,label:a.props.parameter.label,description:a.props.parameter.description,value:n,dimensions:{width:-1,height:-1}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.parameter;t instanceof h.ValueParameter&&t.addValueChangeListener(function(t){t instanceof h.ValueParameter&&e.setState({value:t.value})}),t.addChangeListener(function(t){e.setState({label:t.label,description:t.description})})}},{key:"createChildWidget",value:function(e){return n.createElement(t,{key:e.id,parameter:e,onSubmitCb:this.props.onSubmitCb})}},{key:"renderChildren",value:function(e){var t=this;if(e instanceof h.GroupParameter)return e.children.map(function(e){return t.createChildWidget(e)})}},{key:"renderValue",value:function(e){var t=e.widget;if(t instanceof h.SliderWidget?console.log("SLIDER WIDGET"):t instanceof h.NumberboxWidget&&console.log("NUMBERBOX WIDGET"),e instanceof h.ValueParameter){if(e instanceof h.NumberParameter){var a=e.typeDefinition;return t instanceof h.NumberboxWidget||void 0===a||void 0===a.minimum||void 0===a.maximum?n.createElement("div",null,n.createElement("div",{style:b},e.label),n.createElement(B,Object.assign({},this.props,{value:this.state.value,handleValue:this.handleValueChange}))):a.minimum<a.maximum?n.createElement("div",null,n.createElement("div",{style:b},e.label),n.createElement(F,Object.assign({},this.props,{value:this.state.value,handleValue:this.handleValueChange,continuous:!0}))):(console.error("ParameterWidget: minimum >= maximum"),this.defaultWidet())}if(e instanceof h.Vector3F32Parameter)return n.createElement("div",null,"vector");if(e instanceof h.BooleanParameter)return n.createElement("div",null,n.createElement("div",{style:b},e.label),n.createElement("br",null),n.createElement(V,Object.assign({},this.props,{value:this.state.value,handleValue:this.handleValueChange})));if(e instanceof h.RGBAParameter||e instanceof h.RGBParameter)return n.createElement("div",null,n.createElement("div",{style:b},e.label),n.createElement("br",null),n.createElement(w,Object.assign({},this.props,{value:this.state.value,handleValue:this.handleValueChange})));if(e instanceof h.EnumParameter)return n.createElement("div",null,n.createElement("div",{style:b},e.label),n.createElement("br",null),n.createElement(L,Object.assign({},this.props,{value:this.state.value,handleValue:this.handleValueChange})));if(e instanceof h.ImageParameter){var r=new Blob([e.value]),i=window.URL.createObjectURL(r);return n.createElement("div",null,n.createElement("div",{style:b},e.label),n.createElement("br",null),n.createElement("img",{src:i,alt:"IMAGE",height:200}))}return n.createElement("div",null,n.createElement("div",{style:b},e.label),n.createElement("br",null),n.createElement(H,Object.assign({},this.props,{value:this.state.value,handleValue:this.handleValueChange})))}return e instanceof h.GroupParameter?n.createElement(R,Object.assign({},this.props,{value:this.state.value,handleValue:this.handleValueChange}),this.renderChildren(e)):e instanceof h.BangParameter?n.createElement(E,Object.assign({},this.props,{value:this.state.value,handleValue:this.handleButtonClick})):void 0}},{key:"render",value:function(){var e=this.props.parameter;return e?n.createElement("div",{style:{marginTop:20,marginBottom:0}},n.createElement(d.a,{interactive:!1},this.renderValue(e))):(console.error("no parameter"),n.createElement("div",null,"no parameter"))}},{key:"defaultWidet",value:function(){return n.createElement(U,Object.assign({},this.props,{value:this.state.value}))}}]),t}(n.Component)),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).myParameters=[],a.updateClient=function(){a.state.client&&a.state.client.update()},a.setHost=function(e){a.setState({host:e.currentTarget.value})},a.setPort=function(e){a.setState({port:parseInt(e.currentTarget.value,10)})},a.handleAlertConfirm=function(){a.setState({error:void 0}),void 0===a.state.host||""===a.state.host||isNaN(a.state.port)||a.doConnect()},a.doDisconnect=function(){var e=a.state.client;e&&(e.connected=void 0,e.disconnected=void 0,e.onError=void 0,e.parameterAdded=void 0,e.parameterRemoved=void 0,e.dispose()),a.resetUI()},a.doConnect=function(){h.Client.VERBOSE=!0;var e=new h.Client(new h.WebSocketClientTransporter),t=Object(m.a)(Object(m.a)(a)),n=t.connected,r=t.disconnected,i=t.parameterAdded,o=t.parameterRemoved,s=t.onError;Object.assign(e,{connected:n,disconnected:r,parameterAdded:i,parameterRemoved:o,onError:s});var l=a.state.host,c=a.state.port;a.setState({client:e,error:void 0}),e.connect(l,c)},a.connected=function(){a.setState({isConnected:!0}),console.log("ConnectionDialog connected!")},a.disconnected=function(e){console.log("ConnectionDialog disconneted: "+JSON.stringify(e)),a.setState({error:"disconnected".concat(e.reason?": "+JSON.stringify(e.reason):"")}),a.resetUI()},a.onError=function(){console.log("error on socket!"),a.setState({error:"error on socket!"}),a.resetUI()},a.parameterAdded=function(e){if(!e.parent){var t=a.myParameters.slice();t.push(e),a.myParameters=t}void 0!==a.addTimer&&(window.clearTimeout(a.addTimer),a.addTimer=void 0),a.addTimer=window.setTimeout(function(){a.setState({parameters:a.myParameters})},100)},a.parameterRemoved=function(e){var t=a.myParameters.indexOf(e,0);t>-1&&a.myParameters.splice(t,1),void 0!==a.removeTimer&&(window.clearTimeout(a.removeTimer),a.removeTimer=void 0),a.removeTimer=window.setTimeout(function(){a.setState({parameters:a.myParameters})},100)},a.state={isConnected:!1,host:"localhost",port:1e4,parameters:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"createParameterWidget",value:function(e){return n.createElement(Y,{key:e.id,parameter:e,onSubmitCb:this.updateClient})}},{key:"createWidgets",value:function(e){var t=this;return e.map(function(e){return t.createParameterWidget(e)})}},{key:"render",value:function(){var e=this.state.host,t=this.state.port;return n.createElement("section",null,this.createWidgets(this.state.parameters),n.createElement(y.a,{className:"bp3-dark",confirmButtonText:"Connect",icon:"offline",intent:C.a.NONE,isOpen:!0!==this.state.isConnected,onConfirm:this.handleAlertConfirm},n.createElement(x.a,null,n.createElement("strong",null,"Connect to a RabbitControl server")),n.createElement("br",null),n.createElement("br",null),n.createElement(P.a,{style:{alignItems:"center"}},n.createElement(x.a,null,"Host:\xa0"),n.createElement(k.a,{value:e,type:"text",onChange:this.setHost})),n.createElement("br",null),n.createElement(P.a,{style:{alignItems:"center"}},n.createElement(x.a,null,"Port:\xa0"),n.createElement(k.a,{value:t.toFixed(0),min:1024,max:65535,type:"number",onChange:this.setPort})),n.createElement("br",null),n.createElement("div",null,this.state.error?this.state.error:void 0,this.returnSSLInfo())))}},{key:"returnSSLInfo",value:function(){var e=!!document.location&&document.location.toString().startsWith("https"),t=-1!=navigator.userAgent.indexOf("Firefox");return e&&t?n.createElement("div",null,n.createElement("br",null),f,n.createElement("br",null),n.createElement("br",null),"To allow this please set: 'network.websocket.allowInsecureFromHTTPS' in 'about:config' to 'true'."):e?n.createElement("div",null,n.createElement("br",null),f):void 0}},{key:"resetUI",value:function(){this.stopTimers(),this.myParameters=[],this.setState({isConnected:!1,client:void 0,parameters:this.myParameters})}},{key:"stopTimers",value:function(){void 0!==this.addTimer&&(window.clearTimeout(this.addTimer),this.addTimer=void 0),void 0!==this.removeTimer&&(window.clearTimeout(this.removeTimer),this.removeTimer=void 0)}}]),t}(n.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"bp3-dark"},r.a.createElement("div",{className:"App",style:{margin:"30px"}},r.a.createElement(_,null)))}}]),t}(n.Component);z.VERBOSE_LOG=!1;var M=z;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.ebf67559.chunk.js.map