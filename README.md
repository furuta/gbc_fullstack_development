# Full Stack Development 1 Final Project
by Tomohiro Furuta

# What is this?
- You can find crypto kitties( https://www.cryptokitties.co/ ) by ID
- Web3 module is used to connect the Cryptokitties Smart Contract
- The prices of Ethereum is gotten by using API

# How to use
1. Clone this repository to your PC  
`git clone https://github.com/furuta/gbc_fullstack_development.git`
1. Move directory  
`cd gbc_fullstack_development`
1. Install node.js( https://nodejs.dev/how-to-install-nodejs )
1. Execute node.js  
`node app.js`
1. Open 'http://localhost:3001' in your web browser
1. Input any number to the top form and click button
1. If there is crypto kitty of the ID, the page shows it
1. The right top numbers are the current price of Ethereum

# Notice
Accessing to the cryptokitties website is baned in the Wifi in GBC, so kitty's image cannot be shown.

# Technical parameters
- Button action was given with javascript handler.
- jQuery was used as a javascript library.
- I used bootstrap as a CSS framework.
- Ajax used an API to obtain Ethereum prices.  
- Information was obtained from Cryptokitties, one of the smart contracts, using Web3.
