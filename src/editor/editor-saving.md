# Editor Work Flow - Saving

When saving the data by either publishing the post or saving as a draft, Elementor needs to store all the data from the editor in the database.

## Work Flow

* **Editor Data** - In the client site, the data (elements and settings) entered by the user into the Editor is sent in a JSON format to the server. To optimize the request, all the default values are stripped from the data.

* **Save to Post Meta** - On the server side, the data is saved in two post-meta fields. One post meta for page elements in (`_elementor_data`) saved in JSON format, and the other (`_elementor_page_settings`) saved as an serialized-array (historical reason).

* **Clear Generated CSS** - After saving data Elementor triggers a CSS cleanup. The page CSS is regenerated in first access to the page (if the css doesn't exist).
