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
class MultiChoiceValue {
	private _id: string;
	private _choices: string[];
	private _label?: string;
	private _title?: string;
	constructor(input: {id: string, choices: string[], label?: string, hoverText?: string}){
		this._id = input.id;
		this._choices = input.choices;
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
		const input = document.createElement(`select`);
		input.id = `${this._id}_field`;
		this._choices.forEach((choice) => {
			const option = document.createElement(`option`);
			option.innerText = choice;
			input.appendChild(option);
		});
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
class AdvancedMultiChoiceValue {
	private _id: string;
	private _choices: {label: string, value: ObjectEquivalent}[];
	private _label?: string;
	private _title?: string;
	constructor(input: {id: string, choices: {label: string, value: ObjectEquivalent}[], label?: string, hoverText?: string}){
		this._id = input.id;
		this._choices = input.choices;
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
		const input = document.createElement(`select`);
		input.id = `${this._id}_field`;
		this._choices.forEach((choice) => {
			const option = document.createElement(`option`);
			option.innerText = choice.label;
			input.appendChild(option);
		});
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
class timeDateValue {
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
		input.type = `datetime-local`;
		input.step = `1`;
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
class UndevelopedValue {
	get toHTMLElement () {
		const p = document.createElement(`p`);
		p.innerText = `This has not been added yet`;
		return p;
	}
}
type Value = StringValue | BoolValue | IntegerValue | MultiChoiceValue | UndevelopedValue;
class ObjectEntry {
	private _value: ObjectEquivalent;
	private _key: {
		header: {
			text: string; size: number;
		}; hover?: string | undefined;
	};
	constructor(input: {key: {header: {text: string , size: number}, hover?: string}, value: ObjectEquivalent}){
		this._key = input.key;
		this._value = input.value;
	}
	get toHTMLElement() {
		const div = document.createElement(`div`);
		if(this._key.hover){
			div.title = this._key.hover;
		}
		const header = document.createElement(`h1`);
		header.className = `size_${this._key.header.size}`;
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
class CommonCommand {
	private _size: number;
	constructor(input: {size: number}){
		this._size = input.size;
	}
	get toHTMLElement() {
		return new Obj({entries: [
			new ObjectEntry({key: {header: {text: `Active`, size: 5}}, value:
															new BoolValue({id: `active`})
			}),
			new ObjectEntry({key: {header: {text: `Visibility`, size: 5}}, value:
															new MultiChoiceValue({id: `visibility`, choices: [`visible`, `private`, `choice`]})
			}),
			new ObjectEntry({key: {header: {text: `Permissions`, size: 5}}, value:
				new Obj({entries: [
					new ObjectEntry({key: {header: {text: `Default Blacklist/whitelist`, size: 6}}, value:
						new MultiChoiceValue({id: `everyone`, choices: [`whitelist`, `blacklist`]})
					}),
					new ObjectEntry({key: {header: {text: `Server Blacklist`, size: 6}}, value:
						new Arr({entry:
							new ArrayEntry({value:
								new StringValue({id: `guildBlacklist`})
							})
						})
					}),
					new ObjectEntry({key: {header: {text: `Server WhiteList`, size: 6}}, value:
					new Arr({entry:
						new ArrayEntry({value:
							new StringValue({id: `guildWhitelist`})
						})
					})
					}),
					new ObjectEntry({key: {header: {text: `Channel Blacklist`, size: 6}}, value:
					new Arr({entry:
						new ArrayEntry({value:
							new StringValue({id: `channelBlacklist`})
						})
					})
					}),
					new ObjectEntry({key: {header: {text: `Channel Whitelist`, size: 6}}, value:
					new Arr({entry:
						new ArrayEntry({value:
							new StringValue({id: `channelWhitelist`})
						})
					})
					}),
					new ObjectEntry({key: {header: {text: `Role Blacklist`, size: 6}}, value:
					new Arr({entry:
						new ArrayEntry({value:
							new StringValue({id: `roleBlacklist`})
						})
					})
					}),
					new ObjectEntry({key: {header: {text: `Role Whitelist`, size: 6}}, value:
					new Arr({entry:
						new ArrayEntry({value:
							new StringValue({id: `roleWhitelist`})
						})
					})
					}),
					new ObjectEntry({key: {header: {text: `User Blacklist`, size: 6}}, value:
					new Arr({entry:
						new ArrayEntry({value:
							new StringValue({id: `userBlacklist`})
						})
					})
					}),
					new ObjectEntry({key: {header: {text: `User Whitelist`, size: 6}}, value:
					new Arr({entry:
						new ArrayEntry({value:
							new StringValue({id: `userWhitelist`})
						})
					})
					}),
				]})
			}),
		]}).toHTMLElement;
	}
}

type Collection = Obj | Arr | CommonCommand;
type ObjectEquivalent = Value | Collection;
window.onload = () => {
	const config = new Obj({entries: [
		new ObjectEntry({key: {header: {text: `general config`, size: 1}}, value: 
			new Obj({entries: [
				new ObjectEntry({key: {header: {text: `Path to .ENV: `, size: 2}}, value: 
					new StringValue({id: `envPath`})
				})
			]})
		}),
		new ObjectEntry({key: {header: {text: `bot config`, size: 1}}, value: 
			new Arr({entry: 
				new ArrayEntry({value: 
					new Obj({entries: [
						new ObjectEntry({key: {header: {text: `Name`, size: 2}}, value:
							new StringValue({id: `name`})
						}),
						new ObjectEntry({key: {header: {text: `Client Options`, size: 2}}, value:
							new Obj({entries: [
								new ObjectEntry({key: {header: {text: `Prescence`, size: 3}}, value:
									new Obj({entries: [
										new ObjectEntry({key: {header: {text: `Status`, size: 4}}, value:
											new MultiChoiceValue({id: `status`, choices: [`online`, `idle`, `invisible`, `dnd`]})
										}),
										new ObjectEntry({key: {header: {text: `AFK`, size: 3}}, value:
											new BoolValue({id: `AFK`})
										}),
										new ObjectEntry({key: {header: {text: `activities`, size: 3}}, value:
											new Arr({entry:
												new ArrayEntry({value:
													new Obj({entries: [
														new ObjectEntry({key: {header: {text: `Name`, size: 4}}, value:
															new StringValue({id: `name`})
														}),
														new ObjectEntry({key: {header: {text: `Type`, size: 4}}, value:
															new MultiChoiceValue({id: `type`, choices: [`PLAYING`, `STREAMING`, `LISTENING`, `WATCHING`, `COMPETING`]})
														}),
														new ObjectEntry({key: {header: {text: `AFK`, size: 4}}, value:
															new StringValue({id: `url`})
														}),
													]})
												})
											})
										}),
									]})
								})
							]})
						}),
						new ObjectEntry({key: {header: {text: `Token identifier`, size: 2}, hover: `Which token in the .ENV should be used?`}, value:
							new StringValue({id: `token`})
						}),
						new ObjectEntry({key: {header: {text: `Features`, size: 2}}, value:
							new Obj({entries: [
								new ObjectEntry({key: {header: {text: `Commands`, size: 3}}, value: 
									new Obj({entries: [
										new ObjectEntry({key: {header: {text: `General reply function`, size: 4}}, value:
											new Arr({entry:
												new ArrayEntry({value:
													new Obj({entries: [
														new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
															new CommonCommand({size: 6})
														}),
														new ObjectEntry({key: {header: {text: `Name`, size: 5}}, value:
															new StringValue({id: `name`})
														}),
														new ObjectEntry({key: {header: {text: `Message`, size: 5}}, value:
															new Obj({entries: [
																new ObjectEntry({key: {header: {text: `Public`, size: 6}}, value:
																	new BoolValue({id: `emphereal`})
																}),
																new ObjectEntry({key: {header: {text: `Text to Speech`, size: 6}}, value:
																	new BoolValue({id: `tts`})
																}),
																new ObjectEntry({key: {header: {text: `Content`, size: 6}}, value:
																	new StringValue({id: `content`})
																}),
																new ObjectEntry({key: {header: {text: `Embeds`, size: 6}}, value:
																	new Arr({entry: 
																		new ArrayEntry({value:
																			new Obj({entries: [
																				new ObjectEntry({key: {header: {text: `Author`, size: 7}}, value:
																					new Obj({entries: [
																						new ObjectEntry({key: {header: {text: `Name`, size: 8}}, value:
																							new UndevelopedValue()
																						}),
																						new ObjectEntry({key: {header: {text: `Url`, size: 8}}, value:
																							new UndevelopedValue()
																						}),
																						new ObjectEntry({key: {header: {text: `Icon url`, size: 8}}, value:
																							new UndevelopedValue()
																						}),
																					]})
																				}),
																				new ObjectEntry({key: {header: {text: `Color`, size: 7}}, value:
																					new StringValue({id: `color`})
																				}),
																				new ObjectEntry({key: {header: {text: `Description`, size: 7}}, value:
																					new StringValue({id: `description`})
																				}),
																				new ObjectEntry({key: {header: {text: `Fields`, size: 7}}, value:
																					new Arr({entry:
																						new ArrayEntry({value:
																							new Obj({entries: [
																								new ObjectEntry({key: {header: {text: `Name`, size: 8}}, value:
																									new StringValue({id: `name`})
																								}),
																								new ObjectEntry({key: {header: {text: `Value`, size: 8}}, value:
																									new StringValue({id: `value`})
																								}),
																								new ObjectEntry({key: {header: {text: `Inline`, size: 8}}, value:
																									new BoolValue({id: `inline`})
																								}),
																							]})
																						})
																					})
																				}),
																				new ObjectEntry({key: {header: {text: `Footer`, size: 7}}, value:
																					new Obj({entries: [
																						new ObjectEntry({key: {header: {text: `Text`, size: 8}}, value:
																							new StringValue({id: `text`})
																						}),
																						new ObjectEntry({key: {header: {text: `Icon url`, size: 8}}, value:
																							new StringValue({id: `iconURL`})
																						}),
																					]})
																				}),
																				new ObjectEntry({key: {header: {text: `Image`, size: 7}}, value:
																					new StringValue({id: `url`})
																				}),
																				new ObjectEntry({key: {header: {text: `Thumbnail`, size: 7}}, value:
																					new StringValue({id: `url`})
																				}),
																				new ObjectEntry({key: {header: {text: `Timestamp`, size: 7}}, value:
																					new timeDateValue({id: `timestamp`})
																				}),
																				new ObjectEntry({key: {header: {text: `Title`, size: 7}}, value:
																					new StringValue({id: `title`})
																				}),
																				new ObjectEntry({key: {header: {text: `Url`, size: 7}}, value:
																					new StringValue({id: `url`})
																				}),
																			]})
																		})
																	})
																}),
																new ObjectEntry({key: {header: {text: `Files`, size: 6}}, value:
																	new Arr({entry: 
																		new ArrayEntry({value:
																			new StringValue({id: `file`})
																		})
																	})
																}),
															]})
														}),
													]})
												})
											})
										}),
										new ObjectEntry({key: {header: {text: `Bot Link`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `User Info`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `Server Info`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `Join Date`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `Dice`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `XKCD`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `Maze`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `Tic Tac Toe`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `Coinflip`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `Wordle`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),
										new ObjectEntry({key: {header: {text: `Reboot`, size: 4}}, value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Common Command parameters`, size: 5}}, value:
													new CommonCommand({size: 6})
												}),
											]})
										}),

									]})
								}),
								new ObjectEntry({key: {header: {text: `Triggers`, size: 3}}, value:
									new Arr({entry:
										new ArrayEntry({value:
											new Obj({entries: [
												new ObjectEntry({key: {header: {text: `Active`, size: 4}}, value:
													new BoolValue({id: `active`})
												}),
												new ObjectEntry({key: {header: {text: `Input`, size: 4}}, value:
													new UndevelopedValue()
												}),
												new ObjectEntry({key: {header: {text: `Output`, size: 4}}, value:
													new UndevelopedValue()
												}),
											]})
										})
									})
								}),
							]})
						}),
					]})
				})
			})
		})


	]});
	document.body.appendChild(config.toHTMLElement);
};