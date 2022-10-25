var i=Object.defineProperty;var y=(o,t,e)=>t in o?i(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{E as m}from"./elk.bundled.d59b6e15.js";import{d as u,o as f,c as l}from"./index.0d744d74.js";class g{constructor(){c(this,"elk",new m({}))}getInterfaceName(t,e){return t+e.charAt(0)+e.slice(1).toLowerCase()}async GenerateLayoutOptionsTypes(){const t=await this.elk.knownLayoutOptions(),e="LayoutOptions",a=new Set;t.forEach(s=>{var n;(n=s.targets)==null||n.forEach(r=>a.add(r))});let p="";return a.forEach(s=>{p+=`export interface ${this.getInterfaceName(e,s)} {
        ${t.filter(n=>{var r;return(r=n.targets)==null?void 0:r.includes(s)}).map(n=>{var r;return`/** ${n.name}: 
* ${n.description}
*/
"${(r=n.id)==null?void 0:r.slice(12)}"?: ${n.type=="STRING"?"string":n.type=="DOUBLE"||n.type=="INT"?"number":n.type=="BOOLEAN"?"boolean":"any"}`}).join(`
`)}
          
        
        [key: string]: any
      }

`}),p+=`export interface ${e} extends ${[...a].map(s=>this.getInterfaceName(e,s)).join(", ")} {

    }`,p}}const E=u({__name:"TempTest",setup(o){return new g().GenerateLayoutOptionsTypes().then(e=>console.log(e)),(e,a)=>(f(),l("div",null,"Testseite f\xFCr tempor\xE4re Tests"))}});export{E as default};
