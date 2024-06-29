const API_URL = 'API_URL_PLACEHOLDER';

async function fetchBalance() {
  const response = await fetch(`${API_URL}/balance`);
  const data = await response.json();
  document.getElementById('balance').innerText = `Balance: $${data.balance}`;
}

async function fetchHistory() {
  const response = await fetch(`${API_URL}/history`);
  const data = await response.json();
  const historyElement = document.getElementById('history');
  historyElement.innerHTML = '';
  data.forEach(transaction => {
    const li = document.createElement('li');
    li.innerText = `${transaction.type.toUpperCase()} - $${transaction.amount} on ${new Date(transaction.created_at).toLocaleString()}`;
    historyElement.appendChild(li);
  });
}

async function addMoney() {
  const amount = document.getElementById('amount').value;
  if (amount && !isNaN(amount) && amount > 0) {
    await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount })
    });
    fetchBalance();
    fetchHistory();
  }
}

async function withdrawMoney() {
  const amount = document.getElementById('amount').value;
  if (amount && !isNaN(amount) && amount > 0) {
    await fetch(`${API_URL}/withdraw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount })
    });
    fetchBalance();
    fetchHistory();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBalance();
  fetchHistory();
});