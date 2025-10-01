# Arc^ Documents

This folder contains all the legal and policy documents for the Arc^ platform.

## File Structure

Place your PDF documents here with the following naming convention:

- `terms-of-use.pdf` - Terms of Use document
- `privacy-policy.pdf` - Privacy Policy document  
- `code-of-conduct.pdf` - Code of Conduct document
- `research-log.pdf` - Research Log document

## Document Requirements

Each document should be:
- PDF format for consistent viewing
- Properly formatted with clear headings
- Include version information and last updated date
- Be accessible and readable

## Adding New Documents

1. Add the PDF file to this folder
2. Create a new page in `src/pages/docs/`
3. Update the footer links in `src/components/UniversalFooter.astro`
4. Update the DocumentViewer component if needed

## Document Viewer Features

The document viewer includes:
- Title and publication date
- File size and type information
- Download button
- Embedded PDF viewer
- Responsive design for mobile devices
- Accessibility features

## Notes

- Documents are served from `/arcup/documents/` path
- All documents are licensed under CC BY-NC-SA 4.0
- Documents should be updated regularly to reflect current policies

