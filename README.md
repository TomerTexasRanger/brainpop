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
- My experience is primarely with Angular 14, and code structure somewhat hints to that fact :).

## Tools and Libraries
- Vuex library is incorporated for state management.
- Font Awesome CDN is used for basic icons.

## Tool Exclusions
- Vue plugins, libraries, or frameworks were intentionally omitted.
- Bootstrap, SCSS, and TypeScript were not used to maintain a lighter bundle size, given the project's scale.



# Application Features and Implementation Details

## Main View - AppFeed
- The application's central feature is the "AppFeed" view, showcasing the activities feed.

## API Integration
- Activities V1 API is utilized for the main activities feed, with the route named "v1".
- Activities V2 API is also supported, demonstrating flexibility with different data structures.

## Modal and Router Configuration
- Activity details are presented in a modal, similar to the Zoom screenshot.
- Direct access to the modal is enabled through router configuration, combining route guards and Vuex.

## Data Organization
- Activities timeline is grouped and ordered by months for better clarity.
- A service is implemented to sort activities by date and group them monthly.
- Activities have specific attributes for rendering, managed using object-oriented programming principles.

## Filtering and Variants
- The application includes free text and activity type filters, handled by Vuex.
- Two product variants, 'bp' and 'bpjr', influence the topic icon rendering, managed via dynamic CSS.

## Design
- The design closely aligns with the provided screenshots, emphasizing visual appeal and user experience.

  # Additional Features

## Pagination
- The application displays 10 activities at a time and supports loading more via a 'Load more' button, managed by the aforementioned service.

## Activity Hiding Feature
- Each activity row includes a hide icon, allowing users to hide specific activities. The hidden state is designed to be persistent across filters.

## Autosuggest in Text Filter
- An autosuggest feature is added to the text filter input, utilizing topics names from the main API V1 feed for suggestions.


# Caveats and Limitations

- Responsivity: Due to time constraints, some compromises were made in the app's responsiveness.
- HTML Tag Usage: A non-standard approach was taken with the HTML tag, which was a necessary decision under the given circumstances.
- Apology: I acknowledge that these decisions may not align with best practices in web development, and I apologize for any inconvenience caused.


Thank and enjoy.

