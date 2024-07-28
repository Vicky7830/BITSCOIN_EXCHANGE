// src/context/MetaMaskContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';

// Create a context for MetaMask
const MetaMaskContext = createContext();

export const MetaMaskProvider = ({ children }) => {
    const [account, setAccount] = useState(localStorage.getItem('account') || null);
    const [networkError, setNetworkError] = useState(false);

    useEffect(() => {
        // Check if MetaMask is installed
        if (window.ethereum) {
            const checkNetwork = async () => {
                try {
                    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                    localStorage.setItem("chainId", chainId);
                } catch (err) {
                    console.error('Error checking network:', err);
                }
            };
            checkNetwork();
        } else {
            setNetworkError(true);
        }
    }, []);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                localStorage.setItem("account", accounts[0]);

                // Check network chain ID
                const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                if (chainId !== '0x61') {
                    // Prompt user to switch network
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0x61',
                            chainName: 'Binance Smart Chain Testnet',
                            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                            nativeCurrency: {
                                name: 'Binance Coin',
                                symbol: 'BNB',
                                decimals: 18
                            },
                            blockExplorerUrls: ['https://testnet.bscscan.com']
                        }]
                    });
                    setNetworkError(true);
                } else {
                    localStorage.setItem("chainId", chainId);
                    setNetworkError(false);
                }
            } catch (error) {
                console.error("Error connecting to MetaMask:", error);
                setNetworkError(true);
            }
        } else {
            // MetaMask is not installed, redirect to MetaMask download page
            window.location.href = "https://metamask.io/download.html";
        }
    };

    return (
        <MetaMaskContext.Provider value={{ account, connectWallet, networkError }}>
            {children}
        </MetaMaskContext.Provider>
    );
};

// Custom hook for using MetaMask context
export const useMetaMask = () => {
    return useContext(MetaMaskContext);
};
