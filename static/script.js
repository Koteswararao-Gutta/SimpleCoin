document.addEventListener('DOMContentLoaded', function() {
    fetchBlockchainData();

    document.getElementById('mine-btn').addEventListener('click', function(event) {
        event.preventDefault();
        mineNewBlock();
    });

    document.getElementById('transaction-form').addEventListener('submit', function(event) {
        event.preventDefault();
        submitTransaction();
    });
});

function fetchBlockchainData() {
    fetch('/blocks')
        .then(response => response.json())
        .then(data => {
            displayBlockchainData(data);
        })
        .catch(error => {
            console.error('Error fetching blockchain data:', error);
        });
}
function displayBlockchainData(data) {
    const blockchainDataElement = document.getElementById('blockchain-data');
    blockchainDataElement.innerHTML = ''; // Clear previous data
    data.forEach(block => {
        const blockElement = document.createElement('div');
        blockElement.classList.add('block');
        blockElement.innerHTML = `
            <div class="block-header">Block ${block.index}</div>
            <div class="block-data">
                <div><strong>Timestamp:</strong> ${new Date(block.timestamp * 1000).toLocaleString()}</div>
                <div><strong>Proof:</strong> ${block.proof}</div>
                <div><strong>Previous Hash:</strong> ${block.previous_hash}</div>
                <div><strong>Transactions:</strong></div>
                <ul>
                    ${block.transactions.map(transaction => `
                        <li>
                            <div><strong>Sender:</strong> ${transaction.sender}</div>
                            <div><strong>Recipient:</strong> ${transaction.recipient}</div>
                            <div><strong>Amount:</strong> ${transaction.amount}</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        blockchainDataElement.appendChild(blockElement);
    });
}



function mineNewBlock() {
    fetch('/mine')
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchBlockchainData();
        })
        .catch(error => {
            console.error('Error mining new block:', error);
        });
}

function submitTransaction() {
    const form = document.getElementById('transaction-form');
    const formData = new FormData(form);

    fetch('/transactions/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sender: formData.get('sender'),
            recipient: formData.get('recipient'),
            amount: parseInt(formData.get('amount'))
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        form.reset();
        fetchBlockchainData();
    })
    .catch(error => {
        console.error('Error submitting transaction:', error);
    });
}
