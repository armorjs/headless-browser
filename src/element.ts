export class ArmorHeadlessElement {
	public readonly element: HTMLElement;
	public readonly document: HTMLDocument;

	constructor(document: any, element: HTMLElement) {
		if (!element) {
			throw new Error('Headless element init failed - must provide element argument.');
		}

		if (!document){
			throw new Error('Headless element init failed - must provide document argument.');
		}

		this.document = document;
		this.element = element;
	}

	public html(): string|null {
		return this.element.innerHTML;
	}

	public text(): string|null {
		if (typeof this.element.textContent !== 'string') {
			return null;
		}

		return this.element.textContent.trim();
	}

	public childCount(): number {
		return this.element.childElementCount;
	}

	public click(): void {
		const evt: Event = this.document.createEvent('click');
		evt.initEvent('click', false, true);
		this.document.body.dispatchEvent(evt);
	}

	public child(selector: string): ArmorHeadlessElement|null {
		return null;
	}
}