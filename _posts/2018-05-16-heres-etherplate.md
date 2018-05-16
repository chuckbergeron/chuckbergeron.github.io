---
excerpt_separator: <!--more-->
layout:    post
title:     "Here's Etherplate, an Ethereum NFT (ERC721) template project using React + React Router + Redux + Bulma"
author:    "chuckbergeron"
category:  blog
date:      2018-05-16 08:02
published: true
tags:
- ethereum
- blockchain
shared_square_image: posts/etherplatelogo.png
shared_description:  A new feature in Unity 2017.3 can speed up the amount of time you spend developing and in turn improve your life.
---

<div class="row">
  <div class="twelve columns">
    <img src="https://raw.githubusercontent.com/chuckbergeron/etherplate/master/app/images/logos/etherplate-logo--red--lg.png" class="img-responsive" alt="Etherplate Logo">
  </div>
</div>
<br />

Recently I found myself wanting to dive in to blockchain development after finishing the fantastic <a href="https://cryptozombies.io/">CryptoZombies</a> tutorials, and what better way to start working on DApps than to create something for the open source community.

Etherplate is an example project showing how you can hook up your Ethereum Non-Fungible Tokens (NFTs, ERC721, similar to CryptoKitties) contract(s) with web3. It demos minting ERC721 tokens, replaying blockchain history, subscribing to web3 events, and consuming `view` Solidity methods in the JS frontend.

[View Source on GitHub](https://github.com/chuckbergeron/etherplate)

[View Demo on Netlify](http://etherplate.netlify.com/) (Uses Ropsten testnet, 'Loading …' state currently waits for a mined transaction from testnet and therefore could take a few moments)

<div class="row">
  <div class="twelve columns">
    <img src="https://raw.githubusercontent.com/chuckbergeron/etherplate/master/app/images/etherplate-demo.gif" class="img-responsive" alt="Etherplate Demo Gif">
  </div>
</div>

<!--more-->

<br />
Etherplate uses React, React Router, Redux, and Bulma (but it's always possible to rip of any these and replace them with your favourites).

OpenZeppelin's fantastic community-audited contracts has been integrated into Etherplate as a base to start implementing your own ERC721 standard smart contracts.

Etherplate is also a truffle box, so you can easily install it using truffle unbox chuckbergeron/etherplate once you have the 'truffle' npm library installed on your machine.

My hope is that Etherplate gives both newcomers to the DApp world something concrete to start from, as well as giving Ethereum veterans a nice base when starting their next DApp project.

<small><strong>Note: I recently learned about Truffle's new <a href="http://truffleframework.com/blog/drizzle-reactive-ethereum-data-for-front-ends">Drizzle</a> library, which is essentially a Redux library specifically for communicating with the Ethereum blockchain. It was great to learn a bit more Redux and use it in the Web3 context, however knowing about Drizzle now I would have implemented it using that. Hindsight, still 20 / 20. Perhaps the next upgrade to Etherplate would be to switch from pure Redux to using Drizzle.</strong></small>
