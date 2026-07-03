## Move the logo into the repo

Switch the logo from a CDN-hosted asset back to a bundled file under `src/assets/`.

### Steps

1. Copy the uploaded image from `/mnt/user-uploads/logomark--color.png` into `src/assets/logomark.png`.
2. Update `src/routes/index.tsx`:
   - Replace the `.asset.json` import with a direct image import: `import logomark from "@/assets/logomark.png"`.
   - Use `logomark` as the `<img src>`.
3. Delete the CDN asset and its pointer:
   - Run `lovable-assets delete --file src/assets/logomark.png.asset.json` (removes the CDN object and the pointer JSON together).

### Notes

- The image is ~1.4 MB PNG. That's larger than ideal for a bundled asset, but you've asked for it in the repo — no compression/conversion unless you want it.
- No other files reference the asset, so no further rewrites are needed.
