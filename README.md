This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary

This is a demo I've been working with to test out and learn the conventions of Framer v2 and get caught up with React 16. Most notably I've been interested in mastering Shared Layouts. Demo can be found at http://rplumlee.github.io 

## Planned Features

The next few things I want to do:

- ~~change animation style to framer's shared layout for smoother transitions~~
- ~~refactor reducer actions for new layout style~~ 
- ~~refactor reducers to pure functions~~
- ~~refactor inline styles to stylesheet where practical~~
- ~~refactor App.tsx into separate components where practical~~
- ~~clean up unused modules~~
- add uncategorized section
- hook back up functionality of add new item/section with the new shared layout
- ~~remove old "SectionCard" and replace with inline editing of sections. Leave the Animate Presence to the actual menu items~~
- build out available toppings functionality
- change order functionality from a property on the object to just using indices
- add featured section up top
- write some tests
- implement drag to reorder/change item section. On initial glance it looks like using Animate Presence breaks drag ability, but this may be fixed by the rerender on a drag action that actually changes the state.
- actually add a db and upload image functionality
- discount/promotion settings for visual marketing

Bugs to investigate
- editing section name breaks increment/decrement actions. Has to do with holding section state in the component. should be able to fix it by using input ref instead of state.
- ~~sometimes after deleting all items from a menu section the layout tries to treat an item as a menu card~~
- on first increment/decrement of a section the page scrolls with the section. Not an actual problem but I don't like it.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
