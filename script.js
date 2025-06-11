function hideOverlay(){
    const overlayDiv = document.querySelectorAll(".overlay");
    for(let i = 0; i<overlayDiv.length; i++){
        overlayDiv[i].style.display = "none";
    }
}

function showOverlay(val){
    const overlayDiv = document.querySelectorAll(".overlay");
    overlayDiv[val].style.display = "block";
}

function DummyAddTable(){
    //ダミー処理

    const mainTable = document.querySelector("#main")
    const now = new Date()
    for(let i=0; i<100; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("onclick","testAlt()");
        let dataID = document.createElement("p")
        let newData = document.createElement("p");
        let newName = document.createElement("p");
        let delReq = document.createElement("button");

        dataID.innerText = i
        newData.innerText = "これはテストのナレッジです。" + now;
        newName.innerText = "大西 翔大";
        delReq.innerText = "削除依頼";
        delReq.setAttribute("onclick", `delItem(${i})`)
        newDiv.appendChild(dataID);
        newDiv.appendChild(newData);
        newDiv.appendChild(newName);
        newDiv.appendChild(delReq);

        newDiv.setAttribute("class","knowledge_datas kn_frame")

        mainTable.appendChild(newDiv)
    }
}


function delItem(i){
    const datas = document.querySelectorAll(".knowledge_datas");
    const dataRow = datas[i]
    const data = dataRow.querySelectorAll("p")[1]
    const delItemData = document.querySelector("#delItemField");
    delItemData.innerText = data.innerText;
    showOverlay(1)
}


function testAlt(){
    alert("clicked");
}
DummyAddTable();