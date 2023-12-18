# Brainpop Activities Feed Assignment

Welcome to the Brainpop Activities Feed Assignment. This document provides a comprehensive guide to setting up,
understanding, and navigating through the project. 

# Setup Instructions

## Client Setup
1. Navigate to the client folder.
2. Execute `npm install` to install all necessary dependencies.
3. Run the application using `npm run serve`.

## Server Setup
1. Navigate to the server folder.
2. Start the server by executing `npm run`.


# Development Approach and Tools Used

## Development Approach
-  Most of the data fetching and manipulation will be handles in a state manager and services.

## Tools and Libraries
- Vuex library is incorporated for state management.
- Font Awesome CDN is used for basic icons.

## Tool Exclusions
- Bootstrap and SCSS were unnecessary considering the scale of the assignment (normally I would prefer scss).
- Normally I would use typescript but that would require making some config changes and I decided to keep it simple.


# Application Features and Implementation Details

## Main View - AppFeed
- The application's central feature is the "AppFeed" view, showcasing the activities feed.

## API Integration
- Activities V1 API is utilized for the main activities feed, with the route named "v1".
- Activities V2 API is also supported, demonstrating flexibility with different data structures.

## Data Flow
- Data fetch is triggerd by route resolvers. The client routes match the service API and fetch the data accordingly.  
- Once data is fetched, the resolver (guard in vue) will activate the state manager which will process and unify the data using the Formatter service.
- Only when the data Is processed, the view will be created, now having the appropriete generic data. 

## Data Organization
- Activities timeline is a custom view. It employees a custom group component which loops the grouped data (by months).
- Every group employees a generic card component with a horizontal and vertical display types for mobile and modal displays.
- Activities timline also uses a generic Modal component that displays cards in the vertical mode.

## Filtering and Variants
- The application includes free text and activity type filters, handled by Vuex.
- Two product variants, 'bp' and 'bpjr', influence the topic icon rendering, managed via dynamic CSS.

## Design
- The design closely aligns with the provided screenshots, emphasizing visual appeal and user experience.

  # Additional Features

## Pagination
- The application displays 10 activities at a time and supports loading more via a 'Load more' button, managed by the aforementioned service.

## Activity Hiding Feature
- Each activity row includes a hide icon, allowing users to hide specific activities. The hidden state is designed to be persistent across filters. This "hidden-content" css class is generic and could be applyed on every element.

## Autosuggest in Text Filter
- An autosuggest feature is added to the text filter input, utilizing topics names from the main API V1 feed for suggestions.


# Caveats
- This is my first experience using vue (my background is Angular and a bit of react). I tried to implement as many features as i could learn. hope i did ok.
- I don't have experience with unit testing in vue (but Im here to learn :).



Thank and enjoy.

