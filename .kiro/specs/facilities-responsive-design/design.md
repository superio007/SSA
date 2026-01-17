# Design Document: Facilities Component Responsive Design

## Overview

This design transforms the Facilities component from a fixed-layout desktop-only design to a fully responsive component that adapts seamlessly across mobile, tablet, and desktop viewports. The current implementation uses absolute positioning, fixed padding values, and inline styles that break on smaller screens. The redesign will use Tailwind CSS responsive utilities, flexbox/grid layouts, and content-driven heights to create a fluid, accessible experience.

## Architecture

The responsive design follows a mobile-first approach with progressive enhancement:

1. **Base (Mobile) Layout**: Single-column stack with full-width cards
2. **Tablet Breakpoint (md: 768px)**: Two-column grid layout
3. **Desktop Breakpoint (lg: 1024px)**: Enhanced multi-column layout with decorative elements
4. **Ultra-wide Constraint (xl: 1280px+)**: Max-width container to prevent excessive stretching

### Layout Strategy

- Replace absolute positioning with CSS Grid for facility card placement
- Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:) for breakpoint-specific styles
- Remove inline styles in favor of Tailwind utility classes
- Implement content-driven heights using `min-h-*` instead of fixed `height`

## Components and Interfaces

### Component Structure

```typescript
interface Facility {
  name: string;
  courts: string[];
  image: StaticImageData;
  description: string;
}

interface FacilitiesProps {
  // Currently no props, but could add:
  // facilities?: Facility[]; // Allow external data injection
  // showBackground?: boolean; // Toggle trophy background
}
```

### Responsive Container Hierarchy

```
<section> (Facilities wrapper)
  ├── <div> (Header section with title)
  └── <div> (Gradient background container)
      ├── <div> (Facility cards grid - responsive)
      │   ├── <FacilityCard /> (Tennis)
      │   ├── <FacilityCard /> (Accommodation)
      │   ├── <FacilityCard /> (Fitness)
      │   └── <FacilityCard /> (Recovery)
      └── <div> (Trophy background - responsive)
```

### Extracted Sub-Component

Create a `FacilityCard` component to reduce duplication:

```typescript
interface FacilityCardProps {
  facility: Facility;
  variant: "primary" | "secondary"; // Controls color scheme
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, variant }) => {
  // Renders image, play button, title, tags, and description
  // Applies variant-specific styling (white vs green tags, text colors)
};
```

## Data Models

### Facility Data Structure

```typescript
type Facility = {
  name: string; // Facility name (e.g., "Tennis", "Fitness")
  courts: string[]; // Array of amenities/features
  image: StaticImageData; // Next.js optimized image import
  description: string; // Descriptive text
};
```

### Responsive Breakpoints

```typescript
const breakpoints = {
  mobile: "0px - 767px", // Single column
  tablet: "768px - 1023px", // Two columns
  desktop: "1024px+", // Multi-column with decorative elements
  ultraWide: "1536px+", // Max-width constraint
};
```

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

### Property 1: Mobile Single-Column Layout

_For any_ viewport width less than 768px, the facility cards should be arranged in a single column with no horizontal overflow.
**Validates: Requirements 1.1**

### Property 2: Mobile Removes Absolute Positioning

_For any_ mobile viewport, the facility card containers should not use absolute positioning (position should be static, relative, or use grid/flex layout).
**Validates: Requirements 1.2**

### Property 3: Responsive Padding Units

_For any_ viewport size, padding values should use responsive Tailwind classes (px-_, py-_) rather than inline fixed rem/px values.
**Validates: Requirements 1.3**

### Property 4: Dynamic Height Based on Content

_For any_ content size, the gradient background container should adjust its height dynamically (using min-h-\* or h-auto) rather than fixed height values.
**Validates: Requirements 1.4, 5.2**

### Property 5: Consistent Card Spacing

_For any_ layout (mobile, tablet, desktop), the spacing between facility cards should be consistent and equal.
**Validates: Requirements 1.5**

### Property 6: Tablet Two-Column Grid

_For any_ viewport width between 768px and 1023px, the facility cards should be arranged in a two-column grid layout.
**Validates: Requirements 2.1**

### Property 7: Proportional Tablet Padding

_For any_ tablet viewport width, padding should scale proportionally using Tailwind's responsive padding utilities.
**Validates: Requirements 2.2**

### Property 8: Background No Content Overlap

_For any_ viewport size, the trophy background image should not overlap or obscure interactive content (facility cards, play buttons).
**Validates: Requirements 2.3, 5.4**

### Property 9: Desktop Layout Preservation

_For any_ viewport width greater than 1024px, the facility cards should display in an enhanced multi-column layout similar to the original design intent.
**Validates: Requirements 3.1**

### Property 10: Max-Width Constraint

_For any_ ultra-wide viewport (>1536px), the content container should have a maximum width constraint to prevent excessive stretching.
**Validates: Requirements 3.2**

