import React from 'react';
import './overview.css';


export const nodes = [
  {
    id: '1',

    data: {
      label: (
        <div className="community">
        Community
        </div>
      ),
      link: 'https://t.me/tokenkilopi',
      tip: 'Community',
    },
    position: { x: 1220, y: 300 },
  },
  {
    id: '2',
    type: 'input',
    data: {
      label: (
        <div className="treasury">
        LOP Token Treasury (HarmonyChain)
        </div>
      ),
      link: 'https://kilopi.net/nodoubt/',
      tip: 'TreasuryHarmony',
    },
    position: { x: 1220, y: 100 },
  },
  {
    id: '3',

    data: {
      label: (
        <div className="liquidity">
        HarmonySwap Liquidity
        </div>
      ),
      link: 'https://dexscreener.com/harmony/0x18af5deaad5d9d5898753620e625f2c90f106143',
      tip: 'LiqCountry',
    },
    position: { x: 1220, y: 200 },
  },
  {
    id: '4',

    data: {
      label: 'Pathfinder Poll dApp',
      link: 'https://kilopi.net/pathfinder/',
      tip: 'Pathfinder',
    },
    
    position: { x: 1140, y: 400 },
  },
  {
    id: '5',
    type: 'output',
    data: {
      label: (
        <div className="burn">
        Burn Pool
        </div>
      ),
      link: 'https://explorer.harmony.one/address/0x09e6e20ff399c2134c14232e172ce8ba2b03017e',
      tip: 'Burn',
    },
    position: { x: 1320, y: 500 },
  },
  {
    id: '6',
 
    data: {
      label: 'Collector dApp',
      link: 'https://kilopi.net/staking/',
      tip: 'Collector',
    },
    position: { x: 960, y: 400 },
  },
  {
    id: '7',

    data: {
      label: (
        <div className="community">
        Developers
        </div>
      ),
      link: 'https://kilopi.net/community/',
      tip: 'Devs',
    },
    position: { x: 1120, y: 500 },
  },
  {
    id: '8',

    data: {
      label: 'D.A.O Govern. dApp',
      link: 'https://kilopi.net/dao/',
      tip: 'DAO',
    },
    position: { x: 1320, y: 400 },
  },
  {
    id: '9',
    className: 'card',
    data: {
      label: 'M.o.M Strategy Game',
      link: 'https://kilopi.net/mom/',
      tip: 'MoM',
    },
    position: { x: 1500, y: 400 },
  },
  {
    id: '10',
 
    data: {
      label: 'Skallia M.M.O Game',
      link: 'https://kilopi.net/skallia/',
      tip: 'Skallia',
    },
    position: { x: 780, y: 400 },
  },
  {
    id: '11',
 
    data: {
      label: 'S.E.S Analyzer dApp',
      link: 'https://kilopi.net/es/',
      tip: 'SES',
    },
    position: { x: 600, y: 400 },
  },
  {
    id: '12',
 
    data: {
      label: 'Matcher Social dApp',
      link: 'https://kilopi.net/matcher/',
      tip: 'Matcher',
    },
    position: { x: 1680, y: 400 },
  },
  {
    id: '13',
    type: 'input',
    data: {
      label: (
        <div className="treasury">
        LOP Token Treasury (BinanceChain)
        </div>
      ),
      link: 'https://bscscan.com/token/0x20b4620a767d6dccbb9314104d5cf0d08d1f7045',
      tip: 'TreasuryBinance',
    },
    position: { x: 820, y: 100 },
  },
  {
    id: '14',
    type: 'input',
    data: {
      label: (
        <div className="treasury">
        LOP Token Treasury (SolanaChain)
        </div>
      ),
      link: 'https://solscan.io/token/7MAb9qisVNaMNt7wtjnMjCBUyaGswBKHGjzxW6Jhx9c2',
      tip: 'TreasuryUnknown',
    },
    position: { x: 1620, y: 100 },
  },
  {
    id: '15',
    
    data: {
      label: (
        <div className="liquidity">
        PancakeSwap Liquidity
        </div>
      ),
      link: 'https://dexscreener.com/bsc/0x5efd04dd954da8694360f92bd6d4bd83122798c2',
      tip: 'LiqPancake',
    },
    position: { x: 820, y: 200 },
  },
  {
    id: '16',

    data: {
      label: (
        <div className="liquidity">
        RaydiumDex Liquidity
        </div>
      ),
      link: 'https://www.dextools.io/app/en/solana/pair-explorer/JCVxDdvbVterUCHKiGWWG6ibcC4HFCg4SzmYCMP8Wr4n?t=1716623777653',
      tip: 'LiqUnknown',
    },
    position: { x: 1620, y: 200 },
  },
  {
    id: '17',

    data: {
      label: (
        <div className="community">
        Community
        </div>
      ),
      link: 'https://t.me/tokenkilopi',
      tip: 'Community',
    },
    position: { x: 820, y: 300 },
  },
  {
    id: '18',

    data: {
      label: (
        <div className="community">
        Community
        </div>
      ),
      link: 'https://t.me/tokenkilopi',
      tip: 'Community',
    },
    position: { x: 1620, y: 300 },
  },
  {
    id: '19',

    data: {
      label: (
        <div className="bridge">
        Bridge
        </div>
      ),
      link: 'https://kilopi.net/',
      tip: 'BridgeBinance',
    },
    position: { x: 1020, y: 300 },
  },
  {
    id: '20',

    data: {
      label: (
        <div className="bridge">
        Bridge
        </div>
      ),
      link: 'https://kilopi.net/',
      tip: 'BridgeUnknown',
    },
    position: { x: 1420, y: 300 },
  },
  {
    id: '21',
 
    data: {
      label: 'Forge Token Creator',
      link: 'https://kilopi.net/forge/',
      tip: 'Forge',
    },
    position: { x: 1860, y: 400 },
  },







  {
    id: '999',
    type: 'default',
    className: 'annotation',
    data: {
      label: (
        <div className="denge">
        DENGE
        </div>
      ),
    },
    draggable: false,
    selectable: false,
    position: { x: 700, y: 11 },
  },
  
  
];

