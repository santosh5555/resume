
function newpage() {
  window.open ('resume.html','_self',false)
}
function jsonResume() {
  window.open ('santosh_resume.html','_self',false)

}

function results() {
  fname = document.getElementById("fname").value;
}
// window.onload = function() {
//     /* Add your logic here */
//     document.getElementById('name').innerHTML=fname;
//
// }

(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("resources/data.json", function(text){
    let data = JSON.parse(text);
    console.log(data);

    name(data.basics.name1);
    Phone(data.basics.phone);
    label(data.basics.label);
    sonof(data.basics.sonof);
    email(data.basics.email);
    address(data.basics.location.address);
    languages(data.basics.location.languages);
    career(data.basics.co);
    expe(data.basics.expe);
    Graduation(data.basics.Graduation);
    inter(data.basics.Intermediate);
    ssc(data.basics.ssc);
    os(data.basics.technicalSkil.os);
    lang(data.basics.technicalSkil.lang);
    tools(data.basics.technicalSkil.tools);
    wt(data.basics.technicalSkil.wt);
    av1(data.basics.acheive.av1);
    av2(data.basics.acheive.av2);
    av3(data.basics.acheive.av3);

  });

  var resumeDiv = document.getElementById('profile');

  // function creatingSummary(summary){
  //   // var section = document.createElement("section");
  //   // section.classList.add("section", "main-summary");
  //   // var summary_section = document.createElement("section")
  //   var div = document.getElementById("f2");
  //   div.innerHTML = summary;
  //   // summary_section.appendChild(div);
  //   // section.appendChild(summary_section);
  //   // resumeDiv.appendChild(section);

  // }

  function name(name1) {
    var santosh=document.getElementById("n");
    santosh.innerHTML=name1;

  }
function Phone(phone) {
  var div=document.getElementById("phon");
  div.innerHTML=phone;

}
function label(label) {
  var lab=document.getElementById("h");
  lab.innerHTML=label;
}
function sonof(sonof) {
  var so=document.getElementById("ds");
  so.innerHTML=sonof;

}
function email(email) {
  var ma=document.getElementById("sd");
  ma.innerHTML=email;

}
function address(address){
  var dd=document.getElementById("ad");
  dd.innerHTML=address;
}
function languages(languages){
  var la=document.getElementById("lang");
  la.innerHTML=languages;
}
function career(co) {
  var oc=document.getElementById("ha");
  oc.innerHTML=co;

}
function expe(expe) {
  var ex=document.getElementById("ex");
  ex.innerHTML=expe;

}
function Graduation(Graduation){
  var gr=document.getElementById("Graduatio");
  gr.innerHTML=Graduation;
}
function inter(Intermediate){
  var int=document.getElementById("inter");
  int.innerHTML=Intermediate;

}
function ssc(ssc) {
  var ss=document.getElementById("ssc");
  ss.innerHTML=ssc;

}
function os(os){
  var so=document.getElementById("os");
  so.innerHTML=os;
}
function lang(lang){
  var lg=document.getElementById("lag");
  lg.innerHTML=lang;
}
function tools(tools){
  var to=document.getElementById("tools");
  to.innerHTML=tools;
}
function wt(wt){
  var tw=document.getElementById("wt");
tw.innerHTML=wt;

}
function av1(av1){
  var av=document.getElementById("a1");
  av.innerHTML=av1;
}
function av2(av2){
  var avh=document.getElementById("a2");
  avh.innerHTML=av2;
}
function av3(av3) {
  var ave=document.getElementById("a3");
  ave.innerHTML=av3;

}

  })();
