export default class EtherniaItemSheet extends ItemSheet {
	get template() {
		return `systems/ethernia/templates/sheets/${this.item.data.type}-sheet.html`;
	}

	getData() {
		const data = super.getData();

		data.config = CONFIG.eth;

		return data;
    }
}