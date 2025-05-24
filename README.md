# 🍽️ Grilli – Amazing & Delicious Food

Welcome to **Grilli** — a beautifully designed, fully responsive restaurant website crafted to showcase delicious food and engage visitors with modern UI/UX. Built with semantic HTML5, flexible CSS3, and interactive JavaScript, Grilli is perfect for restaurants, cafes, or food bloggers who want a visually appealing and smooth user experience.

---

## 📸 Live Preview

Experience the site live here:  
**Grilli Demo** (Replace with actual URL)

---

## 📁 Project Structure

```bash
grilli/
├── assets/
│   ├── fonts/               # Custom fonts
│   ├── icons/               # SVG and icon files
│   ├── images/              # Food images, shapes, and decorative assets
├── css/
│   ├── style.css            # Main stylesheet with responsive design and animations
├── js/
│   └── script.js            # JavaScript for interactive features and UI enhancements
├── index.html               # Main HTML file - homepage
└── README.md                # Project documentation
```

---

## ✨ Core Features & Highlights

### Fully Responsive & Adaptive Design

- Fluid layouts built with CSS Grid and Flexbox ensure content adjusts elegantly from small phones to ultra-wide screens.

- Breakpoints at 768px, 1200px, and 1400px trigger layout changes like multi-column grids, decorative overlays, and fixed hero height.

- Root-level CSS variables (e.g., `--fontSize-title-2`, `--weight-bold`) create a scalable, consistent typography and color system across the site.

### Clean, Intuitive Navigation

- Sticky top navigation bar with a hamburger toggle on smaller screens.

- Navigation links highlight on hover, focus, and when active with a subtle underline animation via `::after` pseudo-elements.

- Navigation menu dynamically opens and closes with JavaScript, enhancing mobile usability without clutter.

### Hero Section

- Bold, eye-catching hero banner featuring large background images, engaging headlines, and clear Call-To-Action (CTA) buttons.

- Fixed height on desktops (880px) ensures impactful first impression.

- Positioned buttons with smooth scale and transform effects on hover for interactivity.

### Service & Feature Sections

- Services displayed in a staggered grid layout with large gaps and vertical translations for a dynamic layered look.

- Feature highlights organized in 4-column grid on desktops, with decorative SVG or PNG shapes positioned for visual interest.

- Consistent padding and margins preserve white space and breathing room.

### Special Dish & Menu Highlights

- Special Dish section uses padded containers and zero right-padding to allow images or shapes to overflow gracefully.

- Menu displayed as a grid with defined row and column gaps, optimizing readability and visual hierarchy.

- Menu items styled with bold fonts, letter spacing, and subtle separators to guide the eye.

### About & Testimonials

- About section enriched with shapes positioned absolutely, bringing depth and texture on larger screens.

- Generous vertical padding adds emphasis to content.

- Testimonials split into left and right containers with balanced padding, optimized for easy reading and interaction.

### Form Section

- User-friendly form layout with consistent padding and spacing.

- Input fields and buttons styled for accessibility and ease of use.

---

## 🔧 Styling Details (`style.css`)

- **CSS Reset & Base Styles:** Global resets combined with root custom properties for easy theming.

- **Grid & Flexbox:** Used extensively for layout control (e.g., `.grid-list`, `.navbar-list`) to create flexible, responsive arrangements.

- **Transitions & Animations:** Smooth hover and focus effects on buttons, links, and interactive elements.

- **Media Queries:** Multiple breakpoints control layout changes, visibility toggling, and decorative element positioning.

- **Pseudo Elements:** `::after` on nav links for animated underlines that scale on active or hover.

- **`all: unset`:** Used on navbar elements to remove default browser styles for full custom control.

---

## 💻 JavaScript Interactivity (`script.js`)

### Navigation Toggle

- Hamburger button toggles active class on navbar to show or hide the menu on mobile.

- Event listeners close the menu when clicking outside or on menu links.

### Accessibility Improvements

- Keyboard focus management for links and buttons.

- ARIA attributes are used throughout to improve screen reader usability.

### Scalable & Lightweight

- Minimal code for maintainability and easy extension.

