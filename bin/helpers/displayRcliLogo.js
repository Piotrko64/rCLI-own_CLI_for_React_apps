const figlet = require("figlet");
const chalk = require("chalk");
const boxen = require("boxen");

function displayRcliLogo() {
    figlet("rCLI", (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(
            boxen(chalk.hex("#0F5FFA")(data), {
                padding: 1,
                margin: 1,
                borderStyle: "double",
                borderColor: "#0F5FFA",
            })
        );
        console.log(chalk.hex("#0F5FFA")("=== by Piotr Kołodziejczyk (Front Flex) ==="));
    });
}

module.exports = { displayRcliLogo };
