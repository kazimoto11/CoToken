// import the contract artifact
const Co = artifacts.require('./Co.sol')

// test starts here
contract('Co', function (accounts) {
  // predefine the contract instance
  let CoInstance

  // before each test, create a new contract instance
  beforeEach(async function () {
    CoInstance = await Co.new()
  })

  //test 1
  it("Should mint coins", async function() {
    // Use mintedCoins() to mint 10 coins
    await CoInstance.mintedCoins(accounts[1],10, { 'from': accounts[1] })
    // retrieve the balance that is now 10
    let coins = await CoInstance.balanceOf(accounts[1])
    //Check if 10 coins were minted
    assert.equal(coins.toNumber(), 10, "10 coins weren't minted")
  })

  //test 2
  it("Should check if burn(), burns coins when called upon", async function() {
    //declares that accounts[1] is the owner of the contract
    //let caller = CoInstance.owner()
    //mints 10 coins for accounts[1]
    await CoInstance.mintedCoins(minter,10)
    // Owner should burn 5 coins 
    await CoInstance.burn(minter,5)
    //retrieve the balance of coins by owner
    let balance_ = await CoInstance.balanceOf(minter)
    //Check if owner is remained with 5 coins
    assert.equal(balance_.toNumber(), 5, "5 coins weren't burned ")
  })

})