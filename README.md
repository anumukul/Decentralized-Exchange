# Decentralized Exchange (DEX)

A full-stack decentralized exchange built on Ethereum blockchain, enabling users to swap ERC-20 tokens in a trustless environment.

## 🚀 Features

- **Token Swapping**: Seamless USDC ↔ LINK token exchanges
- **Modern UI**: Clean, responsive interface built with React
- **Ethereum Integration**: Full Web3 wallet connectivity
- **Decentralized**: No intermediaries, smart contract-powered trades

## 🏗️ Project Structure

```
Decentralized-Exchange/
├── dexBack/          # Smart contracts & blockchain logic
├── dexFront/         # React frontend application
│   ├── src/
│   ├── components/   # Reusable UI components
│   └── public/
└── README.md
```

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Web3.js / Ethers.js
- Modern CSS/Styled Components

**Backend/Blockchain:**
- Solidity Smart Contracts
- Ethereum Network
- Hardhat/Truffle (development framework)

## 🚦 Getting Started

### Prerequisites
- Node.js (v16+)
- MetaMask or compatible Web3 wallet
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anumukul/Decentralized-Exchange.git
   cd Decentralized-Exchange
   ```

2. **Frontend Setup**
   ```bash
   cd dexFront
   npm install
   npm start
   ```

3. **Smart Contracts Setup**
   ```bash
   cd ../dexBack
   npm install
   # Deploy contracts (add your deployment commands)
   ```

### Usage

1. Connect your Web3 wallet (MetaMask)
2. Ensure you're on the correct network
3. Enter token amounts for swapping
4. Confirm transaction in your wallet
5. Wait for blockchain confirmation

## 🌐 Live Demo

Visit the deployed application: [decentralized-exchange-peach.vercel.app](https://decentralized-exchange-peach.vercel.app)

## 📊 Supported Tokens

- **USDC** (USD Coin)
- **LINK** (Chainlink)

*More tokens coming soon!*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenZeppelin for smart contract standards
- Uniswap for DEX inspiration
- Ethereum community for continuous innovation

---

**⚠️ Disclaimer**: This is a demo/educational project. Please use testnet tokens and exercise caution when dealing with real cryptocurrencies.
