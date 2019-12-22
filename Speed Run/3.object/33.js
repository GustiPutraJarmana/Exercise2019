/* 

Fahmi adalah seorang game developer terkenal di kompleknya. Suatu hari ia mendapatkan
mimpi dan diperintahkan untuk membuat suatu game. Berikut penjelasan gamenya :

-> Game dimainkan oleh 10 orang berbeda, dibagi 2 team
-> Tiap orang hanya bisa memilih role nya masing masing, 
   berikut adalah daftar hero dan rolenya :
	[
		{
			name: "Axe",
			role: "Tanker"
		},
		{
			name: "Centaur",
			role: "Tanker"
		},
		{
			name: "Anti Mage",
			role: "Carry"
		},
		{
			name: "Invoker",
			role: "Carry"
		},
		{
			name: "Shadow Fiend",
			role: "Carry"
		},
		{
			name: "Void",
			role: "Carry"
		},
		{
			name: "Crystal Maiden",
			role: "Support"
		},
		{
			name: "Witch Doctor",
			role: "Support"
		},
		{
			name: "Dazle",
			role: "Support"
		},
		{
			name: "Ogre",
			role: "Support"
		},
	]


-> Agar seimbang, tiap teamnya akan memiliki 1 Tanker, 2 Carry, dan 2 Support
-> Tiap orang akan mendapatkan hero secara random, tidak bisa memilih hero
   yang diinginkan.
-> Sistem akan membagikan hero secara bergantian, dari satu team ke team lainnya

input {
	teamA : [
		["Nanda", "Carry"],
		["Gusti", "Tanker"],
		["Arif", "Carry"],
		["Anton", "Support"],
		["Adam", "Support"],
	],
	teamB : [
		["Andhika", "Support"],
		["Farid", "Carry"],
		["Rama", "Tanker"],
		["Agil", "Support"],
		["Abi", "Carry"],
	]
}

output {
	teamA : [
		Tanker: [
			{
				nama: "Gusti",
				hero: "Axe"
			}
		],
		Carry: [
			{
				nama: "Nanda",
				hero: "Anti Mage"
			},
			{
				nama: "Arif",
				hero: "Shadow Fiend"
			}
		],
		Support: [
			{
				nama: "Anton",
				hero: "Witch Doctor"
			},
			{
				nama: "Adam",
				hero: "Ogre"
			}
		],
	],
	teamB : [
		Tanker: [
			{
				nama: "Rama",
				hero: "Centaur"
			}
		],
		Carry: [
			{
				nama: "Farid",
				hero: "Invoker"
			},
			{
				nama: "Abi",
				hero: "Void"
			}
		],
		Support: [
			{
				nama: "Andhika",
				hero: "Crystal Maiden"
			},
			{
				nama: "Agil",
				hero: "Dazle"
			}
		],
	],
	
}


*/