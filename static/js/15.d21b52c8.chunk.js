(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[15],{127:function(n,e,t){},136:function(n,e,t){"use strict";t.r(e);var r=t(3),c=t(1),i=t(88),o=t(89),a=t(0),g=t(5),f=t.n(g),u=t(74),v=t(78),l=t(63),s=t(32),d=t(12),m=t(24),p=t(2),x=t(80);t(127),e.default=function(n){var e=Object(s.c)(),t=e.rgbBackground,g=e.themeId,y=e.colorWhite,z=Object(a.useRef)(Date.now()),_=Object(a.useRef)(),P=Object(a.useRef)(),b=Object(a.useRef)(),w=Object(a.useRef)(),h=Object(a.useRef)(),j=Object(a.useRef)(),O=Object(a.useRef)(),R=Object(a.useRef)(),S=Object(a.useRef)(),E=Object(a.useRef)(),L=Object(a.useRef)(),F=Object(a.useRef)(),I=Object(d.h)(),A=Object(d.d)(_),C=Object(d.l)();return Object(a.useEffect)((function(){var n=window,e=n.innerWidth,t=n.innerHeight;return P.current=new u.Jb(.8,.5),b.current=new u.Ob({canvas:_.current,antialias:!1,powerPreference:"high-performance"}),b.current.setSize(e,t),b.current.setPixelRatio(1),b.current.outputEncoding=u.Pb,w.current=new u.fb(54,e/t,.1,100),w.current.position.z=52,h.current=new u.sb,R.current=new u.U,R.current.onBeforeCompile=function(n){O.current=u.Hb.merge([u.Gb.ambient,u.Gb.lights,n.uniforms,{time:{type:"f",value:0}}]),n.uniforms=O.current,n.vertexShader="\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfloat turbulence(vec3 p) {\n  float w = 100.0;\n  float t = -.5;\n  for (float f = 1.0 ; f <= 10.0 ; f++) {\n    float power = pow(2.0, f);\n    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\n  }\n  return t;\n}\n\n// START\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying float noise;\n\nvarying vec3 vViewPosition;\n\nvoid main() {\n  #include <beginnormal_vertex>\n  #include <defaultnormal_vertex>\n  #include <begin_vertex>\n  #include <project_vertex>\n  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n    vNormal = normalize(transformedNormal);\n  #endif\n\n  vViewPosition = - mvPosition.xyz;\n\n  vUv = uv;\n\n  noise = turbulence(0.01 * position + normal + time * 0.8);\n  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\n}\n",n.fragmentShader="\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 newPosition;\nvarying float noise;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <envmap_physical_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n  #include <clipping_planes_fragment>\n\n  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\n  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\n  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n\n  #include <logdepthbuf_fragment>\n  #include <map_fragment>\n  #include <color_fragment>\n  #include <alphamap_fragment>\n  #include <alphatest_fragment>\n  #include <specularmap_fragment>\n  #include <normal_fragment_begin>\n  #include <normal_fragment_maps>\n  #include <emissivemap_fragment>\n  #include <lights_phong_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_maps>\n  #include <lights_fragment_end>\n  #include <aomap_fragment>\n\n  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n  #include <envmap_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n}\n"},S.current=new u.xb(32,128,128),E.current=new u.R(S.current,R.current),E.current.position.z=0,E.current.modifier=Math.random(),h.current.add(E.current),function(){Object(x.b)(h.current),Object(x.a)(b.current)}}),[]),Object(a.useEffect)((function(){var n=new u.o(y,.6),e=new u.b(y,"light"===g?.8:.1);return n.position.z=200,n.position.x=100,n.position.y=100,j.current=[n,e],h.current.background=Object(i.a)(u.l,Object(o.a)(Object(p.f)(t))),j.current.forEach((function(n){return h.current.add(n)})),function(){Object(x.c)(j.current)}}),[t,y,g]),Object(a.useEffect)((function(){var n=C.width,e=C.height,t=e+.3*e;b.current.setSize(n,t),w.current.aspect=n/t,w.current.updateProjectionMatrix(),I&&b.current.render(h.current,w.current),n<=p.a.mobile?(E.current.position.x=14,E.current.position.y=10):n<=p.a.tablet?(E.current.position.x=18,E.current.position.y=14):(E.current.position.x=22,E.current.position.y=16)}),[I,C]),Object(a.useEffect)((function(){var n=function(n){var e=E.current.rotation,t=n.clientX/window.innerWidth,r=n.clientY/window.innerHeight;F.current||(F.current=Object(v.g)(e.toArray(),(function(n){return e.set(n[0],n[1],E.current.rotation.z)}))),L.current=Object(v.e)({from:F.current.get(),to:[r/2,t/2],stiffness:30,damping:20,velocity:F.current.getVelocity(),mass:2,restSpeed:1e-4}).start(F.current)};return!I&&A&&window.addEventListener("mousemove",n),function(){var e;window.removeEventListener("mousemove",n),null===(e=L.current)||void 0===e||e.stop()}}),[A,I]),Object(a.useEffect)((function(){var n;return!I&&A?function e(){n=requestAnimationFrame(e),void 0!==O.current&&(O.current.time.value=5e-5*(Date.now()-z.current)),E.current.rotation.z+=.001,b.current.render(h.current,w.current)}():b.current.render(h.current,w.current),function(){cancelAnimationFrame(n)}}),[A,I]),Object(c.jsx)(l.a,{appear:!0,in:!0,onEnter:m.b,timeout:3e3,children:function(e){return Object(c.jsx)("canvas",Object(r.a)({"aria-hidden":!0,className:f()("displacement-sphere","displacement-sphere--".concat(e)),ref:_},n))}})}},88:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(93),c=t(95);function i(n,e,t){return(i=Object(c.a)()?Reflect.construct:function(n,e,t){var c=[null];c.push.apply(c,e);var i=new(Function.bind.apply(n,c));return t&&Object(r.a)(i,t.prototype),i}).apply(null,arguments)}}}]);
//# sourceMappingURL=15.d21b52c8.chunk.js.map