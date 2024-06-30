import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from './initial-elements';
import kilopiIcon from './res/logo_lop_150sq.png';
import harmonyIcon from './res/logo_harmony.png';
import binanceIcon from './res/logo_binance.png';
import unknownIcon from './res/raydium.png';
import communityIcon from './res/community.png';
import bridgeIcon from './res/bridge.png';
import sesIcon from './res/SES.png';
import skalliaIcon from './res/skallia.png';
import collectorIcon from './res/collector.png';
import pathfinderIcon from './res/Pathfinder.png';
import daoIcon from './res/DAO.png';
import momIcon from './res/MoM.png';
import matcherIcon from './res/Matcher.png';
import devsIcon from './res/Devs.png';
import burnIcon from './res/Burn.png';
import forgeIcon from './res/forge.png';





import 'reactflow/dist/style.css';
import './overview.css';




const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = () => {
  const [nodes,  , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Tip, setTip] = useState("");

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });


  const onNodeClick = (event, node) => {
    // Check if the clicked node has a link property
    if (node.data.link) {
      // Navigate to the link when the node is clicked
      window.open(node.data.link, '_blank'); // Opens the link in a new tab
    }
  };

  const onNodeMouseEnter = (event, node) => {
    // Check if the clicked node has a link property
    if (node.data.tip) {
      // Navigate to the link when the node is clicked
      setPosition({
        x: event.clientX + 100,
        y: event.clientY + 50,
      });
      setTip(node.data.tip);
      setShowInfoBox(true);


        for(let i=0; i<=52; i++){
          if ( edges[i].source === node.id || edges[i].target === node.id ) {
            edges[i].style= { stroke: '#ffA500', strokeWidth: 2  };
          }
        }






    }
  };

  const onNodeMouseLeave = (event, node) => {
    // Check if the clicked node has a link property
    if (showInfoBox === true) {
      // Navigate to the link when the node is clicked
      setShowInfoBox(false);

    }


    for(let i=0; i<=52; i++){
        edges[i].style= { stroke: '#ffffff' };
        edges[i].style= { strokeWidth: 1 };
    }


  };

  const onNodeDragStart = (event, node) => {
    // Check if the clicked node has a link property
    if (showInfoBox === true) {
      // Navigate to the link when the node is clicked
      setShowInfoBox(false);

    }
  };

  
  


  const handleTelegramClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://t.me/tokenkilopi';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleTwitterClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://twitter.com/kilopicoin';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://www.instagram.com/kilopinet/';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedinClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://www.linkedin.com/company/kilopi-d-a-o/';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleYoutubeClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://www.youtube.com/@KilopiProject';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleEnvelopeClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'mailto:info@kilopi.net';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleDiscordClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://discord.gg/VasvvXsZMr';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://github.com/Kilopicoin';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleRedditClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://www.reddit.com/r/Kilopi_LOP/';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleMediumClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://medium.com/@kilopi_lop';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };

  const handleFacebookClick = () => {
    // Define the URL you want to open in a new tab
    const Link = 'https://www.facebook.com/profile.php?id=100095292165494';

    // Open the link in a new tab with noreferrer and noopener attributes
    window.open(Link, '_blank', 'noopener,noreferrer');
  };



  return (
    <div style={{ width: '100%', height: '100vh' }}>

{showInfoBox && (
        <div className='info-box' style={{
          left: Tip === "Forge" ? `${position.x - 100}px` : Tip === "Burn" ? `${position.x + 100}px` : Tip === "Devs" ? `${position.x + 100}px` : `${position.x}px`,
          top: Tip === "Burn" ? `${position.y - 100}px` : Tip === "Devs" ? `${position.y - 100}px` : `${position.y}px`,
        }}>
          {Tip === "TreasuryHarmony" && (
            <>
            <div className='ToolTip'>
            <img src={kilopiIcon} width="40" height="40" alt="Kilopi" />
            <div>"HarmonyChain" LOP token treasury is the main source of Kilopi project's tokens. Initial Supply was 5 Billion.
              This supply has been decreasing and will decrease following the usage of the dApps of the project.
            </div>
            
            </div>
            </>
          )}

          {Tip === "TreasuryBinance" && (
            <>
            <div className='ToolTip'>
            <img src={kilopiIcon} width="40" height="40" alt="Kilopi" />
            <div>"BinanceChain" LOP token treasury is the side source of Kilopi project's tokens. Initial Supply was 1 Billion.
              This supply has been transferred into Liquidity on PancakeSwap and will continue to be transferred slowly.
            </div>
            
            </div>
            </>
          )}

          {Tip === "TreasuryUnknown" && (
            <>
            <div className='ToolTip'>
            <img src={kilopiIcon} width="40" height="40" alt="Kilopi" />
            <div>"SolanaChain" LOP token treasury is the side source of Kilopi project's tokens. Initial Supply was 2 Billion.
              This supply will be transferred into the SolanaChain's Raydium DEX Liquidity slowly.
            </div>
            
            </div>
            </>
          )}


          {Tip === "LiqCountry" && (
            <>
            <div className='ToolTip'>
            <img src={harmonyIcon} width="40" height="40" alt="Harmony" />
            <img src={kilopiIcon} width="40" height="40" alt="Kilopi" />
            <div> Swap.Country Liquidity is the main Liquidity Pool of Kilopi project. 
              Buy/Sell Transactions can be done on Swap.Country for LOP tokens on HarmonyChain.
            </div>
            
            </div>
            </>
          )}


          {Tip === "LiqPancake" && (
            <>
            <div className='ToolTip'>
            <img src={binanceIcon} width="35" height="35" alt="Binance" />
            <img src={kilopiIcon} width="40" height="40" alt="Kilopi" />
            <div> PancakeSwap Liquidity is the side Liquidity Pool of Kilopi project. 
              Buy/Sell Transactions can be done on PancakeSwap for LOP tokens on BinanceSmartChain.
            </div>
            
            </div>
            </>
          )}


          {Tip === "LiqUnknown" && (
            <>
            <div className='ToolTip'>
            <img src={unknownIcon} width="35" height="35" alt="Unknown" />
            <img src={kilopiIcon} width="40" height="40" alt="Kilopi" />
            <div> RaydiumDex Liquidity is the side Liquidity Pool of Kilopi project. 
              Buy/Sell Transactions can be done on RaydiumDex for LOP tokens on SolanaChain.
            </div>
            
            </div>
            </>
          )}



        {Tip === "Community" && (
            <>
            <div className='ToolTip'>
            <img src={communityIcon} width="35" height="35" alt="Community" />
            <div> Community is the key structure of Kilopi project. 
            Community uses all the Ecosystem elements, experience them, brings feedback and affects every decision.
            </div>
            
            </div>
            </>
          )}


          {Tip === "BridgeBinance" && (
            <>
            <div className='ToolTip'>
            <img src={binanceIcon} width="35" height="35" alt="Binance" /> &nbsp;
            <img src={bridgeIcon} width="60" height="40" alt="Bridge" />
            <img src={harmonyIcon} width="40" height="40" alt="Harmony" />
            <div> Kilopi Binance Bridge will be the place where the community can swap their LOP tokens between HarmonyChain and BinanceChain (each direction) 
            </div>
            
            </div>
            </>
          )}


          {Tip === "BridgeUnknown" && (
            <>
            <div className='ToolTip'>
            <img src={harmonyIcon} width="40" height="40" alt="Harmony" /> 
            <img src={bridgeIcon} width="60" height="40" alt="Bridge" /> &nbsp;
            <img src={unknownIcon} width="35" height="35" alt="Unknown" />
            <div> Kilopi Unknown Bridge will be the place where the community can swap their LOP tokens between HarmonyChain and UnknownChain (each direction) 
            </div>
            
            </div>
            </>
          )}



{Tip === "SES" && (
            <>
            <div className='ToolTip'>
            <img src={sesIcon} width="50" height="50" alt="SES" /> 
            <div> SES Analyzer dApps will be simple/effective dApps which will solve complex calculations and register them into Blockchain for future statistics.
            </div>
            
            </div>
            </>
          )}


{Tip === "Skallia" && (
            <>
            <div className='ToolTip'>
            <img src={skalliaIcon} width="60" height="60" alt="Skallia" /> 
            <div> Skallia is an old school Ultima Online MMORPG Shard with the ability to exchange in-game golds into LOP tokens.
            </div>
            
            </div>
            </>
          )}


{Tip === "Collector" && (
            <>
            <div className='ToolTip'>
            <img src={collectorIcon} width="60" height="60" alt="Collector" /> 
            <div> Collector is a unique staking dApp which has 2 options as "Locked" and "NonLocked".
            </div>
            
            </div>
            </>
          )}


{Tip === "Pathfinder" && (
            <>
            <div className='ToolTip'>
            <img src={pathfinderIcon} width="60" height="60" alt="Pathfinder" /> 
            <div> Pathfinder is a unique Poll dApp that decides the upcoming content of the founder's youtube channel via voting with LOP tokens.
            </div>
            
            </div>
            </>
          )}


{Tip === "DAO" && (
            <>
            <div className='ToolTip'>
            <img src={daoIcon} width="60" height="60" alt="DAO" /> 
            <div> Kilopi DAO dApp is a unique DAO dApp which helps the project to decide its roadmap by getting the feedback from the community.
            </div>
            
            </div>
            </>
          )}


{Tip === "MoM" && (
            <>
            <div className='ToolTip'>
            <img src={momIcon} width="60" height="60" alt="MoM" /> 
            <div> Masters of Management is a unique turn-based web3 strategy game with sustainable tokenomics system. Players can trade in-game resources with LOP tokens.
            </div>
            
            </div>
            </>
          )}


{Tip === "Matcher" && (
            <>
            <div className='ToolTip'>
            <img src={matcherIcon} width="60" height="60" alt="Matcher" /> 
            <div> Matcher is a business Matching dApp which helps the companies to find each other depending on their categories easily.
            </div>
            
            </div>
            </>
          )}


{Tip === "Devs" && (
            <>
            <div className='ToolTip'>
            <img src={devsIcon} width="60" height="60" alt="Devs" /> 
            <div> The team of the Kilopi project is the Developers of the project. They work, create, build and stay in the ecosystem by contributing.
            </div>
            
            </div>
            </>
          )}


{Tip === "Burn" && (
            <>
            <div className='ToolTip'>
            <img src={burnIcon} width="60" height="60" alt="Burn" /> 
            <div> Some of the LOP tokens move into the burn pool following their usage inside of the dApps and they are being removed from the total supply permanently.
            </div>
            
            </div>
            </>
          )}


{Tip === "Forge" && (
            <>
            <div className='ToolTip'>
            <img src={forgeIcon} width="60" height="60" alt="Forge" /> 
            <div> A Solana token creator app which helps to improve the liquidity of Kilopi on Solana Chain.
            </div>
            
            </div>
            </>
          )}






        </div>





      )}



<div className="navCont">
<div className="nav-bar">
	<a href="https://kilopi.net/roadmap/" className="nav" target="_blank" rel="noreferrer noopener">Roadmap</a>
	<a href="https://github.com/Kilopicoin/kilopiWiki/wiki" className="nav" target="_blank" rel="noreferrer noopener">Docs</a>
	<a href="https://kilopi.net/exchanges/" className="nav" target="_blank" rel="noreferrer noopener">Exchanges</a>
	<a href="https://kilopi.net/faq/" className="nav" target="_blank" rel="noreferrer noopener">FAQ</a>
  <a href="https://github.com/Kilopicoin/kilopiWiki/wiki/Media" className="nav" target="_blank" rel="noreferrer noopener">Media</a>
  <a href="https://kilopi.net/community/" className="nav" target="_blank" rel="noreferrer noopener">Team</a>


  <a
  href="https://kilopi.net/pod/"
  className="nav"
  target="_blank"
  rel="noreferrer noopener"
  style={{ color: '#66ffff' }}
>
  Proof of Development
</a>


</div>
</div>

<div className="navCont">
<div className="nav-barS">

<ul>
         <li onClick={handleTelegramClick}><i className="fab fa-telegram"></i></li>
         <li onClick={handleTwitterClick}><i className="fab fa-twitter"></i></li>
         <li onClick={handleInstagramClick}><i className="fab fa-instagram"></i></li>
         <li onClick={handleLinkedinClick}><i className="fab fa-linkedin-in"></i></li>
         <li onClick={handleYoutubeClick}><i className="fab fa-youtube"></i></li>
         <li onClick={handleEnvelopeClick}><i className="fa fa-envelope"></i></li>
         <li onClick={handleDiscordClick}><i className="fab fa-discord"></i></li>
         <li onClick={handleGithubClick}><i className="fab fa-github"></i></li>
         <li onClick={handleRedditClick}><i className="fab fa-reddit"></i></li>
         <li onClick={handleMediumClick}><i className="fab fa-medium"></i></li>
         <li onClick={handleFacebookClick}><i className="fab fa-facebook-f"></i></li>
      </ul>


   </div>
    </div>



    <div className="navCont">
<div className="nav-barS2">
        <p></p>
          <div className="neon orange">Vote, Govern, Play, Earn, Stake, Watch, Calculate, Spend, Socialize, Enjoy</div>
          <p></p>
          <div className="neon orange"> <div className="satirici">Kilopi</div> is an Ecosystem of Web3 Applications with a Deflationary Tokenized System</div>
          </div>
    </div>




    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      onNodeClick={onNodeClick}
      onNodeMouseEnter={onNodeMouseEnter}
      onNodeMouseLeave={onNodeMouseLeave}
      onNodeDragStart={onNodeDragStart}
    >
      
    
      <Background className='blob' gap={16} />

    </ReactFlow>




    
    <div className="navContFoot">
<div className="nav-barFoot">
	<div className="navFoot">--Project Elements and Token Flow--<br />
  Hover elements to reveal information <br />
  Drag elements to display more neatly  <br />
  Click elements to go to the regarding pages </div>
</div>
</div>



    </div>
  );
};

export default OverviewFlow;
