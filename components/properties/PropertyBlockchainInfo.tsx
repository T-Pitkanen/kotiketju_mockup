'use client';

import { useState } from 'react';

interface PropertyBlockchainInfoProps {
  blockchainHash: string;
  blockchainVerified: boolean;
  smartContractAddress: string;
}

export default function PropertyBlockchainInfo({
  blockchainHash,
  blockchainVerified,
  smartContractAddress,
}: PropertyBlockchainInfoProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 10)}...${hash.slice(-8)}`;
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Lohkoketjuvarmistus</h3>

      {/* Verification Status */}
      <div className="mb-4 flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
        <div className="shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
          {blockchainVerified ? (
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div>
          <div className="text-gray-800 font-medium">
            {blockchainVerified ? 'Vahvistettu lohkoketjussa' : 'Odottaa vahvistusta'}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {blockchainVerified 
              ? "Kiinteistön omistus ja transaktiohistoria on pysyvästi tallennettu Ethereum-lohkoketjuun."
              : "Kiinteistö käsitellään parhaillaan lohkoketjuvarmistusta varten."}
          </p>
        </div>
      </div>

      {/* Transaction Hash */}
      <div className="mb-4">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Transaktiotunniste
        </label>
        <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <code className="text-sm font-mono text-gray-900 flex-1">
            {truncateHash(blockchainHash)}
          </code>
          <button
            onClick={() => copyToClipboard(blockchainHash, 'hash')}
            className="p-2 hover:bg-white rounded transition-colors"
            title="Kopioi tunniste"
          >
            {copied === 'hash' ? (
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
          <a
            href={`https://etherscan.io/tx/${blockchainHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-white rounded transition-colors"
            title="Näytä Etherscanissa"
          >
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Smart Contract */}
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Älysopimus
        </label>
        <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <code className="text-sm font-mono text-gray-900 flex-1">
            {truncateHash(smartContractAddress)}
          </code>
          <button
            onClick={() => copyToClipboard(smartContractAddress, 'contract')}
            className="p-2 hover:bg-white rounded transition-colors"
            title="Kopioi osoite"
          >
            {copied === 'contract' ? (
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
          <a
            href={`https://etherscan.io/address/${smartContractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-white rounded transition-colors"
            title="Näytä Etherscanissa"
          >
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
