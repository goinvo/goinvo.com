# goinvo.com-2018

A static site for goinvo.com built using [GatsbyJS](https://www.gatsbyjs.org/).

## Getting started

_NOTE:_ To work in this project, it is assumed you have basic familiarity with using the command line and Git/GitHub. If you are not comfortable with these tools, please reach out to a coworker for some help.

_MORE NOTE:_ When copy/pasting the examples, do not include the `$`. This is used to represent your command line prompt, showing individual commands on new lines.

_MANY NOTE:_ You may be required to install additional dependencies like XCode command line tools on Mac.

### Install Brew

[Homebrew](https://brew.sh/) is an easy way to install the system packages you'll need for this project on Mac. (Don't copy the $ :))

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Before you can use the brew command, you may have to add it to your path. If you are using a MacBook with an M1 or M2 chipset, try

```bash
$ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.bash_profile"
```

### Install Node

This project uses [NodeJS](https://nodejs.org/en/) at its core.

```bash
$ brew update
$ brew install node
```

### NVM

You may also find it helpful to use a tool to manage your Node installations. [nvm](https://github.com/creationix/nvm) is a good one. Follow the instructions there to install nvm. The command that looks like `curl -o- <url> | bash`

Alternatively, brew can install nvm with `$ brew install nvm`

Then you can check your Node versions with:

```bash
$ nvm ls
```

Open a new terminal, and install the Node version the project wants by running:

```
$ nvm use
```

Check for warnings or errors. If you don't have the right version installed, it will give you a command to run, such as:

```
$ nvm install lts/*
```

### Install Yarn

Node comes with a package manager, [NPM](https://www.npmjs.com/), by default. However, this project chooses to use [Yarn](https://yarnpkg.com/en/) instead, namely because it's faster and more secure.

```bash
$ brew install yarn
```

### Clone repository

Use the command line or your GitHub app to clone this project repository to your machine. When using the command line, make sure you're already in the folder you want the project downloaded to.

```bash
$ git clone https://github.com/goinvo/goinvo.com.git
```

### Install project dependencies

```bash
$ cd goinvo.com
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

### Code editor

There are many editors to choose from, but most of the time you won't need elaborate features for testing or debugging with this project. The main things you'll use are syntax highlighting and some maybe some additional packages to help with code completion and formatting. Some editors to consider if you don't already have a preferred favorite:

- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/)
- [VSCode](https://code.visualstudio.com/)

### Styling guidelines

A thorough examination of best practices, tips, and resources related to coding at GoInvo can be found in our [Styling Guidelines](https://playbook.goinvo.com/styling-guidelines/).

### Code formatting

This project uses [prettier](https://github.com/prettier/prettier) to format code. This formatting will be triggered automatically on any staged files when you make a commit, so don't be surprised if your code changes slightly. You can also manually run `yarn format` to run code formatting across the project.

You may also wish to make things easier by installing and using [EditorConfig](https://editorconfig.org/), which will apply many of the same rules from prettier directly in your code editor. This helps keep things like indentation in check as you code. If you use [Atom](https://atom.io/), there is an [Atom EditorConfig package](https://atom.io/packages/editorconfig) available.

## Troubleshooting

### Webpack chunk loading errors

If you encounter an error like "Loading chunk component---src-pages-index-js failed" or similar webpack chunk loading errors, this is usually caused by corrupted build cache. This is a common issue that can occur after making changes to dependencies or file structures.

To fix this issue:

1. Stop the development server (Ctrl+C or Cmd+C)
2. Clear the Gatsby cache:
   ```bash
   $ yarn clean
   ```
   or
   ```bash
   $ npm run clean
   ```
3. Restart the development server:
   ```bash
   $ yarn develop
   ```

This will delete the `.cache` and `public` directories and rebuild everything from scratch. The page should then load without chunk loading errors.

If the issue persists after clearing the cache, you can also try:
- Clearing your browser cache and doing a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Deleting `node_modules` and running `yarn install` again
- Checking for any syntax errors in recently modified files

## Working with images

**Do not add or commit images directly to this project!**

Content images are managed with Dropbox and should not be added here. But now that that's clear, there _are_ a few exceptions. The only images found in this project are small images like icons and logos, many of which can often be included inline or as data URI's. When in doubt about where you should add an image, always ask for guidance!

### Preparing your images

**TODO:** Sharon to add details on picking proper images for the site.

Export your image (Photoshop example steps):

- Ensure the image is 2000px wide.
- Select 'File' > 'Save As'.
- Name the image appropriately using all lowercase letters, numbers, and dashes (that means don't use uppercase or underscores, etc).
- Use the 'JPEG' format (or 'PNG' if alpha channels are required), and click 'Save'.
- Set the Quality to Maximum (12), or slightly lower if the file size will be too large. We aim for a file size around 1.2M or below, but this can be higher for more complex images. Use your best judgment here, but avoid massive file sizes.
- Use 'Progressive' Format option with 3 scans.
- Click 'OK' and your image will be saved.

### Adding images through Dropbox

All the beautiful images you see throughout this site of our work, products, studio, and studioites are managed on our Dropbox account. Naturally you'll need access to our Dropbox account to work with these. Images for the website are stored in the `Graphics/goinvo.com/` folder.

When adding an image, think about where it best belongs. The folders on Dropbox generally correspond with routes on the website. For instance, all photos for the 'About' page are in `Graphics/goinvo.com/images/about/`. In some cases, your image may be used in multiple spots throughout the site, but aim to place it where it feels most proper. For instance, if you have a hero image for the 'Vision' page, but it's also used in a card on the homepage, place it in the `vision/` folder. Do not add the same image file in two different locations, this is unnecessary and creates a slower loading experience for our visitors. When creating new folders, use the same naming conventions as we use for images (lowercase letters, numbers, and dashes only).

**IMPORTANT:** You should not replace or remove images on Dropbox, and they cannot be replaced on S3 (it is possible to remove/replace on S3 but you must have [_the power_](https://metaphysicsspeaks.com/wp-content/uploads/2017/06/10265-powerglove.jpg)). If you want to change an image somewhere on the site, simply name the file something new (i.e. rather than trying to replace an image called `eric-beard.jpg`, instead add a new image in the same folder called `eric-beard-2.jpg`, or whatever. Keep in mind that you'll now have to update any reference of `eric-beard.jpg` in the codebase to `eric-beard-2.jpg`).

_Again, remember that folders and file names should have no spaces or funky characters. Just stick with lowercase letters, numbers, and dashes. Use dashes where you might normally use a space._

After moving your image(s) to Dropbox, you'll need to sync with S3. To do this, you need an Invo AWS account. If you don't have one, and you really want one, just say ["Nickelodeon Magazine, PLEASE!"](https://www.youtube.com/watch?v=Oel0zjpKCwE). You can also get a coworker who already has AWS access to help you sync the images.

### Syncing images and videos from Dropbox to S3

To sync to S3, you'll need to add your AWS credentials to `~/.aws/credentials`. You can follow the instructions for that [here](https://aws.amazon.com/sdk-for-node-js/)].

Once those are in place, open up your command line and navigate to your `Graphics/goinvo.com` Dropbox folder, then run:

```bash
$ yarn upload
```

That's it! You should see lots of messages like `Already exists: <file>`. Make sure your files were uploaded by scanning for the message `Successfully uploaded: <your-file>`. If so, your images are ready to use on the site. Note that the upload will fail if any of your images are not exported at exactly 2000px wide.

### Using images

If you're looking to use an image in a case study, please skip to the next section. Otherwise...

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
<Image
  src="/images/about/bowling.jpg"
  sizes={['(min-width: 20em) 100px', '100vw']}
/>
```

Learn more about the `sizes` attribute in a [nice article](https://ericportis.com/posts/2014/srcset-sizes/) from Eric Portis.

### Using images in case studies (Markdown)

To add images to your case study content, simply use the default markdown syntax. Use the path that corresponds with the directory structure in Dropbox. Be sure to include that meaningful [`alt text`](https://www.w3schools.com/tags/att_img_alt.asp)!

```md
![Invo employees happily pose as a group in a bowling alley](/images/about/bowling.jpg)
```

### Using icons, logos, and other small image files

Sometimes, images are so small in file size, or in a format we don't need to process with the image service (like SVG), that we can include them directly in the project. Images less than 10kb will be rendered with data URIs by Gatsby, which is beneficial because it removes the request the browser would have to make to fetch the image. So in general, if the image is less than 10kb, or an SVG file, it can be included in the project directly. If uncertain if an image meets these criteria, ask for guidance. Be confident your image should be housed in the project before committing it in git. These types of images can be added at an appropriate location inside `src/assets/images/`. In general, following our [styling guidelines](https://playbook.goinvo.com/styling-guidelines/), image file names in the project are prefixed by their type or purpose, like `icon-email.svg` or `logo-npr.png`.

Since these images will not run through the image service, we can use regular `img` tags to include them (instead of the `<Image />` React component). To use an image from the project, you can import it in your JavaScript file then use it as the `img` source:

```js
import logoNpr from '../assets/images/publication-logos/logo-npr.png'

...

<img src={logoNpr} alt="Logo for National Public Radio" />
```

SVG's can be used in a similar manner to above, but also can be included inline using a special syntax. This is similar to using SVG's from a sprite sheet in that it allows for adding classes and control of the SVG through CSS. The key here is to add `.inline` to your filename before `.svg`, like `icon-hamburger.inline.svg`. Then capitalize your import variable name, as you would with importing a JavaScript class or component, like so:

```js
import Hamburger from '../assets/images/icon-hamburger.inline.svg'

...

<Hamburger className="icon icon-hamburger" />
```

Now we can use CSS to style `icon` and `icon-hamburger`, like controlling the size or `fill` color of the icon, etc.

## Image Optimization

This project uses an optimized image system to improve performance and user experience. All contributors should use the optimized image components instead of the legacy `<Image />` component.

### Optimized Image Components

The project provides several optimized image components in `src/components/optimized-image.js`:

#### `HeroCriticalImage`
Use for above-the-fold images that should load immediately (high priority):
```js
import { HeroCriticalImage } from '../components/optimized-image'

<HeroCriticalImage
  src="/images/homepage/hero-image.jpg"
  alt="Descriptive alt text"
  className="image--max-width"
/>
```

#### `LazyImage` 
Use for below-the-fold images that can load lazily (low priority):
```js
import { LazyImage } from '../components/optimized-image'

<LazyImage
  src="/images/about/team-photo.jpg"
  alt="Team photo"
  className="image--max-width"
  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
/>
```

#### `SpinnerImage`
Use for interactive elements where users expect immediate feedback:
```js
import { SpinnerImage } from '../components/optimized-image'

<SpinnerImage
  src="/images/gallery/interactive-image.jpg"
  alt="Interactive image"
  className="image--max-width"
/>
```

#### `SmartImage` (Default Export)
Auto-detects the best optimization strategy based on context:
```js
import SmartImage from '../components/optimized-image'

<SmartImage
  src="/images/content/example.jpg"
  alt="Example image"
  priority={false} // or true for critical images
/>
```

### Performance Benefits

The optimized image system provides:

- **Dominant color placeholders** for instant visual feedback
- **Lazy loading** for better initial page load performance
- **Proper priority handling** (critical vs lazy loading)
- **Responsive image sizing** with automatic srcset generation
- **Better LCP (Largest Contentful Paint)** scores

### Migration Guidelines

When working with existing pages, replace old `<Image />` components:

**Before:**
```js
import Image from '../components/image'

<Image src="/images/example.jpg" alt="Example" />
```

**After:**
```js
import { LazyImage } from '../components/optimized-image'

<LazyImage src="/images/example.jpg" alt="Example" />
```

### Component Selection Guide

- **Hero images, above-the-fold content**: Use `HeroCriticalImage`
- **Content images, galleries, below-the-fold**: Use `LazyImage`
- **Interactive elements, buttons, clickable images**: Use `SpinnerImage`
- **Unsure or mixed usage**: Use `SmartImage` with appropriate `priority` prop

### Legacy Support

The old `<Image />` component is deprecated but still functional. However, all new development should use the optimized components for better performance.

### Using videos

Videos are also managed through Dropbox and work similarly to images. The project makes use of a `<Video />` component. However, videos have a few extra requirements that images do not. First, videos need _two_ sources, one as `.mp4` filetype and one as `.webm` filetype. This is to make sure there is a video format that supports every browser's needs. Check the syntax below for how to include these formats in JavaScript. Also, videos should have a poster image (displayed before video plays, while the video is loading), and a fallback image (used if the video element is not supported by the browser). Use the component with the sources of your video (which corresponds to the Dropbox path), the poster image, and the fallback image, like so:

```js
import Video from '../components/video'

const heroVideoSources = [
  {src: "/videos/homepage/sdoh-hero.mp4", format: "mp4"},
  {src: "/videos/homepage/sdoh-hero.webm", format: "webm"}
]

...

<Video sources={heroVideoSources} poster="/images/homepage/doh-hero-poster.jpg" fallback="/images/homepage/doh-hero-fallback.jpg" />
```

## Adding a case study

First and foremost, remember to make a new branch in Git. It is reasonable to name it something like `case-study-<name>`.

### Make a new file

Once you're set up on a new branch, make a new Markdown file in the `src/case-studies` folder. Name the file with all lower-case letters and hyphens, with the `.md` extension. The convention is to list the client name then project name (e.g. `mitre-shr.md`, `fastercures-health-data-basics.md`). It's fine if the name is a bit long, but also probably best to not go crazy on it. Some clients have sensible abbreviations, like `jnj` for Johnson and Johnson. Invo projects can omit the client name portion of the file (e.g. `paintrackr.md`, `hgraph.md`).

### Add the frontmatter

Inside the file, the first thing to do is add the frontmatter at the very top of the file. This is meta data associated with the case study, used throughout the rest of the website. It must be at the top and include the `---` syntax, as shown below:

```md
---
title: 'Health Data Basics'
image: '/images/case-studies/fastercures/health-data-basics/hero.jpg'
client: 'FasterCures'
caption: 'Engaging patients to understand health.'
categories:
  - 'public-health-and-policy'
  - 'open-source'
results:
  - stat: '97%'
    description: 'Recall of educational concepts'
  - stat: '90%'
    description: 'Engagement with knowledge retention quiz'
  - stat: '8,760'
    description: 'Yearly views of new health data definition'
upNext:
  - 'code-ryte'
  - 'acme'
  - 'mitre-shr'
hidden: false
---
```

You can also look at other existing case studies as examples.

Let's break down the fields:

1. `title` (required)
   This is the title that will be shown on cards throughout the _rest_ of the site, not necessarily the title shown on the case study page (you'll make than with an h1 or `#` in Markdown).
2. `image` (required)
   The path to the image on Dropbox to be used as the hero and the card image on other pages.
3. `client` (required)
   The client we worked with on the project. For Invo projects you can use an empty string (`""`).
4. `caption` (required)
   A one-liner describing the project.
5. `categories` (required)
   A YAML array of ID's for the categories (or 'tags') associated with the project. These must be selected from a predefined list, located in `src/data/categories.json`. The exact ID string must be used or it won't work. See the example above.
6. `results`
   A YAML array of objects including a `stat` and `description` for that stat. See the example above. Currently, the results only support text. In the future we'll work to add an option for including buttons/links.
7. `upNext` (required)
   A YAML array of ID's associated with other case studies to link to at the bottom of the page. The ID is simply the filename of the case study you'd like to link to without the extension. See the example above.
8. `hidden`
   Controls whether the case study should show up as a page and be included in lists of case studies throughout the site. Set to `true` if this case study is a work in progress. Keep in mind that even though it will be hidden from the site, this content is still publicly accessible on GitHub, so never include any content that we don't have client approval on.
9. `metaDescription` (not required, but you should really include this)
   A concise summary of the case study, usually only a sentence or two long, used for search engines and link details. For more information, read [how to create the right meta description](https://yoast.com/meta-descriptions/).

_NOTE:_ If you don't include required frontmatter fields, the app may crash.

### Viewing your case study as you author content

When you add a new markdown file, it is necessary to restart your development server. Use `ctrl + c` to kill your process then start it up again with `yarn develop`. This will add your new markdown file in the list of case studies. The case study you're working on will become accessible through the 'Work' page, or at `http://localhost:8000/work/<filename>` (filename without `.md` file extension).

### Add the content

For the most part, just write plain old Markdown. If you're unfamiliar with Markdown, it's a very basic programming language, designed to make writing content a breeze. Read up on the syntax [here](https://daringfireball.net/projects/markdown/syntax).

Each page should have exactly one `h1` title, written with markdown using `#` (e.g. `# This is the title`). Subsequent sections can get `h2` (`##`), `h3` (`###`), and so on.

### Using React components inside the Markdown

All Markdown pages in this project make use of a wonderful plugin for Gatsby called [gatsby-mdx](https://github.com/ChristopherBiscardi/gatsby-mdx). This allows us to use React components inside our Markdown, inserting more complicated markup and code where we otherwise wouldn't be able to insert it. Though you can use virtually any component in the markdown, the ones used most frequently in case studies are `Divider`s and `Quote`s. To use these, you need to import them near the top of the file, underneath the frontmatter section:

```js
---
... frontmatter stuff
---

import Divider from 'components/divider'
import Quote from 'components/quote'
```

Then use them anywhere you like in your content:

```md
Here is some markdown paragraph content.

<Divider />

## Hey a new section!

With some more content. And I sense a quote coming...

<Quote quotee="Merkin Muffley" quoteeSub="President of the United States">
Gentlemen, you can't fight in here. This is the war room.
</Quote>

Wow I was right. A quote.
```

### Wrapping up

Make commits to your branch adding content to your case study as you go, and make sure to push your branch to the GitHub repo. Add your new case study to the `case-study-order` file, adding it to the appropriate order for each category. When finished, seek assistance getting your case study code reviewed and merged into the production website. 

## Adding a simple feature

First and foremost, remember to make a new branch in Git. It is reasonable to name it something like `feature-<name>`. This section is mainly for adding simple features that follow the same general layout and styles as the rest of the GoInvo website.

### Make a new file

As stated above, to review changes as you make them, just open a terminal and run `yarn develop`. Then you can view your work live at http://localhost:8000/

Once in your new branch, create your feature directory in `src/pages/vision/your-feature-url`. Create a new file in this folder called `index.js` and get started.

As you go, you may make several commits to your branch and push them up to Github. If you want to share your feature with folks to review before going live, you may locate your branch in the list of branches, and create a new pull request. If you're not ready to go live yet, you can add a tag for `don't merge yet` and that'll indicate to reviewers not to approve and merge just yet. After automatic checks have passed, a netlify url will be generated for your branch and you can use this to check that your feature works and looks how it should, and it can be shared to others to review your work before it goes live. After that, you can continue to work and push as normal. When you're ready to go live, just remove the `don't merge yet` tag and let a reviewer know that you're ready for their review.

### Add the frontmatter

```
import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'
import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Your Feature Title',
  metaDescription:
    'Brief feature description.',
  heroImage: '/images/features/your-feature-url/your-feature-hero.jpg',
}
```

You can also look at other existing features as examples.

Let's break down the fields:

1. `React` (required)
   Allows React to work its magic.
2. `Layout` (required)
   More magic here. Layout magic.
3. `Hero` (required)
   Displays the hero standard to the rest of the GoInvo site.
4. `Image`
   Any good feature has an image. We'll go over how to add images below.
5. `Divider`
   If you want to use the `<Divider />` graphic consistent with the rest of the GoInvo site.
6. `References`
   Any good feature also has references. We'll go over how to add images below.
7. `Author`
   A nifty component for easily adding team members as authors to the feature!
8. `mediaURL`
   Handles access to media items. For example, if we have a poster we want readers to be able to download, we store those in a media folder (covered below) and set up a download link or button.
9. `config`
   Needed when you have images. This helps with resizing images for different browser widths or mobile views.
10. `metaTitle`
    This is the title of your feature. You want to make this somewhat short, ideally <30 characters. Should match the title feature in `features.json` (We'll cover this in a bit too)
11. `metaDescription`
    A brief description about your feature. With the title, date, and tags, this should fit comfortably in a small card on the Vision page. Should match the description in `features.json`
12. `heroImage`
    Link to the hero image for your feature. We'll cover adding this with images.

### Starting the feature

```
class YourFeatureName extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="{your-feature-name}">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">

            // start coding your feature

            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default YourFeatureName
```

1. `Hero` (required)
   Grabs the URL we defined in the frontmatter to display the Hero based on the Layout component
2. `your-feature-name` (required)
   Lets you create styles specifically for this feature without overwriting styles elsewhere on the GoInvo site or in other features.
3. `pad-vertical--double` and `max-width max-width--md content-padding`
   Anything inside of these divs will be constrained to the max width of content consistent with the rest of the site. If you want to set a style or image to bleed all the way to the edge, you'll want to close this and place it outside.
4. `export` (required)
   Actually exports your feature, should match the feature name in `class YourFeatureName extends Component`

Writing up a feature is a little different from a case study, because instead of markdown, we're using straight-up html.

### Basic Styling

In general, unless your feature needs specific styling, most of the website styles and utility classes should work for your feature. If you need specific styling, in `src/styles/vision`, add a new file `_your-feature-name.scss`. At the bottom of the `main.scss` add this stylesheet as `@import 'vision/your-feature-name';`. Start off the styles in your .scss file with `.your-feature-name { }`, consistent with the className you used at the beginning of your feature html, and add your feature's specific styles inside of the brackets.

We use classes to impart header styles defined in the GoInvo style guide. The typical breakdown is as follows:

1. `h1 className="header--xl"`
   Adobe Jenson Pro, font-size: 2.25rem;
2. `h2 className="header--lg"`
   Adobe Jenson Pro, font-size: 1.5rem;
3. `h3 className="header-md"`
   Open Sans, font-size: 15px;, font-weight: 600;, text-transform: uppercase;,
4. `h4 className="header-sm"`
   Open Sans, font-size: 16px;, font-weight: 600;

Try to use one `<h1>` at the beginning of your feature to showcase the title. For following titles that you want to appear the same size, you can use an `<h2>` with the `header-xl` class. To center text, add `text--center`.

Try to use `header-md` only for categories. For descriptive titles, use `header-sm`.

Adding buttons is as straightforward as adding a `button` and `button-primary` classes to a link, but there's a `button-group` class to contain multiple buttons at once or centers a single button.

```
<div className="button-group">
  <a
    href={mediaUrl(
      '/pdf/vision/your-feature-url/your-feature.pdf'
    )}
    className="button button--secondary margin-top--double margin-bottom--double"
  >
    Download
  </a>
</div>
```

### Adding images

Pretty much the same as adding images for case studies. We'll just restate some of the basics. When exporting your images, you want them to be 2000px wide, progressive jpg, and ideally 72dpi (more px per inch will increase the filesize). Save them into our dropbox folder at `Graphics/goinvo.com/images/features/your-feature-url/[your-feature-image.jpg` using lowercase and dash separation. Add your hero image here too.

You'll need AWS permissions to do this, so if you don't have what you need, check with Craig, Eric, or Jen. To upload your images, open a terminal in the goinvo.com dropbox folder and run

```
$ yarn upload
```

When adding the image to your feature, it will look like this:

```
<Image
  src="/images/features/your-feature-url/your-feature-poster.jpg"
  className="image--max-width"
  sizes={config.sizes.fullInsideMediumMaxWidth}
/>
```

Captioning your image is simple, with

```
<p className="text--caption">Caption away</p>
```

### Adding links

When linking away from the site, we generally want to open up a new tab to not disturb the reader's current position, so add `target="_blank"`. When linking externally, or whenever using `target="_blank"`, add `rel="noopener noreferrer"`.

```
<a
  href="https://github.com/goinvo/HealthDeterminants/"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
```

### Adding media

So far, media has included pdf downloads of posters or reports associated with the feature. Unlike when adding images, these are not relegated to 2000px width and jpg format. Instead, these would typically be printable pdf quality. You would save these out similarly to Dropbox, in `Graphics/goinvo.com/pdf/your-feature-url/your-feature-file.pdf`. These get uploaded with the `yarn upload` command as well.

When adding a link to the media in your feature, use the following:

```
<a href={mediaUrl(
      '/pdf/vision/your-feature-url/your-feature-preview.pdf'
    )}
   target="_blank"
   rel="noopener noreferrer"
>Download</a>
```

### Adding Authors

Thanks to the 'Authors' component we added earlier, adding authors is easier than ever. For active team members, all you need is their name to access their photo and bio. Optionally, you can include company and name on an author card.

```
<h3 className="header--md">Authors</h3>
<Author name="Jen Patel" />
<Author name="Juhan Sonin" company="GoInvo, MIT" />
```

For external contributors or authors, since we don't keep a photo and bio on hand for them, we have to write out the author card, which looks like this:

```
<Author
  name="Vanessa Li"
  company="University of Washington"
  image="/images/features/your-feature/headshot-vanessa-li.jpg"
>
  Vanessa specializes in health systems and public health
  modeling, with an emphasis in substance abuse and disease
  prevention research. She graduated from the University of
  Southern California with a B.S. in Public Policy and a double
  minor in Business Economics and Global Health. Vanessa is
  working towards a graduate degree in biostatistics at the
  University of Washington.
</Author>
```

### Adding references

To add linkable references in your text that, when clicked, will scroll down to the references section.

```
<sup>
  <a href="#references">8,18</a>
</sup>
```

You would list your references at the bottom of your feature, just after the Authors section, and preferably with a `<Divider />` separating the two. When rendered, references will be listed in an ordered list format. For links, you need only add the url, such as https://github.com and the references component will take care of the rest. It is also helpful and good citation practice to indicate when the reference was last accessed during research for the feature.

```
<Divider />

<div id="references">
  <References
    references={[
      {
        title: '[citation]',
        link: '[url if there is one]'
      },
      {
        title: '[citation]'
      }
    ]}
  />
</div>

```

### Adding your feature to the vision page

Open up `src/data/features.json` and add your feature to the top as the following. Your title doesn't necessarily have to match the url, but they should be similar enough for readers to find it on the world wide web.

```
{
  "id": "your-feature-url",
  "title": "Your Feature Title",
  "date": "Feb.2019",
  "client": "Feature",
  "categories": ["open-source", "public-health-and-policy"],
  "caption": "Brief feature description.",
  "image": "/images/features/your-feature-url/your-feature-hero-2.jpg",
  "link": "/vision/your-feature-url/"
},
```

If your feature will be shown on the work page, also add your new case study to the `case-study-order` file, adding it to the appropriate order for each category

### Adding team members

When a new teammate starts, we ask them for a bio and photo. Once we have an approved bio and photo, we're ready to get them on the website.

Original photos should be uploaded resources > photos-people > Headshots > [name]
Photos for the team page should be resized to 2000px width, saved as optimized jpg, and uploaded to Dropbox: Graphics > goinvo.com > images > about
Someone with AWS credentials (Craig, Eric, or Jen) should run yarn upload and the image should be ready to use.

In the data/team.json file, add a team member using the following:
{
	"name": " ",
	"title": " ",
	"bio": " ",
	"social": {
  	"email": "name@goinvo.com",
  	"twitter": " ",
  	"linkedin": " "
	},
	"image": "/images/about/headshot-first-lastname.jpg"
  }


### Going live

When your feature is ready to go live, make sure to push up any final changes to the branch. Then, on Github, you may locate your branch in the list of branches, and create a new pull request and let a reviewer know that you're ready for their review. Once approved, the final reviewer will merge it into master.

Once approved changes are merged into master, then do the following in terminal to go live.
`yarn build`  
`yarn upload`

## 🔍 Semantic Search System

This website features an intelligent semantic search system that helps potential clients find relevant projects using natural language queries. The system uses enhanced keyword matching and semantic understanding to surface the most relevant existing projects for any buyer query.

### How It Works

1. **AI-Powered Analysis**: Each project is analyzed by GPT-3.5-turbo to extract metadata and generate buyer-focused descriptions
2. **Semantic Embeddings**: OpenAI's text-embedding-3-small model creates vector representations of project content
3. **Enhanced Keyword Matching**: 100+ semantic keyword mappings and domain-specific boosting algorithms
4. **Client-Side Search**: Search runs entirely in the browser using intelligent keyword matching and concept mapping
5. **Smart Caching**: Only changed content gets reprocessed, saving time and API costs

### Search Features

- **Natural Language Queries**: "I need a UI for an AI platform for therapists"
- **Intelligent Keyword Expansion**: Automatically maps related terms (e.g., "telemetry" → "monitoring", "vital signs")
- **Buyer-Focused Descriptions**: AI explains why each project is relevant to your specific needs
- **Smart Filtering**: Filter by project type, industry, and complexity
- **Real-Time Results**: Instant search with similarity scoring
- **Domain-Specific Boosting**: Healthcare, enterprise, and government queries get specialized matching

### Content Sources

#### Case Studies (`src/case-studies/*.mdx`)
Detailed completed projects with full descriptions, client information, and portfolio images.

#### Features (`src/data/features.json`)
Portfolio highlights and quick project overviews used throughout the site.

### Enhanced Keyword Understanding

The search system recognizes and expands hundreds of related terms:

- **Healthcare**: telemetry, oncology, therapy, hematology, radiology, FHIR, HIPAA
- **Enterprise**: analytics, dashboards, IoT, fintech, logistics, SOC-2
- **Government**: civic, municipal, permits, emergency, elections, FedRAMP
- **Technology**: AI, platforms, systems, compliance, real-time

## 🚀 Setup Instructions

### Prerequisites

1. **Node.js 16+** and npm
2. **OpenAI API Key** for embedding generation
3. **Gatsby CLI** (optional, for development commands)

### Installation

```bash
# Clone the repository
git clone https://github.com/goinvo/goinvo.com.git
cd goinvo.com

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Environment Variables

Add your OpenAI API key to `.env`:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

> **💡 API Key Setup**: Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)

### Generate Search Index

**Required for search functionality**. Run this whenever you add or modify case studies:

```bash
# Generate embeddings and search index (uses cache for unchanged files)
npm run generate-embeddings

# Force regeneration of ALL embeddings (ignores cache)
npm run generate-embeddings:force
```

**When to use force mode:**
- 🔄 After upgrading the embedding system (like adding AI buyer descriptions)
- 🧹 When you suspect cache corruption
- ✨ To ensure all projects have the latest AI features

This command will:
- ✅ Analyze all case studies and features with AI
- 🧠 Generate OpenAI embeddings for semantic search  
- 💼 Create buyer-focused descriptions for each project
- 🗂️ Cache results to avoid reprocessing unchanged content (unless `--force` used)
- 💰 Show estimated API costs (typically $2-5 for full regeneration)

### Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve
```

## 📝 Content Management

### Adding New Case Studies

1. **Create MDX file** in `src/case-studies/your-project.mdx`
2. **Add frontmatter** with required fields:
   ```yaml
   ---
   title: "Your Project Title"
   client: "Client Name"
   caption: "Brief description"
   categories: ["healthcare", "ui-design"]
   image: "/path/to/image.jpg"
   ---
   ```
3. **Write content** in MDX format
4. **Regenerate embeddings**:
   ```bash
   npm run generate-embeddings
   ```

### Adding Features

1. **Edit** `src/data/features.json`
2. **Add entry** with required fields
3. **Regenerate embeddings**:
   ```bash
   npm run generate-embeddings
   ```

### Smart Caching

The embedding system automatically detects changes:

- ✅ **Unchanged files**: Uses cached embeddings (instant)
- 🔄 **Modified files**: Regenerates embeddings (uses API)
- 📊 **Cost tracking**: Shows exactly what gets processed

Example output:
```
📊 Found 33 projects:
  ✅ 28 cached (unchanged)
  🔄 5 need processing
💰 Estimated cost: $0.02
```

## 🔧 Search System Architecture

### Files Structure

```
src/
├── components/
│   └── project-search.js         # Main search component
├── utils/
│   └── semantic-search.js        # Search logic and utilities
├── data/
│   ├── search-index.json         # Generated search index
│   └── embeddings-cache.json     # Cached embeddings
└── styles/components/
    └── _project-search.scss      # Search component styles

scripts/
└── generate-embeddings.js        # Embedding generation script

static/
└── search-index.json             # Public search index for browser
```

### Search Process

1. **Load Index**: Browser fetches pre-generated search index
2. **Extract Keywords**: Query is analyzed for relevant terms and concepts
3. **Calculate Similarity**: Projects are scored using keyword matching and metadata
4. **Add AI Descriptions**: Relevant buyer descriptions are attached to results
5. **Rank Results**: Projects sorted by relevance with similarity scores

### Cost Optimization

- **One-time Generation**: Embeddings created once per content change
- **Smart Caching**: Only reprocess modified files
- **Client-Side Search**: No runtime API costs
- **Efficient Model**: Uses cost-effective text-embedding-3-small

**Typical Costs**:
- Initial setup: $2-5 (all projects)
- Adding one project: $0.003
- Search queries: $0 (client-side)

## 🎯 Search Query Examples

The enhanced system now handles a much broader range of buyer queries:

### Healthcare Queries
- *"Need a telemetry dashboard to monitor ICU vitals remotely"*
- *"Looking for an oncology treatment tracker that integrates genomic data"*
- *"Self-guided CBT therapy app for veterans with PTSD"*
- *"HIPAA-compliant radiology collaboration dashboard"*
- *"AI-powered hematology results dashboard for lab technicians"*

### Enterprise Queries
- *"Enterprise expense-analysis dashboard for SaaS CFOs"*
- *"Scalable data-ingest platform for IoT sensor fleets"*
- *"Cross-team dashboard visualizing OKRs and KPIs"*
- *"SOC-2 compliant customer analytics platform"*
- *"Customer loyalty service that plugs into Shopify"*

### Government Queries
- *"Citizen complaint tracking dashboard for municipal services"*
- *"Digital voter-registration tracker compliant with federal standards"*
- *"Grant-management platform for federal research programs"*
- *"FedRAMP authorized emergency response coordination system"*

### Original Examples (Still Work)
- *"I need a UI for an AI platform for therapists"*
- *"Healthcare dashboard design for clinical workflows"*
- *"Data visualization for government policy"*
- *"Enterprise software user experience"*
- *"Mobile health app interface design"*

## 🛠️ Development Workflow

### For Developers

```bash
# Standard development
npm start                    # Start dev server
npm run build               # Build for production

# Search system
npm run generate-embeddings  # Update search index (smart caching)
npm run generate-embeddings:force  # Force regenerate all (ignore cache)
```

### For Content Creators

1. **Add/edit content** in `src/case-studies/` or `src/data/features.json`
2. **Run embedding generation**:
   ```bash
   # Normal update (uses cache)
   npm run generate-embeddings
   
   # Or force full regeneration
   npm run generate-embeddings:force
   ```
3. **Test search** functionality on homepage

### Performance Notes

- **Search index size**: ~1.5MB (33 projects with embeddings)
- **Load time**: Index loads asynchronously, search available in ~1-2 seconds
- **Browser compatibility**: Works in all modern browsers
- **Mobile friendly**: Responsive design with touch-friendly controls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add/modify content as needed
4. Run `npm run generate-embeddings` if content changed
5. Test search functionality
6. Submit a pull request

## 📞 Support

For questions about the search system or setup:

- Check the console for detailed logging
- Verify `.env` file has valid OpenAI API key
- Ensure `search-index.json` exists in `static/` folder
- Run embedding generation if search returns no results

## 🎉 Features

- ✅ **Semantic Search** with natural language queries
- ✅ **AI-Generated Descriptions** for buyer relevance
- ✅ **Smart Caching** to minimize API costs
- ✅ **Real-Time Search** with instant results
- ✅ **Advanced Filtering** by type, industry, complexity
- ✅ **Mobile Responsive** design
- ✅ **Cost Efficient** client-side architecture
