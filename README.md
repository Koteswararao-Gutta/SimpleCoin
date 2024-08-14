# SimpleCoin

SimpleCoin is a basic implementation of a blockchain and cryptocurrency in Python. This project demonstrates the core concepts of blockchain technology, including creating blocks, adding them to the chain, and validating the chain.

## Features

- Blockchain: Implements a basic blockchain with proof-of-work (PoW) and hashing.
- Flask Web App: A simple web interface to interact with the blockchain.
- JSON API: Exposes API endpoints for adding transactions, mining new blocks, and retrieving the blockchain.

## Project Structure

- app.py: The main application file that starts the Flask server and handles routing.
- simple_chain.py: Contains the blockchain logic, including block creation, mining, and chain validation.
- templates/: Contains the HTML templates used by Flask for rendering the web pages.
- static/: Directory for static files such as CSS, JavaScript, and images.
- LICENSE: The license under which this project is distributed.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Koteswararao-Gutta/SimpleCoin.git
   cd SimpleCoin
   ```

2. **Create and activate a virtual environment** (optional but recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   ```bash
   python app.py
   ```

5. **Access the web app**:
   Open your web browser and go to `http://127.0.0.1:5000/` to interact with SimpleCoin.


## Usage

- Create Transactions: Use the web interface to create transactions between addresses.
- Mine Blocks: Trigger the mining process to validate transactions and add new blocks to the blockchain.
- View Blockchain: Inspect the entire blockchain to see the history of transactions.

## API Endpoints

The application also exposes some basic API endpoints for interacting with the blockchain:

- `/transactions/new`: Create a new transaction.
- `/mine`: Mine a new block.
- `/chain`: Get the full blockchain.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Repository

You can find the GitHub repository for this project here: https://github.com/Koteswararao-Gutta/SimpleCoin
