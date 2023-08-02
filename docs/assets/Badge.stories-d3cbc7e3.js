import{j as e}from"./jsx-runtime-ffb262ed.js";import{P as r}from"./index-8d47fad6.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({size:t,color:m,primary:u,fn:f})=>e.jsx(e.Fragment,{children:e.jsxs("section",{className:"container",children:[e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fill:m,d:"M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"})}),e.jsx("div",{className:`counter counter--${u}`,onClick:f,children:t})]})});s.propTypes={size:r.number,color:r.string,primary:r.bool,fn:r.func};s.defaultProps={size:50,color:"#F90",primary:!0,fn:()=>{console.log("Me hiciste click")}};s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{size:{defaultValue:{value:"50",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'#F90'",computed:!1},type:{name:"string"},required:!1,description:""},primary:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},fn:{defaultValue:{value:`() => {
  console.log('Me hiciste click');
}`,computed:!1},type:{name:"func"},required:!1,description:""}}};const v={title:"Example/Badge",component:s,argTypes:{color:{control:"color"}}},a={args:{primary:!0}},o={args:{primary:!1}};var c,n,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: true
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: false
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["Primary","Secondary"];export{a as Primary,o as Secondary,j as __namedExportsOrder,v as default};
//# sourceMappingURL=Badge.stories-d3cbc7e3.js.map
