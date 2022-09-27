//this is to enable multi vendo setup, set to true when multi vendo is supported
var isMultiVendo = false;

// 0 = traditional (client choose a vendo) , 1 = auto select vendo base on interface name
var multiVendoOption = 0;

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
	{
		vendoName: "KiT Vendo", //change accordingly to your vendo name
		vendoIp: "10.0.0.2", //change accordingly to your vendo ip
		interfaceName: "Vlan10" // hotspot interface name preser
	},
	{
		vendoName: "Jordan Vendo", //change accordingly to your vendo name
		vendoIp: "10.0.20.2", //change accordingly to your vendo ip
		interfaceName: "VLAN-20" // hotspot interface name preser
	},
	{
		vendoName: "Din.x Vendo", //change accordingly to your vendo name
		vendoIp: "10.0.30.2", //change accordingly to your vendo ip
		interfaceName: "Vlan30" // hotspot interface name preser
	},
	{
		vendoName: "Mamik Vendo", //change accordingly to your vendo name
		vendoIp: "10.0.40.2", //change accordingly to your vendo ip
		interfaceName: "VLAN-40" // hotspot interface name preser
	},
	{
		vendoName: "Jaypogs Vendo", //change accordingly to your vendo name
		vendoIp: "10.0.50.2", //change accordingly to your vendo ip
		interfaceName: "VLAN-50" // hotspot interface name preser
	}
];


//0 means its login by username only, 1 = means if login by username + password
var loginOption = 0; //replace 1 if you want login voucher by username + password

//put here the default selected address
var vendorIpAddress = "10.0.0.254";

var dataRateOption = false; //replace true if you enable data rates

//hide pause time / logout true = you want to show pause / logout button
var showPauseTime = true;

//enable extend time button for customers
var showExtendTimeButton = true;

//disable voucher input
var disableVoucherInput = false;

//0 = horizontal line view, 1 = Grid view recomended for 6 or more vendo
var vendoSelectDisplay = 0;

var preFixL = 2; // Specify here your Prefix!! EXAMPLE: If PREFIX is set to VC, the Prefix Length should be 2.

var preFix = ['ME', 'MO', 'LE', 'VC']; // If voucher starts with these letters then Extend time will be removed

var Subscription = true; // if preFix set above, replace true if you want to hide remaining time

slidingText = 'TURN OFF WIFI TO PAUSE TIME OR CLICK PAUSE TIME.'; //sliding text
CstFooter = 'KiTricks v4.0'; //footer text
Tittle = 'HOW TO USE?';
Step1 = '1. Click "INSERT COIN".';
Step2 = '2. Insert Money.';
Step3 = '3. Clict "DONE" and wait the Portal to Reload.';