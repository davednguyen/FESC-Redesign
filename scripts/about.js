var blocks = [
    {class:"main-content",
    divclass:"col-sm",
    rowclass:"row",
    img:null,
    content:"FESC’s leadership team and organizational structure assure that truly leading edge research and development of critical importance to the Florida and national economies are developed, world-class students in multiple disciplines of energy are trained, and industry reaps the full benefits of the Consortium’s activities."},
    {class:"main-content",
    divclass:"col-sm",
    rowclass:"row",
    img:"images/about.jpg",
    content:null},
    {class:"main-content",
    divclass:"col-sm",
    rowclass:"row",
    content:"The Leadership Team of FESC is comprised of highly experienced, highly successful innovators from the various energy related research fields, education, outreach, industrial collaboration, technology commercialization, and economic development."},
    {class:"main-content",
    divclass:"col-sm",
    rowclass:"row",
    img:null,
    content:" The FESC Director, Dr. Jennifer Curtis, is accountable for all mission activities of the Consortium and is assisted in his efforts by a Steering Committee, and Associate Directors in Industrial Collaboration & Commercialization, Education & Outreach, and Program Development."},
    {class:"main-content",
    divclass:"col-sm",
    rowclass:"row",
    img:null,
    content:"The goal of the consortium is to become a world leader in energy research, education, technology, and energy systems analysis. The specific goals include: Coordinate and initiate collaborative interdisciplinary energy research among the universities and the energy industry. Share research results with a wide audience, including the science community, media, business, governments, and industry. Assist in the creation and development of a Florida-based energy technology industry Provide a state resource for objective energy systems analysis. Develop education and outreach programs to prepare a qualified energy workforce and informed public."}
];

var app = new Vue({
    el:'#app',
    data:{
      src:'<img src="images/about.jpg">',
      image:'"images/about.jpg',
      h1:'About Us',
      listblocks: blocks      
}});

