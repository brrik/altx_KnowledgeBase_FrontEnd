

//ChatGPT生成のダミーデータ。一旦これでフロントはテストする
const dummyData = `{
  "knowledgeBase": [
    {
      "id": 101,
      "title": "JavaScriptのイベントバブリングを防ぐ方法",
      "author": "tanaka",
      "content": "子要素のイベントで event.stopPropagation() を使用することで、親要素への伝播を防げます。",
      "tag1": "JavaScript",
      "tag2": "イベント",
      "tag3": "バブリング"
    },
    {
      "id": 234,
      "title": "Gitでコミット履歴を修正する方法",
      "author": "suzuki",
      "content": "git rebase -i HEAD~3 を使うことで、直近のコミットを編集できます。注意して使いましょう。",
      "tag1": "Git",
      "tag2": "バージョン管理",
      "tag3": "履歴編集"
    },
    {
      "id": 387,
      "title": "Pythonでのリスト内包表記の基本",
      "author": "yamada",
      "content": "リスト内包表記は、短く簡潔にリストを生成するのに便利です。例：[x for x in range(10)]",
      "tag1": "Python",
      "tag2": "リスト",
      "tag3": "内包表記"
    },
    {
      "id": 412,
      "title": "HTMLフォームのsubmit動作とは？",
      "author": "kobayashi",
      "content": "formタグにあるsubmitボタンは、デフォルトでaction先にデータを送信します。JavaScriptで制御することも可能です。",
      "tag1": "HTML",
      "tag2": "フォーム",
      "tag3": "submit"
    },
    {
      "id": 526,
      "title": "CSS Flexboxで中央揃えにするには？",
      "author": "fujita",
      "content": "親要素に display: flex; justify-content: center; align-items: center; を指定します。",
      "tag1": "CSS",
      "tag2": "Flexbox",
      "tag3": "中央揃え"
    },
    {
      "id": 603,
      "title": "VSCodeの便利な拡張機能5選",
      "author": "inoue",
      "content": "Prettier、Live Server、ESLint、Path Intellisense、GitLens が特におすすめです。",
      "tag1": "VSCode",
      "tag2": "拡張機能",
      "tag3": "開発環境"
    },
    {
      "id": 718,
      "title": "SQLで特定の条件に一致するデータを抽出する方法",
      "author": "saito",
      "content": "SELECT * FROM users WHERE age > 30; のように、WHERE句で条件を指定します。",
      "tag1": "SQL",
      "tag2": "データベース",
      "tag3": "抽出"
    },
    {
      "id": 845,
      "title": "ReactのuseEffectの基本的な使い方",
      "author": "nakamura",
      "content": "useEffectは副作用を扱うためのフックで、コンポーネントのマウント・アンマウント時に処理を追加できます。",
      "tag1": "React",
      "tag2": "Hooks",
      "tag3": "useEffect"
    },
    {
      "id": 902,
      "title": "Linuxでファイルの権限を変更する方法",
      "author": "takahashi",
      "content": "chmodコマンドを使用します。例: chmod 755 filename",
      "tag1": "Linux",
      "tag2": "権限",
      "tag3": "chmod"
    },
    {
      "id": 999,
      "title": "Dockerでコンテナを停止・削除する方法",
      "author": "yoshida",
      "content": "docker stop [container名] で停止し、docker rm [container名] で削除できます。",
      "tag1": "Docker",
      "tag2": "コンテナ",
      "tag3": "削除"
    }
  ]
}`;

