class StringValue {
	private _id: string;
	private _label?: string;
	private _title?: string;
	constructor(input: {id: string, label?: string, hoverText?: string}){
		this._id = input.id;
		this._label = input.label;
		this._title = input.hoverText;
	}
	get label () {
		if(this._label){
			const label = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get field () {
		const input = document.createElement(`input`);
		input.type = `text`;
		input.id = `${this._id}_field`;
		return input;
	}
	get toHTMLElement () {
		const div = document.createElement(`div`);
		div.id = `${this._id}`;
		if(this._title){
			div.title = this._title; 
		}
		if(this.label){
			div.appendChild(this.label);
		}
		div.appendChild(this.field);
		return div;
	}
}
class BoolValue {
	private _id: string;
	private _label?: string;
	private _title?: string;
	constructor(input: {id: string, label?: string, hoverText?: string}){
		this._id = input.id;
		this._label = input.label;
		this._title = input.hoverText;
	}
	get label () {
		if(this._label){
			const label = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get field () {
		const input = document.createElement(`input`);
		input.type = `checkbox`;
		input.id = `${this._id}_field`;
		return input;
	}
	get toHTMLElement () {
		const div = document.createElement(`div`);
		div.id = `${this._id}`;
		if(this._title){
			div.title = this._title; 
		}
		if(this.label){
			div.appendChild(this.label);
		}
		div.appendChild(this.field);
		return div;
	}
}
class IntegerValue {
	private _id: string;
	private _label?: string;
	private _title?: string;
	constructor(input: {id: string, label?: string, hoverText?: string}){
		this._id = input.id;
		this._label = input.label;
		this._title = input.hoverText;
	}
	get label () {
		if(this._label){
			const label = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get field () {
		const input = document.createElement(`input`);
		input.type = `numeric`;
		input.id = `${this._id}_field`;
		return input;
	}
	get toHTMLElement () {
		const div = document.createElement(`div`);
		div.id = `${this._id}`;
		if(this._title){
			div.title = this._title; 
		}
		if(this.label){
			div.appendChild(this.label);
		}
		div.appendChild(this.field);
		return div;
	}
}
type Value = StringValue | BoolValue | IntegerValue;
class ObjectEntry {
	private _value: ObjectEquivalent;
	private _key: {
		header: {
			text: string; size: 1 | 2 | 3 | 4 | 5 | 6;
		}; hover?: string | undefined;
	};
	constructor(input: {key: {header: {text: string , size:1|2|3|4|5|6}, hover?: string}, value: ObjectEquivalent}){
		this._key = input.key;
		this._value = input.value;
	}
	get toHTMLElement() {
		const div = document.createElement(`div`);
		if(this._key.hover){
			div.title = this._key.hover;
		}
		const header = document.createElement(`h${this._key.header.size}`);
		header.innerText = this._key.header.text;
		div.appendChild(header);
		div.appendChild(this._value.toHTMLElement);
		return div;
	}
}
class Obj {
	private _entries: ObjectEntry[];
	constructor(input: {entries: ObjectEntry[]}){
		this._entries = input.entries;
	}
	get toHTMLElement() {
		const obj = document.createElement(`ul`);
		this._entries.forEach((entry) => {
			const li = document.createElement(`li`);
			li.appendChild(entry.toHTMLElement);
			obj.appendChild(li);
		});
		return obj;
	}
}
class ArrayEntry {
	private _value: ObjectEquivalent;
	constructor(input: {value: ObjectEquivalent}){
		this._value = input.value;
	}
	get toHTMLElement() {
		const div = document.createElement(`div`);
		const remove = document.createElement(`button`);
		remove.innerText = `Remove element`;
		div.appendChild(this._value.toHTMLElement);
		div.appendChild(remove);
		remove.onclick = () => {
			if(div.parentElement){
				div.parentElement.remove();
			}
		};
		return div;
	}
}
class Arr {
	private _entry: ArrayEntry;
	constructor(input: {entry: ArrayEntry}){
		this._entry = input.entry;
	}
	get toHTMLElement() {
		const arr = document.createElement(`ol`);
		const li = document.createElement(`li`);
		arr.appendChild(li);
		const div = document.createElement(`div`);
		li.appendChild(div);
		const add = document.createElement(`button`);
		add.innerText = `Add element`;
		div.appendChild(add);
		add.onclick = () => {
			const newEntry = document.createElement(`li`);
			newEntry.appendChild(this._entry.toHTMLElement);
			li.before(newEntry);
		};
		return arr;
	}
}
type Collection = Obj | Arr;
type ObjectEquivalent = Value | Collection;
window.onload = () => {
	const config = new Obj({entries: [

		new ObjectEntry({key: {header: {text: `general config`, size: 1}}, value: 
			new Obj({entries: [
				new ObjectEntry({key: {header: {text: `Path to .ENV: `, size: 2}}, value: 
					new StringValue({id: `envPath`}),
				})
			]})
		}),


		new ObjectEntry({key: {header: {text: `bot config`, size: 1}}, value: 
			new Arr({entry: 
				new ArrayEntry({value: 
					new StringValue({id: `envPath`})
				})
			})
		})


	]});
	document.body.appendChild(config.toHTMLElement);
};