export const edges = [
  { id: 'e3-1', source: '3', target: '1', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e1-6', source: '1', target: '6', animated: true },
  { id: 'e6-1', source: '6', target: '1', animated: true },
  { id: 'e4-7', source: '4', target: '7', animated: true },
  { id: 'e4-6', source: '4', target: '6', animated: true },
  { id: 'e1-8', source: '1', target: '8', animated: true },
  { id: 'e8-1', source: '8', target: '1', animated: true },
  { id: 'e4-8', source: '4', target: '8', animated: true },
  { id: 'e8-7', source: '8', target: '7', animated: true },
  { id: 'e6-7', source: '6', target: '7', animated: true },
  { id: 'e7-6', source: '7', target: '6', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e7-3', source: '7', target: '3', animated: true },
  { id: 'e7-4', source: '7', target: '4', animated: true },
  { id: 'e1-10', source: '1', target: '10', animated: true },
  { id: 'e10-1', source: '10', target: '1', animated: true },
  { id: 'e1-9', source: '1', target: '9', animated: true },
  { id: 'e9-1', source: '9', target: '1', animated: true },
  { id: 'e9-7', source: '9', target: '7', animated: true },
  { id: 'e9-6', source: '9', target: '6', animated: true },
  { id: 'e9-8', source: '9', target: '8', animated: true },
  { id: 'e9-5', source: '9', target: '5', animated: true },
  { id: 'e10-7', source: '10', target: '7', animated: true },
  { id: 'e10-5', source: '10', target: '5', animated: true },
  { id: 'e1-11', source: '1', target: '11', animated: true },
  { id: 'e1-12', source: '1', target: '12', animated: true },
  { id: 'e11-7', source: '11', target: '7', animated: true },
  { id: 'e11-6', source: '11', target: '6', animated: true },
  { id: 'e11-8', source: '11', target: '8', animated: true },
  { id: 'e11-5', source: '11', target: '5', animated: true },
  { id: 'e12-5', source: '12', target: '5', animated: true },
  { id: 'e12-7', source: '12', target: '7', animated: true },
  { id: 'e13-15', source: '13', target: '15', animated: true },
  { id: 'e14-16', source: '14', target: '16', animated: true },
  { id: 'e17-15', source: '17', target: '15', animated: true },
  { id: 'e15-17', source: '15', target: '17', animated: true },
  { id: 'e18-16', source: '18', target: '16', animated: true },
  { id: 'e16-18', source: '16', target: '18', animated: true },
  { id: 'e17-19', source: '17', target: '19', animated: true },
  { id: 'e19-17', source: '19', target: '17', animated: true },
  { id: 'e20-18', source: '20', target: '18', animated: true },
  { id: 'e18-20', source: '18', target: '20', animated: true },
  { id: 'e1-19', source: '1', target: '19', animated: true },
  { id: 'e19-1', source: '19', target: '1', animated: true },
  { id: 'e20-1', source: '20', target: '1', animated: true },
  { id: 'e1-20', source: '1', target: '20', animated: true },
  { id: 'e19-5', source: '19', target: '5', animated: true },
  { id: 'e20-7', source: '20', target: '7', animated: true },
  { id: 'e19-7', source: '19', target: '7', animated: true },
  { id: 'e20-5', source: '20', target: '5', animated: true },
  { id: 'e21-16', source: '21', target: '16', animated: true }



  
];
