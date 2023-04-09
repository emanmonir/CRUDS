var siteNameInput = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var nameError1Input = document.getElementById('nameError1');
var nameError2Input = document.getElementById('nameError2');
var urlErrorInput = document.getElementById('urlError');

var dataContainer=[]

if(localStorage.getItem("setdata") !=null)
{
    dataContainer=JSON.parse(localStorage.getItem("setdata"));
    displayData(dataContainer);
}

function addData()
{
    if(siteNameInput.value !="" && siteUrl.value !="" ){
    var data={
        name:siteNameInput.value,
        url: siteUrl.value
    }
    
   dataContainer.push(data);
   localStorage.setItem("setdata" ,JSON.stringify(dataContainer));
   displayData(dataContainer);
   nameError1Input.classList.replace('d-block' , 'd-none');
   urlErrorInput.classList.replace('d-block' , 'd-none');
   nameError2Input.classList.replace('d-block' , 'd-none');
   clearData();

   
}
else if(siteNameInput.value =="" && siteUrl.value =="")
{
    nameError1Input.classList.replace('d-none' , 'd-block');
    urlErrorInput.classList.replace('d-none' , 'd-block');
}
else if(siteNameInput.value =="")
{
    nameError1Input.classList.replace('d-none' , 'd-block');
    nameError2Input.classList.replace('d-block' , 'd-none');
    urlErrorInput.classList.replace('d-block' , 'none');

}
else if(siteUrl.value =="" )
{
    urlErrorInput.classList.replace('d-none' , 'd-block');
    nameError2Input.classList.replace('d-none' , 'd-block');
    nameError1Input.classList.replace('d-block' , 'd-none');

}
}
function displayData(arr)
{
    var cartona='';
    for(var i=0 ; i<arr.length ; i++)
    {
       cartona +=`<div class="cont-inner-info ">
       <h2 class="head-input w-25">${arr[i].name}</h2>
       <a class="btn btn-primary mx-1 " href="${arr[i].url}" id="nav" target="_blank">visit</a>
       <button class="btn btn-danger btndelete mx-1" onclick="deleteData(${i});">Delete</button>
   </div>`
    }
    document.getElementById('displayInput').innerHTML=cartona;
}
function clearData()
{
    siteNameInput.value="";
    siteUrl.value=""
}
function deleteData(dataIndex)
{
    dataContainer.splice(dataIndex,1);
    localStorage.setItem("setdata" ,JSON.stringify(dataContainer));
    displayData(dataContainer);
}









