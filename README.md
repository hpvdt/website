# HPVDT Website

This is the code for the [team's website](https://hpvdt.ca/), written from scratch using a blend of CSS, HTML, and smidge of JavaScript.

## Folder Organization

These are a few groups of files that are helpful for website updates. 

| Folder/file | Purpose |
| --- | ---|
| `resources/css/style.css` | Style (like spacing, colors, and font size) for all website headers, buttons, and text boxes. Also defines the three big background header images |
| `resources/img` | All other website images |
| `index.html` | Text and content of main website page |
| `vendors` | Has ionicons for icons and other random tools |

# Maintaining the Website

To update the code, we generally use Visual Studio Code. **Frequent previews are a must!** We preview the changes before making pull requests on GitHub with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Opening the `.html` files in a broswer can achieve a similar result too.

**Note: the `main` branch is automatically deployed on every commit made and becomes live on our website within minutes! So all work MUST be done in branches and reviewed and approved before pulled into the `main` branch and deployed.** For this reason there is branch protection that inhibits most people from pushing directly to main without secondary review and approval from another webmaster.

Some tips and tricks for future website maintainers:

- Much of the maintenance of the website is updating team member listing and sponsors, both of which have pretty cookie-cutter sections of code in the appropriate `.html` files so one can just copy parts and modify them as needed for an easier time.
- When updating sponsors pay attention to how their logos are rendered by checking the preview, some high aspect ratio logos can be rather constrained in our formatting so consider requesting alternate logos or emblems.
- Make sure that all media links are correct, **do not commit broken images!** Wait until you've got all media needed before making updates.
- Feel free to irrelevant delete files and unused code since it's relatively easy to find old content through version control should the need arise.

# Suggestions

Contact the webmasters directly on [GitHub](https://github.com/orgs/hpvdt/teams/webmasters) or on Discord if you have questions or ideas to add to the website!