const comments = `{
  "1": [
    { "commentId": "CM001", "user": "alice", "comment": "とても分かりやすかったです！" },
    { "commentId": "CM002", "user": "bob", "comment": "イベントバブリング、ずっと混乱してたので助かりました。" }
  ],
  "2": [
    { "commentId": "CM003", "user": "charlie", "comment": "実務で rebase を使うのが怖かったけど、これなら試せそう。" },
    { "commentId": "CM004", "user": "diana", "comment": "チームで共有したい内容ですね。" }
  ],
  "3": [
    { "commentId": "CM005", "user": "emma", "comment": "Python初心者におすすめの記事！" },
    { "commentId": "CM006", "user": "frank", "comment": "内包表記の例がシンプルで良いと思いました。" }
  ],
  "412": [
    { "commentId": "CM007", "user": "george", "comment": "submitの動作、つまずいてたので助かりました。" },
    { "commentId": "CM008", "user": "hana", "comment": "HTMLとJavaScriptの連携がもっと知りたい。" }
  ],
  "526": [
    { "commentId": "CM009", "user": "isaac", "comment": "Flexbox中央揃え、毎回調べてるので保存しました。" }
  ],
  "603": [
    { "commentId": "CM010", "user": "julia", "comment": "全部入れてる拡張機能でした。安心。" },
    { "commentId": "CM011", "user": "ken", "comment": "GitLens、知らなかったので入れてみます。" }
  ],
  "718": [
    { "commentId": "CM012", "user": "lisa", "comment": "SQLのWHERE句は頻出ですね。" },
    { "commentId": "CM013", "user": "mark", "comment": "他にもJOINの説明が欲しいです。" }
  ],
  "845": [
    { "commentId": "CM014", "user": "nina", "comment": "useEffectのタイミング理解できました。" },
    { "commentId": "CM015", "user": "oscar", "comment": "副作用ってこういうことか〜" }
  ],
  "902": [
    { "commentId": "CM016", "user": "paul", "comment": "chmod 755って何度見ても忘れる笑" },
    { "commentId": "CM017", "user": "quinn", "comment": "権限の早見表みたいなのがあると嬉しいです。" }
  ],
  "999": [
    { "commentId": "CM018", "user": "riko", "comment": "docker rm は毎回怖くて確認しちゃう。" },
    { "commentId": "CM019", "user": "shun", "comment": "安全に消す方法とかあるのかな？" }
  ]
}`;

const MAIN_URL = "https://altx-knowledgebase-backend.onrender.com/"


function hideOverlay(){
    const overlayDiv = document.querySelectorAll(".overlay");
    for(let i = 0; i<overlayDiv.length; i++){
        overlayDiv[i].style.display = "none";
    }
}

function showOverlay(val){
    hideOverlay();
    const overlayDiv = document.querySelectorAll(".overlay");
    overlayDiv[val].style.display = "block";
}

async function addTable(){
    const mainTable = document.querySelector("#main")
    mainTable.innerHTML = "";
    const recentData = await getRecentItems();
    console.log(recentData)
    for(let i=0; i<recentData.length; i++){
        let data_item = recentData[i];
        let newDiv = document.createElement("div");
        newDiv.setAttribute("onclick",`showDetails(${data_item.ID})`);
        let dataID = document.createElement("p");
        let newData = document.createElement("p");
        let newName = document.createElement("p");
        let delReq = document.createElement("button");
        
        dataID.innerText = data_item.ID;
        
        newName.innerText = data_item.PostedBy;
        newData.innerText = data_item.Title;
        delReq.innerText =  "削除依頼";
        delReq.setAttribute("onclick", `delItem(event ,${data_item.ID})`)
        newDiv.appendChild(dataID);
        newDiv.appendChild(newData);
        newDiv.appendChild(newName);
        newDiv.appendChild(delReq);

        newDiv.setAttribute("class","knowledge_datas kn_frame")

        mainTable.appendChild(newDiv)
    }
}

function showBookmarks(){
    const mainTable = document.querySelector("#main")
    mainTable.innerHTML = ""
    const recentData = getRecentItems();
    for(let i=0; i<recentData.length; i++){
        let data_item = recentData[i];

        let itemID = data_item.id;
        let bookmarked_list = getLocalStorage("Bookmarks");

        if(bookmarked_list.includes(itemID.toString())){
          let newDiv = document.createElement("div");
          newDiv.setAttribute("onclick",`showDetails(${data_item.id})`);
          let dataID = document.createElement("p");
          let newData = document.createElement("p");
          let newName = document.createElement("p");
          let delReq = document.createElement("button");
          
          dataID.innerText = data_item.id;
          
          newName.innerText = data_item.author;
          newData.innerText = data_item.title;
          delReq.innerText =  "削除依頼";
          delReq.setAttribute("onclick", `delItem(event ,${data_item.id})`)
          newDiv.appendChild(dataID);
          newDiv.appendChild(newData);
          newDiv.appendChild(newName);
          newDiv.appendChild(delReq);

          newDiv.setAttribute("class","knowledge_datas kn_frame")

          mainTable.appendChild(newDiv)
        }
    }
}


function delItem(event,obj_id){
    event.stopPropagation();
    console.log(obj_id)
    const datas = document.querySelectorAll(".knowledge_datas");
    let dataRow;
    let found_id;
    for(let i = 0; i<datas.length; i++){
        dataRow = datas[i];
        found_id = dataRow.querySelectorAll("p")[0];
        console.log(found_id)
        if(found_id.innerText == obj_id){
            console.log("find id")
            const data = dataRow.querySelectorAll("p")[1];
            const delItemData = document.querySelector("#delItemField");
            const delID = document.querySelector("#delItemID");
            delItemData.innerText = data.innerText;
            delID.innerText = found_id.innerText;
            showOverlay(1)
            break
        }
    }


}

