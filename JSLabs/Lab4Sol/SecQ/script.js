window.addEventListener('load', function () {
    myTable=document.getElementsByTagName("table")[0];
    document.getElementById("new-task-submit").addEventListener('click',function(){
        var newRow=document.createElement("tr");
        var col1=document.createElement("td");
        var col2=document.createElement("td");
        var col3=document.createElement("td");
        usr_txt=document.querySelector('input[type=text]').value; // css propetry 
        if(CheckisEmpty(usr_txt)){  
        col1.innerText=usr_txt;
        col2.innerHTML=`<input  id='chkbox' type='checkbox'/>`;
        col3.innerHTML="<img id=\"trash\" src=\"./trash1.jpg\" width=\"20px\" height=\"20px\">";
       
        newRow.appendChild(col2);
        newRow.appendChild(col1);
        newRow.appendChild(col3);
        myTable.appendChild(newRow);

 

        document.querySelectorAll("input[type='checkbox']").forEach((e)=>{
            e.onchange = function(e){
                var P=document.getElementById("chkbox").parentNode.parentNode.childNodes[1];
                if(e.target.checked){
                P.style.textDecoration = "line-through";
                }
                else{
                P.style.textDecoration="none";
                }
        
        }   });

        var TrashImg = document.querySelectorAll('img');;
        TrashImg.forEach(e=>{
            e.style.cursor="pointer";
            e.onclick=function(e){
                document.getElementById("trash").parentNode.parentNode.remove();  
            }
        }   ); }
        
    });

    
    

});
function  CheckisEmpty(txt){
    if (txt=="") return false;
    else return true;
}