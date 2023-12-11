# brainpop
brainpop activities feed assignment.

#setup
navigate to client folder an execute npm install
run "npm run serve"
navigate to server folder and execute "npm run".

#A few caveats
my experience is primarly with Angular 14, so that was my overall approach to the code and structure.

I made no changes to the modules, with the exception of the vuex library.
I also added the font-awesome CDN for basic icons.

I did not add or use any vue plugins, librarys or mainframes.
Please note that i chose not to use bootstrap.css, scss or TypeScript because i wanted to keep the bundle light and its a small project.

You may notice a cheated a little with the responsivity and did a big no no with the HTML tag. That was honestly due too lack of time. My apologies :).

#Lets review the steps:

-"This app contains one main view - the Activities view." // I called it the "AppFeed"
-"The main activities feed you should be using is the Activities V1 API." // The route is named "v1"
-"When the user clicks on the 'View work' link on an activity, it should open a modal as seen on the Zoom screenshot. This modal shows the activity info plus the teacher comment on that activity." // not much to say there...

-"The app should support direct access to the zoom view via your router." // Indeed it does. I chose to manage the popup with a combo of a route guard and vuex.
-"The activities timeline should be grouped and ordered by months as seen in the Activities view screenshot." //  For that I created a service to parse the two routes, sort them by date, convert them to classes for better managment, and split then into groups by months.
-"Each activity has its own set of attributes that determine the way it is rendered. Available activities and their attributes are listed in the Activity Types and Settings section." // For that I utulized some oop inheritence.
-"The app should support two types of filters:
Free text filter
Activity type filter No additional API calls are required for that, you already have all the data you need." // All the filtering is being handled by vuex.
-"There are two products variants. 'bp' and 'bpjr'. The product affects the topic icon rendering as seen in the Activities view screenshot." //  dynamic css in the html.
-"Design matters! Keep close to the design as it is shown in the screenshots." // Its pretty close.

-"The app support another data feed, Activities V2 API, that is structured differently. Same data, but a different structure. Make sure your code supports both structures from API #V1 and API #V2. Create a new route that demonstrates this support." // I used the same view with a different route, and handled the data with a guard and vuex.

-"The app should display 10 activities at a time and support pagination for loading additional ones in the form of a 'Load more' button." // That is being handled by the afformantioned Service.
-"Add support for hiding activities. Every activity row should have a hide icon that hides it when clicked. This hidden state should be persistent." // Im assuming "persistent" means across filtering. If not, them my bad.
"Add autosuggest support to the text filter input. Use the topics names from your main API V1 feed to generate the autosuggest items list." // Just a bunch of js.

Enjoy!.



