# The Cannon Lab Website

This is a modern, high-performance React website for The Cannon Lab at Occidental College.

## 🚀 Getting Started

To run the project locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```

3. **Open the Site**:
   Navigate to `http://localhost:5173` in your browser.

---

## 📝 Managing Content

The website is designed so that all content can be managed by editing simple JSON files in the `src/data/` directory. **You do not need to edit any code to update the site's information.**

### 1. Generating Home Page Posts
**File**: [`src/data/posts.json`](file:///home/kyle/Documents/Cannon_Website/src/data/posts.json)

To add a new post (news, updates, etc.) to the home feed:
- Open `posts.json`.
- Add a new object at the **top** of the array.
- A post can have:
  - `title`: The title of the post.
  - `date`: The date formatted as "Month Day, Year".
  - `author`: "cannonchem"
  - `contentHtml`: The body text of the post. You can use standard HTML like `<em>`, `<strong>`, or `<a>`.
  - `image` (Optional): A single URL for a featured image.
  - `images` (Optional): A list of URLs for a gallery of images.

### 2. Updating Research Areas
**File**: [`src/data/research.json`](file:///home/kyle/Documents/Cannon_Website/src/data/research.json)

To add or modify a research project:
- Add an object to the list.
- Each item has:
  - `title`: The name of the project.
  - `text`: A description of the research.
  - `image`: URL for the ChemDraw or figure.
  - `references`: A list of `{ "text": "Citation", "url": "DOI URL" }`. The site will automatically handle the "See:" formatting.

### 3. Adding Group Members & Alumni
**File**: [`src/data/members.json`](file:///home/kyle/Documents/Cannon_Website/src/data/members.json)

- **Group Photo**: Update the `groupPhotoUrl` at the top of the file.
- **Current Members**: Add a new object to the `members` array:
  ```json
  { "name": "Name 'Year", "title": "Undergraduate", "detail": "Major" }
  ```
- **Alumni**: Simply add the name string to the `alumni` array. The grid will self-organize.

### 4. Adding New Publications
**File**: [`src/data/publications.json`](file:///home/kyle/Documents/Cannon_Website/src/data/publications.json)

The publications page automatically handles formatting for undergraduates (underlining) and DOI links. 

To add a publication:
- Identify if it's an **undergraduate** or **graduate** publication.
- Add an entry to the corresponding list.
- **Authors**: Create a list of objects like `{ "name": "Name", "underline": true }`. Set `underline` to `true` for Occidental undergraduates.
- **Details**: Fill in the `title`, `journal`, `year`, `volume`, `pages`, `doi`, and `doiUrl`.

### 5. Managing Jeff's Profile
**File**: [`src/data/jeff.json`](file:///home/kyle/Documents/Cannon_Website/src/data/jeff.json)

Use this file to update Jeff's biosketch, titles, education history, honors/grants, and the link to his CV.

---

## 🛠️ Technical Details

### Development Commands
- `npm run dev`: Starts the local dev server.
- `npm run build`: Generates a production bundle in the `dist/` folder.
- `npm run preview`: Previews the production build locally.

### Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Styling**: Vanilla CSS (Global tokens in `src/index.css`)

### Images & Assets
- The site primarily uses absolute URLs for images (hosted via WordPress/Jetpack).
- If you want to host an image locally, place it in `public/` and reference it starting with `/` (e.g., `/my-photo.jpg`).
