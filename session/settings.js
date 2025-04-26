require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "254725474072"
global.namaowner = "ⓃⒺCⓉOR🍯"
global.namaowner2 = "ⓃⒺCⓉOR🍯"

//======== Setting Bot & Link ========//
global.namabot = "nector-𝚋𝚘𝚝" 
global.namabot2 = "nector-𝚋𝚘𝚝"
global.version = "v2"
global.foother = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ⓃⒺCⓉOR🍯"
global.linkgc = 'https://youtube.com/@drapterlagas'
global.linksaluran = "https://youtube.com/@drapterlagas"
global.linkyt = 'https://youtube.com/@drapterlagas'
global.linktele = "https://t.me/setpeicetaker1"
global.packname = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ nector-ʙᴏᴛ"
global.author = "ⓃⒺCⓉOR🍯"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true


//========= Setting Message =========//
global.msg = {
    "error": "🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!",
    "done": "✅ *Mission Accomplished!* All systems go, Mk finished the task!", 
    "wait": "⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.", 
    "group": "*• Group Only* This feature is only for groups!", 
    "private": "*• Private Chat* This feature is only for private chats!", 
    "admin": "*• Admin Only* This feature is only for group admins!", 
    "adminbot": "*• Bot Admin* This feature can be used when the bot is an admin", 
    "owner": " 🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!", 
    "developer": "*• Developer Only* This feature is only for developers"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