async function showDetails(kn_id){
    const kn_datas = await getItemFromID(kn_id);
    console.log(kn_datas)
    const item_datas = kn_datas.knowledge;
    const comment_datas = kn_datas.comments;
    console.log('Datas : ' + item_datas)
    console.log('Comments :' + comment_datas)
    showOverlay(2)

    const item_title = document.querySelector("#kn_detail_Title");
    const item_id = document.querySelector("#kn_detail_id");
    const item_author = document.querySelector("#kn_detail_name");
    const item_content = document.querySelector("#kn_detail_content");
    const item_tag1 = document.querySelector("#kn_detail_tag1")
    const item_tag2 = document.querySelector("#kn_detail_tag2")
    const item_tag3 = document.querySelector("#kn_detail_tag3")
    
    item_title.innerText = item_datas.Title;
    item_id.innerText = item_datas.ID;
    item_author.innerText = item_datas.PostedBy;
    item_content.innerText = item_datas.Content;
    item_tag1.innerText = "#" + item_datas.Tag1;
    item_tag2.innerText = "#" + item_datas.Tag2;
    item_tag3.innerText = "#" + item_datas.Tag3;

    const liked_items = getLocalStorage("Likes");
    const bookmarked_items = getLocalStorage("Bookmarks");

    const like_button = document.querySelector("#like_button");
    const bookmark_button = document.querySelector("#bookmark_button");
    
    let item_id_val = Number(item_datas.ID);

    if(liked_items.includes(item_id_val.toString())){
      console.log("liked")
      like_button.src = "like_on.png";
      like_button.onclick = removeLike;
    }else{
      console.log("not liked")
      like_button.src = "like_off.png";
      like_button.onclick = addLike;
    }

    if(bookmarked_items.includes(item_id_val.toString())){
      console.log("bookmarked")
      bookmark_button.src = "bookmark_on.png";
      bookmark_button.onclick = removeBookmark;
    }else{
      console.log("not bookmarked")
      bookmark_button.src = "bookmark_off.png";
      bookmark_button.onclick = addBookmark;
    }

    getComments(comment_datas)

}

async function getItemFromID(item_id){
  try {
    // FastAPI 側のURL（ローカル実行例）
    const response = await fetch(MAIN_URL + "items/" + item_id);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // FastAPI が返す JSON を取得
    const result = await response.json();
    console.log(result)
    return result;
  } catch (err) {
    console.error("Error fetching items:", err);
  }
}

async function getRecentItems(){
  try {
    // FastAPI 側のURL（ローカル実行例）
    const response = await fetch(MAIN_URL + "items");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // FastAPI が返す JSON を取得
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error("Error fetching items:", err);
  }
}

async function getSearchItems(val){
  try {
    // FastAPI 側のURL（ローカル実行例）
    const response = await fetch(MAIN_URL + "search/" + val);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // FastAPI が返す JSON を取得
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error("Error fetching items:", err);
  }
}

function getComments(itemComment){
  console.log(itemComment)

  const comment_field = document.querySelector("#comment_form");
  comment_field.innerHTML = "";

  for(let i = 0; i<itemComment.length; i++){
    let comment_div = document.createElement("div")
    let comment_user = document.createElement("p")
    let comment_body = document.createElement("p")
    let comment_id = document.createElement("p")

    comment_user.innerText = itemComment[i].PostedBy;
    comment_body.innerText = itemComment[i].Content;
    comment_id.innerText = itemComment[i].CommentID;

    comment_div.setAttribute("class", "commentBody");
    comment_user.setAttribute("class", "commentUser");
    comment_id.setAttribute("class", "commentId");

    comment_div.appendChild(comment_user);
    comment_div.appendChild(comment_body);
    comment_div.appendChild(comment_id);

    comment_field.appendChild(comment_div)
  }
}

function addBookmark(){
  const item_id = document.querySelector("#kn_detail_id").innerText;
  const bookmark_button = document.querySelector("#bookmark_button");
  addLocalStorage(item_id, "Bookmarks")
  bookmark_button.onclick = removeBookmark;
  bookmark_button.src = "bookmark_on.png";
}

function removeBookmark(){
  const item_id = document.querySelector("#kn_detail_id").innerText;
  const bookmark_button = document.querySelector("#bookmark_button");
  removeLocalStorage(item_id, "Bookmarks")
  bookmark_button.onclick = addBookmark;
  bookmark_button.src = "bookmark_off.png";
}

