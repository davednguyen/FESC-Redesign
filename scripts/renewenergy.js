var totalEngergyButton = new Vue({
    el:'#renewenergy',
    data:{
        name:'veu.js'
    },
    methods:{
        displayChart:function(){
            var displayInfo = document.getElementById("renewalenergypage").style.display;
            if(displayInfo === "inline"){
                document.getElementById("renewalenergypage").style.display = "none";
                document.getElementById("displayButton").innerHTML = "Show renewenergy chart";
            }else{
                document.getElementById("renewalenergypage").style.display = "inline";
                document.getElementById("displayButton").innerHTML = "Hide renewenergy chart";
            }  
        },
        displayTable:function(){
            var displayInfo = document.getElementById("tableChart").style.display;
            if(displayInfo === "inline"){
                document.getElementById("tableChart").style.display = "none";
                document.getElementById("displayTableButton").innerHTML = "Show table chart";
            }else{
                document.getElementById("tableChart").style.display = "inline";
                document.getElementById("displayTableButton").innerHTML = "Hide table chart";
            }
        },
        displayAll:function(){
           
        }
    }
});