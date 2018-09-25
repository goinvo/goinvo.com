# goinvo.com-2018
A static site for goinvo.com built using [GatsbyJS](https://www.gatsbyjs.org/).



## Getting started
_NOTE:_ To work in this project, it is assumed you have basic familiarity with using the command line and Git/GitHub. If you are not comfortable with these tools, please reach out to a coworker for some help.

_MORE NOTE:_ When copy/pasting the examples, do not include the `$`. This is used to represent your command line prompt, showing individual commands on new lines.

_MANY NOTE:_ You may be required to install additional dependencies like XCode command line tools on Mac.

### Install Brew
[Homebrew](https://brew.sh/) is an easy way to install the system packages you'll need for this project on Mac.
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install Node
This project uses [NodeJS](https://nodejs.org/en/) at its core.

```bash
$ brew update
$ brew install node
```

### Install Yarn
Node comes with a package manager, [NPM](https://www.npmjs.com/), by default. However, this project chooses to use [Yarn](https://yarnpkg.com/en/) instead, namely because it's faster and more secure.

```bash
$ brew install yarn
```

### Clone repository
Use the command line or your GitHub app to clone this project repository to your machine. When using the command line, make sure you're already in the folder you want the project downloaded to.
```bash
$ git clone https://github.com/goinvo/goinvo.com-2018.git
```

### Install project dependencies
```bash
$ cd goinvo.com-2018
$ yarn
```

### Start it up
```bash
$ yarn develop
```

Give it a few seconds and you should see:
```bash
You can now view goinvo.com in the browser.

http://localhost:8000/
```

Head over to [http://localhost:8000/](http://localhost:8000/) and you should see the website.



## Working with images
**Do not add or commit images directly to this project.**

Content images are managed with Dropbox and should not be added here. But now that that's clear, there _are_ a few exceptions. The only images found in this project are small images like icons and logos, many of which can often be included inline or as data URI's. When in doubt about where you should add an image, always ask for guidance!

### Preparing your images
**TODO:** Sharon to add details on picking proper images for the site.

Export your image from Photoshop or similar with the 'for web' option. Use progressive JPEG filetype with 'High' quality setting (defaults to 'Quality: 60'). Ensure the image is 4000px wide. If you need the alpha channel, PNG format can be used.

### Adding images through Dropbox
All the beautiful images you see throughout this site of our work, products, studio, and studioites are managed on our Dropbox account. Naturally you'll need access to our Dropbox account. Images for the website are stored in the `Graphics/goinvo.com/` folder.

When adding an image, think about where it best belongs. The folders on Dropbox generally correspond with routes on the website. For instance, all photos for the 'About' page are in `Graphics/goinvo.com/images/about/`. In some cases, your image may be used in multiple spots throughout the site, but aim to place it where it feels most proper. For instance, if you have a hero image for the 'Vision' page, but it's also used in a card on the homepage, place it in the `vision/` folder. Do not add the same image file in two different locations, this is unnecessary and creates a slower loading experience for our visitors.

**IMPORTANT:** You should not replace or remove images on Dropbox, and they cannot be replaced on S3 (it is possible to remove/replace on S3 but you must have [_the power_](https://metaphysicsspeaks.com/wp-content/uploads/2017/06/10265-powerglove.jpg)). If you want to change an image somewhere on the site, simply name the file something new (i.e. rather than trying to replace an image called `eric-beard.jpg`, instead add a new image in the same folder called `eric-beard-2.jpg`, or whatever).

_NOTE:_ File names should have no spaces or funky characters. Just stick with letters, numbers, and hyphens.

After moving your image(s) to Dropbox, you'll need to sync with S3. To do this, you need an Invo AWS account. If you don't have one, and you really want one, just say ["Nickelodeon Magazine, PLEASE!"](https://www.youtube.com/watch?v=Oel0zjpKCwE) You can also get a coworker who already has AWS access to help you sync the images.


### Syncing images from Dropbox to S3
To sync to S3, you'll need to add your AWS credentials to `~/.aws/credentials`. You can follow the instructions for that [here](https://aws.amazon.com/sdk-for-node-js/)].

Once those are in place, open up your command line and navigate to your `Graphics/goinvo.com` Dropbox folder, then run:
```bash
$ yarn upload
```

That's it! You should see lots of messages like `Already exists: <file>`. Make sure your files were uploaded by scanning for the message `Successfully uploaded: <your-file>`. If so, your images are ready to use on the site.

### Using images in React
The project has an `<Image />` component which takes care of most of the image rendering process for you. Simply include the component with the path to your image (which corresponds to the Dropbox path) like so:
```js
<Image src="/images/about/bowling.jpg" />
```

By default, the image assumes it will always render at the full width of the screen. You can make better use of the responsive image technique by passing in some sizes, of which there are some presets in the config file:
```js
import config from '../../config'

...

<Image src="/images/about/bowling.jpg" sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth} />
```

Or with custom sizes:

```js
<Image src="/images/about/bowling.jpg" sizes={['(min-width: 20em) 100px', '100vw']} />
```

Learn more about the `sizes` attribute in a [nice article](https://ericportis.com/posts/2014/srcset-sizes/) from Eric Portis.

### Using images in case studies (Markdown)
To add images to your case study content, simply use the default markdown syntax. Use the path that corresponds with the directory structure in Dropbox. Be sure to include that meaningful [`alt text`](https://www.w3schools.com/tags/att_img_alt.asp)!
```md
![Invo employees happily pose as a group in a bowling alley](/images/about/bowling.jpg)
```

## Adding a case study
First and foremost, remember to make a new branch in Git. It is reasonable to name it something like `case-study-<name>`.

### Make a new file
Once you're set up on a new branch, make a new Markdown file in the `src/case-studies` folder. Name the file with all lower-case letters and hyphens, with the `.md` extension. The convention is to list the client name then project name (e.g. `mitre-shr.md`, `fastercures-health-data-basics.md`). It's fine if the name is a bit long, but also probably best to not go crazy on it. Some clients have sensible abbreviations, like `jnj` for Johnson and Johnson. Invo projects can omit the client name portion of the file (e.g. `paintrackr.md`, `hgraph.md`).

### Add the frontmatter
Inside the file, the first thing to do is add the frontmatter at the very top of the file. This is meta data associated with the case study, used throughout the rest of the website. It must be at the top and include the `---` syntax, as shown below:

```md
---
title: "Health Data Basics"
image: "/images/case-studies/fastercures/health-data-basics/hero.jpg"
client: "FasterCures"
caption: "Engaging patients to understand health."
categories:
  - "public-health-and-policy"
  - "open-source"
results:
  - stat: "97%"
    description: "Recall of educational concepts"
  - stat: "90%"
    description: "Engagement with knowledge retention quiz"
  - stat: "8,760"
    description: "Yearly views of new health data definition"
upNext:
  - "code-ryte"
  - "acme"
  - "mitre-shr"
hidden: false
---
```

You can also look at other existing case studies as examples.

Let's break down the fields:
1. `title`
This is the title that will be shown on cards throughout the _rest_ of the site, not necessarily the title shown on the case study page (you'll make than with an h1 or `#` in Markdown).
2. `image`
The path to the image on Dropbox to be used as the hero and the card image on other pages.
3. `client`
The client we worked with on the project. For Invo projects you can use an empty string (`""`).
4. `caption`
A one-liner describing the project.
5. `categories`
A YAML array of ID's for the categories (or 'tags') associated with the project. These must be selected from a predefined list, located in `src/data/categories.json`. The exact ID string must be used or it won't work. See the example above.
6. `results`
A YAML array of objects including a `stat` and `description` for that stat. See the example above. Currently, the results only support text. In the future we'll work to add an option for including buttons/links.
7. `upNext`
A YAML array of ID's associated with other case studies to link to at the bottom of the page. The ID is simply the filename of the case study you'd like to link to without the extension. See the example above.
8. `hidden`
Controls whether the case study should show up as a page and be included in lists of case studies throughout the site. Set to `true` if this case study is a work in progress. Keep in mind that even though it will be hidden from the site, this content is still publicly accessible on GitHub, so never include any content that we don't have client approval on.

_NOTE:_ For now, all frontmatter fields are required, even if you set them to `false`. If you don't fill them out accurately, the app may crash.

### Viewing your case study as you author content
The case study you're working on will become accessible through the 'Work' page, or at `http://localhost:8000/work/<filename>` (filename without `.md` file extension).

### Add the content
For the most part, just write plain old Markdown. If you're unfamiliar with Markdown, it's a very basic programming language, designed to make writing content a breeze. Read up on the syntax [here](https://daringfireball.net/projects/markdown/syntax).

Each page should have exactly one `h1` title, written with markdown using `#` (e.g. `# This is the title`). Subsequent sections can get `h2` (`##`), `h3` (`###`), and so on.

### Using React components inside the Markdown
All Markdown pages in this project make use of a wonderful plugin for Gatsby called [gatsby-mdx](https://github.com/ChristopherBiscardi/gatsby-mdx). This allows us to use React components inside our Markdown, inserting more complicated markup and code where we otherwise wouldn't be able to insert it. Though you can use virtually any component in the markdown, the ones used most frequently in case studies are `Divider`s and `Quote`s. To use these, you need to import them near the top of the file, underneath the frontmatter section:

```js
---
... frontmatter stuff
---

import Divider from '../components/divider'
import Quote from '../components/quote'
```

Then use them anywhere you like in your content:
```md
Here is some markdown paragraph content.

<Divider />

## Hey a new section!

With some more content. And I sense a quote coming...

<Quote quotee="Merkin Muffley" quoteeSub="President of the United States">
Gentlemen, you can’t fight in here. This is the war room.
</Quote>

Wow I was right. A quote.
```

### Wrapping up
Make commits to your branch adding content to your case study as you go, and make sure to push your branch to the GitHub repo. When finished, seek assistance getting your case study code reviewed and merged into the production website.
