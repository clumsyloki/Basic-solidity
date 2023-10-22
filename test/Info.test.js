const {expect}=require("chai");

describe("Main",function(){
let owner,user1,user2,token,mainobj
   
   beforeEach(async function(){
     [owner,user1,user2]=await ethers.getSigners()
    token=await ethers.getContractFactory("Info")
    mainobj=await token.deploy()
   })

   describe("first",()=>{

    it("one",async ()=>{     
        await mainobj.set()
        await mainobj.set()
        console.log(await mainobj.get());
    })


   })
 

   
   
})
