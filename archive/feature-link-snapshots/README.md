# Feature link snapshots

This directory preserves point-in-time, source-level copies of every external
web page linked from a file in `src/content/projects/`. It is a repository
fallback for research and attribution if an original URL changes or disappears;
the live site continues to link to the original publisher.

Each dated capture contains one directory per URL:

- `response.html` is the response body as retrieved (or `response.bin` for a
  non-HTML response).
- `metadata.json` records the original and final URLs, time of capture, HTTP
  status, source feature files, byte length, and SHA-256 checksum.
- `index.json` summarizes that date's complete capture.

`MANIFEST.md` links each original page to its most recent local response.

Snapshots do not include third-party assets that the HTML may request, nor do
they attempt to reproduce interactive behavior. They are retained as an
evidentiary reference, not as a substitute for the original publisher's site.

To take a new dated snapshot after adding or changing a project link, run:

```sh
npm run archive:feature-links
```