- Ready for integration of additional animations or UI enhancements (e.g., GSAP).

---

## 🌐 Technologies & Tools

- **HTML5:** Semantic tags (`header`, `section`, `nav`, `footer`) ensure accessibility and SEO-friendliness.

- **CSS3:** Variables, media queries, Grid, Flexbox, transitions, transforms.

- **JavaScript (ES6+):** Modular, event-driven for navigation and interactivity.

- **Iconography:** Ionicons library for crisp scalable icons.

- **Fonts:** Google Fonts for stylish typography matching brand personality.

---

## 🛠️ 🛠️ Installation & Development

### Clone the repository:

```bash
git clone https://github.com/yourusername/grilli.git
cd grilli
```

### 🚀 Open the Project

- Use **Live Server** extension in VS Code _(recommended)_ for hot reloads during development.

- Or simply open `index.html` directly in any modern web browser.

### 🎨 Customization

- Replace images in `/assets/images/` to suit your brand’s style and content.

- Modify sections and text content in `index.html` to update menus, about info, and other page details.

- Adjust colors, fonts, spacing, and other styles by editing CSS variables in `style.css`.

- Enhance or add JavaScript logic in `script.js` to create custom interactive behaviors.

---

## ✏️ Customize the Content

- 📝 Modify the text content inside `index.html` to update menu items, about info, testimonials, etc.

- 🖼️ Replace images inside `assets/images/` with your own food photography or branding visuals.

- 🎨 Edit CSS variables and styles in `css/style.css` to customize colors, fonts, spacing, and responsive breakpoints.

- 🧩 Extend JavaScript in `js/script.js` for additional interactive functionality or integrations.

---

## 📱 Responsive Design Table

| Device Type       | Screen Width Range | Key Layout Behavior                         |
| ----------------- | ------------------ | ------------------------------------------- |
| Mobile Phones     | < 768px            | Hamburger menu, single-column layouts       |
| Tablets & Laptops | 768px – 1199px     | Two-column grids, visible nav with spacing  |
| Desktops          | 1200px – 1399px    | Multi-column grids, fixed hero height       |
| Large Screens     | ≥ 1400px           | Decorative shapes visible, advanced layouts |

---

## 🎨 Design Philosophy

- **Whitespace & Balance:** Generous padding and margins for comfortable reading.

- **Typography Hierarchy:** Bold titles, spaced letters, clear callouts.

- **Color Palette:** Vibrant accent colors balanced with clean white and neutral backgrounds.

- **Visual Interest:** Decorative shapes, image overlays, and staggered grids add depth without distraction.
  
---

## 🛡️ Accessibility

- ARIA roles and attributes are implemented site-wide for improved screen reader compatibility.

- Navigation landmarks (`role="navigation"`, `aria-label`s), buttons, and form controls include descriptive ARIA labels.

- Keyboard navigation support is enhanced to allow focus on all interactive elements with visible focus states.

- Semantic HTML5 elements are used to improve document structure and accessibility.

- Forms include proper labeling and focus order for users with assistive technologies.

---

## 🧩 Future Implementations

- Integrate GSAP animations for hero images and blobs.

- Add scroll-triggered effects for interactive storytelling.

- Implement a reservation form connected to backend services.

- Localize content for multilingual support.

- Add dark mode toggle using CSS variables.

---

## 🚧 Known Issues & Roadmap

No critical bugs reported.

**Planned features:**

- Smooth scroll navigation

- Accessibility audits

- Additional menu filter options

Please submit issues or feature requests via GitHub!

---

## 🙌 Credits

Thanks to:

- [Ionicons](https://ionicons.com) — for crisp, scalable vector icons

- [Google Fonts](https://fonts.google.com) — for clean and stylish typography

- Modern UI/UX inspirations and the open-source community

---

## ⭐ Support & Contribute

If you find Grilli useful or inspiring:

- ⭐ Star the repo!

- 🍴 Fork and build your own delicious variations.

- 🛠️ Send pull requests to improve the project.

- 📬 Follow for more front-end & UI projects.

> **Enjoy building with Grilli and bon appétit**! 🍔🍣🍰
