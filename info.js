// Create an anchor element
var discordLink = document.createElement("a");

// Set the text content and href attribute
discordLink.textContent = "Click Discord Server";
discordLink.href = "https://discord.gg/YOUR_DISCORD_LINK"; // Replace with your Discord server link
discordLink.target = "_blank"; // Open link in a new tab

// Append the link to the content div
document.getElementById("content").appendChild(discordLink);
