//═════════════════╗═══════════//
//               ║ KYZRYZZ ║                  //
//═════════╚═══════════════════//

let handler = async (m, { conn, args }) => {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  try {
    const data = conn.chats[id].messages
    const online = Object.values(data).map(item => item.key.participant)
    
    const uniqueOnline = online.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    
    conn.reply(m.chat, '┌─〔 Daftar Online 〕\n' + uniqueOnline.map(v => '├ @' + v.replace(/@.+/, '')).join('\n') + '\n└────', m, {
      contextInfo: { mentionedJid: uniqueOnline }
    })
  } catch (e) {
    m.reply('')
  }
}

handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(liston(line)?)/i
handler.unreg = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

export default handler