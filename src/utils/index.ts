/** @format */

export function getImageUrl(htmlContent: string): string | null {
  // Define a regular expression to match the src attribute of an img tag
  const imgSrcRegex = /<img[^>]+src="([^">]+)"/;

  // Execute the regular expression on the provided HTML content
  const match = imgSrcRegex.exec(htmlContent);

  // If a match is found, return the captured group (the URL); otherwise, return null
  return match ? match[1] : null;
}
