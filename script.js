//change time here (in ms)
let time = 30000;
//refresh the page every ... cycles
//let cycle = 5;
//hold loading (in ms)
let loadingtime = 5000;

//link source
let src1 = 'https://app.powerbi.com/reportEmbed?reportId=1c52d4da-470f-4462-a3dc-8b5377e1f55b&autoAuth=true&ctid=df225f27-4dfa-4323-b602-4ff986b75ec6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&pageName=ReportSection';
let src2 = 'https://app.powerbi.com/reportEmbed?reportId=1c52d4da-470f-4462-a3dc-8b5377e1f55b&autoAuth=true&ctid=df225f27-4dfa-4323-b602-4ff986b75ec6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&pageName=ReportSectionb98d1345b28b34c59327';
let src3 = 'https://app.powerbi.com/reportEmbed?reportId=1c52d4da-470f-4462-a3dc-8b5377e1f55b&autoAuth=true&ctid=df225f27-4dfa-4323-b602-4ff986b75ec6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&pageName=ReportSectionf1305bd496fba9327ed4';
let src4 = 'https://app.powerbi.com/reportEmbed?reportId=1c52d4da-470f-4462-a3dc-8b5377e1f55b&autoAuth=true&ctid=df225f27-4dfa-4323-b602-4ff986b75ec6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&pageName=ReportSection7b660b571d9d6b370387';
let src5 = 'https://app.powerbi.com/reportEmbed?reportId=1c52d4da-470f-4462-a3dc-8b5377e1f55b&autoAuth=true&ctid=df225f27-4dfa-4323-b602-4ff986b75ec6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&pageName=ReportSection91fe60c625ff2d33ce8a';

//variables
let page1 = '<iframe title="Dashboard IT_MIS" width="100%" height="100%" src="'+src1+'" frameborder="2" allowFullScreen="true"></iframe>';
let page2 = '<iframe title="Dashboard IT_MIS" width="100%" height="100%" src="'+src2+'" frameborder="2" allowFullScreen="true"></iframe>';
let page3 = '<iframe title="Dashboard IT_MIS" width="100%" height="100%" src="'+src3+'" frameborder="2" allowFullScreen="true"></iframe>';
let page4 = '<iframe title="Dashboard IT_MIS" width="100%" height="100%" src="'+src4+'" frameborder="2" allowFullScreen="true"></iframe>';
let page5 = '<iframe title="Dashboard IT_MIS" width="100%" height="100%" src="'+src5+'" frameborder="2" allowFullScreen="true"></iframe>';

//first appear
document.getElementById("pages_1").innerHTML = page1;
document.getElementById("pages_2").innerHTML = page2;

//wait loading
setTimeout(function() {
    //change the page with scroll
    setTimeout(function(){
        document.getElementById("pages_1").innerHTML = '';
        window.location.hash = '#pages_2';
        document.getElementById("pages_3").innerHTML = page3;
    }, time);
    setTimeout(function(){
        document.getElementById("pages_2").innerHTML = '';
        window.location.hash = '#pages_3';
        document.getElementById("pages_4").innerHTML = page4;
    }, time*2);
    setTimeout(function(){
        document.getElementById("pages_3").innerHTML = '';
        window.location.hash = '#pages_4';
        document.getElementById("pages_5").innerHTML = page5;
    }, time*3);
    setTimeout(function(){
        document.getElementById("pages_4").innerHTML = '';
        window.location.hash = '#pages_5';
        document.getElementById("pages_1").innerHTML = page1;
    }, time*4);
    setTimeout(function(){
        document.getElementById("pages_5").innerHTML = '';
        window.location.hash = '#pages_1';
        document.getElementById("pages_2").innerHTML = page2;
    }, time*5);

    let ulang = setInterval(function(){
        setTimeout(function(){
            document.getElementById("pages_1").innerHTML = '';
            window.location.hash = '#pages_2';
            document.getElementById("pages_3").innerHTML = page3;
        }, time);
        setTimeout(function(){
            document.getElementById("pages_2").innerHTML = '';
            window.location.hash = '#pages_3';
            document.getElementById("pages_4").innerHTML = page4;
        }, time*2);
        setTimeout(function(){
            document.getElementById("pages_3").innerHTML = '';
            window.location.hash = '#pages_4';
            document.getElementById("pages_5").innerHTML = page5;
        }, time*3);
        setTimeout(function(){
            document.getElementById("pages_4").innerHTML = '';
            window.location.hash = '#pages_5';
            document.getElementById("pages_1").innerHTML = page1;
        }, time*4);
        setTimeout(function(){
            document.getElementById("pages_5").innerHTML = '';
            window.location.hash = '#pages_1';
            document.getElementById("pages_2").innerHTML = page2;
        }, time*5);
    }, time*5);
}, loadingtime);

/*setInterval(function(){
    clearInterval(ulang);
    setTimeout(function(){
        location.reload();
    }, 1000);
},(time*(5*cycle))+loadingtime);*/