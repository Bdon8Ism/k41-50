const Discord = require('discord.js');
const bot1 = new Discord.Client();
const bot2 = new Discord.Client();
const bot3 = new Discord.Client();
const bot4 = new Discord.Client();
const bot5 = new Discord.Client();
const bot6 = new Discord.Client();
const bot7 = new Discord.Client();
const bot8 = new Discord.Client();
const bot9 = new Discord.Client();
const bot10 = new Discord.Client();
 
   const ID = '518176101403459594';
   const ID2 = ['344222566711427072','518176101403459594'];

bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

 bot1.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});



///////////////////////////////////////////////

bot1.on(`ready`, () => {
   let channel = bot1.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send("Hello")
    }, 1000);
});
///////////////////////////////////////

bot1.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say1") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});

/////////////////////////////


bot1.on('message', message => {
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});






///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////




 bot2.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////


////////////////////////////////

bot2.on(`ready`, () => {
   let channel = bot2.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send("spam too fast 97??")
    }, 1000);
});

/////////////////////////////////////

bot2.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say2") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

/////////////////////////////////////////

bot2.on('message', message => {
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



 bot3.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////////


////////////////////////////////////

bot3.on(`ready`, () => {
   let channel = bot3.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send(args1)
    }, 1000);
});
//////////////////////////////////




bot3.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say3") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

////////////////////////////////////


bot3.on('message', message => {
 
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
bot4.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////////


////////////////////////////////////
const args1 = ['hi','hola','hello','i love u so much']
bot4.on(`ready`, () => {
   let channel = bot4.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send(args1)
    }, 1000);
});
//////////////////////////////////




bot4.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say4") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

////////////////////////////////////


bot4.on('message', message => {
 
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
bot5.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////////


////////////////////////////////////

bot5.on(`ready`, () => {
   let channel = bot5.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send(args1)
    }, 1000);
});
//////////////////////////////////




bot5.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say5") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

////////////////////////////////////


bot5.on('message', message => {
 
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
bot6.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////////


////////////////////////////////////

bot6.on(`ready`, () => {
   let channel = bot6.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send(args1)
    }, 1000);
});
//////////////////////////////////




bot6.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say6") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

////////////////////////////////////


bot6.on('message', message => {
 
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
bot7.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////////


////////////////////////////////////

bot7.on(`ready`, () => {
   let channel = bot7.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send(args1)
    }, 1000);
});
//////////////////////////////////




bot7.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say7") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

////////////////////////////////////


bot7.on('message', message => {
 
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
bot8.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////////


////////////////////////////////////

bot8.on(`ready`, () => {
   let channel = bot8.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send(args1)
    }, 1000);
});
//////////////////////////////////




bot8.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say8") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

////////////////////////////////////


bot8.on('message', message => {
 
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
bot9.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////////


////////////////////////////////////

bot9.on(`ready`, () => {
   let channel = bot9.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send(args1)
    }, 1000);
});
//////////////////////////////////




bot9.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say9") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

////////////////////////////////////


bot9.on('message', message => {
 
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
bot10.on('message', message => {
  
  if (message.content === 'daily') {

message.channel.send('#daily')
}
});

/////////////////////////////////////////

 
////////////////////////////////////

bot10.on(`ready`, () => {
   let channel = bot10.guilds.get("520545293096189952").channels.find(c => c.id == "520545626778501130");
   setInterval(function() {
    channel.send(args1)
    }, 1000);
});
//////////////////////////////////




bot10.on('message', message => {
 if (!ID2.includes(message.author.id)) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say10") {
message.channel.send(args.join("  "))
    message.delete();
  }
});

////////////////////////////////////


bot10.on('message', message => {
 
 if (!ID.includes(message.author.id)) return;

 let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
if (command == "saySpam5") {
message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
  }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



bot1.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot2.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot3.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot4.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot5.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot6.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot7.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot8.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot9.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });


 bot10.on('message', message => {
  if (!ID.includes(message.author.id)) return;
 
  let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
 if (command == "sayAll") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });






///////////////////////////////////////////////////////////////////////////////
bot1.login(process.env.FB1);
bot2.login(process.env.FB2);
bot3.login(process.env.FB3);
bot4.login(process.env.FB4);
bot5.login(process.env.FB5);
bot6.login(process.env.FB6);
bot7.login(process.env.FB7);
bot8.login(process.env.FB8);
bot9.login(process.env.FB9);
bot10.login(process.env.FB10);