### Property 11: Responsive Font Units

_For any_ text element in the component, font sizes should use responsive units (text-\* Tailwind classes with rem) rather than fixed pixel values.
**Validates: Requirements 4.1**

### Property 12: Proportional Image Scaling

_For any_ viewport size, facility images should scale proportionally to maintain their aspect ratio.
**Validates: Requirements 4.2**

### Property 13: Responsive Spacing Units

_For any_ spacing between elements (gaps, margins), the component should use Tailwind's responsive spacing utilities (gap-_, space-_) rather than fixed pixel values.
**Validates: Requirements 4.3**

### Property 14: Tag Wrapping on Small Screens

_For any_ facility with multiple tags, when the container width is insufficient, tags should wrap to multiple lines rather than overflow.
**Validates: Requirements 4.4**

### Property 15: Responsive Background Sizing

_For any_ viewport width, the trophy background image should adjust its size and position using responsive background utilities (bg-contain, bg-cover, bg-position).
**Validates: Requirements 5.1**

### Property 16: Mobile Background Opacity Reduction

_For any_ mobile viewport, decorative background elements should have reduced opacity or be hidden to improve content readability.
**Validates: Requirements 5.3**

### Property 17: Minimum Touch Target Size

_For any_ interactive element (play button), the touch target should be at least 44x44 pixels to meet accessibility standards.
**Validates: Requirements 6.1**

## Error Handling

### Responsive Design Edge Cases

1. **Missing Images**: Use Next.js Image component's built-in error handling and placeholder
2. **Empty Facility Arrays**: Render empty state or hide section gracefully
3. **Viewport Detection**: Use CSS media queries (no JavaScript required) for reliability
4. **Overflow Content**: Apply `overflow-hidden` to prevent layout breaks

### Accessibility Considerations

- Maintain semantic HTML structure (section, article, button elements)
- Ensure sufficient color contrast on gradient backgrounds
- Provide alt text for all images
- Ensure keyboard navigation works for play buttons
- Test with screen readers to verify content order

## Testing Strategy

### Dual Testing Approach

We will implement both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, and rendering at specific breakpoints
- **Property tests**: Verify responsive properties hold across all viewport widths

### Unit Testing

Use React Testing Library with viewport mocking:

```typescript
// Example unit test structure
describe("Facilities Component", () => {
  it("renders 4 facility cards", () => {
    // Test specific example
  });

  it("displays play button on each card", () => {
    // Test interactive elements
  });

  it("applies correct color scheme to card variants", () => {
    // Test visual styling
  });
});
```

### Property-Based Testing

Use `@fast-check/vitest` for property-based testing with minimum 100 iterations per test:

```typescript
// Example property test structure
import fc from "fast-check";

describe("Responsive Properties", () => {
  it("maintains single column on mobile viewports", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 767 }), // Mobile viewport widths
        (viewportWidth) => {
          // Feature: facilities-responsive-design, Property 1: Mobile Single-Column Layout
          // Render component at viewportWidth
          // Assert single column layout
        }
      ),
      { numRuns: 100 }
    );
  });

  it("uses responsive padding units across all viewports", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }), // All viewport widths
        (viewportWidth) => {
          // Feature: facilities-responsive-design, Property 3: Responsive Padding Units
          // Verify no inline fixed padding
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Testing Configuration

- **Framework**: Vitest with React Testing Library
- **Property Testing Library**: @fast-check/vitest
- **Viewport Testing**: Mock window.matchMedia and container queries
- **Visual Regression**: Consider Playwright for screenshot comparisons
- **Minimum Iterations**: 100 runs per property test

### Test Coverage Goals

- All 17 correctness properties implemented as property-based tests
- Unit tests for specific breakpoint transitions (767px→768px, 1023px→1024px)
- Integration tests for user interactions (button clicks, hover states)
- Accessibility tests (ARIA attributes, keyboard navigation)

## Implementation Notes

### Tailwind CSS Responsive Utilities

Key Tailwind patterns to use:

```typescript
// Responsive layout
className = "flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4";

// Responsive padding
className = "px-4 md:px-8 lg:px-16 xl:px-32";

// Responsive typography
className = "text-base md:text-lg lg:text-xl";

// Responsive spacing
className = "gap-4 md:gap-6 lg:gap-8";

// Responsive visibility
className = "hidden lg:block"; // Hide on mobile, show on desktop
```

### Migration Strategy

1. Remove all inline `style` props
2. Replace absolute positioning with CSS Grid
3. Convert fixed heights to min-heights or auto
4. Apply Tailwind responsive classes systematically
5. Extract FacilityCard sub-component
6. Test at each breakpoint
7. Optimize images for different viewport sizes

### Performance Considerations

- Use Next.js Image component's responsive `sizes` prop
- Lazy load images below the fold
- Minimize layout shifts (CLS) during responsive transitions
- Use CSS containment for performance isolation
