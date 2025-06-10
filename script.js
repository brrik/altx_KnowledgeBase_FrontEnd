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

    const mainTable = document.querySelector("#mainTable")
    const now = new Date()
    for(let i=0; i<100; i++){
        let newTR = document.createElement("tr");
        let dataID = document.createElement("td")
        let newData = document.createElement("td");
        let newName = document.createElement("td");
        let newTag1 = document.createElement("td");
        let newTag2 = document.createElement("td");
        let newTag3 = document.createElement("td");
        let delReq = document.createElement("td");

        dataID.innerText = i
        newData.innerText = "これはテストのナレッジです。" + now;
        newName.innerText = "大西 翔大";
        newTag1.innerText = "経費申請";
        newTag2.innerText = "出張経費";
        newTag3.innerText = "仮払い申請"
        delReq.innerHTML = `<button onclick="delItem(${i})">削除依頼</button>`

        newTR.appendChild(dataID);
        newTR.appendChild(newData);
        newTR.appendChild(newName);
        newTR.appendChild(newTag1);
        newTR.appendChild(newTag2);
        newTR.appendChild(newTag3);
        newTR.appendChild(delReq);

        newTR.setAttribute("class","knowledge_datas")

        mainTable.appendChild(newTR)
    }
}


function delItem(i){
    const datas = document.querySelectorAll(".knowledge_datas");
    const dataRow = datas[i]
    const data = dataRow.querySelectorAll("td")[1]
    const delItemData = document.querySelector("#delItemField");
    delItemData.innerText = data.innerText;
    showOverlay(1)
}

DummyAddTable();