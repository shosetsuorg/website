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
```
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


## Writing your extension
Now that you understand the basics, you can get to writing your extension:
1. Copy `DefaultStructure.lua` to `src/LANG/NAME.lua`. LANG being the language of the website.
2. Fill in required fields.
3. Remove optionals that you do not need.
4. Create functions according to specification, then run the test loop on your extension.
6. TODO: COMPLETE
