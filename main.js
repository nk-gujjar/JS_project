/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.


const NFTs=[];

function mintNFT (name, color, price,variety) 
{
     const NFT= {
      "name"       :   name ,
       "color"     :   color,
       "price"     :   price,
       "variety"  :   variety
     }
     NFTs.push(NFT);
     console.log("NFT      : " + NFT.name);
   
}


function listNFTs ()
 {
     console.log("\n");
     for(var i=0;i<NFTs.length;i++)
     {
      console.log("ID       : " + i);
      console.log("Name     : " + NFTs[i].name);
      console.log("Color    : " + NFTs[i].color);
      console.log("Price($) : " + NFTs[i].price);
      console.log("variety  : " + NFTs[i].variety+ "\n");
     }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply()
 {
console.log("Number of NFTs : "+NFTs.length);
}




mintNFT("monkey", "black",120,2);
mintNFT("flower","red",60,3);
mintNFT("anime", "grey",15,9);
listNFTs();
getTotalSupply();

console.log("Transaction ID : "+"c:\\Users\\nites\\.vscode\\javascript\\NFT\\project.js");
