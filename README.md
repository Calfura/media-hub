# Media Hub

A mock project for a media streaming web service (educational purposes), using the Plex API to fetch media and stream content to the user. Traditional media services have a login system, profiles and content to select from. The focus of this project is the layout and styling to match other types of services.

## Planning

### Details

- General homepage that will display pictures, a logo and a way to login (login system will not be implemented, as this project is based for the web site itself and not database side of it)
- After a user is 'logged in' the web site will direct them into a content browser section that will have a layout of media.
    - The content section will have 'popout content' that will have a description of the content in the popout and a play button
- Possibly a way to play example media using the Plex API to hook in some example content into the project.

### Routes

- "/" Homepage - Homepage for the website
- "/login/" - Route for users logging into the web service. **This route may not be implemented due to the project mainly being focused on the web site and its componenets**
- "/browse/" - When a user is 'logged in' allows the browsing of content
    - "/player/" - Media player that uses the Plex API to play any example content within the website. **May change at later date**
