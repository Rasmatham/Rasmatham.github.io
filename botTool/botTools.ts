class StringValue {
	private _id: string;
	private _label?: string;
	private _title?: string;
	private _hardcoded?: string;
	constructor(input: { id: string; label?: string; hoverText?: string; hardcoded?: string }) {
		this._id = input.id;
		this._label = input.label;
		this._title = input.hoverText;
		this._hardcoded = input.hardcoded;
	}
	get label(): HTMLLabelElement | undefined {
		if (this._label) {
			const label: HTMLLabelElement = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get field(): HTMLInputElement {
		const input: HTMLInputElement = document.createElement(`input`);
		input.type = `text`;
		input.id = `${this._id}_field`;
		if (this._hardcoded) {
			input.disabled = true;
			input.value = this._hardcoded;
		}
		return input;
	}
	get toHTMLElement(): HTMLDivElement {
		const div: HTMLDivElement = document.createElement(`div`);
		div.id = `${this._id}`;
		if (this._title) {
			div.title = this._title;
		}
		if (this.label) {
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
	private _hardcoded?: boolean;
	constructor(input: { id: string; label?: string; hoverText?: string; hardcoded?: boolean }) {
		this._id = input.id;
		this._label = input.label;
		this._title = input.hoverText;
		this._hardcoded = input.hardcoded;
	}
	get label(): HTMLLabelElement | undefined {
		if (this._label) {
			const label: HTMLLabelElement = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get field(): HTMLInputElement {
		const input: HTMLInputElement = document.createElement(`input`);
		input.type = `checkbox`;
		input.id = `${this._id}_field`;
		if (this._hardcoded) {
			input.disabled = true;
			input.checked = this._hardcoded;
		}
		return input;
	}
	get toHTMLElement(): HTMLDivElement {
		const div: HTMLDivElement = document.createElement(`div`);
		div.id = `${this._id}`;
		if (this._title) {
			div.title = this._title;
		}
		if (this.label) {
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
	private _hardcoded?: number;
	constructor(input: { id: string; label?: string; hoverText?: string; hardcoded?: number }) {
		this._id = input.id;
		this._label = input.label;
		this._title = input.hoverText;
		this._hardcoded = typeof input.hardcoded == `number` ? Math.round(input.hardcoded) : undefined;
	}
	get label(): HTMLLabelElement | undefined {
		if (this._label) {
			const label: HTMLLabelElement = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get field(): HTMLInputElement {
		const input: HTMLInputElement = document.createElement(`input`);
		input.type = `numeric`;
		input.id = `${this._id}_field`;
		input.disabled = this._hardcoded ? true : false;
		if (this._hardcoded) {
			input.disabled = true;
			input.value = this._hardcoded.toString();
		}
		return input;
	}
	get toHTMLElement(): HTMLDivElement {
		const div: HTMLDivElement = document.createElement(`div`);
		div.id = `${this._id}`;
		if (this._title) {
			div.title = this._title;
		}
		if (this.label) {
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
	constructor(input: { id: string; choices: string[]; label?: string; hoverText?: string }) {
		this._id = input.id;
		this._choices = input.choices;
		this._label = input.label;
		this._title = input.hoverText;
	}
	get label(): HTMLLabelElement | undefined {
		if (this._label) {
			const label: HTMLLabelElement = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get field(): HTMLSelectElement {
		const input: HTMLSelectElement = document.createElement(`select`);
		input.id = `${this._id}_field`;
		this._choices.forEach((choice: string): void => {
			const option: HTMLOptionElement = document.createElement(`option`);
			option.innerText = choice;
			input.appendChild(option);
		});
		return input;
	}
	get toHTMLElement(): HTMLDivElement {
		const div: HTMLDivElement = document.createElement(`div`);
		div.id = `${this._id}`;
		if (this._title) {
			div.title = this._title;
		}
		if (this.label) {
			div.appendChild(this.label);
		}
		div.appendChild(this.field);
		return div;
	}
}
class MultiChoiceAdvanced {
	private _id: string;
	private _choices: {
		label: string;
		entry: ObjectEquivalent;
	}[];
	private _label?: string;
	private _title?: string;
	constructor(input: {
		id: string;
		choices: {
			label: string;
			entry: ObjectEquivalent;
		}[];
		label?: string;
		hoverText?: string;
	}) {
		this._id = input.id;
		this._choices = input.choices;
		this._label = input.label;
		this._title = input.hoverText;
	}
	get label(): HTMLLabelElement | undefined {
		if (this._label) {
			const label: HTMLLabelElement = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get toHTMLElement(): HTMLDivElement {
		const input: HTMLSelectElement = document.createElement(`select`);
		input.id = `${this._id}_field`;
		this._choices.forEach((choice: { label: string; entry: ObjectEquivalent }): void => {
			const option: HTMLOptionElement = document.createElement(`option`);
			option.innerText = choice.label;
			input.appendChild(option);
		});
		const div: HTMLDivElement = document.createElement(`div`);
		div.appendChild(input);
		div.appendChild(this._choices[this._choices.findIndex((choice: { label: string; entry: ObjectEquivalent }): boolean => choice.label == input.value)].entry.toHTMLElement);
		input.onchange = (): void => {
			if (div.lastChild) {
				div.removeChild(div.lastChild);
			}
			div.appendChild(this._choices[this._choices.findIndex((choice: { label: string; entry: ObjectEquivalent }): boolean => choice.label == input.value)].entry.toHTMLElement);
		};
		return div;
	}
}
class timeDateValue {
	private _id: string;
	private _label?: string;
	private _title?: string;
	private _hardcoded?: Date;
	constructor(input: { id: string; label?: string; hoverText?: string; hardcoded?: Date }) {
		this._id = input.id;
		this._label = input.label;
		this._title = input.hoverText;
		this._hardcoded = input.hardcoded;
	}
	get label(): HTMLLabelElement | undefined {
		if (this._label) {
			const label: HTMLLabelElement = document.createElement(`label`);
			label.id = `${this._id}_label`;
			label.htmlFor = `${this._id}_field`;
			label.innerText = this._label;
			return label;
		}
	}
	get field(): HTMLInputElement {
		const input: HTMLInputElement = document.createElement(`input`);
		input.type = `datetime-local`;
		input.step = `1`;
		input.id = `${this._id}_field`;
		if (this._hardcoded) {
			input.disabled = true;
			input.value = this._hardcoded.toISOString();
		}
		return input;
	}
	get toHTMLElement(): HTMLDivElement {
		const div: HTMLDivElement = document.createElement(`div`);
		div.id = `${this._id}`;
		if (this._title) {
			div.title = this._title;
		}
		if (this.label) {
			div.appendChild(this.label);
		}
		div.appendChild(this.field);
		return div;
	}
}
class UndevelopedValue {
	get toHTMLElement(): HTMLParagraphElement {
		const p: HTMLParagraphElement = document.createElement(`p`);
		p.innerText = `This has not been added yet`;
		return p;
	}
}
type Value = StringValue | BoolValue | IntegerValue | MultiChoiceValue | MultiChoiceAdvanced | UndevelopedValue;
class ObjectEntry {
	private _value: ObjectEquivalent;
	private _key: {
		text: string;
		hover?: string | undefined;
	};
	constructor(input: {
		key: {
			text: string;
			hover?: string;
		};
		value: ObjectEquivalent;
	}) {
		this._key = input.key;
		this._value = input.value;
	}
	get toHTMLElement(): HTMLDivElement {
		const div: HTMLDivElement = document.createElement(`div`);
		if (this._key.hover) {
			div.title = this._key.hover;
		}
		const header: HTMLHeadElement = document.createElement(`h1`);
		header.innerText = this._key.text;
		div.appendChild(header);
		div.appendChild(this._value.toHTMLElement);
		return div;
	}
}
class Obj {
	private _entries: ObjectEntry[];
	constructor(input: { entries: ObjectEntry[] }) {
		this._entries = input.entries;
	}
	get toHTMLElement(): HTMLUListElement {
		const obj: HTMLUListElement = document.createElement(`ul`);
		this._entries.forEach((entry: ObjectEntry): void => {
			const li: HTMLLIElement = document.createElement(`li`);
			li.appendChild(entry.toHTMLElement);
			obj.appendChild(li);
		});
		return obj;
	}
}
class ArrayEntry {
	private _value: ObjectEquivalent;
	constructor(input: { value: ObjectEquivalent }) {
		this._value = input.value;
	}
	get toHTMLElement(): HTMLDivElement {
		const div: HTMLDivElement = document.createElement(`div`);
		const remove: HTMLButtonElement = document.createElement(`button`);
		remove.innerText = `Remove element`;
		div.appendChild(this._value.toHTMLElement);
		div.appendChild(remove);
		remove.onclick = (): void => {
			if (div.parentElement) {
				div.parentElement.remove();
			}
		};
		return div;
	}
}
class Arr {
	private _entry: ArrayEntry;
	constructor(input: { entry: ArrayEntry }) {
		this._entry = input.entry;
	}
	get toHTMLElement(): HTMLOListElement {
		const arr: HTMLOListElement = document.createElement(`ol`);
		const li: HTMLLIElement = document.createElement(`li`);
		arr.appendChild(li);
		const div: HTMLDivElement = document.createElement(`div`);
		li.appendChild(div);
		const add: HTMLButtonElement = document.createElement(`button`);
		add.innerText = `Add element`;
		div.appendChild(add);
		add.onclick = (): void => {
			const newEntry: HTMLLIElement = document.createElement(`li`);
			newEntry.appendChild(this._entry.toHTMLElement);
			li.before(newEntry);
		};
		return arr;
	}
}
class CommonCommand {
	private _size: number;
	constructor(input: { size: number }) {
		this._size = input.size;
	}
	get toHTMLElement(): HTMLUListElement {
		return new Obj({
			entries: [
				new ObjectEntry({
					key: {
						text: `Active`
					},
					value: new BoolValue({
						id: `active`
					})
				}),
				new ObjectEntry({
					key: {
						text: `Visibility`
					},
					value: new MultiChoiceValue({
						id: `visibility`,
						choices: [`visible`, `private`, `choice`]
					})
				}),
				new ObjectEntry({
					key: {
						text: `Permissions`
					},
					value: new Obj({
						entries: [
							new ObjectEntry({
								key: {
									text: `Default Blacklist/whitelist`
								},
								value: new MultiChoiceValue({
									id: `everyone`,
									choices: [`whitelist`, `blacklist`]
								})
							}),
							new ObjectEntry({
								key: {
									text: `Server Blacklist`
								},
								value: new Arr({
									entry: new ArrayEntry({
										value: new StringValue({
											id: `guildBlacklist`
										})
									})
								})
							}),
							new ObjectEntry({
								key: {
									text: `Server WhiteList`
								},
								value: new Arr({
									entry: new ArrayEntry({
										value: new StringValue({
											id: `guildWhitelist`
										})
									})
								})
							}),
							new ObjectEntry({
								key: {
									text: `Channel Blacklist`
								},
								value: new Arr({
									entry: new ArrayEntry({
										value: new StringValue({
											id: `channelBlacklist`
										})
									})
								})
							}),
							new ObjectEntry({
								key: {
									text: `Channel Whitelist`
								},
								value: new Arr({
									entry: new ArrayEntry({
										value: new StringValue({
											id: `channelWhitelist`
										})
									})
								})
							}),
							new ObjectEntry({
								key: {
									text: `Role Blacklist`
								},
								value: new Arr({
									entry: new ArrayEntry({
										value: new StringValue({
											id: `roleBlacklist`
										})
									})
								})
							}),
							new ObjectEntry({
								key: {
									text: `Role Whitelist`
								},
								value: new Arr({
									entry: new ArrayEntry({
										value: new StringValue({
											id: `roleWhitelist`
										})
									})
								})
							}),
							new ObjectEntry({
								key: {
									text: `User Blacklist`
								},
								value: new Arr({
									entry: new ArrayEntry({
										value: new StringValue({
											id: `userBlacklist`
										})
									})
								})
							}),
							new ObjectEntry({
								key: {
									text: `User Whitelist`
								},
								value: new Arr({
									entry: new ArrayEntry({
										value: new StringValue({
											id: `userWhitelist`
										})
									})
								})
							})
						]
					})
				})
			]
		}).toHTMLElement;
	}
}
type Collection = Obj | Arr | CommonCommand;
type ObjectEquivalent = Value | Collection;
window.onload = (): void => {
	const config: Obj = new Obj({
		entries: [
			new ObjectEntry({
				key: {
					text: `general config`
				},
				value: new Obj({
					entries: [
						new ObjectEntry({
							key: {
								text: `Path to .ENV:`
							},
							value: new StringValue({
								id: `envPath`
							})
						})
					]
				})
			}),
			new ObjectEntry({
				key: {
					text: `bot config`
				},
				value: new Arr({
					entry: new ArrayEntry({
						value: new Obj({
							entries: [
								new ObjectEntry({
									key: {
										text: `Name`
									},
									value: new StringValue({
										id: `name`
									})
								}),
								new ObjectEntry({
									key: {
										text: `Client Options`
									},
									value: new Obj({
										entries: [
											new ObjectEntry({
												key: {
													text: `Prescence`
												},
												value: new Obj({
													entries: [
														new ObjectEntry({
															key: {
																text: `Status`
															},
															value: new MultiChoiceValue({
																id: `status`,
																choices: [`online`, `idle`, `invisible`, `dnd`]
															})
														}),
														new ObjectEntry({
															key: {
																text: `AFK`
															},
															value: new BoolValue({
																id: `AFK`
															})
														}),
														new ObjectEntry({
															key: {
																text: `activities`
															},
															value: new Arr({
																entry: new ArrayEntry({
																	value: new Obj({
																		entries: [
																			new ObjectEntry({
																				key: {
																					text: `Name`
																				},
																				value: new StringValue({
																					id: `name`
																				})
																			}),
																			new ObjectEntry({
																				key: {
																					text: `Type`
																				},
																				value: new MultiChoiceValue({
																					id: `type`,
																					choices: [`PLAYING`, `STREAMING`, `LISTENING`, `WATCHING`, `COMPETING`]
																				})
																			}),
																			new ObjectEntry({
																				key: {
																					text: `AFK`
																				},
																				value: new StringValue({
																					id: `url`
																				})
																			})
																		]
																	})
																})
															})
														})
													]
												})
											})
										]
									})
								}),
								new ObjectEntry({
									key: {
										text: `Token identifier`,
										hover: `Which token in the .ENV should be used?`
									},
									value: new StringValue({
										id: `token`
									})
								}),
								new ObjectEntry({
									key: {
										text: `Features`
									},
									value: new Obj({
										entries: [
											new ObjectEntry({
												key: {
													text: `Commands`
												},
												value: new Obj({
													entries: [
														new ObjectEntry({
															key: {
																text: `General reply function`
															},
															value: new Arr({
																entry: new ArrayEntry({
																	value: new Obj({
																		entries: [
																			new ObjectEntry({
																				key: {
																					text: `Common Command parameters`
																				},
																				value: new CommonCommand({
																					size: 6
																				})
																			}),
																			new ObjectEntry({
																				key: {
																					text: `Name`
																				},
																				value: new StringValue({
																					id: `name`
																				})
																			}),
																			new ObjectEntry({
																				key: {
																					text: `Message`
																				},
																				value: new Obj({
																					entries: [
																						new ObjectEntry({
																							key: {
																								text: `Public`
																							},
																							value: new BoolValue({
																								id: `emphereal`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Text to Speech`
																							},
																							value: new BoolValue({
																								id: `tts`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Content`
																							},
																							value: new StringValue({
																								id: `content`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Embeds`
																							},
																							value: new Arr({
																								entry: new ArrayEntry({
																									value: new Obj({
																										entries: [
																											new ObjectEntry({
																												key: {
																													text: `Author`
																												},
																												value: new Obj({
																													entries: [
																														new ObjectEntry({
																															key: {
																																text: `Name`
																															},
																															value: new UndevelopedValue()
																														}),
																														new ObjectEntry({
																															key: {
																																text: `Url`
																															},
																															value: new UndevelopedValue()
																														}),
																														new ObjectEntry({
																															key: {
																																text: `Icon url`
																															},
																															value: new UndevelopedValue()
																														})
																													]
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Color`
																												},
																												value: new StringValue({
																													id: `color`
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Description`
																												},
																												value: new StringValue({
																													id: `description`
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Fields`
																												},
																												value: new Arr({
																													entry: new ArrayEntry({
																														value: new Obj({
																															entries: [
																																new ObjectEntry({
																																	key: {
																																		text: `Name`
																																	},
																																	value: new StringValue({
																																		id: `name`
																																	})
																																}),
																																new ObjectEntry({
																																	key: {
																																		text: `Value`
																																	},
																																	value: new StringValue({
																																		id: `value`
																																	})
																																}),
																																new ObjectEntry({
																																	key: {
																																		text: `Inline`
																																	},
																																	value: new BoolValue({
																																		id: `inline`
																																	})
																																})
																															]
																														})
																													})
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Footer`
																												},
																												value: new Obj({
																													entries: [
																														new ObjectEntry({
																															key: {
																																text: `Text`
																															},
																															value: new StringValue({
																																id: `text`
																															})
																														}),
																														new ObjectEntry({
																															key: {
																																text: `Icon url`
																															},
																															value: new StringValue({
																																id: `iconURL`
																															})
																														})
																													]
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Image`
																												},
																												value: new StringValue({
																													id: `url`
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Thumbnail`
																												},
																												value: new StringValue({
																													id: `url`
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Timestamp`
																												},
																												value: new timeDateValue({
																													id: `timestamp`
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Title`
																												},
																												value: new StringValue({
																													id: `title`
																												})
																											}),
																											new ObjectEntry({
																												key: {
																													text: `Url`
																												},
																												value: new StringValue({
																													id: `url`
																												})
																											})
																										]
																									})
																								})
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Files`
																							},
																							value: new Arr({
																								entry: new ArrayEntry({
																									value: new StringValue({
																										id: `file`
																									})
																								})
																							})
																						})
																					]
																				})
																			})
																		]
																	})
																})
															})
														}),
														new ObjectEntry({
															key: {
																text: `Bot Link`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `User Info`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `Server Info`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `Join Date`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `Dice`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `XKCD`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `Maze`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `Tic Tac Toe`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `Coinflip`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `Wordle`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														}),
														new ObjectEntry({
															key: {
																text: `Reboot`
															},
															value: new Obj({
																entries: [
																	new ObjectEntry({
																		key: {
																			text: `Common Command parameters`
																		},
																		value: new CommonCommand({
																			size: 6
																		})
																	})
																]
															})
														})
													]
												})
											}),
											new ObjectEntry({
												key: {
													text: `Triggers`
												},
												value: new Arr({
													entry: new ArrayEntry({
														value: new Obj({
															entries: [
																new ObjectEntry({
																	key: {
																		text: `Active`
																	},
																	value: new BoolValue({
																		id: `active`
																	})
																}),
																new ObjectEntry({
																	key: {
																		text: `Input`
																	},
																	value: new MultiChoiceAdvanced({
																		id: `input`,
																		choices: [
																			{
																				label: `string`,
																				entry: new Obj({
																					entries: [
																						new ObjectEntry({
																							key: {
																								text: `Type`
																							},
																							value: new StringValue({
																								id: `type`,
																								hardcoded: `string`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Only exact word`
																							},
																							value: new BoolValue({
																								id: `type`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Triggers`
																							},
																							value: new Arr({
																								entry: new ArrayEntry({
																									value: new StringValue({
																										id: `triggers`
																									})
																								})
																							})
																						})
																					]
																				})
																			},
																			{
																				label: `reaction`,
																				entry: new Obj({
																					entries: [
																						new ObjectEntry({
																							key: {
																								text: `Type`
																							},
																							value: new StringValue({
																								id: `type`,
																								hardcoded: `reaction`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Triggers`
																							},
																							value: new Arr({
																								entry: new ArrayEntry({
																									value: new StringValue({
																										id: `triggers`
																									})
																								})
																							})
																						})
																					]
																				})
																			},
																			{
																				label: `mention`,
																				entry: new Obj({
																					entries: [
																						new ObjectEntry({
																							key: {
																								text: `Type`
																							},
																							value: new StringValue({
																								id: `type`,
																								hardcoded: `mention`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Triggers`
																							},
																							value: new Arr({
																								entry: new ArrayEntry({
																									value: new StringValue({
																										id: `triggers`
																									})
																								})
																							})
																						})
																					]
																				})
																			}
																		]
																	})
																}),
																new ObjectEntry({
																	key: {
																		text: `Output`
																	},
																	value: new MultiChoiceAdvanced({
																		id: `output`,
																		choices: [
																			{
																				label: `message`,
																				entry: new Obj({
																					entries: [
																						new ObjectEntry({
																							key: {
																								text: `Type`
																							},
																							value: new StringValue({
																								id: `type`,
																								hardcoded: `message`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Triggers`
																							},
																							value: new ObjectEntry({
																								key: {
																									text: `Message`
																								},
																								value: new Obj({
																									entries: [
																										new ObjectEntry({
																											key: {
																												text: `Public`
																											},
																											value: new BoolValue({
																												id: `emphereal`
																											})
																										}),
																										new ObjectEntry({
																											key: {
																												text: `Text to Speech`
																											},
																											value: new BoolValue({
																												id: `tts`
																											})
																										}),
																										new ObjectEntry({
																											key: {
																												text: `Content`
																											},
																											value: new StringValue({
																												id: `content`
																											})
																										}),
																										new ObjectEntry({
																											key: {
																												text: `Embeds`
																											},
																											value: new Arr({
																												entry: new ArrayEntry({
																													value: new Obj({
																														entries: [
																															new ObjectEntry({
																																key: {
																																	text: `Author`
																																},
																																value: new Obj({
																																	entries: [
																																		new ObjectEntry({
																																			key: {
																																				text: `Name`
																																			},
																																			value: new UndevelopedValue()
																																		}),
																																		new ObjectEntry({
																																			key: {
																																				text: `Url`
																																			},
																																			value: new UndevelopedValue()
																																		}),
																																		new ObjectEntry({
																																			key: {
																																				text: `Icon url`
																																			},
																																			value: new UndevelopedValue()
																																		})
																																	]
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Color`
																																},
																																value: new StringValue({
																																	id: `color`
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Description`
																																},
																																value: new StringValue({
																																	id: `description`
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Fields`
																																},
																																value: new Arr({
																																	entry: new ArrayEntry({
																																		value: new Obj({
																																			entries: [
																																				new ObjectEntry({
																																					key: {
																																						text: `Name`
																																					},
																																					value: new StringValue({
																																						id: `name`
																																					})
																																				}),
																																				new ObjectEntry({
																																					key: {
																																						text: `Value`
																																					},
																																					value: new StringValue({
																																						id: `value`
																																					})
																																				}),
																																				new ObjectEntry({
																																					key: {
																																						text: `Inline`
																																					},
																																					value: new BoolValue({
																																						id: `inline`
																																					})
																																				})
																																			]
																																		})
																																	})
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Footer`
																																},
																																value: new Obj({
																																	entries: [
																																		new ObjectEntry({
																																			key: {
																																				text: `Text`
																																			},
																																			value: new StringValue({
																																				id: `text`
																																			})
																																		}),
																																		new ObjectEntry({
																																			key: {
																																				text: `Icon url`
																																			},
																																			value: new StringValue({
																																				id: `iconURL`
																																			})
																																		})
																																	]
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Image`
																																},
																																value: new StringValue({
																																	id: `url`
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Thumbnail`
																																},
																																value: new StringValue({
																																	id: `url`
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Timestamp`
																																},
																																value: new timeDateValue({
																																	id: `timestamp`
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Title`
																																},
																																value: new StringValue({
																																	id: `title`
																																})
																															}),
																															new ObjectEntry({
																																key: {
																																	text: `Url`
																																},
																																value: new StringValue({
																																	id: `url`
																																})
																															})
																														]
																													})
																												})
																											})
																										}),
																										new ObjectEntry({
																											key: {
																												text: `Files`
																											},
																											value: new Arr({
																												entry: new ArrayEntry({
																													value: new StringValue({
																														id: `file`
																													})
																												})
																											})
																										})
																									]
																								})
																							})
																						})
																					]
																				})
																			},
																			{
																				label: `reply`,
																				entry: new Obj({
																					entries: [
																						new ObjectEntry({
																							key: {
																								text: `Type`
																							},
																							value: new StringValue({
																								id: `type`,
																								hardcoded: `reply`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Triggers`
																							},
																							value: new UndevelopedValue()
																						})
																					]
																				})
																			},
																			{
																				label: `reaction`,
																				entry: new Obj({
																					entries: [
																						new ObjectEntry({
																							key: {
																								text: `Type`
																							},
																							value: new StringValue({
																								id: `type`,
																								hardcoded: `reaction`
																							})
																						}),
																						new ObjectEntry({
																							key: {
																								text: `Triggers`
																							},
																							value: new UndevelopedValue()
																						})
																					]
																				})
																			}
																		]
																	})
																})
															]
														})
													})
												})
											})
										]
									})
								})
							]
						})
					})
				})
			})
		]
	});
	document.body.appendChild(config.toHTMLElement);
};
