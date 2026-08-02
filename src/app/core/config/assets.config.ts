/**
 * ============================================================================
 *  IMAGE ASSET MAP
 * ============================================================================
 *  This is the ONE file the whole site reads image paths from.
 *
 *  To replace an image you have two options:
 *   1. EASIEST — keep the same filename, just overwrite the file inside
 *      src/assets/images/<folder>/  with your own image (same name).
 *   2. To use a different filename, change the path below to match your
 *      new file name — nothing else in the app needs to change.
 *
 *  See README.md → "Replacing images" for the full walkthrough.
 * ============================================================================
 */
export const IMAGE_PATHS = {
  profile: {
    photo: 'assets/images/profile/profile-photo.png',
    ogImage: 'assets/images/og/og-cover.jpg',
  },
  about: {
    photo: 'assets/images/about/about-photo.png',
  },
  projects: {
    bogShield: 'assets/images/projects/bog-shield.jpg',
    icegate: 'assets/images/projects/icegate.jpg',
    workOrder: 'assets/images/projects/work-order.jpg',
    omrTestApp: 'assets/images/projects/omr-test-app.jpg',
    khetiBari: 'assets/images/projects/kheti-bari.jpg',
    onlineClassTest: 'assets/images/projects/online-class-test.jpg',
    tsClientApp: 'assets/images/projects/ts-client-app.jpg',
    hotelSchoolErp: 'assets/images/projects/hotel-school-erp.jpg',
    elearningPlatforms: 'assets/images/projects/elearning-platforms.jpg',
    coachingSuite: 'assets/images/projects/coaching-suite.jpg',
  },
  branding: {
    favicon: 'assets/images/favicon.svg',
    logoMark: 'assets/images/logo-mark.svg',
  },
} as const;

export const RESUME_PATH = 'assets/resume/Rishav_Kumar_Resume.pdf';

/** Safely resolves a project image path from its string key (see ProjectItem.imageKey). */
export function getProjectImage(imageKey: string): string {
  const projects = IMAGE_PATHS.projects as Record<string, string>;
  return projects[imageKey] ?? '';
}
