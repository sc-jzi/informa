var wln=wln||"";(function(){function t(n){n.style.display="none"}function n(n){n.style.display="inline-block"}if(sj_evt&&Identity){var i=function(){var f=_ge("id_n"),i=_ge("id_p"),e=_ge("id_s"),o=_ge("id_a"),u=Identity.fbProfile()||Identity.wlProfile(),r=u?u.displayName:wln,s=u?u.img:null,h=u?u.idp:null;f&&e&&o&&r?(i&&s&&(i.title=r,i.src=s,n(i)),r.length>10&&(r=r.substring(0,10).replace(/\s+$/,"")+"…"),f.textContent=r,f.innerText=r,n(f),t(e),t(o),h=="WL"&&i&&(i.style.className+=" sw_spd")):f&&e&&o&&(t(f),i&&t(i),n(e),n(o))};sj_evt.bind("fb:connected",i,1),sj_evt.bind("wl:auth",i,1),sj_evt.bind("fb:auth",i,1)}})()