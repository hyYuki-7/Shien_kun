// メンバー一覧
const member = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
  {
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
  },
  {
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
  },
  {
    name: 'David Wilson',
    email: 'david.wilson@example.com',
  },
];

populateTable(member);

// テーブルにメンバーデータを表示する関数
function populateTable(data) {
  var tableBody = document.getElementById('example');

  // メンバーデータから行を作成しテーブルに挿入
  data.forEach((member) => {
    var row = tableBody.insertRow();
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var copyCell = row.insertCell(2);

    nameCell.innerHTML = `<div class="member-name">${member.name}</div>`;
    emailCell.innerHTML = `<input class="emailAddress" type="button" onclick="clickToClipboard('${member.name}', '${member.email}')" value="${member.email}" readonly>`;
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
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
          newWindow.opener = null;
        }
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
