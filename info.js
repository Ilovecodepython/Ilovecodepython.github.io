// Create an anchor element for the Discord link
var discordLink = document.createElement("a");
discordLink.textContent = "Click Discord Server";
discordLink.href = "https://discord.gg/YOUR_DISCORD_LINK"; // Replace with your Discord server link
discordLink.target = "_blank"; // Open link in a new tab

// Append the link to the content div
document.getElementById("content").appendChild(discordLink);

// Create a new paragraph element for the additional text
var additionalText = document.createElement("p");
additionalText.textContent = "Join our community and have fun!"; // Add your custom text here

// Append the additional text to the content div
document.getElementById("content").appendChild(additionalText);
