function renkDegistir(){
  const b=document.getElementById("baslik");
  const r=["#ff6f61","#6b5b95","#88b04b","#f7cac9","#92a8d1"];
  b.style.color=r[Math.floor(Math.random()*r.length)];
}
function arkaPlanDegistir(){
  const g=[
    "linear-gradient(135deg,#ff9a9e,#fad0c4)",
    "linear-gradient(135deg,#a1c4fd,#c2e9fb)",
    "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
    "linear-gradient(135deg,#d4fc79,#96e6a1)",
    "linear-gradient(135deg,#84fab0,#8fd3f4)"
  ];
  document.body.style.background=g[Math.floor(Math.random()*g.length)];
}
alert("Hoş geldin İlay 🌸 Bu site artık senin playground’un!");
