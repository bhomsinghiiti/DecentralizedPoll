async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(["Mark", "Alan", "Jordan", "Kobe"], 87155);
  // Print the deployed contract address to the console
  console.log("Contract address:", Voting_.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });