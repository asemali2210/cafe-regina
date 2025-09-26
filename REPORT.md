# Report

## Summary of Changes
- Removed unused React imports and corrected module paths so each page pulls the shared newsletter component consistently.
- Deleted dormant GSAP helper variables/imports and added display names to forwardRef components to satisfy lint and remove unused code.
- Added concise comments to new/complex components and fixed the newsletter cleanup bug so animations do not throw at runtime.
- Updated suggestion, gallery, and menu components with clarifying notes while keeping visuals unchanged.

## Files Touched
- src/app/about/page.jsx: Point newsletter import at the shared component module.
- src/app/drinks/page.jsx: Drop unused React import and document the column split/price formatting.
- src/app/events/page.jsx: Remove unused React import and escape the apostrophe for lint compliance.
- src/app/photos/page.jsx: Align newsletter import with shared component.
- src/app/small-hunger/page.jsx: Adjust newsletter import and annotate price formatting helper.
- src/app/suggestions/page.jsx: Redirect newsletter import to shared location, remove unused React import.
- src/components/DividerLogo/DividerLogo.jsx: Remove unused React import and add intent comment.
- src/components/LinkArrow/ArrowLink.jsx: Trim unused React import and explain the CTA wrapper purpose.
- src/components/gallery/PhotosGallery/PhotosGallery.jsx: Convert React import to hooks-only, add context comments.
- src/components/home/HomeEvents/EventCard/EventCards.jsx: Add comments, expose swiper display name, and document imperative handles.
- src/components/home/HomeEvents/HomeEvents.jsx: Clarify swiper ref usage and escape apostrophe.
- src/components/home/HomeGallery/GallerySlider/GalleryWiper.jsx: Add comments, expose display name, and clarify imperative control.
- src/components/home/HomeMenu/HomeMenu.jsx: Remove unused SplitText tracking, add comment about scroll setup.
- src/components/home/Suggestions/SuggestionSection.jsx: Add lightweight comments describing the content/image structure.
- src/components/navbar/animationVariants.js: Remove unused motion import.
- src/components/shared/newsletter/Newsletter.jsx: Add animation intent comment, fix cleanup to avoid undefined reference, tidy timings.
- src/components/shared/PageHeader/PageHeader.jsx: Remove unused React import and note shared header role.

## Potential Performance Issues
- src/components/gallery/PhotosGallery/PhotosGallery.jsx: Each of the 10 Swiper slides renders the entire 10-image grid, producing 100 `<Image>` elements per mount; suspected cause is duplicating the `images` array for every slide. Suggest pruning to unique slides or lazy-loading smaller batches to reduce initial render cost.
- src/components/home/HomeMenu/HomeMenu.jsx: SplitText instances are never reverted on cleanup, so navigating away/back can leak wrapped DOM nodes; suspected cause is missing `split.revert()` calls in the GSAP teardown. Suggest storing created splits and reverting them in the returned cleanup.
- src/components/shared/newsletter/Newsletter.jsx: Mobile matchMedia branch does not revert the SplitText wrapper, so resized viewports can accumulate cloned markup; suspected cause is cleanup only reverting inside the desktop branch. Recommend reverting SplitText and killing matchMedia context in a shared cleanup.

## Risk Notes
- src/data/siteData.js: Left untouched because the structured menu/event data appears to drive multiple routes, including Swiper instances, and trimming entries without full UX confirmation risks broken pages.
- public/images/*: Retained all assets referenced by data files and components; some may be resolved indirectly via dynamic imports, so removal was deferred.
