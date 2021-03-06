import {ArmorKeyBoolean, ArmorKeyStore, ArmorKeyString} from '@armorjs/key-store';

export class ArmorHeadlessRequestOptionsLog extends ArmorKeyStore {
	public readonly enabled: ArmorKeyBoolean;

	public readonly writeToDisk: {
		enabled: ArmorKeyBoolean;
		atPath: ArmorKeyString;
	};

	constructor() {
		super();
		this.enabled = new ArmorKeyBoolean(false);
		this.writeToDisk = {
			enabled: new ArmorKeyBoolean(false),
			atPath: new ArmorKeyString()
		};
	}
}
