const convert = () => {
  const binary = document.getElementById('binary-input').value;
  if (binary === '') alert('Please, enter a binary number');
  const decimal = parseInt(binary, 2);
  document.getElementById('decimal-result').value = decimal;
  return true;
}