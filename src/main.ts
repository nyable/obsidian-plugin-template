import { App, Plugin, PluginSettingTab } from 'obsidian';
import './styles/index.scss';
interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
};
export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload (): Promise<void> {
		await this.loadSettings();
		this.addSettingTab(new SampleSettingTab(this.app, this));
		console.log(123);

	}
	onunload (): void {
		console.log('unloading plugin');
	}

	async loadSettings (): Promise<void> {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings (): Promise<void> {
		await this.saveData(this.settings);
	}
}


class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display (): void {
		const { containerEl } = this;
		containerEl.empty();
	}
}
