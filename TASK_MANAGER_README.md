# Task Manager Web Application

A modern, responsive, and accessible task manager web application built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

### Core Functionality
- **Add Tasks**: Create new tasks with a simple input field (200 character limit)
- **Mark Complete**: Check tasks as complete with visual feedback
- **Delete Tasks**: Remove tasks individually or all completed tasks at once
- **Task Persistence**: Tasks are saved to browser's localStorage and persist between sessions

### User Interface
- **Task Statistics**: Real-time display of total, completed, and pending tasks
- **Task Filtering**: View all tasks, only active tasks, or only completed tasks
- **Character Counter**: Visual feedback showing task input character count
- **Empty States**: Contextual messages for different filter views

### Design & Accessibility
- **Modern CSS**: Gradient background, smooth animations, and contemporary styling
- **Responsive Layout**: Fully responsive design that works on mobile, tablet, and desktop
- **Semantic HTML**: Proper use of HTML5 semantic elements for better accessibility
- **WCAG 2.1 Compliant**: 
  - Proper ARIA labels and roles
  - Skip link for keyboard navigation
  - Focus indicators for all interactive elements
  - Support for reduced motion preferences
  - Dark mode support via `prefers-color-scheme`
  - Proper heading hierarchy

### Performance & User Experience
- **Local Storage**: No server required; tasks persist in the browser
- **Smooth Animations**: Subtle slide-in animations for new elements
- **Keyboard Accessible**: Full keyboard navigation support
- **Mobile Optimized**: Touch-friendly button sizes and spacing

## 📁 File Structure

```
src/static/
├── index.html          # Semantic HTML markup
├── styles.css          # Modern responsive CSS with accessibility features
└── app.js              # Vanilla JavaScript with no dependencies
```

## 🚀 Quick Start

1. **Open the Application**
   - Simply open `index.html` in a modern web browser
   - No build process or server setup required

2. **Add a Task**
   - Type your task in the input field
   - Press "Add Task" button or press Enter
   - Task appears immediately in the list

3. **Manage Tasks**
   - Check the checkbox to mark a task complete
   - Click "Delete" to remove a task
   - Use filter buttons to view specific task types

4. **Clear Completed Tasks**
   - Click "Clear Completed Tasks" button to remove all done tasks at once
   - A confirmation dialog will appear to prevent accidental deletion

## 🎨 Design Highlights

### Color Scheme
- **Primary Gradient**: Purple (667eea) to Deep Purple (764ba2)
- **Success**: Green (#27ae60)
- **Error**: Red (#e74c3c)
- **Text**: Dark Gray (#2c3e50)
- **Background**: Light Gray (#f8f9fa)

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, etc.)
- **Font Sizes**: Responsive scaling based on viewport
- **Line Height**: 1.6 for excellent readability

### Spacing & Layout
- **Container**: Max-width 900px with responsive padding
- **Gap**: Consistent 1-2rem spacing between sections
- **Padding**: 1.5-2rem within sections

## ♿ Accessibility Features

1. **Skip Link**: Jump directly to main content
2. **ARIA Labels**: All interactive elements have descriptive labels
3. **Semantic Markup**: Uses `<header>`, `<main>`, `<section>`, `<footer>`
4. **Keyboard Navigation**: 
   - Tab to navigate between elements
   - Enter to submit forms or activate buttons
   - Spacebar to toggle checkboxes
5. **Focus Indicators**: Clear 2px blue outline on focused elements
6. **Status Updates**: `aria-live` regions announce dynamic changes
7. **Dark Mode**: Respects `prefers-color-scheme: dark` preference
8. **Reduced Motion**: Respects `prefers-reduced-motion: reduce` preference

## 📱 Responsive Breakpoints

- **Desktop** (>768px): Multi-column layout with optimal spacing
- **Tablet** (481px-768px): Adjusted font sizes and spacing
- **Mobile** (<480px): Single column, touch-optimized buttons

## 💾 Data Storage

Tasks are stored using the browser's localStorage API with the following structure:

```javascript
// Each task object
{
  id: 1717339326000,           // Unique timestamp-based ID
  text: "Buy groceries",       // Task description
  completed: false,            // Completion status
  createdAt: "6/2/2024, 1:28:46 PM"  // Creation timestamp
}
```

## 🔧 Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari, Chrome Mobile

## 📋 Usage Tips

1. **Quick Task Entry**: Press Enter to quickly add tasks
2. **Task Filtering**: Use filter buttons to focus on what's important
3. **Bulk Delete**: Use "Clear Completed Tasks" to clean up finished items
4. **Mobile Friendly**: App is fully functional on touch devices

## 🎯 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Tab | Navigate to next interactive element |
| Shift + Tab | Navigate to previous interactive element |
| Enter | Submit form or activate button |
| Spacebar | Toggle checkbox |
| Esc | Cancel operations (where applicable) |

## 🧪 Testing Checklist

- [x] Add new tasks
- [x] Mark tasks as complete
- [x] Delete individual tasks
- [x] Filter tasks by status
- [x] Clear all completed tasks
- [x] Tasks persist after page refresh
- [x] Keyboard navigation works
- [x] Mobile responsive design
- [x] Dark mode appearance
- [x] ARIA labels present
- [x] Focus indicators visible
- [x] Character counter updates
- [x] Statistics update correctly

## 🎓 Technologies Used

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern features including gradients, flexbox, and grid
- **JavaScript ES6+**: Vanilla JavaScript with no external dependencies
- **LocalStorage API**: Browser-based data persistence

## 📄 License

This Task Manager application is provided as-is for educational and personal use.

---

**Version**: 1.0.0  
**Last Updated**: June 2024  
**Created with ❤️ for productivity**
