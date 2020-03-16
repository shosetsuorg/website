---
title: Creating Extensions
lang: en-US
---

# Getting started
**Shosetsu** uses [Lua](https://www.lua.org/about.html) extensions and an API that the app is modeled off using. It is a simple interpreted language that anyone can get used to!

## Requirements
* An internet connection.
* Basic programming knowledge.
* [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) is highly recommended, but another IDE is acceptable. This guide is assuming you use IntelliJ.

## Setup
1. Fork the [extensions](https://github.com/ShosetsuOrg/extensions/fork) repo and then clone it.
	```bash
	git clone https://github.com/username/extensions.git
	```
1. **OPTIONAL:** Fork the [kotlin-lib](https://github.com/ShosetsuOrg/kotlin-lib) repo and then clone it.
	```bash
	git clone https://github.com/username/kotlin-lib.git
	```

### IntelliJ
This part requires a bit of understanding of how IntelliJ works.
1. **`Settings > Plugins > Marketplace`** to open plugin repo.
1. Install **`EmmyLua`** and **`Kotlin`**, then restart.
1. **`File > Open`** and open the directory of the **extensions** repo. This will load it up.
1. **`File > New > Module from Existing Sources`** and open the directory of the **kotlin-lib**. Now you have two modules, one of the extensions and one of the library.
1. **`Edit Configurations`**.
1. Press the **`+`** button, select **`Kotlin`**.
1. Name it the new configuration as **`Test`** or what you want.
1. Set **Main Class** to **`Test`** in **`com.github.doomsdayrs.api.shosetsu.core`**.
1. Set the working directory to the directory of your cloned repository.
1. Click **`Apply`** then **`Ok`**.
1. In the lib, Select **Test** and open. There is an array at the top labeled SOURCES and other configs you can use.
1. The style is **`lang/Name`**, later you can change this to the extension you wish to use/make.
1. HIGHLY Suggested to change from **`4 spaces`** to using the **`tab`** character + smart tabs.
1. Congrats, you have successfully setup IntelliJ to run **Shosetsu** extensions.

## Lua extensions and understanding
**Shosetu**'s extensions are written in a multiplatform embed language called [Lua](https://www.lua.org/about.html).

[Lua](https://www.lua.org/about.html) is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.
Because it is not compiled, the actual content of the file has to match the requirments of the library.
Each Lua Extension is to scrape an individual site.

### Requirements

#### ABSOLUTE

1. **INT**		`id`			: 	This is to distinguish it from other extensions in code.
1. **STRING** 	`name`			: 	This is the name of the extension. It **MUST** match the file name.
1. **ARRAY** 	`listings` 		: 	These are the 'pages' that the site provides that list their novels. Hard to understand, but most sites only have one.
1. **FUNCTION** `getPassage`	: 	```(String) -> String``` 			Used to get a chapter's content.
1. **FUNCTION** `parseNovel`	: 	```(String) -> Novel.Info``` 		Used to get the information of a novel.
1. **FUNCTION** `search`		: 	```(INT,MAP)-> Novel.Listing```		Used to get search results.
1. **FUNCTION** `updateSetting`	:	```(INT,ANY)```						Used to update settings of the LuaScript.
1. **JSON**		`HEADER`		:	This is the header to all files, must be on the *VERY* first line. It includes information for Shosetsu to understand what this extension is.
1. **STRING**	`baseURL`		:	Base URL of the site.

#### Optional
1. **STRING**	`imageURL`		: Image of the website; Default *Empty*.
1. **BOOLEAN**	`hasCloudFlare` : Set to TRUE if the site is protected; Default *FALSE*.
1. **BOOLEAN** 	`hasSearch`		: Set to FALSE if the site does not have a search function; Default *TRUE*.
1. **ARRAY**	`filters`		: Used to create second drawer, values returned in search & getListing; Default *Empty*.
1. **ARRAY**	`settings`		: Settings to be applied by user; Default *Empty*.

#### Writing your extension
Now that you understand some basics of what comes in and out, time to get to more advanced details and creation!

1. First, Copy `DefaultStructure` to `src/LANG`. The LANG being which language you are writing for
1. Rename the file to the site's name
1. Set the baseURL to the site's URL
1. Remove optional's that you don't need to change from default. Helps with file size
1. Create the functions, then run the test build on it.
1. STUD: Will complete later






