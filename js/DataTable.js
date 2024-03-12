// JSONファイルからデータを読み込む
fetch('./js/members.json')
  .then((response) => response.json())
  .then((data) => populateTable(data))
  .catch((error) => console.error('JSON読み込みエラー:', error));

// テーブルにJSONデータを表示する関数
function populateTable(data) {
  var tableBody = document.getElementById('example');

  // JSONデータから行を作成しテーブルに挿入
  data.forEach((member) => {
    var row = tableBody.insertRow();
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var copyCell = row.insertCell(2);

    let color = 'color-red';

    nameCell.innerHTML = `<div class="member-name">${member.name}</div>`;
    if (member.name === '小幡') {
      color = 'color-green';
    }
    emailCell.innerHTML = `<input class="${color}" type="button" onclick="clickToClipboard('${member.name}', '${member.email}')" value="${member.email}" readonly>`;
    copyCell.innerHTML = `<button onclick="copyToClipboard('${member.email}')">←コピー</button>`;
  });
}

// 「←コピー」ボタンを押すとクリップボードにコピー
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const url = 'https://www.yahoo.co.jp/';
      if (window.confirm(`${text}` + `\n \n${url} を開きます。よろしいでしょうか。`)) {
        window.open(url, '_blank');
      } else {
        console.log('キャンセルされました');
      }
    })

    .catch((err) => console.error('コピーに失敗しました:', err));
}

// クリップボードにテキストをコピーする関数
function clickToClipboard(name, number) {
  navigator.clipboard
    .writeText(number)
    .then(() => window.alert(`名前　：${name}\nアドレス：${number} をコピーしました。`))
    .catch((err) => console.error('コピーに失敗しました:', err));
}
