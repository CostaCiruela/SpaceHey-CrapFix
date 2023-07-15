[🔗SpaceHey post](https://blog.spacehey.com/entry?id=797632). It contains extra information, ideas and so on. Don't expect to find direct links to the scripts or their code there, this is more of an "promotion" post if you can say it that way. For questions, bug reports and the like, there is a link to send me a DM which I will keep an eye on as long as I use the site. I will keep the post updated if anything new comes up here.

<details>
<summary>SpaceHey-EnterKeyFix</summary>

UserScript that allows you to send a chat message by pressing the "enter" key instead of using SpaceHey default crap.

### How
- I used the default FireFox tools to check the JavaScript used by the chat client to find out a few things and the rest is just basic shit.

### Why
- I'm fucking tired of clicking the SEND icon or having to press CTRL+ENTER all the time. Decent, normal websites let you press Enter to send the message, but SpaceHey seems to like being a prick. Now you can type anything to any user, then press ENTER, and the message will be sent. You can still make a new line of text by holding SHIFT and then ENTER.

### Install

- If you are not dumb or blind, I think you can assume with common sense that you can open the file called "[spaceheyshit.user.js](https://github.com/CostaCiruela/SpaceHey-EnterKeyFix/raw/main/spaceheyshit.user.js)" and install it with some extension like Tampermonkey or similar. You can also copy the code from the file and add it manually.
</details>
<details>
<summary>SpaceHey-Recent blogs button</summary>
UserScript that adds a clock button button next to "Blog". Click it and will take you to Recent blogs.

### How
- Basic redirect shit, no need to explain. I added comments to the code so you bitches can stop crying about "bwah bwah what if this is malware". My brother in christ you can literally see the code HERE and wathever script addon you are using.

### Why
- Fucking tired of having to click BLOGS *then* RECENT. Top entries are shit full of drama and dumb kids. SpaceHey owners for some fucking reason they split the site into sub-domains and urls and make you have to go to page after page for basic things. So trying to fix that, at least the blogs part.

### Install

- Same method. Install "[AddRecentblogButton.user.js](https://github.com/CostaCiruela/SpaceHey-CrapFix/raw/main/AddRecentblogButton.user.js)". You can also copy the code from the file and add it manually.
</details>

<details>
<summary>SpaceHey - Hide layout (aka. SpaceBye)</summary>
UserScript that can hide most of custom CSS, i.e. layouts.

### How
- Just CSS rules, mainly. Most of CSS and HTML the user puts in "About Me" should be hidden. This includes (but not limited to) custom cursor, snowflakes, pfp animations or custom shapes, custom backgrounds, custom color, and custom overlays. Not sure about embeds or audio files. NOTE: This script will not prevent the loading of any extra resources (be it the css itself or images). The CSS itself will be loaded successfully, and then this script will be applied (it has a two second delay). Why? Simple, this is not a content blocker but simply a hider. The user custom css must load successfully before it can be hidden or it may fail.

### Why
- No sad backstory here, this was just a test. I know this is like a blasphemy against the entire profile custom stuff. I will not add any specific button or function within the website itself to enable or disable this, so you must handle it from your userscript manager.

### Install

- Same method. Install "[spacebye_hidecss.user.js](https://github.com/CostaCiruela/SpaceHey-CrapFix/raw/main/spacebye_hidecss.user.js)". You can also copy the code from the file and add it manually.
</details>
<details>
<summary>[CSS] SpaceHey - Properly hide the friend list</summary>
Basic CSS to properly hide your friend list.

### How
- Ok, this is extremely basic but it simply allows you to hide your friends list with CSS, including: The section itself, number of friends, names and pfps, and so on.

### Why
- All the current codes I found are either incomplete, or they don't work to hide number of friends, pfps, or they remove the entire friends section INCLUDING comments, which is not the idea here.

### Usage

- Paste the [CSS](https://github.com/CostaCiruela/SpaceHey-CrapFix/raw/main/hidefriendlist.css) code while editing your profile in "About Me".
</details>
<details>
<summary>SpaceHey - Get free Support badge</summary>
Locally add a support badge to profiles. Visual thing only.

### How
- Basically it adds the support badge element to your profile, but locally. It will be saved on the profiles you add it to. Other users can't see the badge, this is just a visual thing and, again, local. You can add the badge with CTRL+0. I haven't added a way to revert it due to laziness and it doesn't work on profiles with custom user IDs, only those with numeric ones. **Expect bugs, this was highly experimental.**

### Why
- Holy fuck this one almost made me lose my sanity I hate JS I swear to god. It's just a test that I started for fun and almost stopped in the middle because I couldn't get decent results.

### Install

- Same method. Install "[freesupportbadge.user.js](https://github.com/CostaCiruela/SpaceHey-CrapFix/raw/main/freesupportbadge.user.js)". You can also copy the code from the file and add it manually.
</details>
<details>
<summary>SpaceHey - Home Debloat</summary>
Hide certain "home" page useless shit.

### How
- Basic hider stuff.

### Why
- The homepage is full of crap that does not concern the user. By installing this script, you can hide things related to donations and merchandise while keeping the important announcements. It removes the "My URL" part, because you can literally see it in the "View Profile" button below. It will hide the "latest entries" part in case you have not posted any blog. Overall, this will make the homepage more compact and cleaner.

### Install

- Same method. Install "[spaceheyhomedebloat.user.js](https://github.com/CostaCiruela/SpaceHey-CrapFix/raw/main/spaceheyhomedebloat.user.js)". You can also copy the code from the file and add it manually.
</details>

<details>
<summary>SpaceHey - Recent forums button</summary>
UserScript that adds a clock button button next to each forum category. Click it and will take you to Recent forum section.

### How
- Basically the code automatically detects the URL and categories on the forum, and adds the recent part and so on. This one was a bit tricky because for some reason, the stupid useless fucking idiots added basically EVERYTHING inside h3.

### Why
- I had this in mind since I added the recent blog button.

### Install

- Same method. Install "[recentbutton_forums.user.js](https://github.com/CostaCiruela/SpaceHey-CrapFix/raw/main/recentbutton_forums.user.js)". You can also copy the code from the file and add it manually.
</details>
<details>
<summary>SpaceHey - Auto accept friend requests</summary>
aka. SpaceHeyFriendAdd JS Edition. UserScript that accepts all friend requests for u.

### How
- This will "click" the "Accept all requests" button at your requests page when you visit it automatically when you have one or more requests. At first, I was trying to match the og Python code, to be as faithful to the original idea as possible, and although I achieved decent results, it didn't work correctly with more than one request. I made this instead, which is easier.

### Why
- I had from the beginning the idea to adapt their code to a userscript, because I found it interesting, and it's one of the few real, original projects that are not a layout dump spamming here on github. This is an adaptation of the original [acatron code](https://github.com/acatron/SpaceHeyFriendAdd). Basically, it fulfils the same function, although it doesn't have the same features (for example, I have omitted the automatic page reloading). *I must thank a close friend who I annoyed to help me in testing this.*

### Install

- Same method. Install "[auto_acceptfriendsrequests.user.js](https://github.com/CostaCiruela/SpaceHey-CrapFix/raw/main/auto_acceptfriendsrequests.user.js)". You can also copy the code from the file and add it manually.
</details>

## ⚠Extra notes

- "Does this violate the ToS or rules? Will I be banned if I use these scripts?" Short answer is no. I don't want to share this in Spacehey itself because moderation sucks and users are really dumb, so answering their doubts would be stressing af. You can read the Tos and Rules, and find stuff like "NO JS ALLOWED" but thats there for the safety of the users and talks about JS modifications that affect **everyone**, this scripts are client-side only. Also, it talks about not using anything regarding the API and stuff like that but that's not the case here either, I don't need to access the site API to do any of this or to ensure it works. So yeah relax.

- In case the code breaks in the future, I'm not sure if I'm going to update it or not. I just made an account there to fuck around for a moment and that's it, so I have no major interest in the site or in maintaining the script. They hardly ever update anything anyway, so it should work fine for some time. If not, you have the code at your fucking fingertips, edit it and fix it.
