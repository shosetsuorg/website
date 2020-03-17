---
title: Creating Extensions
lang: en-US
---

# Creating Extensions
Shosetsu uses Lua extensions and an API on which the whole app is modeled. [Lua](https://www.lua.org/about.html) is a simple interperated language. We recommend skimming through [Programming in Lua](https://www.lua.org/pil/contents.html) and/or the [reference manual](https://www.lua.org/manual/5.1/) before trying to start writing extensions.


## Requirements
* An internet connection.
* Basic programming knowledge.
* Any text editor. An IDE is recommended, IntelliJ IDEA is highly suggested as this guide assumes you are using IDEA.


## Setup
1. Fork the [extensions](https://github.com/ShosetsuOrg/extensions/fork) repo and then clone it.
    ```bash
    git clone https://github.com/username/extensions.git
    ```
1. **OPTIONAL:** Fork the [kotlin-lib](https://github.com/ShosetsuOrg/kotlin-lib) repo and then clone it.
    ```bash
    git clone https://github.com/username/kotlin-lib.git
    ```

### IntelliJ IDEA
1. Install the **`EmmyLua`** and **`Kotlin`** plugins (**`Settings > Plugins > Marketplace`**) and restart IDEA.
1. **`File > Open`** the directory of the extensions repo.
1. If you cloned **kotlin-lib**, **`File > New > Module from Existing Sources`** and open the extension-lib directory.
1. **`Edit Configurations`**
1. Press the **`+`** button, select **`Kotlin`** and name the new configuration **`Test`**.
1. Set Main Class to **`Test`** in **`com.github.doomsdayrs.api.shosetsu.extensions`**, or **`com.github.doomsdayrs.api.shosetsu.extensions.core`** if you cloned the extension library.
1. Set the working directory to the directory of your cloned repository
1. In the lib, Select Test and open.
1. Change configuration according to your needs.
1. Run


## Understanding Lua Extensions and Libraries
Each Lua Extension has the responsability for an individual site, but sites often use available software, which means they share the same codebase.
This is why extensions sometimes do not have any code but a call to `Require`.
A good example is the plethora of extensions based on the Madara library, which defer all logic to the Madara library.

### Extension Stucture
A Commented JSON Header is included at the start of the file:
```json
-- {"id":9001,"version":"1.0.0","author":"TechnoJo4"}
```

An extension returns a table, the following fields are required:

| Name              | Type                            | Description
| ----------------- | ------------------------------- | -----------
| `id`              | `int`                           | Unique identifier to distinguish extensions
| `name`            | `string`                        | Name of the extension
| `baseURL`         | `string`                        | Base URL, usually a domain name prefixed with `https?://`
| `listings`        | `Listing[]`                     | The "pages" that the site provides that list novels. Sites usually only have a single one.
| `getPassage`      | `fun(string): string`           | Gets a chapter's content
| `parseNovel`      | `fun(string): NovelInfo`        | Gets a novel's info
| `search`          | `fun(table<int, any>): Novel[]` | Used to search for novels
| `updateSetting`   | `fun(int, any): void`           | Used to update settings

The most important parts are listings, parseNovel and getPassage, but to write any of these you need to know how the create instances of the required types:

The `Listing` type:
```
Listing(
    name: string,
    isIncrementing: boolean,
    filters: Filter[]?,
    getListing: fun(data: table<int, any>?, inc: int?): Novel[]
)
```

TODO: EXPLAIN AND ADD OTHER TYPES

### Optionals
The following fields are optional:

| Name            | Type       | Description      | Default
| --------------- | ---------- | ---------------- | -------
| `imageURL`      | `string`   | Logo of website  | `""`
| `filters`       | `Filter[]` | Search filters   | `{}`
| `settings`      | `Filter[]` | Global filters   | `{}`
| `hasSearch`     | `boolean`  | Self-explanatory | `false`
| `hasCloudFlare` | `boolean`  | Self-explanatory | `false`

### Different Methods
| Name		 		| Input								| Return	
| -----------------	| ---------------------------------	| --------- 
| `Require`	 		| `string`							| `any`		
| `first`			| `ArrayList|Elements`				| `any`		
| `wrap`			| `any`								| `function`
| `filter`			| `ArrayList|Elements`				| `table`	
| `map`				| `ArrayList|Elements`				| `table`	
| `mapNotNil`		| `ArrayList|Elements`				| `table`	
| `map2flat`		| `ArrayList|Elements`				| `table`	
| `GET`				| `string`,`Headers`,`CacheControl`	| `Request`
| `Request`			| `Request`							| `Response`
| `RequestDocument`	| `Request`							| `Document`
| `GETDocument`		| `string`							| `Document`

#### Require
STUD
#### first
STUD
#### wrap
STUD
#### filter
STUD
#### map
STUD
#### mapNotNil
STUD
#### map2flat
STUD
#### GET
STUD
#### Request
STUD
#### RequestDocument
STUD

#### GETDocument
`string` URL of site
Most basic way to get handle network recepts. Using default everything to return a Document.

### Different Objects
| Name				| Parameters					
| ----------------- | ------------- 				
| `Listing`			| `string` `boolean` `function():Novel.Listing[]`	
| `Novel`			| 								
| `NovelInfo`		|								
| `NovelChapter`	|								
| `NovelStatus`		| `int`							
| `TextFilter`		| `int` `string`					
| `SwitchFilter`	| `int` `string`					
| `CheckBoxFilter`	| `int` `string`					
| `RadioGroupFilter`| `int` `string` `string[]`		
| `DropDownFilter`	| `int` `string` `string[]`		
| `FilterGroup`		| `int` `string` `Filter[]`		
| `Element`			|
| `Elements`		| 

#### Listing
`string`	:	Name of the Listing
`boolean` 	:	If the listing increments (as in there is more then one page) 	:
`function`	:	Function that is called to retrieve the listing

A Listing is an abstract concept of a websites page. 
Not all websites have a single way to return a novel listing. Some have different pages that operate on different ways. To mitigate the issue with this, listings were introduced. 
Most sites do not have more then one listing of novels, so it is suggested to return a single listing, with a name of `default`

#### Novel
Actual class is `Novel.Listing()`
Represents a Listing entry of a novel

#### NovelInfo
Actual class is `Novel.Info()`
This is the information of a certain novel, used when a novel listing is clicked and Shosetsu opens an information view.

#### NovelChapter
Actual class is `Novel.Chapter()`
This represents each chapter of a novel.

#### NovelStatus
`int`	:	Key
Actual class is `Novel.Status()`. It is an enum of 4 different values.

| Name			| Key	
| ------------- | -----	
| `PUBLISHING`	| `0`	
| `COMPLETED`	| `1`	
| `PAUSED`		| `2`	
| `UKNOWN`		| `3`	

#### TextFilter
`int`	:	ID	
`string`:	Name

#### SwitchFilter
`int`	:	ID	
`string`:	Name

#### CheckBoxFilter
`int`	:	ID	
`string`:	Name

#### RadioGroupFilter
`int`		:	ID	
`string`	:	Name
`string[]`	:	Different options

#### DropDownFilter
`int`		:	ID	
`string`	:	Name
`string[]`	:	Different options

#### FilterGroup
`int`		:	ID	
`string`	:	Name
`string[]`	:	Different options

#### Document
Is the java representation of an HTML page

#### Element
Is an element from a Document, such as `<a>` or `<div>`
Returned from either `:selectFirst("*")` or a value from Elements

#### Elements
Is technically `Element[]`. Returned from `:select("*")`


### Constants provided
| Name		| Use									| Value
| ---------	| ------------------------------------- | -------
| QUERY		| To retrieve the query data from a map | 0

### Variable Naming
There are a few DO NOT's with creating extensions. 
1. DO NOT name a local or global variable the same as any of the above
## Writing your extension
Now that you understand the basics, you can get to writing your extension:
1. Copy `DefaultStructure.lua` to `src/LANG/NAME.lua`. LANG being the language of the website.
2. Fill in required fields.
3. Remove optionals that you do not need.
4. Create functions according to specification, then run the test loop on your extension.
6. TODO: COMPLETE
