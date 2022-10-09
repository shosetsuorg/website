---
title: Repositories
lang: en-US
---
# Repositories

Shosetsu has repositories that provide extensions and libraries for its core functionality

## Known Repositories

These are a list of known shosetsu repositories.

| Author		| URL																		| Notable Sources			|
|---------------|---------------------------------------------------------------------------|---------------------------|
| ShosetsuOrg	| `https://repo.shosetsu.app/universe`										| Mirror of git				|
| jobobby04 	| `https://raw.githubusercontent.com/jobobby04/ShosetsuExtensions/master/` 	| ArchiveOfOurOwn, ReadWN 	|


## Add & Remove Repositories

### Adding

If you would like to test developer repositories or other third party repositories, follow the directions below to add them to Shosetsu.

#### Steps

1. Starting from your library, Tap "More"(...) on the navigation bar on the bottom. 
	- Note: If you are using legacy navigation, open up the navigation drawer first.
2. In the new view, Select "Repositories" that is symbolized by a shopping cart.
3. Click the red circular button on the bottom with the plus sign (+).
	1. Enter in the name of the repository
	2. Enter in the URL of the repository.
		- Note: Ensure that if you put the URL into your browser with the ending of "/index.json" as so "YOUR_URL/index.json", you will be displayed json content of the repository index.
6. Click "OK", the repository should be added if nothing goes wrong.
7. Either click the prompt to refresh the repositories, or pull down on the list of repositories.
8. If all goes well, you have succesfully added a repository to your application.

### Removing

Note: You cannot remove the default "Main" / "Universe" repositories from Shosetsu. These are built in, do not attempt to remove them, they will be added back.

You can only disable the default repositories.

#### Steps

1. Starting from your library, Tap "More"(...) on the navigation bar on the bottom. 
	- Note: If you are using legacy navigation, open up the navigation drawer first.
2. In the new view, Select "Repositories" that is symbolized by a shopping cart.
	- You will be provided a list of the repositories that are present in your application. Notice the (X) marks next to the switches.
3. First, Toggle the switch of the repository you want to remove, making sure it is set off and looks grey.
4. Either click the prompt to refresh the repositories, or pull down on the list of repositories.
5. After the repositories have been refreshed, click the (X) button on the repository you want to remove
6. Confirm that you want to remove said repository.
7. If all goes well, you have succesfully added a repository to your application.

## Creating a repository

A Shosetsu repository is a developer tool to host extensions, libraries, and styles so that users can acquire said resources.
To create a repository, one must either have a git repository or file server.

### Create the repository locally

The first step is to ensure that you have the repository ready to be pushed over the internet. 
Thus to creating a repository.
A repository consists of the following standardized paths and files:
```
deprecated/
icons/
lib/
src/
index.json
```
#### Explanation of parts

##### index.json

This is the main file that makes a shosetsu repo, a repo.
This JSON file contains information on extensions, styles, and libraries available to download to Shosetsu.
The JSON file follows the following structure:
```json
{
	"libraries": [
	],
	"scripts": [
	],
	"styles": [
	]
}
```

###### libraries

This property states shared files that extensions in Shosetsu use.

This property is optional.

The data contained is basic, a name and version.

The name is used to download the file matching said name under the `lib` directory.

The following is an example:
```json
{
	"libraries": [
		{
			"name": "247truyen",
			"version": "1.1.2"
		}
	]
}
```

- Note, Shosetsu uses [semantic versioning](https://semver.org), specifically only 3 numbers separted by 2 periods. As show above. Do not use any other format.

###### scripts

This property states the extensions in the repository that can be downloaded.

This property is optional.

The data contained specify a variety of information, explained:
| Property	| Explanation |
|-----------|-------------|
| name 		| Friendly name of the extension |
| fileName 	| File name of the extension, must match with file under `src/$lang/` |
| imageURL 	| URL of the image to display as extension icon, suggested to be under `icons/` |
| id 		| Unique ID of the extension, Ensure this is 1000000% unique |
| lang 		| Language of the extension, following [ISO 639-2/639-3/639-5](https://iso639-3.sil.org/code_tables/639/data). This will be used to find the file under `src/`, ex: `src/eng/`. |
| ver 		| Version of the extension, following [semantic versioning](https://semver.org), specifically only 3 numbers separted by 2 periods. Do not use any other format. |
| libVer 	| Version of kotln-lib this extension was built for. If unsure, dump `1.0.0` |
| md5 		| Hash of the extension, can be left blank. Primarily for security purposes. |

The following is an example:
```json
{
	"scripts": [
		{
			"name": "CreativeNovels",
			"fileName": "CreativeNovels",
			"imageURL": "https://github.com/shosetsuorg/extensions/raw/dev/icons/CreativeNovels.png",
			"id": 911,
			"lang": "en",
			"ver": "1.0.3",
			"libVer": "1.0.0",
			"md5": "2ac8b2379560dac51930790615c7095"
		},
	]
}
```
- Note, Shosetsu uses [semantic versioning](https://semver.org), specifically only 3 numbers separted by 2 periods. As show above. Do not use any other format.

###### styles

This is not yet complete, come back another time ;p

##### src

Folder to dump extensions under, ensure each extension is under a sub folder of its langauge code.
Example:
```
src/
	eng/
		MyEnglish.lua
	rus/
		MyRussian.lua
	cmn/
		MyMandarin.lua
```

##### lib

Folder to dump libraries that shosetsu uses.

##### icons

Folder to organize all extension icons under. 
It is good practice to have local copies of the extension icon, 
and subsequently also having a theme to them.

##### deprecated

Folder to dump abandonded extensions, styles, and libs under. So you can continue working in the future.

#### Final steps

Now that you have the repo following the guidelines, review everything once more and move onto the next steps.

### Creating a repository via GitLab or GitHub

#### Steps

1. Create a repository, Name it however you like
2. Follow instructions to push from your local directory to this repo.
3. Congrats, you have hosted your repo online. It will now be ava to add to your app via the following URLs. Note the branch should be main or whatever you named it.
	- GitLab: https://gitlab.com/YOUR_NAME/REPO_NAME/-/raw/BRANCH/
	- GitHub: https://raw.githubusercontent.com/YOUR_NAME/REPO_NAME/BRANCH/ 

### Creating a repository via file server

#### Locally

On Linux, Run the following command in the terminal while in the directory of your repo.
```bash
python -m http.server
```

Output should be like the following:
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

Follow [Adding](#adding), but ensure the URL is your computers IP address, in the following format, with 8000 being the port python printed out
`http://###.###.###.###:8000/`.

#### Over the internet

##### Self

Port foward, Have a domain, register with DNS, etc.

##### VPS

Have a domain, register, etc.
