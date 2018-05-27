var tiles1 = [
    {name:"Home",
     href:"home.html",
     src:null,
     class:'col-sm menu-1'},
    {name:"About Us",
     href:"about.html",
     src:null, 
     class:'col-sm menu-2',},
    {name:"Energy Industry",
     href:"fl-energy-industry.html",
     src:null,
     class:'col-sm menu-3'}
];

var tiles2 = [
    {name:"Total Consumption",
     href:"totalenergy.html",
     src:"images/charticon.png",
     class:'col-sm menu-4'},
    {name:"Design ideas",
     href:"design.html",
     src:null,
     class:'col-sm menu-5'},
    {name:"Renewable energyn",
     href:"renewenergy.html",
     src:"images/charticon.png",
     class:'col-sm menu-6'}
];

var app = new Vue({
    el:'#app',
    data:{
      toptile: tiles1,
      bottomtile: tiles2,
      message:'Home',
      home:"Home"
    }});

