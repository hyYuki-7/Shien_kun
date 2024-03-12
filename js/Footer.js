window.onload = function test() {
  const currentYear = new Date().getFullYear();
  const copyrightText = `&copy;${currentYear} sample Corporation.`;

  document.getElementById('copyright').innerHTML = copyrightText;
};