function addLike(){
  console.log("add like")
  const item_id = document.querySelector("#kn_detail_id").innerText;
  const like_button = document.querySelector("#like_button");
  addLocalStorage(item_id, "Likes")
  like_button.onclick = removeLike;
  like_button.src = "like_on.png";

  let url = MAIN_URL + "nice/" + item_id
  console.log(url)
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTPエラー " + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log("レスポンス:", data);
    })
    .catch(error => {
      console.error("エラー:", error);
    });
}

function removeLike(){
  const item_id = document.querySelector("#kn_detail_id").innerText;
  const like_button = document.querySelector("#like_button");
  removeLocalStorage(item_id, "Likes")
  like_button.onclick = addLike;
  like_button.src = "like_off.png";

  let url = MAIN_URL + "/unlike/" + item_id
  console.log(url)
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTPエラー " + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log("レスポンス:", data);
    })
    .catch(error => {
      console.error("エラー:", error);
    });

}

function clearLocalStorage(){
  localStorage.clear()
}

function addLocalStorage(item, storage_name){
  let storage_list = JSON.parse(localStorage.getItem(storage_name)) || [];
  if(storage_list.includes(item)){
    //do nothing
  }else{
    storage_list.push(item);
    localStorage.setItem(storage_name, JSON.stringify(storage_list));
  }
}

function removeLocalStorage(item, storage_name){
  let storage_list = JSON.parse(localStorage.getItem(storage_name)) || [];
  if(storage_list.includes(item)){
    let new_storage_list = storage_list.filter(storage_item => storage_item !== item);
    localStorage.setItem(storage_name, JSON.stringify(new_storage_list));
  }
}

function getLocalStorage(storage_name){
  let storage_list = JSON.parse(localStorage.getItem(storage_name)) || [];
  return storage_list;
}

async function search_item(){
  let kw = document.querySelector("#serch_kw").value;
  const mainTable = document.querySelector("#main")
  mainTable.innerHTML = "";
  const recentData = await getSearchItems(kw);
  console.log(recentData)
  for(let i=0; i<recentData.length; i++){
      let data_item = recentData[i];
      let newDiv = document.createElement("div");
      newDiv.setAttribute("onclick",`showDetails(${data_item.ID})`);
      let dataID = document.createElement("p");
      let newData = document.createElement("p");
      let newName = document.createElement("p");
      let delReq = document.createElement("button");
      
      dataID.innerText = data_item.ID;
      
      newName.innerText = data_item.PostedBy;
      newData.innerText = data_item.Title;
      delReq.innerText =  "削除依頼";
      delReq.setAttribute("onclick", `delItem(event ,${data_item.ID})`)
      newDiv.appendChild(dataID);
      newDiv.appendChild(newData);
      newDiv.appendChild(newName);
      newDiv.appendChild(delReq);

      newDiv.setAttribute("class","knowledge_datas kn_frame")

      mainTable.appendChild(newDiv)
  }
}


document.getElementById("new_knowledge").addEventListener("submit", async (e) => {
  e.preventDefault();
  showOverlay(3)
  console.log("try to send new post")
  const endPoint = "https://altx-knowledgebase-backend.onrender.com/post-knowledge"

  const form = e.target;
  const formData = new FormData(form);
  const jsonData = {};
  for (const [key,value] of formData.entries()){
    jsonData[key] = value;
  }
  postWithRetry(jsonData, endPoint, "#new_knowledge", 3000, 10)
})

document.getElementById("new_comment").addEventListener("submit", async (e) => {
  e.preventDefault();
  showOverlay(3)
  console.log("try to send new comment")
  const endPoint = "https://altx-knowledgebase-backend.onrender.com/post-comment"

  const form = e.target;
  const formData = new FormData(form);
  const jsonData = {};
  for (const [key,value] of formData.entries()){
    jsonData[key] = value;
  }

  let kn_id = document.getElementById("kn_detail_id").innerText;
  jsonData['KnowledgeID'] = kn_id
  console.log(jsonData)
  postWithRetry(jsonData, endPoint, "#new_comment",3000, 10)

})



  function postWithRetry(data, url, id_tag, interval = 3000, maxRetries = 5) {
    let attempts = 0;

    const tryPost = () => {
      attempts++;

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then(result => {
        console.log('送信成功:', result);
        alert('送信成功しました');
        document.querySelector(id_tag).reset();
        hideOverlay();
      })
      .catch(err => {
        console.warn(`⚠️ 試行 ${attempts} 回目失敗: ${err.message}`);
        if (attempts < maxRetries) {
          setTimeout(tryPost, interval);
        } else {
          alert('接続に失敗しました（最大試行回数に到達）');
          hideOverlay();
        }
      });
    };

    tryPost(); // 最初の試行
  }


addTable();