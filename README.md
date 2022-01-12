

## How to install?

### Using [git clone](https://git-scm.com/docs/git-clone):
1. You have to install [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads).
2. Create a folder in a place you won't accidentally delete it.
3. Open Command Prompt (Windows) or terminal (Linux).
4. Execute command `cd [path to folder]`.
	- Example on Windows: `cd C:\Users\0rso\Desktop\discord-giveaway-bot`
	- Example on Linux: `cd /home/0rso/Documents/discord-giveaway-bot`
6. Execute `git clone https://github.com/0rso/discord-giveaway-bot.git` command.
7. When you see all of the github files in your folder this means that you downloaded the bot succesfully.

### Using this repo zip file:
1. You have to install [Node.js](https://nodejs.org/en/download/) and a program to extract zip files. I recommend [7-Zip](https://www.7-zip.org/) since it is 100% free, no ad and open-source.
2. Create a folder in a place you won't accidentally delete it.
3. Download the repository as a zip file, which can be done [here](https://github.com/0rso/discord-giveaway-bot/archive/refs/heads/master.zip).
4. Extract the zip file to the folder.
5. When you see all of the github files in your folder this means that you downloaded the bot succesfully.


## Usage + Setup

**Step 1:** Open config.json and change the following values:

| Required value | What does this value mean? |
| --- | --- |
| `token` | (String) This is what discord will use to log into your bot. Get this token from the [Discord Developer Portal](https://discord.com/developers/applications) |
| `prefix` | (String) This is the prefix to the commands. |

| Optional Value | What does this value mean? |
| --- | --- |
| `giveawayRoleID` | (String) This is the role the bot will mention when the giveaway starts. Default (empty) will be set to `@everyone`. Has to be a role ID |
| `showMention` | (Boolean) This determines if the mention will be shown or not. |
| `giveawayMention` | (Boolean) This determines if there will be a role mentioned. |
| `giveawayManagerID` | (String) This options lets the bot know who is able to start giveaways. Default (empty) will be set to any user with MANAGE_MESSAGES permission. Has to be a user ID. |

**Step 2:** Install dependencies (only the first time)
- Windows:
  - Run `setup.bat` file
- Linux:
  - Run `npm i` command

**Step 3:** Start the bot
- Windows:
  - Run `start.bat` file
- Linux:
  - Run `node index.js` command


