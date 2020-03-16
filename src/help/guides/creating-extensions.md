---
title: Creating Extensions
lang: en-US
---

# Getting started
Shosetsu use's Lua extensions, And an API that the app is modeled off using. It is a simple interperated language that anyone can get used too!

## Requriments
* InteliJ is highly suggested, but another IDE is acceptable. This is currently just InteliJ setup
* Basic programming knowledge.
* An internet connection

## Setup
1. [Fork](https://github.com/ShosetsuOrg/extensions/fork) the extensions repo
2. Clone the repository to your computer with ```git clone https://github.com/username/extensions.git```
3. (Optional) [Fork](https://github.com/ShosetsuOrg/kotlin-lib) the extension-lib, and clone it ```git clone https://github.com/username/kotlin-lib.git```

### InteliJ
This requires a bit of understanding of how InteliJ works. Make sure 
1. `Settings > Plugins > Marketplace` to open plugin repo
2. Install `EmmyLua` and `Kotlin` then restart
3. `File > Open` and open the directory of the extension repo. This will load it up
4. `File > New > Module from Existing Sources` and open the directory of the extension-lib. Now you have two modules, one of the extensions and one of the library
5. `Edit Configurations`
6. Press the `+` button, select `Kotlin`
7. Name it the new configuration as `Test` or what you want.
8. Set Main Class to `Test` in `com.github.doomsdayrs.api.shosetsu.core` 
9. Set the working directory to the directory of your cloned repository
10. Click `Apply` then `Ok`
11. In the lib, Select Test and open. There is an array at the top labeled SOURCES and other configs you can use. 
12. The style is `lang/Name` Later you can change this to the extension you wish to use/make
13. HIGHLY Suggested to change from `4 spaces` to using the tab character + smart tabs
14. Congrats, You have successfully setup InteliJ to run Shosetsu Extensions

## Lua Extensions and Understanding.
Shosetu's extensions are written in a multiplatform embed language called Lua. 
Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. ~ Wiki
Because it is not compiled, the actual content of the file has to match the requirments of the library. 
Each Lua Extension is to scrape an individual site

### ABSOLUTE Requirments
1. INT		`id`			: 	This is to distinguish it from other extensions in code.
2. STRING 	`name`			: 	This is the name of the extension. It MUST match the file name.
3. ARRAY 	`listings` 		: 	These are the 'pages' that the site provides that list their novels. Hard to understand, but most sites only have one 
4. FUNCTION `getPassage`	: 	```(String) -> String``` 			Used to get a chapter's content
5. FUNCTION `parseNovel`	: 	```(String) -> Novel.Info``` 		Used to get the information of a novel
6. FUNCTION `search`		: 	```(INT,MAP)-> Novel.Listing```		Used to get search results
7. FUNCTION `updateSetting`	:	```(INT,ANY)```						Used to update settings of the LuaScript
8. JSON		`HEADER`		:	This is the header to all files, must be on the VERY first line. It includes information for Shosetsu to understand what this extension is  
9. STRING	`baseURL`		:	Base URL of the site

### Optional Requirments
1. STRING	`imageURL`		: Image of the website; Default Empty
2. BOOLEAN	`hasCloudFlare` : Set to TRUE if the site is protected; Default FALSE
3. BOOLEAN 	`hasSearch`		: Set to FALSE if the site does not have a search function; Default TRUE
4. ARRAY	`filters`		: Used to create second drawer, values returned in search & getListing; Default Empty
5. ARRAY	`settings`		: Settings to be applied by user; Default Empty

#### Writing your extension
Now that you understand some basics of what comes in and out, time to get to more advanced details and creation!

1. First, Copy `DefaultStructure` to `src/LANG`. The LANG being which language you are writing for
2. Rename the file to the site's name
3. Set the baseURL to the site's URL
4. Remove optional's that you don't need to change from default. Helps with file size
5. Create the functions, then run the test build on it. 
6. STUD: Will complete later






