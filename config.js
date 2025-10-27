const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFtTnBwb05HVWNZUDlHakJ3Skc1TGRiNGFMMGJJU3JRbUVNUlJoS1MxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3FkelZwQkp6VEg2SStTT3Ftd1hFOVIxbTE0TUluQzRXVnY2cEt0VmQzOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1S3JTUVFhaVBaQ0o4SisrY0FtQ0I4S3o1RzUvT3dNU1pHNWk4ZXhiRGwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q2NzZmtHaW0xRTNoU0N4VmpaUGpsVzRwdWFxdkZJMWJoK0hOd05HVVg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGRFNYdmFTcDZCOEJnbkJuNkVvTm1YL0FycmFqOFJDK1B2My9oSGtFSFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc3Z3MwcWlQMlRaWVJiZDJTUE5zS3Z6TWFOb1pKeE54dno3dzYzWDQ3Q1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BTL3lreUkvOTlMamRGSjM2VTFsbWlrVG1UN0JBd3NORC9URWNWSVluYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUZkcE5XS3Rka1h3WW1BNW16RzNxNkhtbjVsa2dUZzVvSlc0RXRPbXBHST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBNW0vdXFvMWFTY0NSM1E5NU9yNnZGbmRiVm96TVhUbVk3dmNZR2V0YStFUTRBb0RtNit2RHE2dHlvUXdwRHIrOTFNS0prb0hnQ1djbm9DalM2K2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJXQVNUYzhORGpobTN6M01RSXRRUmYyQUszM1NUcmNLZ28vaWREcXFiZzVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMyMTc2NjY4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0Y2MTM1QUNFMTkzRTQzNENERTVCRkU1RTM5MTQwRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNTMzOTQyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMjE3NjY2ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM1MTBBQzgxOTZBMDI0RUEyQjRDRTlGNDVFOTNGM0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTUzMzk0M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWFg0UU03UTIiLCJtZSI6eyJpZCI6IjkyMzMyMTc2NjY4MTo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTE3MDM3NTk5MTM0Mzo1QGxpZCIsIm5hbWUiOiLhtIvhtIBzypzhtI3JqsqAyaogypzhtIDhtIThtIvhtIfKgCDwn5G7In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdWVwMXdRNTcvN3h3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3anJsOXdYQXp2N2xIV2JYOXY4OW90V1lXRVFaMXcxVFFwWkxpZzVkZ2lnPSIsImFjY291bnRTaWduYXR1cmUiOiJVa3B3cUxya3NyU1Zyak9sOC9qa1FrUmdkSUwrTGVpQktzaEdoQnVmaHB0NmhoaW13dkZqMkE0SGpIV2lUMlU5Vm9kTmpNajJjRWlQQ3FTOGZWMVFCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSVVFMDRTUUllMUl5RjI1a0ZqTGQxTDBVQ00rekEvZklnb3oxRzN1R09zWUlMRno3YjVRYXliYUViTHRqd04xekpENk1sYkVKWmdjYlBxcHQwc3lZaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMjE3NjY2ODE6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlNDY1ZmNGd003KzVSMW0xL2IvUGFMVm1GaEVHZGNOVTBLV1M0b09YWUlvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE1MzM5NDAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0g1In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
