import { eth } from "./module/Config.js";
import EtherniaItemSheet from "./module/sheets/EtherniaItemSheet.js";

Hooks.once("init", function () {
    console.log("initialising ethernia system.");

    CONFIG.eth = eth;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("ethernia", EtherniaItemSheet, { makeDefault: true });
});