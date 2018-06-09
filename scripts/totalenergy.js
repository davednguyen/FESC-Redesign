var totalEngergyButton = new Vue({
    el:'#energy',
    data:{
        name:'veu.js'
    },
    methods:{
        displayChart:function(){
            var displayInfo = document.getElementById("totalenergypage").style.display;
            if(displayInfo === "inline"){
                document.getElementById("totalenergypage").style.display = "none";
                document.getElementById("displayButton").innerHTML = "Show energy chart";
            }else{
                document.getElementById("totalenergypage").style.display = "inline";
                document.getElementById("displayButton").innerHTML = "Hide energy chart";
            }  
        }
    }
});
