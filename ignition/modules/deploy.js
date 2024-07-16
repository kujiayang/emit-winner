const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("EmittingWinner", (m) => {
  const emittingwinner = m.contract("EmitWinner", []);

  m.call(emittingwinner, "checkwinner", ["0xd3A854530C40D856e48B5b6E67f9c2a7f0bcBF9e"]);

  return { emittingwinner };
});
