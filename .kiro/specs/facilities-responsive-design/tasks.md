# Implementation Plan: Facilities Component Responsive Design

## Overview

This implementation plan transforms the Facilities component into a fully responsive design using Tailwind CSS utilities, CSS Grid, and a mobile-first approach. The work is organized into discrete tasks that build incrementally, with testing integrated throughout.

## Tasks

- [x] 1. Extract FacilityCard sub-component

  - Create new file `components/Facilities/FacilityCard.tsx`
  - Define `FacilityCardProps` interface with facility data and variant prop
  - Move card rendering logic (image, play button, title, tags, description) into FacilityCard
  - Apply variant-specific styling (primary: white tags/white text, secondary: green tags/black text)
  - Remove unused `BackgroundVideo` import from Facilities.tsx
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ]\* 1.1 Write property test for FacilityCard rendering

  - **Property 12: Proportional Image Scaling**
  - **Validates: Requirements 4.2**

- [x] 2. Refactor main Facilities component structure

  - [x] 2.1 Replace inline styles with Tailwind utility classes

    - Remove all `style` props from divs
    - Convert gradient background to Tailwind classes
    - Replace fixed height with `min-h-[683px]` or content-driven height
    - Convert fixed margins to responsive Tailwind spacing (mt-32, mb-96, etc.)
    - _Requirements: 1.3, 1.4, 4.3, 5.2_

  - [ ]\* 2.2 Write property test for responsive padding units

    - **Property 3: Responsive Padding Units**
    - **Validates: Requirements 1.3**

  - [x] 2.3 Combine facility arrays and add variant property
    - Merge `Facilitie` and `Facilitie2` into single `facilities` array
    - Add `variant: 'primary' | 'secondary'` to each facility object
    - Update data structure to support unified rendering
    - _Requirements: 1.1, 1.2_

- [x] 3. Implement mobile-first responsive layout

  - [x] 3.1 Create responsive grid container for facility cards

    - Replace absolute positioned divs with CSS Grid container
    - Apply mobile-first grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4`
    - Add responsive gap spacing: `gap-8 md:gap-10 lg:gap-12`
    - Remove fixed `paddingLeft` and `top`/`bottom` positioning
    - Center grid within container using `container mx-auto px-4 md:px-8 lg:px-16 xl:px-32`
    - _Requirements: 1.1, 1.2, 2.1, 3.1_

  - [ ]\* 3.2 Write property test for mobile single-column layout

    - **Property 1: Mobile Single-Column Layout**
    - **Validates: Requirements 1.1**

  - [ ]\* 3.3 Write property test for tablet two-column grid

    - **Property 6: Tablet Two-Column Grid**
    - **Validates: Requirements 2.1**

  - [x] 3.4 Adjust gradient background container for responsive behavior

    - Replace fixed height with `min-h-fit` or `py-16 md:py-24 lg:py-32`
    - Ensure container expands with content on mobile
    - Apply responsive margin/padding for proper spacing
    - _Requirements: 1.4, 5.2_

  - [ ]\* 3.5 Write property test for dynamic height
    - **Property 4: Dynamic Height Based on Content**
    - **Validates: Requirements 1.4, 5.2**

- [x] 4. Implement responsive typography and spacing

  - [x] 4.1 Convert all text to responsive Tailwind classes

    - Header title: `text-2xl md:text-3xl lg:text-4xl`
    - Header description: `text-sm md:text-base`
    - Card titles: `text-xl md:text-2xl`
    - Card descriptions: `text-sm md:text-base`
    - Remove fixed `[16px]` font sizes
    - _Requirements: 4.1_

  - [ ]\* 4.2 Write property test for responsive font units

    - **Property 11: Responsive Font Units**
    - **Validates: Requirements 4.1**

  - [x] 4.3 Apply responsive spacing to all elements

    - Convert card content spacing: `gap-2 md:gap-3 lg:gap-4`
    - Update tag container: `flex flex-wrap gap-2 md:gap-3`
    - Ensure consistent spacing across breakpoints
    - _Requirements: 4.3, 4.4_

  - [ ]\* 4.4 Write property test for tag wrapping
    - **Property 14: Tag Wrapping on Small Screens**
    - **Validates: Requirements 4.4**

- [x] 5. Optimize background elements for responsive design

  - [x] 5.1 Make trophy background responsive

    - Apply responsive background sizing: `bg-contain md:bg-cover`
    - Adjust background position: `bg-right md:bg-center`
    - Add responsive opacity: `opacity-20 md:opacity-30 lg:opacity-100`
    - Ensure proper z-index layering: `z-0` for background, `z-10` for content
    - _Requirements: 5.1, 5.3, 5.4_

  - [ ]\* 5.2 Write property test for background no overlap

    - **Property 8: Background No Content Overlap**
    - **Validates: Requirements 2.3, 5.4**

  - [ ]\* 5.3 Write property test for mobile background opacity
    - **Property 16: Mobile Background Opacity Reduction**
    - **Validates: Requirements 5.3**

- [x] 6. Enhance touch interactions and accessibility

  - [x] 6.1 Optimize play button for touch devices

    - Ensure minimum touch target: `p-4` (44x44px minimum)
    - Add hover and active states: `hover:scale-110 active:scale-95 transition-transform`
    - Improve button accessibility with aria-label
    - Add focus visible styles for keyboard navigation
    - _Requirements: 6.1, 6.2_

  - [ ]\* 6.2 Write property test for minimum touch target size

    - **Property 17: Minimum Touch Target Size**
    - **Validates: Requirements 6.1**

  - [x] 6.3 Add responsive image optimization
    - Configure Next.js Image `sizes` prop for responsive loading
    - Add `priority` to above-the-fold images
    - Ensure images maintain aspect ratio: `aspect-[3/4]`
    - _Requirements: 4.2_

- [x] 7. Implement max-width constraints for ultra-wide screens

  - [x] 7.1 Add container max-width

    - Apply max-width to main container: `max-w-7xl mx-auto`
    - Ensure content doesn't stretch excessively on ultra-wide displays
    - Test layout at 1920px, 2560px, and 3840px widths
    - _Requirements: 3.2_

  - [ ]\* 7.2 Write property test for max-width constraint
    - **Property 10: Max-Width Constraint**
    - **Validates: Requirements 3.2**

- [x] 8. Checkpoint - Ensure all tests pass and review responsive behavior

  - Run all property-based tests and unit tests
  - Manually test component at mobile (375px), tablet (768px), desktop (1024px), and ultra-wide (1920px) viewports
  - Verify no horizontal scrolling on any viewport
  - Check that all interactive elements are accessible
  - Ask the user if questions arise

- [ ]\* 9. Write integration tests for responsive transitions

  - Test layout changes at breakpoint boundaries (767px→768px, 1023px→1024px)
  - Verify smooth transitions without layout shifts
  - Test with different facility data (varying tag counts, description lengths)
  - _Requirements: 1.1, 2.1, 3.1_

- [ ]\* 10. Write unit tests for edge cases

  - Test with empty facility arrays
  - Test with missing images
  - Test with very long facility names and descriptions
  - Test color contrast on gradient backgrounds
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3, 5.4, 6.1, 6.2_

- [x] 11. Final checkpoint - Comprehensive testing and validation
  - Ensure all tests pass
  - Validate accessibility with screen reader
  - Check performance metrics (CLS, LCP)
  - Verify component works across different browsers
  - Ask the user if questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties across viewport ranges
- Unit tests validate specific examples, edge cases, and error conditions
- The implementation follows a mobile-first approach, progressively enhancing for larger screens
